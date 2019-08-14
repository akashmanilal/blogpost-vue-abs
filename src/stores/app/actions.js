import Axios from 'axios';

export default {
  createBlogpost({commit}, blogpost) {
    // const  status = await Axios.post(`${this.api_url}/blogpost?`, {body: blogpost}, {
    // headers: { 'Authorization': 'Bearer 12345', 'Accept': 'application/json'}
    // });
    commit('addBlogpost', blogpost);
  },

  async getAllBlogposts({commit}) {
    // const  blogposts = await Axios.get(`${this.api_url}/blogpost?`);
    commit('setBlogposts', blogposts);
  },

  getBlogpost({getter}, data) {
    //Very useful if we are looking to get only one blogpost in a large set
    //Otherwise just get the one we are already storing on the store
    // return await Axios.get(`${this.api_url}/blogpost/?`, { data });
    return getter.getBlogpostById(data.id);
  },

  deleteBlogpost({commit}, id) {
    //Very useful if we are looking to get only one blogpost in a large set
    //Otherwise just get the one we are already storing on the store
    // return await Axios.get(`${this.api_url}/blogpost/?`, { data });
    return commit('deleteBlogpost', id);
  }


};



