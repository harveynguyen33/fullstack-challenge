import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import Main from './main';

declare let module: {
  hot: {
    accept(file: string, cb: () => void): void;
  };
};

const ENTRY_POINT = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <StrictMode>
      <Main />
    </StrictMode>,
    ENTRY_POINT,
  );
};

const devRender = () => {
  if (module.hot) {
    if (module.hot) {
      module.hot.accept('./main.tsx', () => render());
    }
    render();
  }
};

devRender();
