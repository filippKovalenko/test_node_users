import UserModel from "../models/UserModel.js";
import { secret } from "../config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateAccessToken = (id, role) => {
  const payload = {
    id,
    role,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};
class authController {
  async registr(req, res) {
    try {
      const { username, password, role } = req.body;
      const condidate = await UserModel.findOne({ where: { username } });
      if (condidate) {
        return res
          .status(400)
          .json({ message: "Пользоватеь с таким именем уже существует!" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new UserModel({
        username,
        password: hashPassword,
        role,
      });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистророван!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Не удалось зарегистрироваться",
      });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ where: { username } });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${username} не найден!` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен не верный пароль!" });
      }
      const token = generateAccessToken(user.id, user.role);
      return res.json({ token });
    } catch (err) {
      console.log(err);
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }
  }

  async getUser(req, res) {
    try {
      const users = await UserModel.findAll();
      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  }

  async editUser(req, res) {
    try {
      const { id } = req.params;
      const { role } = req.body;
      const editRole = await UserModel.update({ role }, { where: { id } });
      return res.json(editRole);
    } catch (err) {
      return res.status(404).json({
        message: "Пользователь не обнавлен!",
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const users = await UserModel.destroy({ where: { id } });
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(404).json({
        message: "Пользователь не удален",
      });
    }
  }
}

export default new authController();
