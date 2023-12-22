import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/layout/Layout";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Home" />
        <link rel="icon" type="text/html" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
