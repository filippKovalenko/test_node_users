import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import styles from "./Login.module.scss";

export const Login = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: 'admin',
      password: 'admin',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(data)
    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
    <Typography classes={{ root: styles.title }} variant="h5">
      Вход в аккаунт
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="User"
        error={Boolean(errors.username?.message)}
        helperText={errors.username?.message}
        {...register('username', { required: 'Укажите имя' })}
        fullWidth
      />
      <TextField
        className={styles.field}
        label="Пароль"
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register('password', { required: 'Укажите пароль' })}
        fullWidth
      />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </form>
  </Paper>
  );
};
