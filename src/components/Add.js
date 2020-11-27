import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Add extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            gender: "",
            post: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.AddEmp = this.AddEmp.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });

        // setTimeout(() => {
        //     console.log(this.state)
        // }, 500);
    }


    AddEmp(e) {
        e.preventDefault();
        const employee = {
            name: this.state.name,
            gender: this.state.gender,
            post: this.state.post
        }
        axios.post("http://localhost:5555/employees", employee)
            .then(() => {
                window.alert("Employee added successfully!");
                this.setState({
                    name: "",
                    gender: "",
                    post: ""
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <Fragment>
                <h3 className="text-center">Add Employee</h3>
                <div className="row">
                    <div className="col-lg-6 container">
                        <form onSubmit={this.AddEmp}>
                            <div className="form-group">
                                <label className="font-weight-bold">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Gender</label><br />
                                <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleInputChange} />Male&nbsp;&nbsp;
                                <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleInputChange} />Female
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Post</label>
                                <select name="post" className="form-control" value={this.state.post} onChange={this.handleInputChange}>
                                    <option value="">Select City</option>
                                    <option value="developer">Developer</option>
                                    <option value="team lead">Team Lead</option>
                                    <option value="module lead">Module Lead</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </Fragment>
        )
    }

}

export default Add;