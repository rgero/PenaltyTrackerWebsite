import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

//React Date stuff
import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';


const jsx = (
    <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('root'));
