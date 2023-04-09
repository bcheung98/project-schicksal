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
import BattlesuitPage from "./components/characters/BattlesuitPage";

const theme = createTheme({
    appbar: {
        backgroundColor: "rgb(20, 19, 27)",
    },
    paper: {
        backgroundColor: "rgb(25, 21, 26)"
    },
    font: {
        fontFamily: "Roboto, sans-serif",
        color: "white",
    },
    border: {
        color: "rgb(83, 71, 60)",
    },
    table: {
        head: {
            backgroundColor: "rgb(20, 19, 27)",
        },
        border: "rgb(83, 71, 60)",
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
                    <Route exact path="/characters/:character_name/:battlesuit_name" children={<BattlesuitPage />} />
                </Switch>
                <br /><br />
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
