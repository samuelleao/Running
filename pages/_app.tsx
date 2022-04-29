import GlobalStyleProvider from "contexts/theme";
import Document from "src/components/Document";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStyleProvider>
        <Component {...pageProps} />
    </GlobalStyleProvider>
  );
}

export default MyApp;
