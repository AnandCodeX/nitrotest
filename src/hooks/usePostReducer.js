/** @format */

import { useReducer } from "react";
import { SET_POSTS, SET_GROUPING_TYPE, EDIT_POST } from "./types";
// Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, posts: action.payload };
		case SET_GROUPING_TYPE:
			return { ...state, groupingType: action.payload };
		case EDIT_POST:
			const editedPosts = state.posts.map((post) =>
				post.id === action.payload.id
					? { ...post, ...action.payload.editedFields }
					: post
			);
			return { ...state, posts: editedPosts };
		default:
			return state;
	}
};

const usePostsReducer = () => {
	const initialState = {
		posts: [],
		groupingType: "week",
	};

	return useReducer(reducer, initialState);
};

export default usePostsReducer;
