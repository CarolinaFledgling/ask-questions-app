import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/styles/theme";
import createEmotionCache from "../src/styles/createEmotionCache";
import { Layout } from "../components/shared/Layout";
import { RobotoFont } from "../components/shared/Roboto";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          {props.title
            ? `${props.title} - Configurator gift cards`
            : "Configurator gift cards`"}
        </title>
        {props.description && <meta name="description" content={props.description}></meta>}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <RobotoFont />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: theme.palette.background.default },
            a: { textDecoration: "none", color: theme.palette.primary.main },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
