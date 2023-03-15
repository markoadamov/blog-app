import httpService from "./HttpService";

class PostsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/posts");
  }
}

const postsService = new PostsService();

export default postsService;
