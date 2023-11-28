import React from 'react';
import PostListItem from './PostListItem';
const PostList = ({ groupedPosts, onEditPost }) => {
  return (
    <div>
      {Object.entries(groupedPosts).map(([group, postsInGroup]) => (
        <div className='post-list' key={group}>
          <h2 className='post-list-title'>{group}</h2>
          <ul className='post-list-data'>
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
