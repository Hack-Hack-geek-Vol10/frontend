import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
const httpLink = createHttpLink({
  uri: "https://sc-stage.seafood-dev.com/",
});

const authLink = setContext((_, { headers }) => {
  const token = useContext(AuthContext).currentUser?.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
