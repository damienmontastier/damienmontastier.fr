<template>
  <div>
    <nuxt/>
    <div ref="cursor" id="cursor"></div>
  </div>
</template>


<script>
import TweenMax from "gsap";

export default {
  data() {
    return {
      cursor: null,
      mousePos: {}
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.cursor = this.$refs.cursor;
  },
  methods: {
    handleMouseMove(event) {
      this.mousePos.x = event.clientX;
      this.mousePos.y = event.clientY;

      TweenMax.to(this.cursor, 2, {
        x: this.mousePos.x - this.cursor.offsetWidth / 2,
        y: this.mousePos.y - this.cursor.offsetHeight / 2,
        ease: Power4.easeOut
      });
    }
  },
  destroyed() {
    window.removeEventListener("mousemove", this.handleMouseMove.bind(this));
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#cursor {
  background: black;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50px;
  mix-blend-mode: difference;
  z-index: 2;
  pointer-events: none;
}
</style>

