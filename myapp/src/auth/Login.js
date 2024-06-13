import { Container, Grid, TextField, Button, Paper, Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from 'react';



const Login = () => {
    const [formError, setFormError]= useState(null);
    const navigate= useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data); // Move the console.log inside the onSubmit function
        axios
            .post("http://localhost:3000/user/login", data)
            .then((res) => {
                localStorage.setItem("token",res.data.data.token);
                navigate("/app");
            })
            .catch((err) => {
                setFormError(err.response.data);
            });
    };
    const token = localStorage.getItem("token");
    useEffect(()=>{
        if(token) navigate("/app");
    },[]);
    return (
        
        <Container maxwidth="md" sx={{display:"flex", alignItems:"center", height: "100vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper square sx={{
                        bgcolor: "primary.main",
                        color: "primary.constrastText",
                        height: "100%"
                       //border: (theme) => console.log(theme),
                    }}>
                            <Box sx={{ p: 5, textAlign: "center"}}>
                                <Typography variant="h4" gutterBottom sx={{fontWeight: "500", mt: 3}}>
                                    CHAT APP

                                </Typography>

                        

                
                            
                                <p> a dummy app for chatting purpose. Donec orci leo, condimentum non ligula a, dictum pharetra justo. 
                                    Nam sed dolor semper libero semper ornare vitae in orci.
                                    Cras ac orci hendrerit massa aliquam vestibulum ut eget nisi.
                                    Nullam scelerisque et est eu ornare.
                                </p>

                            </Box>     
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper square sx={{height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}> 
                        <Box sx={{p: 5}} component="form" onSubmit={handleSubmit(onSubmit)}>
                            <Typography
                            variant="h5"
                            sx={{ mb: 2, fontWeight: "500", textTransform: "uppercase"}}
                            >
                             Login 
                            </Typography> 
                            <TextField 
                                fullWidth
                                id="email"
                                label="Email" 
                                variant="outlined"
                                sx={{ mb: 3 }}
                                {...register("email", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email && errors.email.message}
                            />

                            <TextField fullWidth
                                id="password" 
                                label="Password" 
                                variant="outlined" 
                                sx={{ mb: 3}}
                                {...register("password", {
                                    required: "This field is required",
                                })}
                                error={!!errors.password}
                                helperText={errors.password && errors.password.message}
                            /> 

                            <Button type="suubmit" fullWidth variant="contained" sx={{ py: 2}}>
                                Submit
                            </Button>
                            <Button sx={{ mt:1}} >
                                Forgot password
                            </Button>
                        </Box> 
                        <Box sx={{textAlign: "right", pr: 1}}>
                            <Typography variant="body2">
                                Don't have an account <Button onClick={() => navigate("/register")}>Create account</Button>
                            </Typography>
                        </Box>
                    </Paper>  
                </Grid>
            </Grid>
        </Container>
    );
};
export default Login;