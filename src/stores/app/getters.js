export default {
  getBlogposts: state => state.blogposts,
  getBlogpostById: (state) => (id) => {
    return state.blogposts.find(bp => bp.id === id);
  },
};
