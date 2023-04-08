import * as React from "react";
import parse from "html-react-parser";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Tabs, Tab, AppBar } from "@mui/material";
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
                                <Typography variant="h5">
                                    <b><i>{parse(skills[key].name)}</i></b>
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    {parse(skills[key].description)}
                                </Typography>
                            </Box>
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "25px", marginBottom: "25px" }} />
                            {
                                skills[key].subskills.map((subskill, index) => {
                                    return (
                                        <Box key={index}>
                                            <Typography variant="h6">
                                                <i>{parse(subskill.name)}</i>
                                            </Typography>
                                            <Typography variant="body1">
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