<template>
  <div class="preview">
    <h1>{{myPost.title}}</h1>
    <p>{{myPost.body}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'blogpost',
    data(){
      return {
        myPost: this.getBlogpostById(parseInt(this.$route.params.id)) || {title: "default", body: "default"},
      }
    },
    methods: {
    ...mapGetters('app', [
      'getBlogpostById',
    ]),
    },
  };
</script>
<style scoped>
.preview {

  border:1px solid black;
  margin: auto;
}
</style>
