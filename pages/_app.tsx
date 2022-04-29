import GlobalStyleProvider from "contexts/theme";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStyleProvider>
        <Component {...pageProps} />
    </GlobalStyleProvider>
  );
}

export default MyApp;
