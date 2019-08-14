<template>
  <div id="overview">
    <button @click="createPost">Add new post</button>
    <BlogpostItem @open="openPost" @delete="deletePost" v-for="bp in blogposts" :key="bp.id" :blogpost="bp"/>
  </div>
</template>

<script>
import BlogpostItem from '@/components/BlogpostItem';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "overview",
  components: {
    BlogpostItem,
  },
  props: {
    data: Array,
    columns: Array,
  },
  data(){
    return {}
  },
  created() {
  },
  computed: {
    ...mapGetters('app', [
      'getBlogposts',
    ]),
    blogposts () {
      // We just want the blogposts that have published date older than today
      return this.getBlogposts.filter(bp => Date.parse(bp.publishedAt) < Date.now() );
    }
  },
  methods: {
    ...mapActions('app', [
      'deleteBlogpost',
    ]),
    openPost(e) {
      this.$router.push({ name: 'blogpost', params: {id: e.id/*, blogpost: {title: e.title, body: e.body}*/}});
    },
    createPost() {
      this.$router.push({name: 'newBlogpost'});
    },
    deletePost(id) {
      this.deleteBlogpost(id);
    }
  }
}
</script>

<style>
#overview {
  display: flex;
  flex-direction: row;
}
body{
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #555;
}
</style>
