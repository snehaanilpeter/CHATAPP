import { Box } from "@mui/material";
import Header from "../mainchat/Header";
import Chatarea from "./Chatarea";
import Footer from "./Footer";

const Chatbox=()=>{
    return(
        <Box sx={{width: "50vw", display: "flex", height: "100%", flexDirection: "column"}}>
            <Header/>
            <Chatarea/>
            <Footer/>
        </Box>
    );
};

export default Chatbox;