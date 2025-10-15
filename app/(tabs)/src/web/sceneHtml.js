const sceneHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/three@0.157.0/build/three.min.js"></script>
    <script src="https://unpkg.com/three@0.157.0/examples/js/loaders/GLTFLoader.js"></script>
    <style>
      body { margin: 0; overflow: hidden; }
      canvas { width: 100vw; height: 100vh; display: block; }
    </style>
  </head>
  <body>
    <script>
      let scene, camera, renderer, model;

      function init(modelPath) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        scene.add(light);

        const loader = new THREE.GLTFLoader();
        loader.load(modelPath, (gltf) => {
          model = gltf.scene;
          scene.add(model);
          camera.position.set(0, 1, 3);
          animate();
        });
      }

      function animate() {
        requestAnimationFrame(animate);
        if (model) model.rotation.y += 0.005;
        renderer.render(scene, camera);
      }

      // Escucha mensajes desde React Native
      document.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "init") init('./assets/models/sedan.glb'); //data.model);
        if (data.type === "color" && model) {
          model.traverse((child) => {
            if (child.isMesh) {
              child.material.color.set(data.value);
            }
          });
        }
      });
    </script>
  </body>
</html>
`;

export default sceneHtml;
