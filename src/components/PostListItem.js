/** @format */

import React, { useState } from "react";

const PostListItem = ({ post, onEditPost }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedFields, setEditedFields] = useState({
		location: post.location,
		author: post.author,
	});

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
	};

	const handleFieldChange = (e) => {
		setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
	};

	const handleSaveChanges = (e) => {
		e.preventDefault();
		onEditPost(post.id, editedFields);
		setIsEditing(false);
	};

	return (
		<li>
			<p>{post.text}</p>
			<p>Author: {post.author}</p>
			<p>Location: {post.location}</p>

			{isEditing ? (
				<form onSubmit={handleSaveChanges}>
					<label>
						Location:
						<input
							type='text'
							name='location'
							value={editedFields.location}
							onChange={handleFieldChange}
							required
						/>
					</label>
					<label>
						Author:
						<input
							type='text'
							name='author'
							value={editedFields.author}
							onChange={handleFieldChange}
							required
						/>
					</label>
					<button>Save Changes</button>
					<button onClick={handleEditToggle}>Cancel</button>
				</form>
			) : (
				<button onClick={handleEditToggle}>Edit Post</button>
			)}
		</li>
	);
};

export default PostListItem;
