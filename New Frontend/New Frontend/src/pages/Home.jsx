import React, { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";



const Home = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(()=>{

    const fetchBlogs = async () =>{
      const res = await axios.get("http://localhost:3000/blog")
      console.log(res.data.data)
      setBlogs(res.data.data)
    } 

    fetchBlogs()

   },[])

   useEffect(()=>{
    console.log("the blog is",blogs );
   },[blogs])
    
  return (
    <div>
        <Navbar />
      <div className="flex flex-col p-5 lg:px-48 lg:py-11">
      {
        blogs.map((blog, index) => (
          <div key={blog._id} className="bg-gray-100 p-5 mb-10">
            <h1 className="font-bold text-2xl mb-2">{blog.title}</h1>
            <p className="my-3">{blog.subTitle}</p>
            <p className="my-3">{blog.description}</p>
            <Link to = {`/blog/${blog._id}`}className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
              Read More...
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Home;
