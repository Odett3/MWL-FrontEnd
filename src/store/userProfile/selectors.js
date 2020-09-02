export function selectProfile(reduxState) {
  console.log("selectProfile -> reduxState", reduxState);
  return reduxState.profile.loading
    ? null
    : {
        profile: reduxState.profile.profile,
      };
}
