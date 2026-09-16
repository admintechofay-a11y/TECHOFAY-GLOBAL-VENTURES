import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function WorldGlobe3D() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile && isLowEnd) return;

    const size = isMobile ? 280 : 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Globe wireframe sphere
    const globeGeo = new THREE.SphereGeometry(75, 28, 28);
    const globeMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x2B6EFA,
      opacity: isLight ? 0.20 : 0.28,
      transparent: true
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // 2. Latitude lines
    const latLines = [-60, -30, 0, 30, 60];
    const latGeos = [];
    const latMats = [];
    latLines.forEach((lat) => {
      const radAtLat = 75 * Math.cos((lat * Math.PI) / 180);
      const y = 75 * Math.sin((lat * Math.PI) / 180);
      const latGeo = new THREE.TorusGeometry(radAtLat, 0.4, 4, isMobile ? 36 : 60);
      const latMat = new THREE.MeshBasicMaterial({
        color: 0x00D4FF,
        opacity: isLight ? 0.15 : 0.22,
        transparent: true
      });
      latGeos.push(latGeo);
      latMats.push(latMat);

      const latMesh = new THREE.Mesh(latGeo, latMat);
      latMesh.position.y = y;
      latMesh.rotation.x = Math.PI / 2;
      globeGroup.add(latMesh);
    });

    // 3. Location Pins calculation
    const latLngToVec3 = (lat, lng, r) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const pinCities = [
      { name: 'Vadodara', lat: 22.3, lng: 73.2, color: 0x00D4FF, isHq: true },
      { name: 'Mumbai', lat: 19.0, lng: 72.8, color: 0x2B6EFA },
      { name: 'Bangalore', lat: 12.9, lng: 77.6, color: 0x2B6EFA },
      { name: 'Dubai', lat: 25.2, lng: 55.3, color: 0x7B2FBE },
      { name: 'London', lat: 51.5, lng: -0.1, color: 0xFFFFFF }
    ];

    const pinGeo = new THREE.SphereGeometry(2.5, 8, 8);
    const pinRingGeo = new THREE.TorusGeometry(3, 0.4, 4, 20);
    const pinObjects = [];

    pinCities.forEach((city) => {
      const pinMat = new THREE.MeshBasicMaterial({ color: city.color });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      const pos = latLngToVec3(city.lat, city.lng, 76.5);
      pinMesh.position.copy(pos);
      globeGroup.add(pinMesh);

      const ringMat = new THREE.MeshBasicMaterial({
        color: city.color,
        transparent: true,
        opacity: 0.4
      });
      const ringMesh = new THREE.Mesh(pinRingGeo, ringMat);
      ringMesh.position.copy(pos);
      // Align ring normal with position vector
      ringMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
      globeGroup.add(ringMesh);

      pinObjects.push({ pinMesh, ringMesh, ringMat });
    });

    // 4. Mouse / Touch Drag Interaction
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      globeGroup.rotation.y += dx * 0.006;
      globeGroup.rotation.x += dy * 0.006;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevX;
      const dy = e.touches[0].clientY - prevY;
      globeGroup.rotation.y += dx * 0.006;
      globeGroup.rotation.x += dy * 0.006;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Initial tilt
    globeGroup.rotation.x = 0.3;
    globeGroup.rotation.y = -1.2;

    const clock = new THREE.Clock();

    // Animation Loop
    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        globeGroup.rotation.y += 0.003;
      }

      const t = clock.getElapsedTime();
      pinObjects.forEach(({ ringMesh, ringMat }, i) => {
        const pulse = Math.abs(Math.sin(t * 2 + i));
        ringMesh.scale.setScalar(1 + pulse * 0.8);
        ringMat.opacity = 0.4 * (1 - pulse * 0.7);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);

      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);

      globeGeo.dispose();
      globeMat.dispose();
      latGeos.forEach((g) => g.dispose());
      latMats.forEach((m) => m.dispose());
      pinGeo.dispose();
      pinRingGeo.dispose();
      pinObjects.forEach(({ ringMat }) => ringMat.dispose());

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      renderer.forceContextLoss();

      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto select-none"
    />
  );
}
