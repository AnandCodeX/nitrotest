
const groupPosts = (state) => {
	const groupedPosts = {};
	state.posts.forEach((post) => {
		const groupKey =
			state.groupingType === "week"
				? new Date(post.time * 1000).toLocaleDateString()
				: post[state.groupingType];
		if (!groupedPosts[groupKey]) {
			groupedPosts[groupKey] = [];
		}
		groupedPosts[groupKey].push(post);
	});
	return groupedPosts;
};

export default groupPosts;
