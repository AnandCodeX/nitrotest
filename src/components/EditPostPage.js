/** @format */
import React from "react";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";
import usePostsReducer from "../hooks/usePostReducer";

const EditPostPage = ({ postId, onEditPost }) => {
	const [state, dispatch] = usePostsReducer();
	const navigate = useNavigate();
	const post = state.posts.find((p) => p.id === postId);
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
