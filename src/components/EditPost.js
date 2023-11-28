/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Posts.css";

const EditPost = ({ initialData, onSaveChanges, onCancel }) => {
	const navigate = useNavigate();
	const [editedFields, setEditedFields] = useState({
		location: initialData.location,
		author: initialData.author,
	});
	const handleFieldChange = (e) => {
		setEditedFields((x) => ({ ...x, [e?.target?.name]: e?.target?.value }));
	};
	const handleSaveChanges = () => {
		onSaveChanges(editedFields);
		navigate("/");
	};

	return (
		<div className="edit-form">
			<form onSubmit={handleSaveChanges}>
				<h2 className='post-list-title'>Edit Post</h2>
				<label className='post-list-item-higlight post-edit-label'>
					Location:
					<input
						className='post-edit-input'
						type='text'
						name='location'
						value={editedFields.location}
						onChange={handleFieldChange}
						required
					/>
				</label>
				<label className='post-list-item-higlight post-edit-label'>
					Author:
					<input
						className='post-edit-input'
						type='text'
						name='author' 
						value={editedFields.author}
						onChange={handleFieldChange}
						required
					/>
				</label>
			
			<br/>
				<button className='post-edit-button-save-cancel' >
					Save Changes
				</button>
				<button className='post-edit-button-save-cancel' onClick={onCancel}>
					Cancel
				</button>
        </form>
		</div>
	);
};

export default EditPost;
