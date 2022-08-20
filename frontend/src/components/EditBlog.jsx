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
        <>
            <h3>Edit blog</h3>
            <form onSubmit={update}>
                <input type="text" value={title} onChange = { (e) => setTitle(e.target.value)} />
                <textarea type="text" value={content} onChange = { (e) => setContent(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditBlog