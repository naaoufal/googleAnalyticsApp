import { Box, Grid } from "@mui/material";
import './index.css';
import NavBar from "../../components/NavBar";

const DATA = [
    {id: 1, name: "servie-1"},
    {id: 2, name: "servie-1"},
    {id: 3, name: "servie-1"},
    {id: 4, name: "servie-1"},
    {id: 5, name: "servie-1"},
    {id: 6, name: "servie-1"},
]

const HomeScreen = () => {
    return(
        <>
            <NavBar />
            <Box className="serviceDiv" sx={{ display: 'flex' }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }} style={{width: "60%", justifyContent: "center"}}>
                    {DATA && DATA.map((item) => (
                        <Grid item xs={4} className="gridGlobal">
                            <div className="itemDiv">
                                <p>{item?.name}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <SuggestionScreen /> */}
        </>
    );
};

export default HomeScreen;