/** @format */
import React from 'react';
import EditPostPage from './EditPostPage';
import { useParams } from 'react-router-dom';
const EditPostContainer = ({ onEditPost, state, posts }) => {
  const { postId } = useParams();
  return (
    <React.Fragment>
      <EditPostPage
        postId={postId}
        onEditPost={onEditPost}
        state={state}
        posts={posts}
      />
    </React.Fragment>
  );
};

export default EditPostContainer;
