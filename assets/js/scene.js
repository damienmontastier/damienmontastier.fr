import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

import {
  TweenMax
} from 'gsap';
import {
  EventBus
} from "~/assets/event.js";

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
    // this.scene.add(new THREE.AxesHelper(20))

    this.sphere = new Sphere()

    this.scene.add(this.sphere)

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
    this.time = performance.now()

    this.sphere.update(this.time)

    this.renderer.render(this.scene, this.camera);
  }

}

class Sphere extends THREE.Object3D {
  constructor() {
    super()

    this.time = 0;
    this.clock = new THREE.Clock();

    if (process.browser) {
      this.vertexShader = require("@/assets/glsl/vertex.vs");
      this.fragmentShader = require("@/assets/glsl/fragment.fs");
    }

    EventBus.$on("mapPlane", this.mapPlane.bind(this));
    EventBus.$on("mapPlaneOut", this.mapPlaneOut.bind(this));

    this.uniforms = {
      u_time: {
        type: "f",
        value: 0.0
      },
      texture: {
        type: "t",
        value: null
      },
      texturebis: {
        type: "t",
        value: null
      },
      u_resolution: {
        value: new THREE.Vector2(
          window.innerWidth * window.devicePixelRatio,
          window.innerHeight * window.devicePixelRatio
        )
      },
      u_pourcent: {
        type: "f",
        value: 0.0,
      }
    };
    let geometry = new THREE.PlaneBufferGeometry(20, 20, 64, 64);
    

    let material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader
    });
    let plane = new THREE.Mesh(geometry, material);
    this.add(plane);
  }
  update(t) {
    this.time = this.time + this.clock.getDelta();
    this.uniforms.u_time.value = this.time
  }
  mapPlane(texture) {
    this.uniforms.texture.value = new THREE.TextureLoader().load(texture);
    TweenMax.to(this.uniforms.u_pourcent, 1, {
      value: 1.0,
    })
  }
  mapPlaneOut(texture) {
    TweenMax.to(this.uniforms.u_pourcent, 1, {
      value: 0.0,
    })
  }
}
