import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URI = 'http://localhost:3000/blogs/'

const EditBlog = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    // Update Procedure

    useEffect(()=> {
        getBlogById()
    },[])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {title, content})
        navigate('/')
    }

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }
    
    return (
        <div className="blog-container">
            <h3>EDIT BLOG</h3>
            <form onSubmit={update} className="blog-container__form-container">
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} onChange = { (e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content:</label>
                <textarea type="text" value={content} onChange = { (e) => setContent(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditBlog