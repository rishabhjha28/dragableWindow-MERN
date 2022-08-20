const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
dotenv.config({ path: './config.env' });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const youRouter = require('./router/you');
app.use('/you', youRouter);


const countRouter = require('./router/count');
app.use('/count', countRouter); 


port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log("server established at port",port);
})