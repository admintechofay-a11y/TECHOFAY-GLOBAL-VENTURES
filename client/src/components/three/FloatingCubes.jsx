import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function FloatingCubes() {
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
    const h = container.clientHeight || 600;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';
    const baseOpacity = isLight ? 0.2 : (isMobile ? 0.18 : 0.28);

    // Cubes Config
    const cubeConfigs = [
      { size: 0.8, pos: [-2.5, 1.5, -1], rot: [0.008, 0.005, 0.003] },
      { size: 1.2, pos: [1.8, -0.8, -2], rot: [0.005, 0.009, 0.004] },
      { size: 0.6, pos: [-1.0, -1.8, 0], rot: [0.010, 0.003, 0.007] },
      { size: 1.0, pos: [2.2, 1.2, -1.5], rot: [0.006, 0.007, 0.005] }
    ];

    // On mobile (< 768px), render only 2 cubes at half opacity
    const activeConfigs = isMobile ? cubeConfigs.slice(0, 2) : cubeConfigs;
    const cubes = [];

    activeConfigs.forEach((cfg) => {
      const boxGeo = new THREE.BoxGeometry(cfg.size, cfg.size, cfg.size);
      const edges = new THREE.EdgesGeometry(boxGeo);
      const cubeColors = [0x2B6EFA, 0x00D4FF, 0x2B6EFA, 0x7B2FBE];
      const material = new THREE.LineBasicMaterial({
        color: cubeColors[cubes.length % cubeColors.length],
        opacity: isMobile ? baseOpacity * 0.5 : baseOpacity,
        transparent: true,
      });

      const lineSegments = new THREE.LineSegments(edges, material);
      lineSegments.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      scene.add(lineSegments);

      cubes.push({
        mesh: lineSegments,
        boxGeo,
        edges,
        material,
        rotSpeed: cfg.rot
      });
    });

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('mousemove', onMouseMove);

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

      cubes.forEach(({ mesh, rotSpeed }) => {
        mesh.rotation.x += rotSpeed[0];
        mesh.rotation.y += rotSpeed[1];
        mesh.rotation.z += rotSpeed[2];

        // Drift upward with modulo loop
        mesh.position.y += 0.003;
        if (mesh.position.y > 3.5) {
          mesh.position.y = -3.5;
        }
      });

      // Camera parallax
      camera.position.x += (mouseX - camera.position.x) * 0.03;
      camera.position.y += (mouseY - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

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

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />;
}
