export function selectProfile(reduxState) {
  return reduxState.profile.profile;
}

export function selectUsers(reduxState) {
  return reduxState.profile.users;
}
