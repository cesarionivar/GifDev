import { GifsProvider } from '../context/GifsContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GifsProvider>
      <Component {...pageProps} />
    </GifsProvider>
  );
}

export default MyApp;
