const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
const port=5786


app.listen(port,()=>{
    console.log('server running on port',port)
})




