import React, {Component} from 'react';
import Nav from './components/Nav';
import Home from "./components/Home";
import Filmovi from "./components/Filmovi";
import Najava from './components/Najava';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import configureStore from './redux/store/store';
import Registracija from "./components/Registracija";
import AddKinoSala from "./components/AddKinoSala";
import Proekcii from "./components/Proekcii";
import Rezervacii from "./components/Rezervacii";

const store = configureStore();

class App extends Component {


    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">

                        <Nav/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/filmovi" exact component={Filmovi}/>
                            <Route path="/najava" exact component={Najava}/>
                            <Route path="/registracija" exact component={Registracija}/>
                            <Route path="/addSala" exact component={AddKinoSala}/>
                            <Route path="/proekcii" exact component={Proekcii}/>
                            <Route path="/rezervacii" exact component={Rezervacii}/>
                        </Switch>

                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
