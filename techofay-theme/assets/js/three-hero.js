/**
 * Three.js Hero 3D Engine: Subtle Green Particle Field & Interactive WebGL Globe
 * Matches client/src/components/three/ParticleField.jsx & TechGlobe.jsx 1-to-1
 *
 * @package Techofay_Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE === 'undefined') {
        console.warn('[Techofay Three.js] Three.js library not loaded.');
        return;
    }

    // ----------------------------------------------------
    // 1. THREE.JS SUBTLE GREEN PARTICLE NETWORK (#three-hero-canvas)
    // ----------------------------------------------------
    const particleContainer = document.getElementById('three-hero-canvas');
    if (particleContainer) {
        initParticleField(particleContainer);
    }

    // ----------------------------------------------------
    // 2. THREE.JS INTERACTIVE TECH GLOBE (#tech-globe-container)
    // ----------------------------------------------------
    const globeContainer = document.getElementById('tech-globe-container');
    if (globeContainer) {
        initTechGlobe(globeContainer);
    }
});

/**
 * 3D Particle Network with Dynamic Line Connections (Matches ParticleField.jsx)
 */
function initParticleField(container) {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 350;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Configuration: Green shades
    const particleCount = 130;
    const maxDistance = 90;
    const particlesData = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#16A34A'); // Forest Green
    const color2 = new THREE.Color('#22C55E'); // Vibrant Green
    const color3 = new THREE.Color('#4ADE80'); // Mint Green

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 550;
        const y = (Math.random() - 0.5) * 350;
        const z = (Math.random() - 0.5) * 350;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

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

    // Particle Material - subtle floating green particle dots (opacity 0.3)
    const pMaterial = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.NormalBlending,
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
        blending: THREE.NormalBlending,
        opacity: 0.15,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        targetX = x * 0.2;
        targetY = -y * 0.2;
    });

    let animationFrameId;

    function animate() {
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

            // Check distance
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

                    lineColors[colorpos++] = 0.09 * alpha;
                    lineColors[colorpos++] = 0.64 * alpha;
                    lineColors[colorpos++] = 0.29 * alpha;

                    lineColors[colorpos++] = 0.13 * alpha;
                    lineColors[colorpos++] = 0.77 * alpha;
                    lineColors[colorpos++] = 0.37 * alpha;

                    numConnected++;
                }
            }
        }

        particlesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.attributes.color.needsUpdate = true;
        linesGeometry.setDrawRange(0, numConnected * 2);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        const newW = container.clientWidth || window.innerWidth;
        const newH = container.clientHeight || window.innerHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
    });
}

/**
 * 3D Interactive WebGL Wireframe Globe (Matches TechGlobe.jsx 1-to-1)
 */
function initTechGlobe(container) {
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Inner Wireframe Sphere: Forest Green #16A34A
    const sphereRadius = 75;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x16a34a,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. Glowing Spiral Nodes on the Sphere Surface
    const pointsCount = 400;
    const pointsPositions = new Float32Array(pointsCount * 3);
    const pointsColors = new Float32Array(pointsCount * 3);

    const green1 = new THREE.Color('#16A34A');
    const green2 = new THREE.Color('#22C55E');
    const green3 = new THREE.Color('#166534');

    for (let i = 0; i < pointsCount; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / pointsCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const r = sphereRadius + (Math.random() - 0.5) * 4;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        pointsPositions[i * 3] = x;
        pointsPositions[i * 3 + 1] = y;
        pointsPositions[i * 3 + 2] = z;

        const col = Math.random() > 0.4 ? green1 : (Math.random() > 0.5 ? green2 : green3);
        pointsColors[i * 3] = col.r;
        pointsColors[i * 3 + 1] = col.g;
        pointsColors[i * 3 + 2] = col.b;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(pointsColors, 3));

    const pointsMat = new THREE.PointsMaterial({
        size: 3.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.NormalBlending,
    });

    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(pointsMesh);

    // 3. Orbiting Rings with Satellite Spheres
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

        // Satellite node on ring
        const satGeo = new THREE.SphereGeometry(3, 16, 16);
        const satMat = new THREE.MeshBasicMaterial({
            color: 0x16a34a,
            blending: THREE.NormalBlending,
        });
        const sat = new THREE.Mesh(satGeo, satMat);
        ring.add(sat);

        return { ring, speed, sat, radius };
    };

    const ring1 = createOrbitRing(102, Math.PI / 3, Math.PI / 6, 0x16a34a, 0.015);
    const ring2 = createOrbitRing(116, -Math.PI / 4, Math.PI / 4, 0x22c55e, -0.01);
    const ring3 = createOrbitRing(128, Math.PI / 2.2, -Math.PI / 5, 0x4ade80, 0.008);

    scene.add(ring1.ring);
    scene.add(ring2.ring);
    scene.add(ring3.ring);

    // 4. Subtle Inner Glow Core
    const coreGeo = new THREE.SphereGeometry(50, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
        color: 0xe0f2fe,
        transparent: true,
        opacity: 0.25,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(core);

    globeGroup.rotation.z = 0.23;

    // Mouse Interaction & Inertia
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
    function renderGlobe() {
        animId = requestAnimationFrame(renderGlobe);

        // Auto-rotation + mouse inertia
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
    }
    renderGlobe();

    window.addEventListener('resize', () => {
        if (!container) return;
        const newW = container.clientWidth || 450;
        const newH = container.clientHeight || 450;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
    });
}
