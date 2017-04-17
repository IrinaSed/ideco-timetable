import { connect } from 'react-redux'
import { arrival, departure, admin } from '../actions'
import MenuComponent from '../components/Menu'

const mapStateToProps = (state) => ({
    time: state.time, isAdmin: state.buttons
});

const mapDispatchToProps = ({
    onArrival: arrival,
    onDeparture: departure,
    onAdmin: admin
});

const Menu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuComponent);

export default Menu

