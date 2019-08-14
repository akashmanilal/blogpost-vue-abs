<template>
<div>
  <div class="preview" @click="$emit('open', blogpost)">
    <h1>{{blogpost.title}}</h1>
  </div>
  <button @click="$emit('delete',blogpost.id)">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'blogpost-item',
    props: {
      blogpost: {
        type: Object,
        required: true,
      },
    },
    data(){
      return {}
    },
    methods: {},
  };
</script>
<style scoped>
.preview {

  border:1px solid black;
  margin: auto;
}
</style>
