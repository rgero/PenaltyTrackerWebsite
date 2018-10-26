import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';


const jsx = (
    <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('root'));
