const courses = [
    { title: 'R Programming Language', keywords: ['Data', 'Stats'] },
    { title: 'CUDA', keywords: ['GPU', 'Parallel'] },
    { title: 'Computer Vision', keywords: ['Vision', 'AI'] },
    { title: 'Neural Networks', keywords: ['Deep', 'Learning'] },
    { title: 'Fortran', keywords: ['Legacy', 'Code'] },
    { title: 'Binary Trees', keywords: ['Algorithms', 'Structures'] }
];

function createTexture(text, secondaryText, isSide = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card-bg');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    ctx.font = isSide ? '16px Montserrat' : '20px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (isSide) {
        ctx.fillText(secondaryText, canvas.width / 2, canvas.height / 2);
    } else {
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '14px Montserrat';
        ctx.fillText('Coming soon', canvas.width / 2, canvas.height / 2 + 20);
    }
    return new THREE.CanvasTexture(canvas);
}

document.querySelectorAll('.course-card').forEach((card, index) => {
    const canvas = card.querySelector('.course-canvas');
    const title = canvas.dataset.title;
    const keywords = card.dataset.keywords.split(',');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    camera.position.z = 2;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
        new THREE.MeshStandardMaterial({ map: createTexture(title, keywords[0], true), transparent: true, opacity: 0.8 }), // Right
        new THREE.MeshStandardMaterial({ map: createTexture(title, keywords[1] || keywords[0], true), transparent: true, opacity: 0.8 }), // Left
        new THREE.MeshStandardMaterial({ map: createTexture(title, 'Tech', true), transparent: true, opacity: 0.8 }), // Top
        new THREE.MeshStandardMaterial({ map: createTexture(title, 'Tech', true), transparent: true, opacity: 0.8 }), // Bottom
        new THREE.MeshStandardMaterial({ map: createTexture(title, 'Coming soon'), transparent: true, opacity: 0.8 }), // Front
        new THREE.MeshStandardMaterial({ map: createTexture('Coming soon', 'Learn Now', true), transparent: true, opacity: 0.8 }) // Back
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    let isHovered = false;
    let mouse = { x: 0, y: 0 };
    function animateCube() {
        if (!isHovered) {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            for (let i = 0; i < geometry.vertices.length; i++) {
                const vertex = geometry.vertices[i];
                vertex.z += Math.sin(Date.now() * 0.001 + i) * 0.02;
            }
            geometry.verticesNeedUpdate = true;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animateCube);
    }
    animateCube();
    card.addEventListener('mouseenter', () => {
        isHovered = true;
        pointLight.intensity = 2;
        cube.scale.set(1.3, 1.3, 1.3);
    });
    card.addEventListener('mouseleave', () => {
        isHovered = false;
        pointLight.intensity = 1;
        cube.scale.set(1, 1, 1);
        cube.rotation.x = 0;
        cube.rotation.y = 0;
    });
    card.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        cube.rotation.y = mouse.x * 0.5;
        cube.rotation.x = mouse.y * 0.5;
    });
    window.addEventListener('resize', () => {
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
    });
});
