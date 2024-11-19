require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://saharanit16:%24%23%40!@cluster0.uqcine6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}