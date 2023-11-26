import React from 'react';
import PostListItem from './PostListItem';
const PostList = ({ groupedPosts, onEditPost }) => {
  return (
    <div>
      {Object.entries(groupedPosts).map(([group, postsInGroup]) => (
        <div key={group}>
          <h2>{group}</h2>
          <ul>
            {postsInGroup.map((post) => (
              <PostListItem key={post.id} post={post} onEditPost={onEditPost} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostList;
