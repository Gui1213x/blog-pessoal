import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "lightgray", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Entre em Contato </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">

                            <a href="https://github.com/Gui1213x" target="_blank">
                                <GitHub style={{ fontSize: 60, color: "black" }} />
                            </a>

                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
                            </a>

                            <a href="https://www.linkedin.com/in/guilherme-souza-fernandes-527007245/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "black" }} />
                            </a>

                            <a href="blob:https://web.whatsapp.com/77a8f1c7-ce02-4584-b736-90fafd15323d" target="_blank">
                                <WhatsApp style={{ fontSize: 60, color: "black" }} />
                            </a>

                        </Box>
                    </Box>
                    <Box>

                        <Box>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;