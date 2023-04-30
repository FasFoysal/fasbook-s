const express = require('express');
const app = express();
const route = require('./router');
const cors = require('cors');

const PORT = 8000 || process.env.POST;

app.use(cors({
    origin:"http://localhost:3000",
    methods:["*"]
}))


app.use(route)
app.listen(PORT,()=>{
    console.log(`port open ${PORT}`);
})