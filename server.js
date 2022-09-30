import express from "express";
import cors from 'cors'
import sequelize from "./db.js";
import router from "./router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(process.env.PORT, () => {
      console.log(`The server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
