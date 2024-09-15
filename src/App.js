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
import { AppBar, Typography, Box, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

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
        body: {
            backgroundColor: "rgb(34, 28, 36)"
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
            <Router basename="project-schicksal">
                <Nav />
                <Switch>
                    <Route exact path="/" component={CharacterBrowser} />
                    <Route exact path="/characters/:character_name/:battlesuit_name" children={<BattlesuitPage />} />
                </Switch>
                <br /><br />
            </Router>
            <AppBar position="static" sx={{
                mb: -5,
                pt: 2,
                textAlign: "center",
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderTop: "1px solid rgb(83, 71, 60)"
            }}>
                <Typography sx={{ mb: "5px", fontWeight: "500" }} variant="body2">
                    Project Schicksal is not affiliated with HoYoverse.<br /><i>Honkai Impact 3rd</i>, images and data are registered trademarks of HoYoverse.
                </Typography>
                <Box>
                    <IconButton disableRipple href={"https://github.com/bcheung98/project-schicksal"} target="_blank" color="inherit">
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </AppBar>
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
