/** @format */

import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditPostContainer from "./components/EditPostContainer";
import PostList from "./components/PostList";
import useFetchPosts from "./hooks/useFetchPost";
import usePostsReducer from "./hooks/usePostReducer";
import groupPosts from "./components/GroupPosts";
import "./Posts.css";
const Posts = () => {
	const posts = useFetchPosts();
	const [state, dispatch] = usePostsReducer();
	const groupedPosts = groupPosts(state);

	const handleGroupingTypeChange = (e) => {
		dispatch({ type: "SET_GROUPING_TYPE", payload: e.target.value });
	};
	const handleEditPost = (postId, editedFields) => {
		dispatch({ type: "EDIT_POST", payload: { id: postId, ...editedFields } });
	};

	useEffect(() => {
		dispatch({ type: "SET_POSTS", payload: posts });
	}, [dispatch, posts]);

	return (
		<Router>
			<div className="posts">
				<h1>
					<Link to='/' className='posts-title'>
					💁 Posts Information App 🚀🚀🚀
					</Link>
				</h1>
				<select value={state.groupingType} onChange={handleGroupingTypeChange}>
					<option value='week'>Group by Week</option>
					<option value='author'>Group by Author</option>
					<option value='location'>Group by Location</option>
				</select>

				<Routes>
					<Route
						path='/edit/:postId'
						element={
							<EditPostContainer
								onEditPost={handleEditPost}
								state={state}
								posts={posts}
							/>
						}
					/>
					<Route
						path='/'
						element={
							<PostList
								groupedPosts={groupedPosts}
								onEditPost={handleEditPost}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default Posts;
