import "../styles/globals.css";
import AppProvider from "./utils/app_contex";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
