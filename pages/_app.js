import "../styles/globals.scss";
import "~styles/bigcalendar.scss";
import "weather-icons/css/weather-icons.css";
import PageHead from "~components/PageHead";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
