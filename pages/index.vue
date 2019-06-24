<template>
  <section class="container">
    <!-- <Loading></Loading> -->
    <div ref="content" id="content">
      <div class="part" id="projects">
        <h5>Projects</h5>
        <ul ref="projects">
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
        </ul>
      </div>
      <div class="part" id="codepens">
        <h5>Codepens</h5>
        <ul ref="codepens">
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
          <li>Momo & Romo</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "~/components/Loading.vue";
import TweenMax from "gsap";

//Netlify CMS pour gérer le contenu ?

export default {
  components: {
    Loading
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
  },
  methods: {
    handleMouseMove(event) {
      setInterval(this.calcSpeed, 1000);

      console.log(Date.now());
      console.log(event.clientY);
      TweenMax.to(this.$refs.content, 3, {
        y: -event.clientY,
        ease: Power4.easeOut
      });
      console.log(this.$refs);
      TweenMax.to(this.$refs.projects.children, 3, {
        scaleY: event.clientY / 200,
        ease: Power4.easeOut
      });
    },
    calcSpeed() {}
  }
};
</script>

<style lang="scss" scoped>
$margin: 50px;

.container {
  min-height: 100vh;

  #content {
    position: absolute;
    right: 20%;
    top: 30%;
    max-width: 720px;
    .part {
      margin: $margin 0 $margin 0;
      &:first-of-type {
      }
      &:last-of-type {
        margin: $margin 0 0 0;
      }
    }
    h5 {
      text-align: left;
    }
    ul {
      padding-left: 50px;
      li {
        margin: 20px 0;
        font-size: 40px;
        &:last-child {
          margin: 20px 0 0 0;
        }
      }
    }

    #projects {
    }
    #experiences {
    }
    #contact {
    }
  }
}
</style>

