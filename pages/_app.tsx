import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import MobileLayout from "layouts/MobileLayout";
import ThemeLayout from "layouts/ThemeLayout";

import { css, Global } from "@emotion/react";
import { MainProvider } from "@utils/contextAPI/main";
import { ThemeProvider } from "@utils/contextAPI/theme";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Trash To Trash can</title>
      </Head>
      <Global styles={globalStyle} />
      <ThemeProvider>
        <MainProvider>
          <MobileLayout>
            <ThemeLayout>
              <Component {...pageProps} />
            </ThemeLayout>
          </MobileLayout>
        </MainProvider>
      </ThemeProvider>
    </>
  );
};

const globalStyle = css`
  * {
    box-sizing: border-box;
    color: var(--color);
    transition: background 0.3s, color 0.3s;
  }
  html {
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: var(--background-color);
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
  }
  a {
    color: #212529;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  ml,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
`;

export default App;
