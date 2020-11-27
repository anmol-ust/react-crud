import React, { Component } from 'react';
import axios from 'axios';
// import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Post</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees && this.state.employees.map((emp) => {
                                return (
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.post}</td>
                                        <td>
                                            <a href={`/edit-emp/${emp.id}`}>Edit</a> |&nbsp;
                                            <a href="javascript:void(0)" onClick={() => this.deleteEmployee(emp.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees() {
        // api integration from get employees
        axios.get("http://localhost:5555/employees")
            .then((res) => {
                console.log(res);
                this.setState({
                    employees: res.data
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    deleteEmployee(id) {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log("Delete employee where id is", id);
            //const url = "http://localhost:5555/employees/"+id; // string concatnation
            const url = `http://localhost:5555/employees/${id}`; // template literal syntax
            axios.delete(url)
                .then(() => {
                    console.log("deleted successfully");
                    this.fetchEmployees();
                })
        }

    }

}

export default Home