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
        <>
            <h3>Create blog</h3>
            <form onSubmit={store}>
                <input type="text" value={title} placeholder={'title'} onChange = { (e) => setTitle(e.target.value)} />
                <textarea type="text" value={content} placeholder={'content'} onChange = { (e) => setContent(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </>
    )
}

export default CreateBlog