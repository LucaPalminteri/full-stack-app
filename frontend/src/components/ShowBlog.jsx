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
        await axios.delete(`${URI}/${id}`)
        getBlogs()
    }

    return (
        <>
        <button>
            <Link to={'/create'}>Create</Link>
        </button>
            {blogs.map(blog => {
                return (
                <div className='blog' key={blog.id}>
                    <div className='blog__info'>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                    <div className='blog__btn-container'>                
                        <button className='btn-edit'>
                            <Link to={`/edit/${blog.id}`}>E</Link>
                        </button>
                        <button className='btn-delete' onClick={ () => deleteBlog(blog.id) }>D</button>
                    </div>
                </div>
                )
            })}
        </>
    )

}

export default CompShowBlogs