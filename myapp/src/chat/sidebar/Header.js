import { Avatar, Card, CardHeader, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const Header=() =>  {
  return (
        <Card 
            sx={{ 
                bgcolor: "primary.main", 
                borderRadius: 0, 
                color: "primary.contrastText"
            }}
        >
        
        <CardHeader
            avatar={<Avatar>R</Avatar>}
            action={
                <IconButton aria-label="settings" sx={{color: "primary.contrastText"}}>
                    <MoreVertIcon/>
                </IconButton>
            }
            title="ilvy"
            subheader={
            <Typography variant="caption"> frontend dev</Typography>}
                />  
        </Card>  
        
    );
};
export default Header;