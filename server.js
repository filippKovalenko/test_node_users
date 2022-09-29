import express from "express";
import cors from 'cors'
import sequelize from "./db.js";
import router from "./router.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/auth", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`The server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
