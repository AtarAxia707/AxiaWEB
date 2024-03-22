import  ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

/*
ReactDOM.render(
  <BrowserRouter basename="/https://ataraxia707.github.io/AxiaWEB/">
    <App /> 
  </BrowserRouter>,
  document.getElementById("root")
);
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);