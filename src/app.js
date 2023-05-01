const express = require('express');
const app = express();
const route = require('./router');
const cors = require('cors');
require('./db/signupUser');

const PORT = 8000 || process.env.POST;

app.use(cors({
    // https://fasbookc.netlify.app/
    // http://localhost:3000
    origin:"https://fasbookc.netlify.app",
    methods:["*"]
}))

app.use(express.json());

app.use(route)
app.listen(PORT,()=>{
    console.log(`port open ${PORT}`);
})