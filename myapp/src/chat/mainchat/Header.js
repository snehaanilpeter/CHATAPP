import {Avatar, 
    Button, 
    Card, 
    CardHeader, 
    IconButton, 
    Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';

const Header= () => {
    return(
        <Card  
            sx={{ 
                borderRadius: 0, 
            }}
            elevation={0}
        >
            <CardHeader
                avatar={
                        <>
                            <Button sx={{minWidth: "auto", mr: 1 }}>
                                <ArrowBackIcon/>
                            </Button>
                            <Avatar>R</Avatar>
                        </>
                }
                action={
                    <>
                        <IconButton>
                            <VideoCallIcon/>
                            
                        </IconButton>
                        <IconButton>
                            <CallIcon/>
                        </IconButton>
                    </>
                }
                title="ilvy"
                subheader={
                    <Typography variant="caption"> frontend dev</Typography>
                }
            />  
        </Card>
    );
};

export default Header;