export function selectProfile(reduxState) {
  return reduxState.profile.loading
    ? null
    : {
        profile: reduxState.profile.profile,
      };
}

export function selectUsers(reduxState) {
  return reduxState.profile.users;
}
