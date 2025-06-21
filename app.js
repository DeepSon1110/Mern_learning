//commom js format
// const express = require('express')
// const app = express()

//module format ( for this, we need to do this in package.json , "type" : "module",)
import express from "express";
const app = express();

//import database
import connectDB from "./database/database.js";
import Blog from "./models/Blog.js";

app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB();

//get method
app.get("/", (req, res) => {
  // res.send('Hello World1212')
  res.json({
    name: "john",
    age: 25,
  });
  // console.log('hello world');
});

app.post("/about", (req, res) => {
  // res.send('Hello World1212')
  res.json({
    name: "post method",
    age: 25,
  });
  // console.log('hello world');
});

app.post("/blog", async (req, res) => {
  // const article = {
  //   title: "Seasons",
  //   subTitle: "This is subtitle",
  //   description: "this is desc",
  // };

  //res.send(req.body)
  //const title = article.title is equivelnt to,
  const {title,subTitle,description} = req.body;

  const info = await Blog.create({
    //if key and value are different
    //  title: title1,
    // subTitle: subTitle1,
    // description: description1,

    //if key and value are same then, here in line 41 (title : article.title) so we , just can write title
    title,
    subTitle,
    description
  });

  res.json({
    message: "Blog Created Successfully",
    data: info,
  });
});



//get method (all)
app.get('/about', async (req, res) => {

  const data = await Blog.find();

  res.status(200).json({
    message: "Data Fetched Successfully",
    data: data
  });
});

//get method (single)
app.get('/about/:id',async(req,res)=>{

  //url ma pahako kura params ma aauxa ( so params lekhako, if not req.body lekhnu parthyoo)
  

  const id = req.params.id

  const data = await Blog.findById(id);
  
  res.status(200).json({
    message: "Data Fetched Successfully",
    data: data
  })
})

//put method
app.put('/about/:id',async(req,res)=>{
  
  const id = req.params.id
  const {title,subTitle,description} = req.body;
  //  res.send(req.body)

  const data = await Blog.findByIdAndUpdate(id,{
    title,
    subTitle,
    description
  })

  res.status(200).json({
    message:"updated successfuly",
    data: data
  })
})

//delete method
app.delete('/about/:id',async(req,res)=>{
  const id = req.params.id

          await Blog.findByIdAndDelete(id)

  res.status(200).json({
    message: "Deleted successfully"
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
