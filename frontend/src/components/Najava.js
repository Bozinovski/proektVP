import React,{ Component } from "react";
import {Link} from "react-router-dom";
import axios from "../custom-axios/axios";

class Najava extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        if (username !== '' && password !== '')
            axios.post('/najava', {
                username: this.state.username,
                password: this.state.password
            })
                .then(function (response) {
                    console.log(response);
                    this.props.history.push("/filmovi");
                })
                .catch(function (error) {
                    console.log(error);
                });
        else {
            alert('Pogresen username ili password');
        }
    }

    back() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Najava</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Password: </label>
                        <input
                            type="text"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                    <button onClick={() => this.back()}>Back</button>
                    <br/>
                    <div>
                        <label>Ne ste registriran?</label>
                        <br/>
                        <Link to='/registracija'><label>Registriraj se</label></Link>
                    </div>
                </form>
            </div>

        );
    }

}

export default Najava;