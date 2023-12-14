import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/store/AuthContext";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo/client";
import { EditorProvider } from "@/store/EditorContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EditorProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </EditorProvider>
  );
}
