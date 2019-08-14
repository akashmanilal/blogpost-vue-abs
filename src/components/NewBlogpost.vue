<template>
  <div>
    <input v-model="post.title" placeholder="Title">
    <input v-model="post.body" placeholder="Body">
    <datepicker v-model="post.publishedAt" name="uniquename"></datepicker>
    <button @click="addBlogpost">Submit</button>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import { mapActions } from 'vuex';

  export default {
    name: 'new-blogpost',
    components: {
      Datepicker,
    },
    data(){
      return {
        post: {title: null, body: null, publishedAt: new Date(2019, 8,  12)},
      }
    },
    computed: {},
    methods: {
    ...mapActions('app', [
      'createBlogpost',
    ]),
    addBlogpost () {
      this.createBlogpost(this.post);
      history.back();
    }
    },
  };
</script>
<style scoped>
.preview {

  border:1px solid black;
  margin: auto;
}
</style>
