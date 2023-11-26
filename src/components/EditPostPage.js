/** @format */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import EditPost from './EditPost';

const EditPostPage = ({ postId, onEditPost, state, posts }) => {
  const navigate = useNavigate();
  console.log('posts in edit post page', state, posts, postId);
  const post = posts.find((p) => String(p.id) === postId);
  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <EditPost
      postId={postId}
      initialData={{ location: post.location, author: post.author }}
      onSaveChanges={(editedFields) => onEditPost(postId, editedFields)}
      onCancel={() => navigate.goBack()}
    />
  );
};

export default EditPostPage;
