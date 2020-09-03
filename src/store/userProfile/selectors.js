export function selectProfile(reduxState) {
  return reduxState.profile.loading
    ? null
    : {
        profile: reduxState.profile.profile,
      };
}
