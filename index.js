// 1.improting
const express =require("express")

// 2.initialize
const app=new express()
app.use(express.json());

const dbarray =[
    {name:'levi',age:20},
    {name:'lia',age:18},
];

// 3.api creation
app.get('/',(req,res)=>{
    res.send("Message from the server")
})
app.get('/trail',(req,res)=>{
    res.send(" Trail Message")
})
app.get('/arr',(req,res)=>{
    res.send(dbarray)
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbarray.push(req.body)
    res.send("data added");
})

// update method
app.put("/edit",(req,res)=>{
    dbarray.splice(1,1,req.body);
    res.send("Update Successfully");
});

// delete method
app.delete("/remove",(req,res)=>{
    dbarray.pop();
    res.send("delete successfully!")
});

// 4.port
app.listen(8080,()=>{
    console.log("port is running")
})



