import httpService from "./HttpService";

class PostsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get(`/posts?filter={"include":["comments"]}`);
  }

  async get(id) {
    return await this.axios.get(`/posts/${id}?filter={"include":["comments"]}`);
  }

  async add(newPost) {
    await this.axios.post("/posts", newPost);
  }

  async edit(id, post) {
    await this.axios.put(`/posts/${id}`, post);
  }

  async delete(id) {
    return await this.axios.delete(`/posts/${id}`);
  }

  async addComment(comment, postId){
    const response = await this.axios.post(`/posts/${postId}/comments`, comment);
    //console.log("response:",response);
    return response
  }
}

const postsService = new PostsService();

export default postsService;
