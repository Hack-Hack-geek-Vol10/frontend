import { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";
import { GetUserProjectsDocument } from "@/generated/graphql";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserDocument,
} from "@/generated/graphql";

import { useMutation, useQuery } from "@apollo/client";

export const LoginButton = () => {
  const { login, currentUser } = useContext(AuthContext);
  const userName = currentUser?.displayName;
  const userId = currentUser?.uid;

  const { data: userData } = useQuery(GetUserProjectsDocument, {
    variables: {
      userId: userId,
    },
    skip: !userId,
  });

  const [createUserMutation] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument);

  const handleLogin = async () => {
    try {
      await login();
      if (userData && userName && userData.name !== userName) {
        const response = await createUserMutation({
          variables: {
            name: userName,
          },
        });
        return response.data;
      } else {
        console.log("登録済み");
      }
      return userData;
    } catch (err) {
      console.log(err);
    }
  };

  return <Button onClick={handleLogin}>GoogleLogin</Button>;
};
