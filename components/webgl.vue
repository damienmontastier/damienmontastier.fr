<template>
  <div id="canvas"></div>
</template>

<script>
import scene from "@/assets/js/scene";
import { EventBus } from "~/assets/event.js";

export default {
  mounted() {
    this.scene = new scene();
    EventBus.$on("mapPlane", this.mapPlane.bind(this));
  },
  methods: {
    mapPlane() {
      console.log("mapPlane");
    }
  }
};
</script>


<style lang="scss" scoped>
#canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  canvas {
    pointer-events: none;
  }
}
</style>

