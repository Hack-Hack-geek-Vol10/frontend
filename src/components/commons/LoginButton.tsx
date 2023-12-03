import { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";
import {
  CreateUserMutation,
  CreateUserDocument,
  CreateUserMutationVariables,
} from "@/generated/graphql";
import { GetUserDocument } from "@/generated/graphql";
import { useMutation, useQuery } from "@apollo/client";

export const LoginButton = () => {
  const { login, currentUser } = useContext(AuthContext);
  const userName = currentUser?.displayName;
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GetUserDocument);

  const [createUserMutation, { data, loading, error }] =
    useMutation<CreateUserMutation>(CreateUserDocument);

  const handleLogin = async () => {
    try {
      await login();
    } catch (err) {
      console.log(err);
    }
    if (userData && userData.username !== userName) {
      createUserMutation({
        variables: {
          name: userName,
        },
      });
    }
  };
  return <Button onClick={handleLogin}>GoogleLogin</Button>;
};
