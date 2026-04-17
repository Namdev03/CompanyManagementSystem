require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./Config/auth.Config');
const authRouter = require('./Router/auth.Router');
//=====server instance======
const server = express();
//=====middlewares======
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser())
server.use(cors({
    origin: 'http://localhost:5173',
  credentials: true,
}));
//======routers======
server.use('/company',authRouter);
//=====server listen=====
const port = process.env.PORT
server.listen(port, async() => {
    try { 
        connectDB();
    console.log(`server is running on port ${process.env.PORT}`);
        
    } catch (error) {
        process.exit(1);
    }
});