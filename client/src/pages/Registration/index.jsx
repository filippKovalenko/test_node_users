import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import styles from './Login.module.scss';

import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';

export const Registration = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: 'Вася Пупкин',
      password: '1234',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось регистрироваться!');
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
      Создание аккаунта
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={Boolean(errors.username?.message)}
        helperText={errors.username?.message}
        {...register('username', { required: 'Укажите полное имя' })}
        className={styles.field}
        label="Полное имя"
        fullWidth
      />
      <TextField
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        type="password"
        {...register('password', { required: 'Укажите пароль' })}
        className={styles.field}
        label="Пароль"
        fullWidth
      />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  </Paper>
  );
};
