import React, { Component, PropTypes }  from 'react';
import './FlightTable.css';

function selectParams(time, flight) {
    if (time === 'arrival')
        return {
            ...flight,
            time: flight.timeArrival,
            actualTime: flight.actualTimeArrival
        };
    return {
        ...flight,
        time: flight.timeDeparture,
        actualTime: flight.actualTimeDeparture
    }
}


class FlightTable extends Component {
    static propTypes = {
        time: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool.isRequired
    };

    render() {
        var rows = this.props.flights.map(flight => selectParams(this.props.time, flight))
            .map((flight, ind) => <tr>
                <td key={ind} className="checkbox"><input type="checkbox" id={this.props.columnNames[0]}/></td> {
            this.props.columnNames.slice(1).map((columnName) => <td>{flight[columnName]}</td>)
        }</tr>);
        var titles = this.props.titles.map((title) => <th>{title}</th>);
        return (
            <table className="flight-table">
                <thead>
                <tr>{titles}</tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default FlightTable