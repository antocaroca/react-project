import React, { Component } from 'react';
import { tickets } from '../tickets.json';


class Board extends Component {
    constructor(){ // método constructor se ejecuta antes que render
        super(); // con super se heredan las funcionalidades de React
        this.state = {
            tickets
        };
        this.handleAddTicket = this.handleAddTicket.bind(this);
    }

handleAddTicket(ticket) {  //evento que guarda tickets. Es solo una funcion que no estoy usando. Hay que pasarsela al componente que se encarga de agregar tickets <TicketForm/>
    this.setState({ //actualiza el estado de la aplicacion
        tickets: [...this.state.tickets, ticket] // agrega tickets al arrego de tickets
    })
}

deleteTicket(index){
    if (window.confirm('¿Estas segur@ que quieres eliminar el ticket?'))  {
        this.setState({ // evento que me muestra lo que voy a eliminar
            tickets: this.state.tickets.filter((e, i) => {
                return i !== index;
            })
        })
    }
}

render(){
   
    const tickets = this.state.tickets.map((ticket, i) => {
        return (
            <div className="col-md-4" key={i}>
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
                    <div className="card-footer">
                        <button
                        className="btn btn-danger"
                        onClick ={this.deleteTicket.bind(this, i)}
                        >
                        Eliminar
                        </button>
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