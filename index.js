const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/movie");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use((cors()));
app.use(express.json());


const uri = process.env.MONGO_URL
mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useeUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database is connected");
})

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});