import React, { Component, PropTypes }  from 'react';
import './Menu.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <form className="search-bar">
                    <input type="text" placeholder="Search..." className="rounded"/>
                </form>
            </div>
        );
    }
}

class Menu extends Component {
    static propTypes = {
        onArrival: PropTypes.func.isRequired,
        onDeparture: PropTypes.func.isRequired,
        onAdmin: PropTypes.func.isRequired,
        isAdmin: PropTypes.bool.isRequired,
        time: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="menu">
                <a className="logo">
                    <img src="image/logo2.png" alt="timetable" className="logo-img"/>
                    <p className="logo">Расписание</p>
                </a>
                <ul className="not-mark nav-menu">
                    <li className={'not-mark' + (this.props.time==='arrival' ? ' crossed' : '')}>
                        <a onClick={this.props.onArrival} className="menu-item">Прибытие</a>
                    </li>);
                    <li className={'not-mark' + (this.props.time==='departure' ? ' crossed' : '')}>
                        <a onClick={this.props.onDeparture} className="menu-item">Отправление</a>
                    </li>)
                    <li className={'not-mark' + (this.props.isAdmin ? ' crossed' : '')}>
                        <a onClick={this.props.onAdmin} className="menu-item">Администратор</a>
                    </li>)
                </ul>
                <SearchBar />
            </div>
        )
    }
}

const ITEMS = {'Прибытие': 'onArrival', 'Отправление': 'onDeparture', 'Администратор': 'onAdmin'};

export default Menu