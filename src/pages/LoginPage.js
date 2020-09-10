import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from "@chakra-ui/core";
import ErrorMessage from "../style/components.js/ErrorMsg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/mypage");
    }
  }, [token, history]);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(login(email, password));
      setIsLoggedIn(true);
    } catch (error) {}
    setIsLoggedIn(false);
    setError("Invalid username or password");

    setIsLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {/* TODO {isLoggedIn ? (
          <Box textAlign="center">
            <Text>Welcome Back! 💖 </Text>
            <Button
              variantColor="orange"
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
              Sign out
            </Button>
          </Box>
        ) : ( */}
        <>
          <Box textAlign="center">
            <Heading>
              <div className="appTitle">Login</div>
            </Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={submitForm}>
              {error && <ErrorMessage message={error} />}

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                variantColor="#hotpink"
                variant="outline"
                width="full"
                mt={4}
                type="submit"
                color="#eb8f8f"
                borderWidth={1}
                borderColor="#eb8f8f"
              >
                {isLoading ? (
                  <CircularProgress
                    isIndeterminate
                    size="24px"
                    color="hotpink"
                  />
                ) : (
                  "Log In"
                )}
              </Button>
            </form>
          </Box>
        </>
      </Box>
    </Flex>
  );
}
