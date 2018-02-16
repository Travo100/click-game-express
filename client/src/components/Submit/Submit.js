import React, {Component} from "react";
import API from "./../../utils/API";

class Submit extends Component {
    state = {
        name: "",
        image: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveChihuahua(this.state)
            .then(res => {
                this.setState({
                    name: "",
                    image: ""
                });
                // go back to the home route
                this.props.history.push("/");
            })
            .catch(err => alert("Something went wrong!"));
    };
    

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Chihuahua Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" name="name" 
                            onChange={this.handleInputChange} 
                            value={this.state.name} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="image" name="image" 
                            onChange={this.handleInputChange} 
                            value={this.state.image} 
                        />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Submit;