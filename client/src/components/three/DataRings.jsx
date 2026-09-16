import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function DataRings() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile && isLowEnd) return;

    const w = container.clientWidth || 320;
    const h = container.clientHeight || 320;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';

    // Electric Blue / Cyber Cyan Theme Colors
    const amberPrimary = 0x2B6EFA;
    const goldLight = 0x00D4FF;
    const amberDark = 0x7B2FBE;
    const warmWhite = 0xFFFFFF;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Pulsing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.55, isMobile ? 0 : 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: goldLight,
      transparent: true,
      opacity: 0.85
    });
    const coreWire = new THREE.LineSegments(coreEdges, coreLineMat);
    mainGroup.add(coreWire);

    const coreSolidMat = new THREE.MeshBasicMaterial({
      color: amberPrimary,
      transparent: true,
      opacity: isLight ? 0.2 : 0.35
    });
    const coreSolid = new THREE.Mesh(coreGeo, coreSolidMat);
    mainGroup.add(coreSolid);

    // 2. 3 Concentric Torus Gyroscope Rings (Amber + Gold)
    const ringConfigs = [
      {
        radius: 1.25,
        tube: 0.022,
        initRot: [0, 0, 0],
        rotSpeed: [0.005, 0.003, 0.001],
        color: amberPrimary,
        opacity: 0.85,
        satColor: goldLight
      },
      {
        radius: 1.75,
        tube: 0.018,
        initRot: [Math.PI / 4, 0, Math.PI / 5],
        rotSpeed: [0.003, 0.006, 0.002],
        color: goldLight,
        opacity: 0.75,
        satColor: amberPrimary
      },
      {
        radius: 2.25,
        tube: 0.015,
        initRot: [Math.PI / 2.5, Math.PI / 3, 0],
        rotSpeed: [0.002, 0.004, 0.005],
        color: amberDark,
        opacity: 0.70,
        satColor: warmWhite
      }
    ];

    const rings = [];
    const satGeo = new THREE.SphereGeometry(0.065, 8, 8);

    ringConfigs.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, isMobile ? 40 : 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.set(cfg.initRot[0], cfg.initRot[1], cfg.initRot[2]);
      mainGroup.add(ringMesh);

      // Satellite orbiting node
      const satMat = new THREE.MeshBasicMaterial({ color: cfg.satColor });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      ringMesh.add(satMesh);

      rings.push({
        ringMesh,
        satMesh,
        radius: cfg.radius,
        rotSpeed: cfg.rotSpeed,
        angle: Math.random() * Math.PI * 2
      });
    });

    // 3. Subtle Orbiting Sparkles
    const particleCount = isMobile ? 25 : 50;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      particlePositions[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi);
      particlePositions[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: goldLight,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Parallax Sway
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.6;
      targetY = -y * 0.6;
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

    const clock = new THREE.Clock();

    // Animation Loop
    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      // Smooth mouse sway
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      mainGroup.rotation.y = mouseX + t * 0.15;
      mainGroup.rotation.x = mouseY;

      // Pulse core
      const pulse = 1 + Math.sin(t * 2.5) * 0.08;
      coreWire.scale.setScalar(pulse);
      coreSolid.scale.setScalar(pulse);
      coreWire.rotation.y += 0.01;
      coreWire.rotation.x += 0.005;

      // Rotate rings and orbit satellites
      rings.forEach((r) => {
        r.ringMesh.rotation.x += r.rotSpeed[0];
        r.ringMesh.rotation.y += r.rotSpeed[1];
        r.ringMesh.rotation.z += r.rotSpeed[2];

        r.angle += 0.03;
        r.satMesh.position.x = Math.cos(r.angle) * r.radius;
        r.satMesh.position.y = Math.sin(r.angle) * r.radius;
      });

      particles.rotation.y -= 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      coreGeo.dispose();
      coreEdges.dispose();
      coreLineMat.dispose();
      coreSolidMat.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();

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
      className="w-full h-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center pointer-events-none z-0"
    />
  );
}
