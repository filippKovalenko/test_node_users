import PostModel from "../models/PostModel.js";

class postController {
  async create(req, res) {
    try {
      const { title, description } = req.body;
      const post = await PostModel.create({ title, description });
      return res.json(post);
    } catch (err) {
      console.log(err);
      return res.status(404).json({
        message: "Пост не создан",
      });
    }
  }

  async get(req, res) {
    try {
      const posts = await PostModel.findAll();
      return res.json(posts);
    } catch (err) {
      return res.status(404).json({
        message: "Посты не найдены",
      });
    }
  }

  async getItem(req, res) {
    try {
      const { id } = req.params;
      const postId = await PostModel.findOne({ where: { id } });
      return res.json(postId);
    } catch (err) {
      return res.status(404).json({
        message: "Посты не найдены",
      });
    }
  }
  async edit(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const editPost = await PostModel.update(
        { title, description },
        { where: { id } }
      );
      return res.json(editPost);
    } catch (err) {
      return res.status(404).json({
        message: "Пост не обнавлен!",
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletePost = await PostModel.destroy({ where: { id } });
      return res.json(deletePost);
    } catch (err) {
      return res.status(404).json({
        message: "Пост не удален!",
      });
    }
  }
}

export default new postController();
