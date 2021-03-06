import React, { Component } from "react";
import Axios from 'axios';
class write extends Component {
    state = {
        title: '',
        body: ''
    };
    submitReview = () => {
        const { title, body } = this.state;
        if(title === "" || body=== "") {
            alert("빈칸이 있습니다");
            return false;
        }
        Axios.post('http://localhost:3001/api/dbtest', {
            title: title,
            body:body
        }).then(() => {
            alert("succes");
        });
        this.setState({
            title: '',
            body: ''
        });
    }
    handleChange = (e) => {
        const { name, value } = e.target; 
        this.setState({
            [name]: value, 
        }); 
    };
    render() {
        return (
        <div>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title}></input>
            <input type="text" name="body" onChange={this.handleChange} value={this.state.body}></input>
            <button onClick={this.submitReview}>submit</button>
        </div>
        );
    }
}
export default write;