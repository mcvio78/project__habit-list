import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import App from './App';
import { Theme } from './hoc/Theme';
import { Global } from './hoc/Global';

ReactDOM.render(
  <StrictMode>
    <Theme>
      <Global>
        <App />
      </Global>
    </Theme>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
