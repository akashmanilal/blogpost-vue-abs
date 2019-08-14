export default {

  setBlogposts (state, blogPosts) {
    state.blogPosts = blogPosts;
  },

  addBlogpost (state, blogpost) {
    state.blogposts.push(blogpost);
  },

  deleteBlogpost(state, id) {
    state.blogposts.forEach((item, index, object) => {
      if (item.id === id) {
        object.splice(index, 1);
      }
    });
  }
};
