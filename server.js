const express = require("express");
const app = express();
const port = 3003;
const db = require('./config/db')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Original" , "http://localhost:3003")
    res.header(
        "Access-Control-Allow-Original" 
        ,"Origin , X-Requested-With , Content-Type,Accept" 
    )
    next();
})  

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/' , require('./routes/creatUser'));
app.use('/api' , require('./routes/displayData'));

    app.listen(port , ()=> {
        console.log( `Server is runing on ${port}`);
        console.log(db);
    })