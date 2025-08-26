import express from 'express'
import cors from 'cors'
import  'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//MIDDLEWARE 
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://prescripto-booking-system.vercel.app",
      "https://prescripto-booking-system-admin.vercel.app",
    ],
    credentials: true, 
  })
);

app.get('/', (req,res)=>{
    res.send('API IS WORKING ')
})

// API endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)




app.listen(port, ()=> console.log("Server started ",port

))
