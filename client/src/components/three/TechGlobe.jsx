import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function TechGlobe() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all globe elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Inner Wireframe Sphere
    const sphereRadius = 75;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x2B6EFA,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. Glowing Nodes on the Sphere Surface
    const pointsCount = 400;
    const pointsPositions = new Float32Array(pointsCount * 3);
    const pointsColors = new Float32Array(pointsCount * 3);

    const blueColor = new THREE.Color('#2B6EFA');
    const cyanColor = new THREE.Color('#00D4FF');
    const violetColor = new THREE.Color('#7B2FBE');

    for (let i = 0; i < pointsCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - 2 * (i + 0.5) / pointsCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = sphereRadius + (Math.random() - 0.5) * 4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pointsPositions[i * 3] = x;
      pointsPositions[i * 3 + 1] = y;
      pointsPositions[i * 3 + 2] = z;

      const col = Math.random() > 0.4 ? blueColor : (Math.random() > 0.5 ? cyanColor : violetColor);
      pointsColors[i * 3] = col.r;
      pointsColors[i * 3 + 1] = col.g;
      pointsColors[i * 3 + 2] = col.b;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(pointsColors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(pointsMesh);

    // 3. Orbiting Rings
    const createOrbitRing = (radius, tiltX, tiltZ, colorHex, speed) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.8, radius + 0.8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25,
        blending: THREE.NormalBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.z = tiltZ;

      // Add a satellite node on the ring
      const satGeo = new THREE.SphereGeometry(3, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ 
        color: 0x00D4FF, 
        blending: THREE.NormalBlending 
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      ring.add(sat);

      return { ring, speed, sat, radius };
    };

    const ring1 = createOrbitRing(102, Math.PI / 3, Math.PI / 6, 0x2B6EFA, 0.015);
    const ring2 = createOrbitRing(116, -Math.PI / 4, Math.PI / 4, 0x00D4FF, -0.01);
    const ring3 = createOrbitRing(128, Math.PI / 2.2, -Math.PI / 5, 0x7B2FBE, 0.008);

    scene.add(ring1.ring);
    scene.add(ring2.ring);
    scene.add(ring3.ring);

    // 4. Subtle Inner Glow Core
    const coreGeo = new THREE.SphereGeometry(50, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050B1F,
      transparent: true,
      opacity: 0.95,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(core);

    // Tilt the globe naturally
    globeGroup.rotation.z = 0.23;

    // Interaction & Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    container.addEventListener('mousemove', handleMouseMove);

    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Globe auto-rotation + mouse inertia
      globeGroup.rotation.y += 0.004;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      globeGroup.rotation.x = mouseY + 0.15;
      globeGroup.rotation.y += mouseX * 0.02;

      // Orbiting satellites
      angle1 += ring1.speed;
      ring1.sat.position.x = Math.cos(angle1) * ring1.radius;
      ring1.sat.position.y = Math.sin(angle1) * ring1.radius;

      angle2 += ring2.speed;
      ring2.sat.position.x = Math.cos(angle2) * ring2.radius;
      ring2.sat.position.y = Math.sin(angle2) * ring2.radius;

      angle3 += ring3.speed;
      ring3.sat.position.x = Math.cos(angle3) * ring3.radius;
      ring3.sat.position.y = Math.sin(angle3) * ring3.radius;

      ring1.ring.rotation.y += 0.002;
      ring2.ring.rotation.y -= 0.003;
      ring3.ring.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
      {/* Background glow halo */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#2B6EFA]/20 via-[#00D4FF]/15 to-[#7B2FBE]/20 blur-3xl pointer-events-none" />
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
