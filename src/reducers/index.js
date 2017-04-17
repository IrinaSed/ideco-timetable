import { combineReducers } from 'redux'
import menu from './menu'
import flightTable from './flightTable'

const reducer = combineReducers({
    menu,
    flightTable
});

export default reducer
