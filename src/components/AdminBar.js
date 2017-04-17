import React, { Component }  from 'react';
import './AdminBar.css';

class AdminBar extends Component {
    render() {
        return (
            <div className="bar">
                <div className="change">
                    <button className="add">Добавить рейс</button>
                    <button className="edit">Редактировать</button>
                </div>
                {<Count />}
            </div>
        )
    }
}

class Count extends Component {
    render () {
        return (
            <div className="count">
                {/*<p>все/прилетевшие/улетевшие : {this.state.all}/{this.state.arrival}/{this.state.departure}</p>*/}
                <p>все/прилетевшие/улетевшие: 56/29/27</p>
            </div>

        )
    }
}

export default AdminBar