export function selectFeedLoading(reduxState) {
  return reduxState.feed.loading;
}

export function selectFeedPosts(reduxState) {
  return reduxState.feed.posts;
}

export function selectLikes(reduxState) {
  return reduxState.feed.posts.likes;
}
