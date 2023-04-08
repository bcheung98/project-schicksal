import * as React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const BattlesuitPage = (props) => {

    let { character_name, battlesuit_name } = useParams();
    let { characters } = props.characters;
    let character = characters.find(char => char.character.split(" ").join("_") === character_name);
    let battlesuit;
    if (character !== undefined) {
        battlesuit = character.battlesuits.find(battlesuit => battlesuit.name.split(" ").join("_") === battlesuit_name);
    }

    if (battlesuit !== undefined) {
        let { name, type, rank } = battlesuit;
        return (
            <Box>
                <Typography>{name}</Typography>
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(BattlesuitPage);