/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost";

const PostListItem = ({ post, onEditPost }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
	};

	const handleSaveChanges = (editedFields) => {
		onEditPost(post.id, editedFields);
		setIsEditing(false);
	};

	return (
		<li>
			<p>{post.text}</p>
			<p>Author: {post.author}</p>
			<p>Location: {post.location}</p>

			{isEditing ? (
				<EditPost
					postId={post.id}
					initialData={{ location: post.location, author: post.author }}
					onSaveChanges={handleSaveChanges}
					onCancel={() => setIsEditing(false)}
				/>
			) : (
				<Link to={`/edit/${post.id}`}>Edit Post</Link>
			)}
		</li>
	);
};

export default PostListItem;
