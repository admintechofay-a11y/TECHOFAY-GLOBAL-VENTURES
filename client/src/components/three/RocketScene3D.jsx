import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function RocketScene3D() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile && isLowEnd) return;

    const w = isMobile ? 240 : 280;
    const h = isMobile ? 320 : 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';
    const mainRocket = new THREE.Group();
    scene.add(mainRocket);

    // Rocket Body - Dark Navy Panel
    const bodyGeo = new THREE.CylinderGeometry(0.3, 0.3, 2.0, 12);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0x0A1628, transparent: true, opacity: 0.95 });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    mainRocket.add(bodyMesh);

    // Nose Cone - Cyber Neon Cyan
    const noseGeo = new THREE.ConeGeometry(0.3, 0.8, 12);
    const noseMat = new THREE.MeshBasicMaterial({ color: 0x00D4FF, transparent: true, opacity: 0.95 });
    const noseMesh = new THREE.Mesh(noseGeo, noseMat);
    noseMesh.position.y = 1.4;
    mainRocket.add(noseMesh);

    // Left Fin - Electric Blue
    const finGeo = new THREE.BoxGeometry(0.05, 0.6, 0.4);
    const finMat = new THREE.MeshBasicMaterial({ color: 0x2B6EFA });
    const leftFin = new THREE.Mesh(finGeo, finMat);
    leftFin.position.set(-0.35, -0.9, 0);
    leftFin.rotation.z = -0.3;
    mainRocket.add(leftFin);

    // Right Fin - Electric Blue
    const rightFin = new THREE.Mesh(finGeo, finMat);
    rightFin.position.set(0.35, -0.9, 0);
    rightFin.rotation.z = 0.3;
    mainRocket.add(rightFin);

    // Engine Bell - Radiant Violet
    const bellGeo = new THREE.CylinderGeometry(0.2, 0.35, 0.3, 12);
    const bellMat = new THREE.MeshBasicMaterial({ color: 0x7B2FBE, transparent: true, opacity: 0.9 });
    const bellMesh = new THREE.Mesh(bellGeo, bellMat);
    bellMesh.position.y = -1.15;
    mainRocket.add(bellMesh);

    // Window - Pure White
    const winGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.95 });
    const winMesh = new THREE.Mesh(winGeo, winMat);
    winMesh.position.set(0, 0.4, 0.28);
    mainRocket.add(winMesh);

    // Particle Exhaust
    const exhaustCount = isMobile ? 40 : 80;
    const exhaustPositions = new Float32Array(exhaustCount * 3);
    const exhaustParticles = [];

    for (let i = 0; i < exhaustCount; i++) {
      const p = {
        x: (Math.random() - 0.5) * 0.4,
        y: -1.4 + Math.random() * -0.5,
        z: (Math.random() - 0.5) * 0.4,
        vx: (Math.random() - 0.5) * 0.02,
        vy: -0.04 - Math.random() * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
        life: Math.random()
      };
      exhaustParticles.push(p);

      exhaustPositions[i * 3] = p.x;
      exhaustPositions[i * 3 + 1] = p.y;
      exhaustPositions[i * 3 + 2] = p.z;
    }

    const exhaustGeo = new THREE.BufferGeometry();
    exhaustGeo.setAttribute('position', new THREE.BufferAttribute(exhaustPositions, 3));

    const exhaustMat = new THREE.PointsMaterial({
      color: 0x00D4FF,
      size: 0.06,
      transparent: true,
      opacity: isLight ? 0.6 : 0.85,
      blending: THREE.AdditiveBlending
    });

    const exhaustMesh = new THREE.Points(exhaustGeo, exhaustMat);
    scene.add(exhaustMesh);

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
      mainRocket.position.y = Math.sin(t * 0.4) * 0.3;
      mainRocket.rotation.z = Math.sin(t * 0.3) * 0.05;
      mainRocket.rotation.y += 0.004;

      exhaustParticles.forEach((p, i) => {
        p.life -= 0.015;
        p.y += p.vy;
        p.x += p.vx;
        p.z += p.vz;

        if (p.life <= 0) {
          p.life = 1.0;
          p.x = (Math.random() - 0.5) * 0.3;
          p.y = -1.35;
          p.z = (Math.random() - 0.5) * 0.3;
        }

        exhaustPositions[i * 3] = p.x + mainRocket.position.x;
        exhaustPositions[i * 3 + 1] = p.y + mainRocket.position.y;
        exhaustPositions[i * 3 + 2] = p.z;
      });

      exhaustGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);

      bodyGeo.dispose();
      bodyMat.dispose();
      noseGeo.dispose();
      noseMat.dispose();
      finGeo.dispose();
      finMat.dispose();
      bellGeo.dispose();
      bellMat.dispose();
      winGeo.dispose();
      winMat.dispose();
      exhaustGeo.dispose();
      exhaustMat.dispose();

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
      className="w-[240px] h-[320px] sm:w-[280px] sm:h-[400px] flex items-center justify-center pointer-events-none z-0"
    />
  );
}
