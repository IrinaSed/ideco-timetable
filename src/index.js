import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Timetable from './components/Timetable'
import reducer from './reducers/menu'
import {Provider} from 'react-redux'

const store = createStore(reducer);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <Provider store={store}>
        <Timetable/>
    </Provider>,
    rootEl
);

render();
