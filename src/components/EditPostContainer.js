/** @format */
import React from "react";
import EditPostPage from "./EditPostPage";
import { useParams } from "react-router-dom";
const EditPostContainer = ({ onEditPost }) => {
	const { postId } = useParams();
	return (
		<React.Fragment>
			<EditPostPage postId={postId} onEditPost={onEditPost} />
		</React.Fragment>
	);
};

export default EditPostContainer;
