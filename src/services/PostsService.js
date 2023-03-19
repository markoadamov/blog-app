import httpService from "./HttpService";

class PostsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/posts");
  }

  async get(id) {
    return await this.axios.get(`/posts/${id}`);
  }

  async add(newPost) {
    await this.axios.post("/posts", newPost);
  }

  async edit(id, post) {
    await this.axios.put(`/posts/${id}`, post);
  }
}

const postsService = new PostsService();

export default postsService;
