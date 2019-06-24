<template>
  <section class="container">
    <!-- <Loading></Loading> -->
    <div id="about">
      <div id="top">
        <p>Hey, my name is Damien. I studying actually at Gobelins l'Ecole de l'image in Interactive Dévelopement.</p>
      </div>
      <div id="bottom">
        <p>Hey, my name is Damien. I studying actually at Gobelins l'Ecole de l'image in Interactive Dévelopement.</p>
      </div>
    </div>
    <div id="content_informations">
      <div class="part" id="projects">
        <h5>Somes projects</h5>
        <ul>
          <li></li>
        </ul>
      </div>

      <div class="part" id="contacts">
        <h5>Contact</h5>
      </div>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import Loading from "~/components/Loading.vue";

//Netlify CMS pour gérer le contenu ?

export default {
  components: {
    // AppLogo
    Loading
  }
};
</script>

<style lang="scss" scoped>
$margin: 50px;

.container {
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  margin: 10% 10%;
  #content_informations {
    position: absolute;
    // right: 10%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    .part {
      margin: $margin 0 $margin 0;
      &:first-of-type {
      }
      &:last-of-type {
        margin: $margin 0 0 0;
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

