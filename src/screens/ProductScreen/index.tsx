import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ReactGA from 'react-ga';
import NavBar from '../../components/NavBar';
import { Grid } from '@mui/material';

const ProductScreen = () => {

    return (
        <>
            <NavBar />
            <Box className="serviceDiv" sx={{ display: 'flex' }}>
                <text>this is product page</text>
            </Box>
        </>
    );
};

export default ProductScreen;