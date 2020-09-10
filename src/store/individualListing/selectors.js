export function selectPost(reduxState) {
  return reduxState.listing.post;
  // comments: reduxState.postPage.comments
}

export function selectLikes(reduxState) {
  return reduxState.listing.likes;
}
