import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    subTitle : {
        type : String
    },
    description : {
        type : String
    }
})

const Blog = mongoose.model("Blog",blogSchema)

export default Blog;