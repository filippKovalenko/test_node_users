import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define("post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: null , defaultValue:'test'},
  description: { type: DataTypes.STRING, allowNull: null,defaultValue:"test" },
});

export default Post;
