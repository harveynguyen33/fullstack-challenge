import React from 'react';

import App from './app';
import './polyfills';

type AppProps = Record<string, unknown>;

const Main: React.FC<AppProps> = () => {
  return <App />;
};
export default Main;
