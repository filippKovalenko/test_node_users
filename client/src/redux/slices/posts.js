import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('auth/posts');
  return data;
});

export const fetchPostsId = createAsyncThunk('posts/fetchPostsId', async (id) => {
    const { data } = await axios.get(`auth/posts/${id}`);
    console.log(data)
    return data;
  });
  

export const fetchCreatePost = createAsyncThunk('posts/fetchCreatePost', async (params) => {
const { data } = await axios.post('/auth/create', params);
return data;
}
);

export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) =>
  axios.delete(`/posts/${id}`),
);

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  }
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение статей
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = 'loaded';
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = 'error';
    },

    [fetchPostsId.pending]: (state) => {
        state.posts.items = [];
        state.posts.status = 'loading';
      },
      [fetchPostsId.fulfilled]: (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
      },
      [fetchPostsId.rejected]: (state) => {
        state.posts.items = [];
        state.posts.status = 'error';
      },

    [fetchCreatePost.pending]: (state) => {
        state.posts.items = [];
        state.posts.status = 'loading';
      },
      [fetchCreatePost.fulfilled]: (state, action) => {
        state.posts.items = action.payload;
        state.posts.status = 'loaded';
      },
      [fetchCreatePost.rejected]: (state) => {
        state.posts.items = [];
        state.posts.status = 'error';
      },

    // Удаление статьи
    [fetchRemovePost.pending]: (state, action) => {
      state.posts.items = state.posts.items.filter((obj) => obj.id !== action.meta.arg);
    },
  },
});

export const selectPost = (state) => Boolean(state.posts.items);

export const postsReducer = postsSlice.reducer;