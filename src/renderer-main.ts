import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'THREE';
import Stats = require('stats.js');

initApp();

function initApp() {
  console.log('App initialized!');

  /* stats */
  let stats = new Stats();
  document.body.appendChild(stats.dom);
  stats.showPanel(0);

  let scene, camera, renderer;
  let geometry, material, mesh;

  init();
  animate();
  function init() {

    scene = new Scene();

    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    geometry = new BoxGeometry(200, 200, 200);
    material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    mesh = new Mesh(geometry, material);
    scene.add(mesh);

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

  }

  function animate() {

    stats.begin();

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

    stats.end();
    requestAnimationFrame(animate);
  }

}






