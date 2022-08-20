import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

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
        <div className='container'>
            <h1 className='create-title'>FullStack Application List</h1>
            <Link to={'/create'} className='btn-create'>
                <FontAwesomeIcon className="icon" icon={faPlus}/>
            </Link>
                {blogs.map(blog => {
                    return (
                    <div className='blog' key={blog.id}>
                        <div className='blog__info'>
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </div>
                        <div className='blog__btn-container'> 
                                <Link to={`/edit/${blog.id}`} className='btn-edit'>
                                    <FontAwesomeIcon className="icon" icon={faPenToSquare}/>
                                </Link>
                            <button className='btn-delete' onClick={ () => deleteBlog(blog.id) }>
                                <FontAwesomeIcon className="icon" icon={faTrash}/>
                            </button>
                        </div>
                    </div>
                    )
                })}
        </div>
    )

}

export default CompShowBlogs