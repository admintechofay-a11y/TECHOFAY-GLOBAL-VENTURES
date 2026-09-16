import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function NetworkNodes3D() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile && isLowEnd) return;

    const w = container.clientWidth || 400;
    const h = container.clientHeight || 225;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';

    // Node Counts
    const hubCount = isMobile ? 3 : 5;
    const smallCount = isMobile ? 7 : 15;
    const totalNodes = hubCount + smallCount;

    // Geometries
    const hubGeo = new THREE.SphereGeometry(0.12, 10, 10);
    const smallGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const packetGeo = new THREE.SphereGeometry(0.04, 6, 6);

    const hubMat = new THREE.MeshBasicMaterial({ color: 0xF59E0B, transparent: true, opacity: isLight ? 0.75 : 0.95 });
    const smallMat = new THREE.MeshBasicMaterial({ color: 0xFCD34D, transparent: true, opacity: isLight ? 0.5 : 0.75 });
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xFFFBEB, transparent: true, opacity: 0.95 });

    const nodes = [];

    for (let i = 0; i < totalNodes; i++) {
      const isHub = i < hubCount;
      const mesh = new THREE.Mesh(isHub ? hubGeo : smallGeo, isHub ? hubMat : smallMat);

      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 5.6,
        (Math.random() - 0.5) * 2.8,
        (Math.random() - 0.5) * 2.0
      );
      mesh.position.copy(pos);
      scene.add(mesh);

      nodes.push({
        mesh,
        isHub,
        pos,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002
        )
      });
    }

    // Dynamic Line Segments
    const maxLines = totalNodes * totalNodes;
    const linePositions = new Float32Array(maxLines * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xF59E0B,
      transparent: true,
      opacity: isLight ? 0.20 : 0.35
    });

    const linesMesh = new THREE.LineSegments(linesGeo, lineMat);
    scene.add(linesMesh);

    // Static / Hub Lines
    const hubLinePositions = new Float32Array(hubCount * hubCount * 6);
    const hubLinesGeo = new THREE.BufferGeometry();
    hubLinesGeo.setAttribute('position', new THREE.BufferAttribute(hubLinePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const hubLineMat = new THREE.LineBasicMaterial({
      color: 0xFCD34D,
      transparent: true,
      opacity: isLight ? 0.30 : 0.50
    });
    const hubLinesMesh = new THREE.LineSegments(hubLinesGeo, hubLineMat);
    scene.add(hubLinesMesh);

    // Data packets (moving spheres)
    const packetCount = isMobile ? 1 : 3;
    const packets = [];
    for (let p = 0; p < packetCount; p++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      scene.add(mesh);
      packets.push({
        mesh,
        speed: 1.2 + p * 0.4,
        phase: (p * Math.PI * 2) / packetCount,
        fromIdx: p % hubCount,
        toIdx: (p + 1) % hubCount
      });
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
    const maxDist = 1.8;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // Update positions
      nodes.forEach((n) => {
        n.pos.add(n.vel);

        if (Math.abs(n.pos.x) > 2.8) n.vel.x *= -1;
        if (Math.abs(n.pos.y) > 1.4) n.vel.y *= -1;
        if (Math.abs(n.pos.z) > 1.0) n.vel.z *= -1;

        n.mesh.position.copy(n.pos);
      });

      // Update dynamic lines between close nodes
      let lineIdx = 0;
      for (let i = 0; i < totalNodes; i++) {
        for (let j = i + 1; j < totalNodes; j++) {
          const d = nodes[i].pos.distanceTo(nodes[j].pos);
          if (d < maxDist) {
            linePositions[lineIdx++] = nodes[i].pos.x;
            linePositions[lineIdx++] = nodes[i].pos.y;
            linePositions[lineIdx++] = nodes[i].pos.z;

            linePositions[lineIdx++] = nodes[j].pos.x;
            linePositions[lineIdx++] = nodes[j].pos.y;
            linePositions[lineIdx++] = nodes[j].pos.z;
          }
        }
      }

      linesGeo.attributes.position.needsUpdate = true;
      linesGeo.setDrawRange(0, lineIdx / 3);

      // Update hub-to-hub connections
      let hubIdx = 0;
      for (let i = 0; i < hubCount; i++) {
        for (let j = i + 1; j < hubCount; j++) {
          hubLinePositions[hubIdx++] = nodes[i].pos.x;
          hubLinePositions[hubIdx++] = nodes[i].pos.y;
          hubLinePositions[hubIdx++] = nodes[i].pos.z;

          hubLinePositions[hubIdx++] = nodes[j].pos.x;
          hubLinePositions[hubIdx++] = nodes[j].pos.y;
          hubLinePositions[hubIdx++] = nodes[j].pos.z;
        }
      }
      hubLinesGeo.attributes.position.needsUpdate = true;
      hubLinesGeo.setDrawRange(0, hubIdx / 3);

      // Update packet pulses
      const t = clock.getElapsedTime();
      packets.forEach((pkt) => {
        const factor = (Math.sin(t * pkt.speed + pkt.phase) + 1) / 2;
        const pA = nodes[pkt.fromIdx].pos;
        const pB = nodes[pkt.toIdx].pos;
        pkt.mesh.position.lerpVectors(pA, pB, factor);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);

      hubGeo.dispose();
      smallGeo.dispose();
      packetGeo.dispose();
      linesGeo.dispose();
      hubLinesGeo.dispose();

      hubMat.dispose();
      smallMat.dispose();
      packetMat.dispose();
      lineMat.dispose();
      hubLineMat.dispose();

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
