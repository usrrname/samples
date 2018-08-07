var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  60, // field of view
  window.innerWidth/ window.innerHeight, // aspect ratio
  0.3, // near clipping plane
  500); // far clipping plane

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createCylinder(color) {
  var geometry = new THREE.CylinderGeometry(
    5, // top radius
    5, // bottom radius
    200, // height
    1800 // height segments
  );
  var material = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: true,
  });
  var cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);
  return cylinder;
}

function createSphere(color){
  var geometry = new THREE.SphereGeometry(
  1,
  50,
  5.25,
  7);
  var material = new THREE.MeshBasicMaterial({
    color:color,
    wireframe: true
  });
   var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  return sphere;
}

var p1 = createSphere('#0000FF');
var p2 = createSphere('#11ff33');
var p3 = createSphere('#331100');
var c2 = createCylinder('#00ffff');
var c3 = createCylinder('#ffff00');
var c4 = createCylinder('#0000ff');
var c5 = createCylinder('#ff0000');

camera.position.z = 3;
camera.position.y = 0.3;
camera.position.x = 0.1;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

setInterval(function() {
  p1.rotation.z += 0.0001;
  p1.rotation.y += 0.001;
  p2.rotation.z += 0.0015;
  p2.rotation.y += 0.0015;
  p3.rotation.x += 0.0025;
  c3.rotation.z += 0.002;
  c3.rotation.y += 0.0025;
  c4.rotation.z += 0.0005;
  c4.rotation.y += 0.00055;
  c5.rotation.z += 0.00125;
  c5.rotation.y += 0.00215;
}, 10);

document.querySelectorAll('canvas').ctx.globalCompositeOperation = 'lighter';