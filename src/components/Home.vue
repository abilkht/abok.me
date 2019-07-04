<template>
  <div id="layout">
    <div class="layout">

      <nav class="nav">

        <div class="nav__title">
          <router-link to="/">
            <img id="logo" src="../../static/icons/android-chrome-512x512.png" alt="Logo Abok">
          </router-link>
        </div>

        <div class="nav__menu">
          <router-link to="/blog">
            <button>Blog</button>
          </router-link>
        </div>

      </nav>
    </div>

      <div class="main-content">

        <section id="intro" class="intro">
          <div class="intro__content">
            <div class="intro__image-placeholder">
              <img id="image" src="../../static/icons/b_me-b_w.png" alt="Image Abok">
            </div>
            <div class="intro__text">
              <vue-typer :text="text" erase-style="select-back" :pre-erase-delay="1000" :erase-delay="50" caret-animation="smooth" />
            </div>

          </div>
        </section>

        <div id="content" class="container">
          <section id="about">
            <h2>Purpose🤔</h2>
            <p>
              For quite a while, I've wanted to develop my own website where I could leave my thoughts and share my experience.
              Apparently, the time has come!
            </p>
            <p>
              Давно хотел иметь свой собственный сайт, где я мог бы оставить свои мысли и поделиться опытом.
              Видимо, время пришло!
            </p>
          </section>
          <section id="contacts">
            <h2>Links👋</h2>
            <p class="social-btns">
              <a href="mailto:abilkhaiyr.taibekov@nu.edu.kz" target="_blank" class="btn gmail"><i class="fa fa-envelope-square"></i></a>
              <a href="https://www.linkedin.com/in/aboookt" target="_blank" class="btn linkedin"><i class="fa fa-linkedin-square"></i></a>
              <a href="https://github.com/aboookt" target="_blank" class="btn github"><i class="fa fa-github"></i></a>
              <a href="https://t.me/aboookt" target="_blank" class="btn telegram"><i class="fa fa-telegram"></i></a>
              <a href="https://www.facebook.com/aboookt" target="_blank" class="btn facebook"><i class="fa fa-facebook"></i></a>
              <a href="https://vk.com/aboookt" target="_blank" class="btn vk"><i class="fa fa-vk"></i></a>
              <a href="https://open.spotify.com/user/abilkhaiyr" target="_blank" class="btn spotify"><i class="fa fa-spotify"></i></a>
            </p>
          </section>
        </div>

      </div>

  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'

  export default {
    name: 'home',
    components: {VueTyper},

    data() {
      return {
        text: ['Hi, I\'m Abilkhaiyr Taibekov,', 'a Computer Science student,', 'and technology enthusiast.']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sass/blocks/home";
</style>

<style lang="scss">
  @import "../sass/tools/typer";
</style>
