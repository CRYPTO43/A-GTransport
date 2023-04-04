const express=require("express")
const app=express();
const HTTP_PORT = process.env.PORT || 8080;


app.use(express.json());

app.use(express.static(__dirname+"/assets/"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/services",(req,res)=>{
    res.sendFile(__dirname+"/services.html");
})


const onHttpStart=()=>{
    console.log("Servers are running");
}
app.listen(HTTP_PORT, onHttpStart);