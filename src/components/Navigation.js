import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logOut, fetchUserInfo } from "../store/user/actions";
import { selectToken, selectUser } from "../store/user/selectors";
import ThemeToggler from "../style/components.js/ThemeToggler";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import "../style/index.css";

export default function Header(props) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const isLoggedIn = token ? (
    <>
      <MenuItems>
        {" "}
        <NavLink
          exact
          to="/mypage"
          activeStyle={{
            color: "#eb8f8f",
            textDecoration: "underline overline",
          }}
        >
          My Page
        </NavLink>
      </MenuItems>
      <MenuItems>
        {" "}
        <em>Logged in as {user.name}</em>
      </MenuItems>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/">
          {" "}
          <Button
            bg="transparent"
            border="1px"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </Link>
      </Box>
    </>
  ) : (
    <>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        mt={{ base: 3, md: 0 }}
      >
        <MenuItems>
          {" "}
          <NavLink
            exact
            to="/login"
            activeStyle={{
              color: "#eb8f8f",
              textDecoration: "underline overline",
            }}
          >
            Login
          </NavLink>
        </MenuItems>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        mt={{ base: 3, md: 0 }}
      >
        <Link to="signup">
          {" "}
          <Button
            bg="transparent"
            border="1px"
            onClick={() => dispatch(logOut())}
          >
            Make an Account
          </Button>{" "}
        </Link>
      </Box>
    </>
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#eb8f8f"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1">
          <div className="appTitle"> Made with Love ❤</div>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="pink"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <NavLink
            exact
            to="/"
            activeStyle={{
              color: "#eb8f8f",
              textDecoration: "underline overline",
            }}
          >
            Home
          </NavLink>
        </MenuItems>

        <MenuItems>
          <NavLink
            exact
            to="/feed"
            activeStyle={{
              color: "#eb8f8f",
              textDecoration: "underline overline",
            }}
          >
            Listings
          </NavLink>
        </MenuItems>
      </Box>
      {isLoggedIn}

      <ThemeToggler />
    </Flex>
  );
}
