import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3000/blogs'

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([])

    
    useEffect(()=> {
        getBlogs()
    },[])

    // Show all blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlogs(res.data)
    }

    // Dekete blog
    const deleteBlog = async (id) => {
        const res = await axios.delete(`${URI}/${id}`)
        getBlogs()
    }

    return (
        <>
            {blogs.map(blog => {
                return (
                <div className='blog' key={blog.id}>
                    <h2>Title: {blog.title}</h2>
                    <p>Content: {blog.content}</p>
                    <button>
                        {/* <Link to={`/edit/${blog.id}`}>Edit</Link> */}
                    </button>
                    <button onClick={ () => deleteBlog(blog.id) }>Delete</button>
                </div>
                )
            })}
        </>
    )

}

export default CompShowBlogs