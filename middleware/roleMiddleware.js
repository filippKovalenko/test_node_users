import jwt from "jsonwebtoken";
import { secret } from "../config.js";

export default function (...role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      console.log("token", token);
      if (!token) {
        return res
          .status(401)
          .json({ message: "Пользователь не авторизован!" });
      }
      const decoded = jwt.verify(token, secret);
      console.log("decoded", decoded.role);
     let hasRole = false;
      if (decoded.role.includes(role)) {
        hasRole = true;
      }
      if (!hasRole) {
        return res.status(401).json({ message: "У Вас нет доступа!" });
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Пользователь не авторизован!" });
    }
  };
}
