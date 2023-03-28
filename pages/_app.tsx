import React from "react";
import "../styles/globals.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />;
}

export default MyApp;
