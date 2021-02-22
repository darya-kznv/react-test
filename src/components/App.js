import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Home from './Home';
import CharacterInfo from "./character-info/CharacterInfo";

import '../css/general.css';
import './characters/characters.css';

function App() {
    return (
        <Router basename="/react-test">
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={ Home }
                    />
                    <Route
                        path="/character-info/:id"
                        component={ CharacterInfo }
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

