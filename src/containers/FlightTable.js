import { connect } from 'react-redux'
import {  } from '../actions'
import FlightTableComponent from '../components/FlightTable'

const mapStateToProps = (state) => ({
    time: state.time, isAdmin: state.buttons
});

const FlightTable = connect(
    mapStateToProps
)(FlightTableComponent);

export default FlightTable
