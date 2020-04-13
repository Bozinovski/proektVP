import React, {Component} from "react";
import axios from '../custom-axios/axios';

class Registracija extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ime: '',
            prezime: '',
            email: '',
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    back(){
        this.props.history.push('/najava');
    }

    onSubmit(e) {
        e.preventDefault();
        var ime = this.state.ime;
        var prezime = this.state.prezime;
        var email = this.state.email;
        var username = this.state.username;
        var password = this.state.password;
        if (ime !== '' && prezime !== '' && email !== '' && username !== '' && password !== '')
            axios.post('/registracija', {
                ime: this.state.ime,
                prezime: this.state.prezime,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
                .then(function (response) {
                    console.log(response);
                    this.props.history.push("/najava");
                })
                .catch(function (error) {
                    console.log(error);
                });
        else {
            alert('Site vrednosti mora da se popolneti');
        }


    }

    render() {
        return (
            <div>
                <h1>Registracija</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Ime: </label>
                        <input
                            type="text"
                            name="ime"
                            onChange={this.onChange}
                            value={this.state.ime}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Prezime: </label>
                        <input
                            type="text"
                            name="prezime"
                            onChange={this.onChange}
                            value={this.state.prezime}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>
                    <br/>
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
                            type="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                    <button onClick={() => this.back()}>Back</button>
                    <br/>
                </form>
            </div>

        );
    }

}

export default Registracija;