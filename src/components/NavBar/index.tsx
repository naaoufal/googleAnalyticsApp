import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReactGA from 'react-ga';

const NavBar = () => {

    const handleClick = () => {
        ReactGA.event({
            'category': 'Test',
            'action': 'submit',
            'label': 'label'
        });
    };

    return (
        <Box sx={{ display: 'flex' }} className="navDiv">
            <AppBar position="static" style={{ backgroundColor: "#FFC244FF"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    <Button onClick={handleClick} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;