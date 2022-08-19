import BlogModel from "../models/BlogModel.js";

// Mostrar todos los registros
export const getAllBlogs = async (req,res) => {
    try {
        const blogs = await BlogModel.findAll() 
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar un registro
export const getBlog = async (req,res) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Crear un registro
export const createBlog = async (req,res) => {
    try {
        await BlogModel.create(req,body)
        res.json({
            "message":"Register created succesfully!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Actualizar un registro
export const updateBlog = async (req,res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"Register updated succesfully!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Eliminar un registro
export const deleteBlog = async (req,res) => {
    try {
        await BlogModel.destroy(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"Register deleted succesfully!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}