const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const { getData } = require('./trainData');

app.use(cors());

app.get('/trainData', getData);

/*(req,res)=>{
    res.json({message:'Hello from express!'});
});
*/
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
});