const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const path = require("path");


// built in middle middle ware
const staticPath = path.join(__dirname,"../public");
 const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
  res.render('index');
})

app.get("*",(req,res)=>{
  res.render('404')
})

// app.get("/",(req,res)=>{
// res.send("hello from the server")
// })

app.listen(port,()=>{
  console.log(`listening to the http://localhost:${port}`);
})