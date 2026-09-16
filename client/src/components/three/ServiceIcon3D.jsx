import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ServiceIcon3D - High-fidelity animated 3D models for each enterprise service vertical:
 * - cybersecurity: Holographic Defense Shield, Zero-Trust Padlock Core, Rotating Firewall Rings & Radar Pulse
 * - development: 3D Code Brackets < / >, Software Logic Engine, CI/CD Pipeline Track & Build Nodes
 * - ai-automation: Neural Cortex Network, Synaptic Firing Impulses, Cognitive Tensor Core & Vector Sparks
 * - saas-products: 3-Tier Enterprise Cloud Platform, Dynamic 3D Analytics Bar Chart & Orbiting Module Satellites
 * - marketing: Ascending Growth Rocket, Fiery Particle Exhaust, 3D Exponential Growth Helix & Target Radar
 * - infrastructure: Blade Server Tower Rack, Blinking Status LEDs, Holographic Cloud Dome & Kubernetes Pod Ring
 *
 * Performance features:
 * - IntersectionObserver: Only animates when visible in viewport (saves GPU cycles)
 * - Mouse parallax tilt on hover
 * - Full WebGL memory disposal on unmount
 */
export default function ServiceIcon3D({ iconType = 'cybersecurity', className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Device Capability Check
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 2;

    // Canvas Size
    let width = container.clientWidth || (isMobile ? 220 : 280);
    let height = container.clientHeight || (isMobile ? 220 : 280);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isLowEnd,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Main Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Palette (Dark Navy + Electric Blue & Neon Cyan Design System)
    const C_AMBER = 0x2B6EFA;   // Electric Blue Primary
    const C_GOLD = 0x00D4FF;    // Cyber Neon Cyan Accent
    const C_PALE = 0xc4d7f5;    // Ice Blue Accent
    const C_BRONZE = 0x7B2FBE;  // Radiant Violet Accent
    const C_SLATE = 0x0A1628;   // Dark Space Navy Panel
    const C_WHITE = 0xFFFFFF;   // Pure White

    // Mouse Tracking for Interactive Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.35;
    };

    const onMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    // Update function container
    let updateLogic = (time) => {};

    // ==========================================
    // 1. CYBERSECURITY: Holographic Defense Shield
    // ==========================================
    if (iconType === 'cybersecurity') {
      const cyberGroup = new THREE.Group();
      rootGroup.add(cyberGroup);

      // A. Shield Shape Geometry
      const sShape = new THREE.Shape();
      sShape.moveTo(0, 1.35);
      sShape.lineTo(0.95, 0.75);
      sShape.lineTo(0.95, -0.25);
      sShape.lineTo(0, -1.35);
      sShape.lineTo(-0.95, -0.25);
      sShape.lineTo(-0.95, 0.75);
      sShape.closePath();

      // Shield Front Fill
      const shieldFillGeo = new THREE.ShapeGeometry(sShape);
      const shieldFillMat = new THREE.MeshBasicMaterial({
        color: C_AMBER,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide
      });
      const shieldFill = new THREE.Mesh(shieldFillGeo, shieldFillMat);
      cyberGroup.add(shieldFill);

      // Shield Glowing Edge Lines
      const sPoints = sShape.getPoints();
      const shieldEdgeGeo = new THREE.BufferGeometry().setFromPoints(sPoints);
      const shieldEdgeMat = new THREE.LineBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.95 });
      const shieldEdge = new THREE.LineLoop(shieldEdgeGeo, shieldEdgeMat);
      cyberGroup.add(shieldEdge);

      // Inner Contour Shield
      const innerPoints = sPoints.map(p => p.clone().multiplyScalar(0.78));
      const innerEdgeGeo = new THREE.BufferGeometry().setFromPoints(innerPoints);
      const innerEdgeMat = new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.6 });
      const innerEdge = new THREE.LineLoop(innerEdgeGeo, innerEdgeMat);
      cyberGroup.add(innerEdge);

      // B. Zero-Trust Digital Lock Core
      const lockGroup = new THREE.Group();
      lockGroup.position.set(0, -0.05, 0.1);

      // Lock Body
      const bodyGeo = new THREE.BoxGeometry(0.48, 0.4, 0.12);
      const bodyMat = new THREE.MeshBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.85 });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      lockGroup.add(bodyMesh);

      const bodyWire = new THREE.LineSegments(
        new THREE.EdgesGeometry(bodyGeo),
        new THREE.LineBasicMaterial({ color: C_WHITE, transparent: true, opacity: 0.9 })
      );
      lockGroup.add(bodyWire);

      // Lock Shackle (Curved Torus Arc)
      const shackleGeo = new THREE.TorusGeometry(0.18, 0.035, 8, 16, Math.PI);
      const shackleMat = new THREE.MeshBasicMaterial({ color: C_WHITE });
      const shackleMesh = new THREE.Mesh(shackleGeo, shackleMat);
      shackleMesh.position.set(0, 0.2, 0);
      lockGroup.add(shackleMesh);

      // Keyhole Node
      const keyholeGeo = new THREE.SphereGeometry(0.055, 8, 8);
      const keyholeMat = new THREE.MeshBasicMaterial({ color: C_BRONZE });
      const keyhole = new THREE.Mesh(keyholeGeo, keyholeMat);
      keyhole.position.set(0, 0, 0.07);
      lockGroup.add(keyhole);

      cyberGroup.add(lockGroup);

      // C. Rotating Firewall Rings
      const ring1Geo = new THREE.RingGeometry(1.6, 1.64, 36, 1, 0, Math.PI * 1.5);
      const ring1Mat = new THREE.MeshBasicMaterial({ color: C_AMBER, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      cyberGroup.add(ring1);

      const ring2Geo = new THREE.RingGeometry(1.82, 1.86, 36, 1, Math.PI * 0.4, Math.PI * 1.4);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: C_GOLD, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      cyberGroup.add(ring2);

      // D. Radar Pulse Ring (Active Network Sonar)
      const radarPulseGeo = new THREE.RingGeometry(0.2, 0.24, 32);
      const radarPulseMat = new THREE.MeshBasicMaterial({ color: C_GOLD, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
      const radarPulse = new THREE.Mesh(radarPulseGeo, radarPulseMat);
      radarPulse.position.z = 0.05;
      cyberGroup.add(radarPulse);

      // E. Defensive Telemetry Particles
      const partCount = 18;
      const partGeo = new THREE.BufferGeometry();
      const partPos = new Float32Array(partCount * 3);
      for (let i = 0; i < partCount; i++) {
        const ang = (i / partCount) * Math.PI * 2;
        const rad = 1.3 + Math.random() * 0.8;
        partPos[i * 3] = Math.cos(ang) * rad;
        partPos[i * 3 + 1] = Math.sin(ang) * rad;
        partPos[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
      }
      partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
      const partMat = new THREE.PointsMaterial({ color: C_GOLD, size: 0.06, transparent: true, opacity: 0.8 });
      const particles = new THREE.Points(partGeo, partMat);
      cyberGroup.add(particles);

      updateLogic = (t) => {
        cyberGroup.rotation.y = Math.sin(t * 0.8) * 0.22;
        ring1.rotation.z += 0.009;
        ring2.rotation.z -= 0.006;
        particles.rotation.z += 0.003;

        // Pulsing Radar expansion
        const pulseCycle = (t * 0.8) % 1;
        radarPulse.scale.setScalar(0.5 + pulseCycle * 6.5);
        radarPulseMat.opacity = Math.max(0, 0.85 * (1 - pulseCycle));

        // Lock breathing
        lockGroup.position.z = 0.1 + Math.sin(t * 2) * 0.04;
      };
    }

    // ==========================================
    // 2. DEVELOPMENT: 3D Code Matrix & CI/CD Pipeline
    // ==========================================
    else if (iconType === 'development') {
      const devGroup = new THREE.Group();
      rootGroup.add(devGroup);

      // A. 3D Code Brackets < / >
      // Left Bracket <
      const bracketMat = new THREE.LineBasicMaterial({ color: C_GOLD, linewidth: 2, transparent: true, opacity: 0.95 });
      const leftBPoints = [
        new THREE.Vector3(-0.6, 0.65, 0),
        new THREE.Vector3(-1.15, 0, 0),
        new THREE.Vector3(-0.6, -0.65, 0)
      ];
      const leftB = new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftBPoints), bracketMat);
      devGroup.add(leftB);

      // Slash /
      const slashPoints = [
        new THREE.Vector3(-0.15, -0.75, 0.1),
        new THREE.Vector3(0.15, 0.75, 0.1)
      ];
      const slash = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(slashPoints),
        new THREE.LineBasicMaterial({ color: C_PALE, transparent: true, opacity: 0.8 })
      );
      devGroup.add(slash);

      // Right Bracket >
      const rightBPoints = [
        new THREE.Vector3(0.6, 0.65, 0),
        new THREE.Vector3(1.15, 0, 0),
        new THREE.Vector3(0.6, -0.65, 0)
      ];
      const rightB = new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightBPoints), bracketMat);
      devGroup.add(rightB);

      // B. Central Software Logic Engine Cube
      const cubeGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
      const cubeWire = new THREE.LineSegments(
        new THREE.EdgesGeometry(cubeGeo),
        new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.85 })
      );
      const cubeMesh = new THREE.Mesh(
        cubeGeo,
        new THREE.MeshBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.18 })
      );
      const coreGroup = new THREE.Group();
      coreGroup.add(cubeWire);
      coreGroup.add(cubeMesh);
      devGroup.add(coreGroup);

      // C. CI/CD Orbiting Pipeline Track
      const pipeGeo = new THREE.TorusGeometry(1.65, 0.02, 8, 48);
      const pipeMat = new THREE.MeshBasicMaterial({ color: C_BRONZE, transparent: true, opacity: 0.5 });
      const pipeTrack = new THREE.Mesh(pipeGeo, pipeMat);
      pipeTrack.rotation.x = Math.PI / 2.8;
      pipeTrack.rotation.y = Math.PI / 6;
      devGroup.add(pipeTrack);

      // 4 Pipeline Nodes (Commit, Test, Build, Deploy)
      const stageNodes = [];
      const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: C_WHITE });
      for (let i = 0; i < 4; i++) {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        devGroup.add(node);
        stageNodes.push(node);
      }

      // Fast-moving data packet
      const packet = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 8, 8),
        new THREE.MeshBasicMaterial({ color: C_GOLD })
      );
      devGroup.add(packet);

      // Binary bit particles
      const bitCount = 20;
      const bitGeo = new THREE.BufferGeometry();
      const bitPos = new Float32Array(bitCount * 3);
      for (let i = 0; i < bitCount; i++) {
        bitPos[i * 3] = (Math.random() - 0.5) * 2.8;
        bitPos[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
        bitPos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      }
      bitGeo.setAttribute('position', new THREE.BufferAttribute(bitPos, 3));
      const bits = new THREE.Points(
        bitGeo,
        new THREE.PointsMaterial({ color: C_GOLD, size: 0.055, transparent: true, opacity: 0.75 })
      );
      devGroup.add(bits);

      updateLogic = (t) => {
        coreGroup.rotation.x += 0.01;
        coreGroup.rotation.y += 0.014;

        // Bracket breathing
        const bShift = Math.sin(t * 1.5) * 0.08;
        leftB.position.x = -bShift;
        rightB.position.x = bShift;

        // Update pipeline nodes along the tilted torus
        const r = 1.65;
        for (let i = 0; i < 4; i++) {
          const ang = (i / 4) * Math.PI * 2 + t * 0.35;
          const lx = Math.cos(ang) * r;
          const ly = Math.sin(ang) * r;
          const v = new THREE.Vector3(lx, ly, 0);
          v.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2.8);
          v.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 6);
          stageNodes[i].position.copy(v);
        }

        // Fast packet racing
        const pAng = t * 1.8;
        const px = Math.cos(pAng) * r;
        const py = Math.sin(pAng) * r;
        const pv = new THREE.Vector3(px, py, 0);
        pv.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2.8);
        pv.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 6);
        packet.position.copy(pv);

        bits.rotation.y += 0.002;
      };
    }

    // ==========================================
    // 3. AI & INTELLIGENT AUTOMATION: Neural Brain Synapses
    // ==========================================
    else if (iconType === 'ai-automation') {
      const aiGroup = new THREE.Group();
      rootGroup.add(aiGroup);

      // A. Cognitive Neural Core
      const coreGeo = new THREE.IcosahedronGeometry(0.72, 1);
      const coreWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(coreGeo),
        new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.6 })
      );
      const coreMesh = new THREE.Mesh(
        coreGeo,
        new THREE.MeshBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.16 })
      );
      const cognitiveCore = new THREE.Group();
      cognitiveCore.add(coreWire);
      cognitiveCore.add(coreMesh);
      aiGroup.add(cognitiveCore);

      // B. Neural Synapse Nodes (Dual-Hemisphere Cluster)
      const nodeCount = 18;
      const nodePositions = [];
      const nodeSpheres = [];
      const sGeo = new THREE.SphereGeometry(0.065, 8, 8);
      const sMat = new THREE.MeshBasicMaterial({ color: C_GOLD });

      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        const r = 1.25 + (i % 3) * 0.22;
        const pos = new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.85,
          r * Math.cos(phi)
        );
        nodePositions.push(pos);

        const node = new THREE.Mesh(sGeo, sMat);
        node.position.copy(pos);
        aiGroup.add(node);
        nodeSpheres.push(node);
      }

      // Connecting Synaptic Axon Lines
      const lineIndices = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (nodePositions[i].distanceTo(nodePositions[j]) < 1.15) {
            lineIndices.push(i, j);
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      const linePositions = new Float32Array(lineIndices.length * 3);
      for (let k = 0; k < lineIndices.length; k++) {
        const p = nodePositions[lineIndices[k]];
        linePositions[k * 3] = p.x;
        linePositions[k * 3 + 1] = p.y;
        linePositions[k * 3 + 2] = p.z;
      }
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const synapseLines = new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.45 })
      );
      aiGroup.add(synapseLines);

      // C. Firing Synaptic Impulses (Moving sparks)
      const impulseCount = 5;
      const impulses = [];
      const impGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const impMat = new THREE.MeshBasicMaterial({ color: C_WHITE });
      for (let i = 0; i < impulseCount; i++) {
        const imp = new THREE.Mesh(impGeo, impMat);
        aiGroup.add(imp);
        impulses.push({
          mesh: imp,
          from: (i * 3) % nodeCount,
          to: ((i * 3) + 2) % nodeCount,
          progress: Math.random()
        });
      }

      // D. Gimbal Tensor Rings
      const ringA = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.015, 6, 36),
        new THREE.MeshBasicMaterial({ color: C_PALE, transparent: true, opacity: 0.35 })
      );
      ringA.rotation.x = Math.PI / 3;
      aiGroup.add(ringA);

      const ringB = new THREE.Mesh(
        new THREE.TorusGeometry(1.85, 0.015, 6, 36),
        new THREE.MeshBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.35 })
      );
      ringB.rotation.y = Math.PI / 3;
      aiGroup.add(ringB);

      updateLogic = (t) => {
        aiGroup.rotation.y += 0.005;
        cognitiveCore.rotation.x += 0.008;
        cognitiveCore.rotation.y -= 0.006;

        // Core pulsating
        const scale = 1 + Math.sin(t * 2.5) * 0.07;
        cognitiveCore.scale.setScalar(scale);

        ringA.rotation.z += 0.006;
        ringB.rotation.z -= 0.004;

        // Update synaptic impulses travelling between nodes
        impulses.forEach(imp => {
          imp.progress += 0.018;
          if (imp.progress >= 1) {
            imp.progress = 0;
            imp.from = imp.to;
            imp.to = (imp.to + 1 + Math.floor(Math.random() * (nodeCount - 2))) % nodeCount;
          }
          const p1 = nodePositions[imp.from];
          const p2 = nodePositions[imp.to];
          imp.mesh.position.lerpVectors(p1, p2, imp.progress);
        });
      };
    }

    // ==========================================
    // 4. SAAS PRODUCTS: 3-Tier Enterprise Cloud Platform
    // ==========================================
    else if (iconType === 'saas-products') {
      const saasGroup = new THREE.Group();
      rootGroup.add(saasGroup);

      // 3 Stacked Slabs (Database, Logic, UI)
      const slabConfigs = [
        { y: -0.75, rx: 1.5, rz: 1.1, color: C_BRONZE, opacity: 0.8 },
        { y: 0.0,   rx: 1.3, rz: 0.95, color: C_AMBER,  opacity: 0.85 },
        { y: 0.75,  rx: 1.1, rz: 0.8,  color: C_GOLD,   opacity: 0.9 }
      ];

      slabConfigs.forEach(cfg => {
        const slabGeo = new THREE.BoxGeometry(cfg.rx * 1.5, 0.12, cfg.rz * 1.5);
        const slabWire = new THREE.LineSegments(
          new THREE.EdgesGeometry(slabGeo),
          new THREE.LineBasicMaterial({ color: cfg.color, transparent: true, opacity: cfg.opacity })
        );
        const slabFill = new THREE.Mesh(
          slabGeo,
          new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.15 })
        );
        const slab = new THREE.Group();
        slab.add(slabWire);
        slab.add(slabFill);
        slab.position.y = cfg.y;
        saasGroup.add(slab);
      });

      // 4 Dynamic Analytics Bar Columns on the top tier
      const barMeshes = [];
      const barCount = 4;
      for (let i = 0; i < barCount; i++) {
        const barGeo = new THREE.BoxGeometry(0.14, 0.5, 0.14);
        const barMat = new THREE.MeshBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.85 });
        const bar = new THREE.Mesh(barGeo, barMat);
        const bx = -0.45 + i * 0.3;
        bar.position.set(bx, 0.75 + 0.25, 0);
        saasGroup.add(bar);
        barMeshes.push(bar);
      }

      // Vertical Data Conduits linking tiers
      const conduitPoints = [
        [-0.8, -0.5], [0.8, -0.5], [-0.8, 0.5], [0.8, 0.5]
      ];
      conduitPoints.forEach(([cx, cz]) => {
        const cGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(cx * 0.7, -0.75, cz * 0.7),
          new THREE.Vector3(cx * 0.7, 0.75, cz * 0.7)
        ]);
        const cLine = new THREE.Line(
          cGeo,
          new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.55 })
        );
        saasGroup.add(cLine);
      });

      // 4 Orbiting Module Satellites (ERP, HMS, PMS, Fleet)
      const moduleSatellites = [];
      const satColors = [C_GOLD, C_AMBER, C_PALE, C_WHITE];
      for (let i = 0; i < 4; i++) {
        const satGeo = new THREE.OctahedronGeometry(0.1, 0);
        const satMat = new THREE.MeshBasicMaterial({ color: satColors[i] });
        const sat = new THREE.Mesh(satGeo, satMat);
        saasGroup.add(sat);
        moduleSatellites.push(sat);
      }

      // Climbing data pulses
      const pulseGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({ color: C_WHITE });
      const verticalPulse = new THREE.Mesh(pulseGeo, pulseMat);
      saasGroup.add(verticalPulse);

      saasGroup.rotation.x = 0.35;

      updateLogic = (t) => {
        saasGroup.rotation.y += 0.007;

        // Animated Bar Charts rising and falling
        barMeshes.forEach((bar, idx) => {
          const h = 0.15 + Math.abs(Math.sin(t * 2 + idx * 1.2)) * 0.45;
          bar.scale.y = h / 0.5;
          bar.position.y = 0.75 + h / 2 + 0.06;
        });

        // Orbiting Satellites around the middle platform
        moduleSatellites.forEach((sat, i) => {
          const ang = (i / 4) * Math.PI * 2 + t * 0.8;
          sat.position.set(Math.cos(ang) * 1.5, Math.sin(t * 1.5 + i) * 0.15, Math.sin(ang) * 1.5);
          sat.rotation.y += 0.02;
        });

        // Vertical pulse cycle
        const pY = -0.75 + ((t * 0.9) % 1) * 1.5;
        verticalPulse.position.set(0, pY, 0);
      };
    }

    // ==========================================
    // 5. MARKETING: High-Growth Rocket & Target Acquisition Radar
    // ==========================================
    else if (iconType === 'marketing') {
      const mktGroup = new THREE.Group();
      rootGroup.add(mktGroup);

      // Rocket Container tilted at 35 degrees
      const rocketGroup = new THREE.Group();
      rocketGroup.rotation.z = -Math.PI / 5;
      rocketGroup.position.set(-0.2, -0.1, 0);
      mktGroup.add(rocketGroup);

      // Rocket Fuselage
      const bodyGeo = new THREE.CylinderGeometry(0.24, 0.28, 1.2, 16);
      const bodyMat = new THREE.MeshBasicMaterial({ color: C_SLATE });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      rocketGroup.add(bodyMesh);

      const bodyEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(bodyGeo),
        new THREE.LineBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.9 })
      );
      rocketGroup.add(bodyEdges);

      // Rocket Nose Cone (Amber)
      const noseGeo = new THREE.ConeGeometry(0.25, 0.65, 16);
      const noseMat = new THREE.MeshBasicMaterial({ color: C_AMBER });
      const noseMesh = new THREE.Mesh(noseGeo, noseMat);
      noseMesh.position.y = 0.92;
      rocketGroup.add(noseMesh);

      // Gold Fins (3 Fins)
      for (let i = 0; i < 3; i++) {
        const finGeo = new THREE.BoxGeometry(0.18, 0.4, 0.04);
        const finMat = new THREE.MeshBasicMaterial({ color: C_GOLD });
        const fin = new THREE.Mesh(finGeo, finMat);
        const ang = (i / 3) * Math.PI * 2;
        fin.position.set(Math.cos(ang) * 0.32, -0.42, Math.sin(ang) * 0.32);
        fin.rotation.y = -ang;
        rocketGroup.add(fin);
      }

      // Exhaust Particle Stream
      const exCount = 24;
      const exGeo = new THREE.BufferGeometry();
      const exPos = new Float32Array(exCount * 3);
      for (let i = 0; i < exCount; i++) {
        exPos[i * 3] = (Math.random() - 0.5) * 0.15;
        exPos[i * 3 + 1] = -0.7 - Math.random() * 0.9;
        exPos[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
      }
      exGeo.setAttribute('position', new THREE.BufferAttribute(exPos, 3));
      const exParticles = new THREE.Points(
        exGeo,
        new THREE.PointsMaterial({ color: C_AMBER, size: 0.08, transparent: true, opacity: 0.9 })
      );
      rocketGroup.add(exParticles);

      // Ascending 3D Growth Curve (Coiling Helix)
      const curvePts = [];
      for (let i = 0; i <= 60; i++) {
        const t = (i / 60) * Math.PI * 3.5;
        const rad = 0.5 + (i / 60) * 0.9;
        curvePts.push(new THREE.Vector3(
          Math.cos(t) * rad + 0.1,
          -1.3 + (i / 60) * 2.6,
          Math.sin(t) * rad
        ));
      }
      const growthLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curvePts),
        new THREE.LineBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.75 })
      );
      mktGroup.add(growthLine);

      // Target Acquisition Radar Base
      const radarBase = new THREE.Mesh(
        new THREE.RingGeometry(0.8, 0.84, 32),
        new THREE.MeshBasicMaterial({ color: C_BRONZE, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
      );
      radarBase.rotation.x = Math.PI / 2.2;
      radarBase.position.y = -1.2;
      mktGroup.add(radarBase);

      updateLogic = (t) => {
        mktGroup.rotation.y += 0.006;

        // Hover bobbing
        rocketGroup.position.y = -0.1 + Math.sin(t * 3) * 0.08;

        // Exhaust particle animation
        const pos = exGeo.attributes.position.array;
        for (let i = 0; i < exCount; i++) {
          pos[i * 3 + 1] -= 0.04;
          if (pos[i * 3 + 1] < -1.8) {
            pos[i * 3 + 1] = -0.65;
            pos[i * 3] = (Math.random() - 0.5) * 0.15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
          }
        }
        exGeo.attributes.position.needsUpdate = true;
      };
    }

    // ==========================================
    // 6. INFRASTRUCTURE: High-Availability Cloud Server Cluster
    // ==========================================
    else {
      const infraGroup = new THREE.Group();
      rootGroup.add(infraGroup);

      // Blade Server Tower (3 Stacked Bays)
      const rackGroup = new THREE.Group();
      infraGroup.add(rackGroup);

      for (let i = 0; i < 3; i++) {
        const yPos = -0.7 + i * 0.5;
        const bayGeo = new THREE.BoxGeometry(1.2, 0.36, 0.9);
        const bayWire = new THREE.LineSegments(
          new THREE.EdgesGeometry(bayGeo),
          new THREE.LineBasicMaterial({ color: C_AMBER, transparent: true, opacity: 0.8 })
        );
        const bayFill = new THREE.Mesh(
          bayGeo,
          new THREE.MeshBasicMaterial({ color: C_SLATE, transparent: true, opacity: 0.7 })
        );
        const bay = new THREE.Group();
        bay.add(bayWire);
        bay.add(bayFill);
        bay.position.y = yPos;
        rackGroup.add(bay);

        // Blinking Status LEDs on each bay
        for (let j = 0; j < 3; j++) {
          const ledGeo = new THREE.SphereGeometry(0.04, 6, 6);
          const ledMat = new THREE.MeshBasicMaterial({ color: j === 0 ? C_WHITE : C_GOLD });
          const led = new THREE.Mesh(ledGeo, ledMat);
          led.position.set(-0.4 + j * 0.2, yPos, 0.47);
          rackGroup.add(led);
        }
      }

      // Holographic Cloud Dome Hovering Above
      const cloudGeo = new THREE.SphereGeometry(0.85, 12, 10, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const cloudWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(cloudGeo),
        new THREE.LineBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.55 })
      );
      cloudWire.position.y = 1.0;
      infraGroup.add(cloudWire);

      // Kubernetes Pod Ring with 3 orbiting Pod Cubes
      const k8sRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.015, 6, 40),
        new THREE.MeshBasicMaterial({ color: C_BRONZE, transparent: true, opacity: 0.4 })
      );
      k8sRing.rotation.x = Math.PI / 2.5;
      infraGroup.add(k8sRing);

      const podMeshes = [];
      for (let i = 0; i < 3; i++) {
        const podGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const pod = new THREE.Mesh(
          podGeo,
          new THREE.MeshBasicMaterial({ color: C_GOLD, transparent: true, opacity: 0.85 })
        );
        infraGroup.add(pod);
        podMeshes.push(pod);
      }

      // Bidirectional communication beams
      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.6, 0),
        new THREE.Vector3(0, 1.0, 0)
      ]);
      const beam = new THREE.Line(
        beamGeo,
        new THREE.LineBasicMaterial({ color: C_WHITE, transparent: true, opacity: 0.8 })
      );
      infraGroup.add(beam);

      updateLogic = (t) => {
        infraGroup.rotation.y += 0.007;
        cloudWire.rotation.y -= 0.005;

        // Rotate Kubernetes pods along ring
        podMeshes.forEach((pod, idx) => {
          const ang = (idx / 3) * Math.PI * 2 + t * 0.75;
          const r = 1.6;
          const v = new THREE.Vector3(Math.cos(ang) * r, Math.sin(ang) * r, 0);
          v.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2.5);
          pod.position.copy(v);
          pod.rotation.x += 0.01;
          pod.rotation.y += 0.02;
        });

        // Cloud dome breathing
        cloudWire.position.y = 0.95 + Math.sin(t * 2) * 0.05;
      };
    }

    // ==========================================
    // Visibility Observer (Save GPU when offscreen)
    // ==========================================
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    // ==========================================
    // Animation Loop
    // ==========================================
    let animFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth lerp to mouse parallax target
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.06;
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.06;

      updateLogic(time);
      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // Resize Handler
    // ==========================================
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // ==========================================
    // Comprehensive WebGL Cleanup
    // ==========================================
    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);

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

      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [iconType]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[220px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
    />
  );
}
