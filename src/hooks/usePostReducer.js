/** @format */

import { useReducer } from 'react';

const SET_POSTS = 'SET_POSTS';
const SET_GROUPING_TYPE = 'SET_GROUPING_TYPE';
const EDIT_POST = 'EDIT_POST';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case SET_GROUPING_TYPE:
      return { ...state, groupingType: action.payload };
    case EDIT_POST:
      console.log('action.payload', action.payload);
      const editedPosts = state.posts.map((post) =>
        String(post.id) === action.payload.id
          ? { ...post, ...action.payload }
          : post,
      );
      const data = { ...state, posts: editedPosts };
      console.log('new data after edit post ', data);
      return data;

    default:
      return state;
  }
};

const usePostsReducer = () => {
  const initialState = {
    posts: [],
    groupingType: 'week',
  };

  return useReducer(reducer, initialState);
};

export default usePostsReducer;
