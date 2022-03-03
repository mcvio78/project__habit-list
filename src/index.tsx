import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './theme/GlobalStyle';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './auth/contextProvider';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
