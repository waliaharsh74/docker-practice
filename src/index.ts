import express from "express"
import 'dotenv/config'
import cors from "cors"
import {User} from './model'
import connectToDB from "./connecMongo";
import prismaClient from './connectPrisma'

const app=express();
const PORT=process.env.PORT
const URL=process.env.DATABASE_URL

connectToDB()
app.use(cors())

app.use(express.json())


app.get('/',(req,res)=>{

    res.status(200).json({
        msg:"App is running"
    })
})
app.get('/mongo-register',async(req,res)=>{
    try {
        
   
    const user=new User({
        email: (Math.floor(Math.random() * 1000) + 1).toString(),
        password: (Math.floor(Math.random() * 1000) + 1).toString(),
    })
        await user.save();
    res.status(200).json({
        msg:"user registered",
        user
    })
 
    } catch (error) {
        console.log(error);
    }
})
app.get('/mongo-data',async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            count: users.length,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error fetching users",
            error,
        });
      }
})
app.get('/prisma-register',async(req,res)=>{
    try {
        
        const user = await prismaClient.user.create({
            data:{
                email:(Math.floor(Math.random() * 1000) + 1).toString(),
                password: (Math.floor(Math.random() * 1000) + 1).toString()
            }
        })
    // const user=new User({
    //     email: (Math.floor(Math.random() * 1000) + 1).toString(),
    //     password: (Math.floor(Math.random() * 1000) + 1).toString(),
    // })
    // await user.save();
    res.status(200).json({
        msg:"user registered",
        user
    })
    } catch (error) {
        console.log(error);
    }
})
app.get('/prisma-data',async(req,res)=>{
    try {
        const users = await  await prismaClient.user.findMany()
        res.status(200).json({
            count: users.length,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error fetching users",
            error,
        });
      }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}!`);
})