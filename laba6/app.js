// // Основные настройки Three.js
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(3, 3, 7);
//
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
//
// // Сетка для координатных осей
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
//
// // Добавление освещения
// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(5, 5, 5);
// scene.add(light);
//
// const ambientLight = new THREE.AmbientLight(0x404040); // Мягкое освещение
// scene.add(ambientLight);
//
// // Материал для закрашивания буквы "C"
// const material = new THREE.MeshStandardMaterial({
//     color: 0x00ff00, // Зелёный цвет
//     metalness: 0.3, // Лёгкий металлический блеск
//     roughness: 0.7, // Шероховатость
// });
//
// // Функция для создания 3D закрашенной буквы "C"
// function create3DC() {
//     const group = new THREE.Group();
//
//     // Вертикальный сегмент
//     const verticalGeometry = new THREE.BoxGeometry(0.2, 2, 0.2); // Ширина, высота, глубина
//     const verticalMesh = new THREE.Mesh(verticalGeometry, material);
//     verticalMesh.position.set(-1, 0, 0); // Центрируем вертикальный сегмент
//
//     // Верхний горизонтальный сегмент
//     const topGeometry = new THREE.BoxGeometry(2, 0.2, 0.2); // Длина, ширина, глубина
//     const topMesh = new THREE.Mesh(topGeometry, material);
//     topMesh.position.set(0, 1, 0); // Смещаем вверх
//
//     // Нижний горизонтальный сегмент
//     const bottomGeometry = new THREE.BoxGeometry(2, 0.2, 0.2); // Длина, ширина, глубина
//     const bottomMesh = new THREE.Mesh(bottomGeometry, material);
//     bottomMesh.position.set(0, -1, 0); // Смещаем вниз
//
//     // Добавляем все сегменты в группу
//     group.add(verticalMesh, topMesh, bottomMesh);
//
//     return group;
// }
//
// const cObject = create3DC();
// scene.add(cObject);
//
// // Анимация и рендеринг
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
//
// animate();