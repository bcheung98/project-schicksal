import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { fetchCharacters } from "./redux/actions/fetchCharacters";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import Nav from "./components/Nav";

const theme = createTheme({
    appbar: {
        backgroundColor: "rgb(20, 19, 27)",
    },
    font: {
        fontFamily: "Roboto, sans-serif",
        color: "white",
    }
});

const App = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { fetchCharacters } = props;

    return (
        <ThemeProvider theme={theme}>
            <Router basename="project-elysia">
                <Nav />
                <Switch>
                    <Route exact path="/" component={CharacterBrowser} />
                </Switch>
            </Router>
        </ThemeProvider>
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
