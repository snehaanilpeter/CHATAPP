import { Box, Tabs, Tab,  List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from "@mui/material";
import Header from "../sidebar/Header";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';



const Sidebar = () =>{
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <Box sx={{ width: "25vw", display: "flex", flexDirection: "column", height: "25vh" }}>
             <Header />
            <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                variant="fullWidth" >
            
                <Tab 
                    icon={<ChatBubbleOutlineIcon fontSize="small" />}
                    iconPosition="start" 
                    label=" Chat list"
                    sx={{ minHeight: "inherit"}}
                />
                       <Tab 
                    icon={<PersonIcon fontSize="medium" />}
                    iconPosition="start" 
                    label=" User list"
                    sx={{ minHeight: "inherit"}}
                />
                    
                    
            </Tabs>
            {value === 0 &&  

                <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0"}}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />



                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />


                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />


                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />


                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />


                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="lil"
                                secondary={
                        
                                <Typography
                                    variant="caption">
                                    Ali Connors
                                </Typography>}
                            />  
                        </ListItem>
                        <Divider  component="li" />
            
                </List>
            
            
            }
            {value === 1 && <div>1</div>}


        </Box>
    );
};
export default Sidebar;