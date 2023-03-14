import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import CharacterBrowser from "./components/characters/CharacterBrowser";

const App = () => {

    return (
        <Router basename="honkaidex">
            <Switch>
                <Route exact path="/" component={CharacterBrowser} />
            </Switch>
        </Router>
    );
}

export default App;
