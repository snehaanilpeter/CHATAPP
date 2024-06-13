const mongoose = require("mongoose");
const PATH = 'mongodb://127.0.0.1:27017/chatapp';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(PATH);
        console.log("connect mongodb");
    }   catch (error){
        console.log(error);
    }
};
module.exports = connectMongoDB;