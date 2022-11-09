let axios = require("axios");

class News {
  static async getNews(req, res, next) {
    try {
      let baseUrl = "https://api-berita-indonesia.vercel.app/antara/terbaru/";
      let { data } = await axios({
        url: baseUrl,
        method: "get",
      });
      data.data.posts.forEach((el, index) => {
        let id = index + 1;
        el.id = id;
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = News;
