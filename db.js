import * as dotenv from "dotenv"
import Sequelize from "sequelize";

dotenv.config()

const sequelize = new Sequelize(
  process.env.NAME,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);
 
export default sequelize;
