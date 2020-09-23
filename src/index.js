import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Routes from './Routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #7395AE;
        background: #7395AE -webkit-gradient(linear, left top, left bottom, from(#379683, 10%), to(#7395AE, 100%)) no-repeat;
        background: #7395AE -moz-linear-gradient(top, #379683, #7395AE) no-repeat;
        filter: progid:DXImageTransforme.Microsoft.gradient(startColorstr=#379683, endColorstr=#7395AE) no-repeat;
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#b1A296, endColorstr=#b1A296)" no-repeat;
    }
`

const routes = (
    <Provider store={store}>
        <Router>
            <GlobalStyle/>
            <App>
                <Routes />
            </App>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));