import { Paper } from "@mui/material";
import Sidebar from "./sidebar";
import Chatbox from "./mainchat";
import { useEffect } from "react";
import Profile from "./profile";
import socket from "./socket";

const Chat =() =>{
        useEffect(() =>
        { 
            console.log(socket);
        }, [socket]);
    return
    (
        <Paper 
            square elevation={0} 
            sx={{height: "100vh", display: "flex", flexDirection: "column"}}>
            <Sidebar/>
            <Chatbox/>
            <Profile/>
        </Paper>
    );
};

export default Chat;