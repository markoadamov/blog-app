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
}

const postsService = new PostsService();

export default postsService;
