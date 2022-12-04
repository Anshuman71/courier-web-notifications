import "../styles/globals.css";
import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";

const CLIENT_KEY = process.env.NEXT_PUBLIC_COURIER_CLIENT_KEY;
const USER_ID = "Github_28081510";

function MyApp({ Component, pageProps }) {
  return (
    <CourierProvider clientKey={CLIENT_KEY} userId={USER_ID}>
      <Toast />
      <Component {...pageProps} />
    </CourierProvider>
  );
}

export default MyApp;
