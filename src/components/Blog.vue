<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <blog-feed :filters="filters"/>
    <blog-post :post="post"/>
    <blog-footer/>
  </main>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogPost from './BlogPost'
import BlogFooter from './BlogFooter'

export default {
  name: 'blog',
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter },
  resource: 'Blog',
  props: {
    post: String
  },

  data() {
    return {
      navs: 0,
      title: '',
      labels: {
        post: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },
    filters() {
      let filters = {};

      if (this.post) {
        filters.post = this.post;
      }

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) {
        this.navs++
      }
    }
  },

  mounted() {
    this.$getResource('blog')
      .then(x => {
        // use pace hook to know when rendering is ready
      })
  }
}
</script>
