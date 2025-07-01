import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const params = useParams()

    const [blog, setBlog] = useState({})

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await axios.get(`http://localhost:3000/blog/${params.id}`)
            setBlog(res.data.data)
        }
        fetchBlog()
    }, [params.id])

    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-2/3 px-4">
                    <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
                    <h2 className="text-xl font-bold mb-4">{blog.subTitle}</h2>
                    <p className="text-gray-700">{blog.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails