import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import TextsmsIcon from '@material-ui/icons/Textsms';
import './Home.css';

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "lightgray" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h2" align="center" style={{ color: "black", fontWeight: "bold" }}>Saudações Terra</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h2" align="center" style={{ color: "black", fontWeight: "bold" }}>Vamos Compartilhar conhecimento!</Typography>
                        
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "FFA2A4A5", color: "black" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pensador.com/img/imagens/fr/as/frases_de_treino_1.jpg?auto_optimize=low&width=655" alt="" width="600px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "black" }}>
                </Grid>
            </Grid>

        </>
    );
}
export default Home;