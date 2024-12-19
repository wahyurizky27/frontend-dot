/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProps } from 'next/app';
import Auth from '../auth/page';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Router>
    <Routes>
      <Route path="/" element={<Component {...pageProps} />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </Router>
);

export default MyApp;
