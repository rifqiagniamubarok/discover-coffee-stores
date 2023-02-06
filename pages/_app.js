import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>inni footer</footer>
    </div>
  );
}

export default MyApp;
