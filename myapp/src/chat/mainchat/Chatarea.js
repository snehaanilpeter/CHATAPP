import { 
    Box, 
    List, 
    Paper, 
    Avatar, 
    Chip, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Stack, 
    Typography 
} from "@mui/material";

const Chatarea=() =>{
    return(
        <Box sx={{ overFlowY: "auto", flex:"1 0 0", background:"#f9f9f9" }}>
            <Stack direction="row" justifyContent="center" sx={{py: 2, position: "sticky", top:0, zIndex: 2,background:"#f9f9f9"}} >
                <Chip label="Today" />
            </Stack>
            <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0", mb: 3}}>
                        <ListItem alignItems="flex-start">
                        </ListItem>
                        <ListItem sx={{flexDirection:"row-reverse"}}>
                            <Box sx={{display:"flex", width:"80%", flexDirection:"row-reverse"}}>
                                <ListItemAvatar sx={{display:"flex", flexDirection: "row-reverse"}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <Paper sx={{width: "100%", p: 1.5}}>
                                    <ListItemText
                                        sx={{m: 0}}
                                        primary="lil"
                                        secondary={<Typography variant="caption">a dummy app for chatting purpose. Donec orci leo, condimentum non ligula a, dictum pharetra justo. 
                                        Nam sed dolor semper libero semper ornare vitae in orci.
                                        Cras ac orci hendrerit massa aliquam vestibulum ut eget nisi.
                                        Nullam scelerisque et est eu ornare.</Typography>}
                                    /> 
                                </Paper>
                            </Box> 
                        </ListItem>
            </List>           
        </Box>
    );
};
export default Chatarea;