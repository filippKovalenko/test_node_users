import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { fetchPosts } from "../redux/slices/posts";
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';
export const Home = () => {
const isAuth = useSelector(selectIsAuth);
const dispatch = useDispatch();

const userData = useSelector((state) => state.auth.data);
const { posts } = useSelector((state) => state.posts);
const isPostsLoading = posts.status === "loading";
console.log(posts)

console.log(userData)

React.useEffect(() => {
  dispatch(fetchPosts());
}, []);

  return (
    <>
    { (isAuth === true ) ? (
        <Grid xs={8} item>
        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, id) => isPostsLoading ? ( <Post key={id} isLoading={true}
          />) : (
            <Post
            key={id}
            id={obj.id}
            title={obj.title}
            description={obj.description}
            createdAt={obj.createdAt}
          />
          )
        )}
      </Grid>
    ):(
      <h2>zxcxzczczx</h2>
    )}
      
    </>
  );
};
