import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function SoftwareStack3D() {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Rule 3: Device Performance Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;
    if (isMobile || isLowEnd) return; // Hide on mobile or low-end devices

    const w = container.clientWidth || 280;
    const h = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(3.5, 2.5, 5.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const isLight = theme === 'light';

    // Amber / Gold Theme
    const amber = 0xF59E0B;
    const gold = 0xFCD34D;
    const deepAmber = 0xB45309;
    const warmWhite = 0xFFFBEB;

    const stackGroup = new THREE.Group();
    scene.add(stackGroup);

    // 1. Three Layered Isometric Software Platforms
    // Layer 1 (Bottom): Cloud Database & Infrastructure
    // Layer 2 (Middle): Microservices & AI Logic Engine
    // Layer 3 (Top): Enterprise Application UI
    const layerConfigs = [
      { y: -1.1, size: [2.2, 0.1, 2.2], color: deepAmber, wireColor: amber, label: 'DB' },
      { y: 0.0, size: [1.8, 0.1, 1.8], color: amber, wireColor: gold, label: 'API' },
      { y: 1.1, size: [1.4, 0.1, 1.4], color: gold, wireColor: warmWhite, label: 'UI' }
    ];

    const layers = [];
    layerConfigs.forEach((cfg) => {
      const geo = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], cfg.size[2]);
      const edges = new THREE.EdgesGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({
        color: cfg.wireColor,
        transparent: true,
        opacity: 0.85
      });
      const wire = new THREE.LineSegments(edges, wireMat);

      const solidMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: isLight ? 0.15 : 0.25
      });
      const solid = new THREE.Mesh(geo, solidMat);

      const layerMesh = new THREE.Group();
      layerMesh.add(wire);
      layerMesh.add(solid);
      layerMesh.position.y = cfg.y;
      stackGroup.add(layerMesh);

      layers.push({ layerMesh, baseY: cfg.y });
    });

    // 2. Vertical Data Columns (Connecting Pipelines)
    const pillarGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.3, 8);
    const pillarMat = new THREE.MeshBasicMaterial({
      color: amber,
      transparent: true,
      opacity: 0.45
    });

    const pillarOffsets = [
      [-0.6, -0.6],
      [0.6, -0.6],
      [-0.6, 0.6],
      [0.6, 0.6]
    ];

    pillarOffsets.forEach(([px, pz]) => {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(px, 0, pz);
      stackGroup.add(pillar);
    });

    // 3. 4 Orbiting Modular Application Nodes (ERP, HMS, PMS, Fleet)
    const nodeGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const nodeEdges = new THREE.EdgesGeometry(nodeGeo);
    const nodeColors = [amber, gold, amber, deepAmber];
    const orbitingNodes = [];

    for (let i = 0; i < 4; i++) {
      const nodeWireMat = new THREE.LineBasicMaterial({ color: nodeColors[i], transparent: true, opacity: 0.9 });
      const nodeSolidMat = new THREE.MeshBasicMaterial({ color: nodeColors[i], transparent: true, opacity: 0.2 });

      const nodeGroup = new THREE.Group();
      nodeGroup.add(new THREE.LineSegments(nodeEdges, nodeWireMat));
      nodeGroup.add(new THREE.Mesh(nodeGeo, nodeSolidMat));
      stackGroup.add(nodeGroup);

      orbitingNodes.push({
        group: nodeGroup,
        radius: 1.8 + (i % 2) * 0.4,
        speed: 0.8 + i * 0.2,
        phase: (i * Math.PI) / 2,
        yOffset: (i - 1.5) * 0.5
      });
    }

    // 4. Data Packets Pulsing Along the Vertical Pillars
    const packetGeo = new THREE.SphereGeometry(0.045, 6, 6);
    const packetMat = new THREE.MeshBasicMaterial({
      color: gold,
      transparent: true,
      opacity: 0.95
    });

    const packets = [];
    pillarOffsets.forEach(([px, pz], idx) => {
      const packet = new THREE.Mesh(packetGeo, packetMat);
      stackGroup.add(packet);
      packets.push({
        mesh: packet,
        px,
        pz,
        speed: 1.2 + idx * 0.3,
        phase: idx * 1.5
      });
    });

    // Mouse Parallax Sway
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.5;
      targetX = mouseX;
      targetY = mouseY;
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

      // Slow rotational drift + mouse response
      stackGroup.rotation.y = t * 0.25 + targetX * 0.8;
      stackGroup.rotation.x = 0.2 + targetY * 0.4;

      // Gentle floating layer oscillation
      layers.forEach(({ layerMesh, baseY }, idx) => {
        layerMesh.position.y = baseY + Math.sin(t * 1.2 + idx * 1.0) * 0.05;
      });

      // Orbiting software module nodes
      orbitingNodes.forEach((node) => {
        const angle = t * 0.4 * node.speed + node.phase;
        node.group.position.x = Math.cos(angle) * node.radius;
        node.group.position.z = Math.sin(angle) * node.radius;
        node.group.position.y = node.yOffset + Math.sin(t * 1.5 + node.phase) * 0.15;
        node.group.rotation.x += 0.01;
        node.group.rotation.y += 0.015;
      });

      // Data packets climbing the pillars
      packets.forEach((pkt) => {
        const yPos = -1.1 + ((Math.sin(t * pkt.speed + pkt.phase) + 1) / 2) * 2.2;
        pkt.mesh.position.set(pkt.px, yPos, pkt.pz);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Rule 2: Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      pillarGeo.dispose();
      pillarMat.dispose();
      nodeGeo.dispose();
      nodeEdges.dispose();
      packetGeo.dispose();
      packetMat.dispose();

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

  return <div ref={mountRef} className="w-full h-full pointer-events-none z-0 overflow-hidden" />;
}
