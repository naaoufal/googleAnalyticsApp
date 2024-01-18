import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
import { Grid, Typography } from '@mui/material';
import FoodImage from './food.jpg';

const DATA = [
    {id: 1, name: "food-1"},
    {id: 2, name: "food-1"},
    {id: 3, name: "food-1"},
    {id: 4, name: "food-1"},
    {id: 5, name: "food-1"},
    {id: 6, name: "food-1"},
    {id: 7, name: "food-1"},
    {id: 8, name: "food-1"},
];

const SuggestionScreen = () => {
    return (
        <div className="suggestionDiv">
            <div className="subSugg">
                <div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                </div>
                <div className="parentDiv">
                    {/* <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }} className="parentCard"> */}
                        {DATA && DATA.map((item) => (
                            // <Grid item xs={3} className="cardDiv">
                            //     <img src={FoodImage} className="suggImage" />
                            //     <div className="textDiv">
                            //         <p>{item?.name}</p>
                            //         <p>Gratuit 50%</p>
                            //     </div>
                            // </Grid>
                            <div className="cardDiv">
                                <p>{item?.name}</p>
                            </div>
                        ))}
                    {/* </Grid> */}
                </div>
            </div>
        </div>
    );
};

export default SuggestionScreen;