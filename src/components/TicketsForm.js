import React, { Component } from 'react';
import '../App.css';

class TicketsForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
    }

handleInput(e){
    console.log(e.target.value, e.target.name);
}

    render () {
        return (
            <div className="container">
            <div className="card mt-4">
                <form className="card-body">
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
                                onChange={ this.handleInput }
                                >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High" selected>High</option>
                                
                            </select>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default TicketsForm;