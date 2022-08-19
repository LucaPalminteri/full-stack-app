import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3000/blogs'

const CompShowBlogs = () => {
    const [blog, setBlog] = useState([])

    
    useEffect(()=> {
        getBlogs()
    },[])
    console.log(blog);

    // Show all blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    // Dekete blog
    const deleteBlog = async (id) => {
        const res = await axios.delete(`${URI}/${id}`)
        getBlogs()
    }

    return (
        <div>
            <h1>Title</h1>
        </div>
    )

}

export default CompShowBlogs