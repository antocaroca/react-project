import React, { Component } from 'react';
import '../App.css';
import '../App';

class TicketsForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault(); // evento que evita refrescar la página
        this.props.onAddTicket(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
          });
        }

handleInput(e){
    const { value, name } = e.target;
    this.setState({ // aca se pierde el scope del state. Hay que enlazar el handleInput con bind en la clase donde esta el estado
        [name]: value
    })
}

    render () {
        return (
            <div className="container">
            <div className="card mt-4">
                <form className="card-body" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                            <select   
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={ this.handleInput }
                                >
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                                
                            </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            name="send"
                            onChange={ this.handleInput }
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default TicketsForm;