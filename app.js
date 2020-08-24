const express=require("express");
const path=require("path");
const app=express();
const port=80;


app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))
app.use("/static", express.static(path.join(__dirname, 'static')));
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
    
})


app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})
