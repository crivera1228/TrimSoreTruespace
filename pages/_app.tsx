import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check if user has a theme preference stored
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
