import React, { useEffect } from "react";
import { selectUser } from "../store/user/selectors";
// import { fetchUserInfo } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";

export default function MyPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   dispatch(fetchUserInfo());
  // }, [dispatch]);

  console.log("WHAT HAVE WE GOT HERE", user);
  return <div>WORK IN PROGRESS {user.name}!</div>;
}
