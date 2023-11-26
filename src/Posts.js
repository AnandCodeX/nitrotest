/** @format */

// App.js
import React, { useEffect } from "react";
import PostList from "./components/postList";
import useFetchPosts from "./hooks/useFetchPost";
import usePostsReducer from "./hooks/usePostReducer";

const Posts = () => {
	const posts = useFetchPosts();
	const [state, dispatch] = usePostsReducer();

	useEffect(() => {
		dispatch({ type: "SET_POSTS", payload: posts });
	}, [posts]);

	const formatWeek = (start, end) => {
		const startDate = new Date(start * 1000).toLocaleDateString();
		const endDate = new Date(end * 1000).toLocaleDateString();
		return `${startDate} - ${endDate}`;
	};

	const groupPosts = () => {
		const groupedPosts = {};
		state.posts.forEach((post) => {
			const groupKey =
				state.groupingType === "week"
					? formatWeek(post.time, post.time)
					: post[state.groupingType];
			if (!groupedPosts[groupKey]) {
				groupedPosts[groupKey] = [];
			}
			groupedPosts[groupKey].push(post);
		});
		return groupedPosts;
	};

	const groupedPosts = groupPosts();

	const handleGroupingTypeChange = (e) => {
		dispatch({ type: "SET_GROUPING_TYPE", payload: e.target.value });
	};

	const handleEditPost = (postId, editedFields) => {
		dispatch({ type: "EDIT_POST", payload: { id: postId, editedFields } });
		
	};

	return (
		<div>
			<h1>Post Tree View</h1>
			<select value={state.groupingType} onChange={handleGroupingTypeChange}>
				<option value='week'>Group by Week</option>
				<option value='author'>Group by Author</option>
				<option value='location'>Group by Location</option>
			</select>
			<PostList groupedPosts={groupedPosts} onEditPost={handleEditPost} />
		</div>
	);
};

export default Posts;
