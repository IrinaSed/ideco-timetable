import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './Timetable.css';
import Menu from '../containers/Menu';
import AdminBar from './AdminBar';
import FlightTable from '../containers/FlightTable';


class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',

        };
    }
    render() {
        return (
        <div className="timetable">
            <header><Menu /></header>
            <AdminBar />
            <FlightTable flights={FLIGHTS} titles={TITLES} columnNames={COLUMNNAMES}/>
        </div>
        )
    }
}

const TITLES = ['', '№', 'Город вылета', 'Город прилёта', 'Тип самолёта', 'Время', 'Фактическое время', 'Статус'];
const COLUMNNAMES =  ['', 'number', 'cityArrival', 'cityDeparture', 'airplaneType', 'time', 'actualTime', 'status'];
const FLIGHTS = [
    {
        id: 1,
        number: '1098',
        cityArrival: 'Екатеринбург',
        cityDeparture: 'Москва',
        airplaneType: 'Ил-96',
        timeDeparture: '9:00',
        actualTimeDeparture: '9:20',
        timeArrival: '11:20',
        actualTimeArrival: '11:10',
        status: 'приземлился'
    },
    {
        id: 2,
        number: '1099',
        cityArrival: 'Москва',
        cityDeparture: 'Екатеринбург',
        airplaneType: 'Douglas DC-3',
        timeDeparture: '11:30',
        actualTimeDeparture: '11:45',
        timeArrival: '14:00',
        actualTimeArrival: '14:00',
        status: 'вылетел'
    },
    {
        id: 3,
        number: '1100',
        cityArrival: 'Красноярск',
        cityDeparture: 'Екатеринбург',
        airplaneType: 'Ту-144 ',
        timeDeparture: '15:20',
        actualTimeDeparture: '15:20',
        timeArrival: '20:20',
        actualTimeArrival: '',
        status: 'ввылетел'
    },
    {
        id: 4,
        number: '1099',
        cityArrival: 'Екатеринбург',
        cityDeparture: 'Москва',
        airplaneType: 'Douglas DC-3',
        timeDeparture: '17:00',
        actualTimeDeparture: '',
        timeArrival: '19:30',
        actualTimeArrival: '',
        status: ''},

];

export default Timetable