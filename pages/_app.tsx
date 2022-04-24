import {AppProps} from 'next/app';
import '../src/styles/global.css';

export default function App({pageProps, Component}: AppProps) {
  return (
    <Component {...pageProps}/>
  );
}
