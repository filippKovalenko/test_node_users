import { body } from "express-validator";

export const loginValidation = [
  body("username", "Укажите имя").isLength({ min: 3 }),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("username", "Укажите имя").isLength({ min: 3 }),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

export const createPosrValidation = [
  body("title", "Укажите заглавие").isLength({ min: 3 }),
  body("description", "Описание должно быть из минимум 5 символов").isLength({
    min: 5,
  }),
];
