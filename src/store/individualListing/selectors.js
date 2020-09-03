export function selectPost(reduxState) {
  return reduxState.listing.loading
    ? null
    : {
        post: reduxState.listing.post,
        // comments: reduxState.postPage.comments
      };
}
