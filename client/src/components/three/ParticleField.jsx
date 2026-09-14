import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function ParticleField() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.z = 350;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Configuration
    const particleCount = 130;
    const maxDistance = 90;
    const particlesData = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = isLight ? new THREE.Color('#0284C7') : new THREE.Color('#00D4FF'); // Sky/Cyan
    const color2 = isLight ? new THREE.Color('#2563EB') : new THREE.Color('#2B6EFA'); // Electric Blue
    const color3 = isLight ? new THREE.Color('#7C3AED') : new THREE.Color('#7B2FBE'); // Violet

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 550;
      const y = (Math.random() - 0.5) * 350;
      const z = (Math.random() - 0.5) * 350;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assign color mix
      const mixedColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.45,
          (Math.random() - 0.5) * 0.45,
          (Math.random() - 0.5) * 0.45
        ),
        numConnections: 0,
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: isLight ? 3.5 : 4,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.75 : 0.85,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(particlesGeometry, pMaterial);
    scene.add(pointCloud);

    // Line Connections Geometry & Material
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    const lineColors = new Float32Array(particleCount * particleCount * 3);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      opacity: isLight ? 0.25 : 0.4,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = x * 0.2;
      targetY = -y * 0.2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(scene.position);

      // Rotate group gently
      pointCloud.rotation.y += 0.001;
      linesMesh.rotation.y += 0.001;

      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) {
        particlesData[i].numConnections = 0;
      }

      for (let i = 0; i < particleCount; i++) {
        const pData = particlesData[i];

        positions[i * 3] += pData.velocity.x;
        positions[i * 3 + 1] += pData.velocity.y;
        positions[i * 3 + 2] += pData.velocity.z;

        // Bounce off bounds
        if (positions[i * 3] < -280 || positions[i * 3] > 280) pData.velocity.x = -pData.velocity.x;
        if (positions[i * 3 + 1] < -180 || positions[i * 3 + 1] > 180) pData.velocity.y = -pData.velocity.y;
        if (positions[i * 3 + 2] < -180 || positions[i * 3 + 2] > 180) pData.velocity.z = -pData.velocity.z;

        // Check distance to other particles
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            pData.numConnections++;
            particlesData[j].numConnections++;

            const alpha = 1.0 - dist / maxDistance;

            linePositions[vertexpos++] = positions[i * 3];
            linePositions[vertexpos++] = positions[i * 3 + 1];
            linePositions[vertexpos++] = positions[i * 3 + 2];

            linePositions[vertexpos++] = positions[j * 3];
            linePositions[vertexpos++] = positions[j * 3 + 1];
            linePositions[vertexpos++] = positions[j * 3 + 2];

            lineColors[colorpos++] = 0.0;
            lineColors[colorpos++] = 0.83 * alpha;
            lineColors[colorpos++] = 1.0 * alpha;

            lineColors[colorpos++] = 0.17 * alpha;
            lineColors[colorpos++] = 0.43 * alpha;
            lineColors[colorpos++] = 0.98 * alpha;

            numConnected++;
          }
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;
      linesGeometry.setDrawRange(0, numConnected * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />;
}
