export function selectPost(reduxState) {
  console.log("selectPost -> reduxState", reduxState);
  return reduxState.listing.loading
    ? null
    : {
        post: reduxState.listing.post,
        // comments: reduxState.postPage.comments
      };
}
