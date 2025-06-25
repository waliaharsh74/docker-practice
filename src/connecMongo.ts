import mongoose from "mongoose";
const url=process.env.MONGOSE_URL!

const connectToDB=async()=>{
    try {
        console.log(url);
        await mongoose.connect(url)
        console.log("Mongo connected succesfully!");
    } catch (error) {
        console.log(error);
    }
}
export default connectToDB