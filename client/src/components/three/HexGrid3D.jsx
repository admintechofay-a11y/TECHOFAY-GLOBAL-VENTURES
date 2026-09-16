import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function HexGrid3D() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile && isLowEnd) return;

    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
    camera.position.set(0, 6, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';
    const cols = isMobile ? 5 : 9;
    const rows = isMobile ? 3 : 5;
    const hexRadius = 0.45;
    const hexHeight = 0.08;

    const hexGeometry = new THREE.CylinderGeometry(hexRadius, hexRadius, hexHeight, 6);
    const hexData = [];
    const materials = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * 0.95 + (r % 2 === 1 ? 0.475 : 0);
        const z = (r - (rows - 1) / 2) * 0.82;
        const baseY = (Math.random() - 0.5) * 0.3 - 0.8; // shifted slightly down for bottom hero floor

        const opacity = isMobile 
          ? 0.05 
          : (isLight ? 0.07 + Math.random() * 0.05 : 0.09 + Math.random() * 0.07);

        const hexColors = [0xF59E0B, 0xFCD34D, 0xB45309];
        const mat = new THREE.MeshBasicMaterial({
          color: hexColors[(r * cols + c) % hexColors.length],
          transparent: true,
          opacity: opacity,
          wireframe: false,
        });
        materials.push(mat);

        const mesh = new THREE.Mesh(hexGeometry, mat);
        mesh.position.set(x, baseY, z);
        // orient cylinder upright
        scene.add(mesh);

        hexData.push({
          mesh,
          baseY,
          speed: 0.3 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const clock = new THREE.Clock();

    // Resize Handler
    const onResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      hexData.forEach(({ mesh, baseY, speed, phase }) => {
        mesh.position.y = baseY + Math.sin(t * speed + phase) * 0.12;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);

      hexGeometry.dispose();
      materials.forEach((m) => m.dispose());
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();

      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />;
}
