import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:3000/blogs'

const CreateBlog = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()

    // Store Procedure
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title,content})
        navigate('/')
    }
    
    return (
        <div className="blog-container">
            <h3>CREATE BLOG</h3>
            <form onSubmit={store} className="blog-container__form-container">
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} placeholder={'Type here...'} onChange = { (e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content:</label>
                <textarea type="text" value={content} placeholder={'Type here...'} onChange = { (e) => setContent(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateBlog