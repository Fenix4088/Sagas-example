import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { history, store } from './redux';
import { Provider } from 'react-redux';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { ConnectedRouter } from "connected-react-router";
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<ConnectedRouter history={history}>*/}
        <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<App />} />
          <Route path={'/blog'} element={<Blog />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      {/*</ConnectedRouter>*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
