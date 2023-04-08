import * as React from "react";
import parse from "html-react-parser";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Avatar, AppBar, CardHeader } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../helpers/CustomTabs";

const BattlesuitSkills = (props) => {

    const theme = useTheme();
    let { skills } = props;

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                mx: "15px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: "1px solid rgb(83, 71, 60)",
                    borderRadius: "5px 5px 0px 0px"
                }}
            >
                <Typography variant="h6" noWrap
                    sx={{
                        m: 2,
                        display: { xs: "none", md: "flex" },
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    Skills
                </Typography>
            </AppBar>
            <StyledTabs value={tabValue} onChange={handleTabChange}>
                <StyledTab label="Basic ATK" />
                <StyledTab label="Special ATK" />
                <StyledTab label="Ultimate" />
                <StyledTab label="Evasion" />
                <StyledTab label="Passive" />
                <StyledTab label="Leader" />
            </StyledTabs>
            {
                Object.keys(skills).map((key, index) => {
                    return (
                        <TabPanel key={key} value={tabValue} index={index}>
                            <Box>
                                <CardHeader
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    avatar={
                                        <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={`${process.env.REACT_APP_URL}/characters/battlesuits/skills/${props.battlesuit}/${key}.png`}
                                            sx={{
                                                width: "64px",
                                                height: "64px",
                                                border: "2px solid rgb(0, 195, 255)",
                                                backgroundColor: "rgb(46, 133, 181)"
                                            }}
                                        />
                                    }
                                    title={
                                        <Typography variant="h4">
                                            <b><i>{parse(skills[key].name)}</i></b>
                                        </Typography>
                                    }
                                />
                                <Typography variant="body1" sx={{ ml: "20px" }}>
                                    {parse(skills[key].description)}
                                </Typography>
                            </Box>
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "25px", marginBottom: "25px" }} />
                            {
                                skills[key].subskills.map((subskill, index) => {
                                    return (
                                        <Box key={index}>
                                            <CardHeader
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                                avatar={
                                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={`${process.env.REACT_APP_URL}/characters/battlesuits/skills/${props.battlesuit}/${key}${index + 1}.png`}
                                                        sx={{
                                                            width: "64px",
                                                            height: "64px",
                                                            border: "2px solid rgb(0, 195, 255)",
                                                            backgroundColor: "rgb(46, 133, 181)"
                                                        }}
                                                    />
                                                }
                                                title={
                                                    <Typography variant="h4">
                                                        <b><i>{parse(subskill.name)}</i></b>
                                                    </Typography>
                                                }
                                            />
                                            <Typography variant="body1" sx={{ ml: "20px" }}>
                                                {parse(subskill.description)}
                                            </Typography>
                                            <br />
                                        </Box>
                                    )
                                })
                            }
                        </TabPanel>
                    )
                })
            }
        </Box>
    )
}

export default BattlesuitSkills;