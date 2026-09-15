/**
 * Three.js Hero 3D Engine: Particle Field & Interactive WebGL Globe
 *
 * Framework-agnostic vanilla implementation for WordPress
 *
 * @package Techofay_Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE === 'undefined') {
        console.warn('[Techofay Three.js] Library not loaded.');
        return;
    }

    // ----------------------------------------------------
    // 1. THREE.JS PARTICLE NETWORK (#three-hero-canvas)
    // ----------------------------------------------------
    const particleContainer = document.getElementById('three-hero-canvas');
    if (particleContainer) {
        initParticleField(particleContainer);
    }

    // ----------------------------------------------------
    // 2. THREE.JS WIREFRAME GLOBE (#tech-globe-container)
    // ----------------------------------------------------
    const globeContainer = document.getElementById('tech-globe-container');
    if (globeContainer) {
        initTechGlobe(globeContainer);
    }
});

/**
 * 3D Particle Network with Dynamic Line Connections
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

    // Particle Config
    const particleCount = 130;
    const maxDistance = 90;
    const particlesData = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color('#00D4FF');
    const colorBlue = new THREE.Color('#2B6EFA');
    const colorViolet = new THREE.Color('#7B2FBE');

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 550;
        const y = (Math.random() - 0.5) * 350;
        const z = (Math.random() - 0.5) * 350;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixedColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? colorCyan : colorBlue) : colorViolet;
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

    const pMaterial = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(particlesGeometry, pMaterial);
    scene.add(pointCloud);

    // Dynamic Connections
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    const lineColors = new Float32Array(particleCount * particleCount * 3);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.4,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // Parallax mouse
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    });

    let animationFrameId;

    function animate() {
        animationFrameId = requestAnimationFrame(animate);

        let vertexpos = 0;
        let colorpos = 0;

        for (let i = 0; i < particleCount; i++) {
            particlesData[i].numConnections = 0;
        }

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            positions[i * 3] += particleData.velocity.x;
            positions[i * 3 + 1] += particleData.velocity.y;
            positions[i * 3 + 2] += particleData.velocity.z;

            // Bounce on boundaries
            if (positions[i * 3] < -275 || positions[i * 3] > 275) particleData.velocity.x = -particleData.velocity.x;
            if (positions[i * 3 + 1] < -175 || positions[i * 3 + 1] > 175) particleData.velocity.y = -particleData.velocity.y;
            if (positions[i * 3 + 2] < -175 || positions[i * 3 + 2] > 175) particleData.velocity.z = -particleData.velocity.z;

            // Check distances
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    particleData.numConnections++;
                    particlesData[j].numConnections++;

                    const alpha = 1.0 - dist / maxDistance;

                    linePositions[vertexpos++] = positions[i * 3];
                    linePositions[vertexpos++] = positions[i * 3 + 1];
                    linePositions[vertexpos++] = positions[i * 3 + 2];

                    linePositions[vertexpos++] = positions[j * 3];
                    linePositions[vertexpos++] = positions[j * 3 + 1];
                    linePositions[vertexpos++] = positions[j * 3 + 2];

                    lineColors[colorpos++] = colorCyan.r * alpha;
                    lineColors[colorpos++] = colorCyan.g * alpha;
                    lineColors[colorpos++] = colorCyan.b * alpha;

                    lineColors[colorpos++] = colorBlue.r * alpha;
                    lineColors[colorpos++] = colorBlue.g * alpha;
                    lineColors[colorpos++] = colorBlue.b * alpha;
                }
            }
        }

        particlesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.attributes.color.needsUpdate = true;
        linesGeometry.setDrawRange(0, vertexpos / 3);

        pointCloud.rotation.y += 0.001;
        linesMesh.rotation.y += 0.001;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

/**
 * 3D Interactive WebGL Wireframe Globe
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

    // 1. Inner Wireframe Sphere
    const sphereRadius = 75;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. Glowing Spiral Nodes
    const pointsCount = 400;
    const pointsPositions = new Float32Array(pointsCount * 3);
    const pointsColors = new Float32Array(pointsCount * 3);

    const cyan = new THREE.Color('#00D4FF');
    const blue = new THREE.Color('#2B6EFA');
    const violet = new THREE.Color('#7B2FBE');

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

        const col = Math.random() > 0.4 ? cyan : (Math.random() > 0.5 ? blue : violet);
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
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
    });

    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(pointsMesh);

    // 3. Orbiting Rings
    const createOrbitRing = (radius, tiltX, tiltZ, colorHex) => {
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
        return ring;
    };

    const ring1 = createOrbitRing(105, Math.PI / 3, Math.PI / 6, 0x00d4ff);
    const ring2 = createOrbitRing(115, -Math.PI / 4, Math.PI / 4, 0x2b6efa);
    globeGroup.add(ring1);
    globeGroup.add(ring2);

    let frameId;
    function renderGlobe() {
        frameId = requestAnimationFrame(renderGlobe);
        globeGroup.rotation.y += 0.003;
        globeGroup.rotation.x += 0.0008;
        ring1.rotation.z += 0.005;
        ring2.rotation.z -= 0.004;
        renderer.render(scene, camera);
    }
    renderGlobe();

    window.addEventListener('resize', () => {
        const newW = container.clientWidth || 450;
        const newH = container.clientHeight || 450;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
    });
}
