import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "./redux/actions/fetchCharacters";
import CharacterBrowser from "./components/characters/CharacterBrowser";

const App = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { fetchCharacters } = props;

    return (
        <Router basename="project-elysia">
            <Switch>
                <Route exact path="/" component={CharacterBrowser} />
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
