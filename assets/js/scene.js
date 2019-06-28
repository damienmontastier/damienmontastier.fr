import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

import {
  TweenMax
} from 'gsap';

// var vertexShader = require('../glsl/vertex.glsl');
// var fragmentShader = require("../glsl/fragment.glsl");

const vertexShader = require("../glsl/vertex.vs");
// var vertexShader = require("@/assets/glsl/vertex.vs");

export default class Scene {
  constructor() {
    //Setup Camera
    this.camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;
    this.camera.position.x = 15;

    this.canvas = document.getElementById("canvas")

    // this.controls = new OrbitControls(this.camera);

    this.scene = new THREE.Scene();

    // axes
    this.scene.add(new THREE.AxesHelper(20))

    let sphere = new Sphere()

    this.scene.add(sphere)

    var axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setAnimationLoop(this.render.bind(this));

    this.canvas.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

class Sphere extends THREE.Object3D {
  constructor() {
    super()

    var geometry = new THREE.PlaneBufferGeometry(20, 20, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
      wireframe: true
    });
    // this.material = new THREE.ShaderMaterial({
    //   vertexShader: document.getElementById("vertexShader").textContent,
    //   fragmentShader: document.getElementById("fragmentShader").textContent
    // });
    var plane = new THREE.Mesh(geometry, material);
    this.add(plane);
  }
}
