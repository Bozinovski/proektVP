import React,{ Component } from "react";
import axios from '../custom-axios/axios';

class AddKinoSala extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imeSala: '',
           brSedista: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        var imeSala= this.state.imeSala;
        var  brSedista= this.state.brSedista;

        if(imeSala !=='' && brSedista !=='' )
            axios.post('/sala', {
                imeSala: this.state.imeSala,
                brSedista: this.state.brSedista,

            })
                .then(function (response) {
                    console.log(response);
                    alert('Uspesno vnesovte kino sala');
                    this.props.history.push("/kinoSala");
                })
                .catch(function (error) {
                    console.log(error);
                });
        else{
            alert('Site vrednosti mora da se popolneti');
        }


    }

    back(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Dodadi kino sala</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Ime: </label>
                        <input
                            type="text"
                            name="imeSala"
                            onChange={this.onChange}
                            value={this.state.imeSala}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Broj na Sedista: </label>
                        <input
                            type="text"
                            name="brSedista"
                            onChange={this.onChange}
                            value={this.state.brSedista}
                        />
                    </div>
                    <br />

                    <button type="submit">Submit</button><button  onClick={()=>this.back()}>Back</button>
                    <br />

                </form>
            </div>

        );
    }

}
export  default AddKinoSala;