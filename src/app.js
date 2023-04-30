const express = require('express');
const app = express();
const route = require('./router');
const cors = require('cors');

const PORT = 8000 || process.env.POST;

app.use(cors({
    // https://visionary-mooncake-916248.netlify.app
    // http://localhost:3000
    origin:"https://visionary-mooncake-916248.netlify.app",
    methods:["*"]
}))


app.use(route)
app.listen(PORT,()=>{
    console.log(`port open ${PORT}`);
})