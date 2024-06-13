const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const router = express.router()
const user = require("./model/user");
router.post("/login", async(req,res) =>{
    try{
        const {email, password} = req.body
        const user = await user.findOne({ email })
        if(!user) return res.status(400).send({ msg: "user not found"});
        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword) return res.status(400).send({ msg: "password not match"});
        console.log(user);        
    const token = jwt.sign(
        {
            _id: user._id,
            name:user.name,
            email:user.email,

        }, "secret", {expireIn:"1d"}
    );
    return res.send({
        data: {token},
        msg: "fetch user",
    });
}   catch (error){
    res.status(400).send({msg:"internal server error"});

        }
   
})
router.post("/register", async(req, res) =>{
    try{
        const {name, email, password } = req.body;
        const userExist = await user.findOne({ email });
        if (userExist) return res.status(400).send({ msg: "email already taken!"});
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);
        const user = new user ({name, email, hash });
        await user.save();
        const token = jwt.sign(
            {
                _id: user._id,
                name:user.name,
                email:user.email,
    
            }, "secret", {expireIn:"1d"}
        );


        return res.send({
            data: { token },
            msg: "user created succesfully",
        });
       
        //return res.status(200).send({ token });
    }   catch (error) {
        res.status(400).send({msg:"internal server error"});
        
    }
});

module.exports = router
