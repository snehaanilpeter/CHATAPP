import { Container, Grid, TextField, Button, Paper, Box, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {  useEffect, useState } from 'react';



const Register = () => {
    const [formError, setFormError]= useState(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Move the console.log inside the onSubmit function
        axios
            .post("http://localhost:3000/user/register", data)
            .then((res) => {
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
        <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper
                        square
                        sx={{
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            height: "100%",
                            //border: (theme) => console.log(theme),
                        }}
                    >
                        <Box sx={{ p: 5, textAlign: "center" }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: "500", mt: 3 }}>
                                CHAT APP
                            </Typography>
                            <Typography>
                                A dummy app for chatting purpose. Donec orci leo, condimentum non ligula a, dictum
                                pharetra justo. Nam sed dolor semper libero semper ornare vitae in orci. Cras ac orci
                                hendrerit massa aliquam vestibulum ut eget nisi. Nullam scelerisque et est eu ornare.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper
                        square
                        sx={{ height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}
                    >
                        <Box sx={{ p: 5 }} component="form" onSubmit={handleSubmit(onSubmit)}>
                            {formError && 
                            <Alert sx={{mb:3}} severity="error">{formError.msg}</Alert> }
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "500", teaxtTransform: "uppercase" }}>
                                Register
                            </Typography>
                            <TextField
                                fullWidth
                                id="name"
                                label="Name"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                {...register("name", {
                                    required: "This field is required",
                                })}
                                error={!!errors.name}
                                helperText={errors.name && errors.name.message}
                            />
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
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                type="password"
                                {...register("password", {
                                    required: "This field is required",
                                })}
                                error={!!errors.password}
                                helperText={errors.password && errors.password.message}
                            />
                            <TextField
                                fullWidth
                                id="mobile"
                                label="Mobile Number"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                {...register("mobile", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid mobile number",
                                    },
                                })}
                                error={!!errors.mobile}
                                helperText={errors.mobile && errors.mobile.message}
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
                                Submit
                            </Button>
                        </Box>
                        <Box sx={{ textAlign: "right", pr: 1 }}>
                            <Typography variant="body2">
                                Already have an account?{" "}
                                <Button onClick={() => navigate("/")}>LOGIN</Button>
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
