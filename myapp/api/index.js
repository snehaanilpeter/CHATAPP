const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userController = require("./controller/user");
const connectMongoDB = require("./configure/db");
app.use("/user", userController)


connectMongoDB().then(() => {


app.listen(3000, () => {
    console.log("server working");
});
})
.catch((err) => console.log(err));