/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost";

const PostListItem = ({ post, onEditPost }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveChanges = (editedFields) => {
		onEditPost(post.id, editedFields);
		setIsEditing(false);
	};

	return (
		<li>
			<p>{post.text}</p>
			<p>
				{" "}
				<span className="post-list-item-higlight">Author:</span>
				 {post.author}
			</p>
			<p>
				{" "}
				<span className="post-list-item-higlight">Location:</span>
				 {post.location}
			</p>

			{isEditing ? (
				<EditPost
					postId={post.id}
					initialData={{ location: post.location, author: post.author }}
					onSaveChanges={handleSaveChanges}
					onCancel={() => setIsEditing(false)}
				/>
			) : (
				<Link className=
				"post-edit-button" to={`/edit/${post.id}`}>Edit Post</Link>
			)}
		</li>
	);
};

export default PostListItem;
