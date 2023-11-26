/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3007/posts")
			.then((response) => setPosts(response.data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return posts;
};

export default useFetchPosts;
