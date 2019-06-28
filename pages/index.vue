<template>
  <section class="container">
    <!-- <Loading></Loading> -->
    <div id="about">
      <div id="top">
        <p>
          Hey! I'm Damien
          <span v-html="emoji"></span> currently learning Creative Developpement at Gobelins
        </p>
      </div>
      <!-- <div id="bottom">
        <p>Looking for study contract 2019 - 2021.</p>
        <p>
          Previously at
          <a target="_blank" href="https://uzful.fr">@uzful</a>,
          <a target="_blank" href="https://kryzalid.net">@kryzalid</a>
        </p>
      </div>-->
    </div>
    <div ref="content" id="content">
      <div class="part" id="projects">
        <h5>Projects</h5>
        <ul ref="projects">
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
        </ul>
      </div>
      <div class="part" id="codepens">
        <h5>Codepens</h5>
        <ul ref="codepens">
          <li data-img="https://picsum.photos/256ok">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
          <li data-img="https://picsum.photos/256">Momo & Romo</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "~/components/Loading.vue";
import TweenMax from "gsap";
import { EventBus } from "~/assets/event.js";

//Netlify CMS pour gérer le contenu ?

export default {
  components: {
    Loading
  },
  data() {
    return {
      emojies: [
        "&#8986",
        "&#9995",
        "&#127378",
        "&#127828",
        "&#127829",
        "&#128113",
        "&#128187",
        "&#128284",
        "&#128406",
        "&#128421",
        "&#128513",
        "&#128640",
        "&#128745",
        "&#129300",
        "&#129305"
      ],
      emoji: "&#8986",
      contentBoxParams: {},
      speed: {},
      timestamp: 0,
      mY: 0
    };
  },
  mounted() {
    this.interval = setInterval(this.fftest.bind(this), 1000);
    this.contentBoxParams = this.$refs.content.getBoundingClientRect();

    this.projects = this.$refs.projects;
    this.codepens = this.$refs.codepens;
    this.links = [
      this.projects.getElementsByTagName("li"),
      this.codepens.getElementsByTagName("li")
    ];

    Object.values(this.links).forEach(ul => {
      Object.values(ul).forEach(li => {
        li.addEventListener("mouseover", this.handleMouseHover.bind(this, li));
        li.addEventListener("mouseout", this.handleMouseOut.bind(this, li));
      });
    });

    window.addEventListener("mousemove", this.handleMouseMove.bind(this));

    this.timerEmojy = setInterval(this.changeEmojy, 250);
  },
  methods: {
    fftest() {
      console.log("clear");
    },
    handleMouseMove(event) {
      let topMax = Math.max(-this.contentBoxParams.top, event.clientY / 2);
      TweenMax.to(this.$refs.content, 2.5, {
        y: -topMax / 2,
        ease: Power4.easeOut
      });
      Object.values(this.links).forEach(ul => {
        Object.values(ul).forEach(li => {
          // TweenMax.to(li, 2, {
          //   skewY: event.clientY / 100
          // });
        });
      });
    },
    handleMouseHover(li) {
      EventBus.$emit("mapPlane", li.getAttribute("data-img"));
      // TweenMax.to(li, 1, {
      //   scaleX: 1.05,
      //   scaleY: 5,
      //   height: "auto",
      //   ease: Power4.easeOut
      // });
    },
    handleMouseOut(li) {
      TweenMax.to(li, 0.5, {
        scale: 1,
        height: 60,
        ease: Power4.easeOut
      });
    },
    changeEmojy() {
      this.emoji = this.emojies[
        Math.floor(Math.random() * this.emojies.length - 1) + 1
      ];
    }
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseHover.bind(this));
    window.removeEventListener("mouseout", this.handleMouseOut.bind(this));
    clearInterval(this.interval);
    EventBus.$off();
  }
};
</script>

<style lang="scss" scoped>
$margin: 80px;

.container {
  min-height: 100vh;

  #about {
    position: absolute;
    top: 10%;
    left: 10%;
    min-width: 30%;
    height: 80%;
    #top {
      position: absolute;
      top: 0;
      left: 0;
      span {
        min-width: 40px;
        width: 40px;
        display: inline-block;
        height: 30px;
        min-height: 30px;
        text-align: center;
      }
    }
    #bottom {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  #content {
    position: absolute;
    right: 20%;
    top: 10%;
    max-width: 720px;
    .part {
      margin: $margin 0 $margin 0;
      &:first-of-type {
        margin: 0 0 $margin 0;
      }
      &:last-of-type {
        margin: $margin 0 0 0;
      }
    }
    h5 {
      text-align: left;
      text-transform: uppercase;
      display: inline-flex;
      position: relative;
      &::after {
        content: "3";
        position: absolute;
        right: -15px;
        top: -10px;
      }
    }
    ul {
      padding-left: 50px;
      li {
        // font-family: 'Anton', sans-serif;
        display: flex;
        align-items: center;
        margin: 20px 0;
        font-size: 40px;
        height: 60px;
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

