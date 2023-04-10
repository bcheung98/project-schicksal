import * as React from "react";
import { connect } from "react-redux";
import BattlesuitCard from "./BattlesuitCard";
import { Box } from "@mui/material";

const CharacterBrowser = (props) => {

    let { characters } = props;

    return (
        <React.Fragment>
            {characters.characters.length > 0 &&
                <React.Fragment>
                    {characters.characters.map(char => (
                        <Box key={char.character} sx={{ display: "flex" }}>
                            {char.battlesuits.map(battlesuit => <BattlesuitCard key={battlesuit.name} character={char.character} battlesuit={battlesuit} />)}
                        </Box>
                    ))}
                </React.Fragment>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        characterFilters: state.characterFilters
    }
}

export default connect(mapStateToProps)(CharacterBrowser);