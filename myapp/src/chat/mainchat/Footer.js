import { Button, Box, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Footer=() =>{
    return(
        <Box sx={{ p: 1,display:"flex" }}>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <Button sx={{ minWidth: "auto", mr: 1 }}>
                    <MoreVertIcon/>
                </Button>
                <Button sx={{ minWidth: "auto", mr: 1 }}>
                    <EmojiEmotionsIcon/>
                </Button>
            </Box>
            <Box sx={{display:"flex", flex: 1}}>
                <TextField placeholder="Type your message here" size="small" sx={{"& .MuiInputBase-root":
                    {
                        borderRadius: 0,
                        borderRight: 0,
                    },
                }}/>
                <Button variant="outlined" sx={{borderRadius:0, minWidth: "auto", height:"100%"}}> send
                </Button>
            </Box>
        </Box>
    );
    
};

export default Footer;