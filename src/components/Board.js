import React, { Component } from 'react';
import { tickets } from '../tickets.json';


class Board extends Component {
    constructor(){ // método constructor se ejecuta antes que render
        super(); // con super se heredan las funcionalidades de React
        this.state = {
            tickets
        }
    }
render(){
   
    const tickets = this.state.tickets.map((ticket, i) => {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3> { ticket.title }</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            { ticket.priority }
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{ ticket.description }</p>
                        <p>{ ticket.responsible }</p>
                    </div>
            </div>
            </div>
        )
    })
    return (

        <div className="container">
        
            <div className="row mt-4">
                {tickets}
            </div>
        </div>
    )
}

}

export default Board;