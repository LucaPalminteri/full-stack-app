import express from "express"
import cors from "cors"
import db from "./database/db.js"
import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=> {
    res.send('Hi there!')
})

app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log("Success connection");
} catch (error) {
    console.log("There was a problem trying to connect to the database " + error);
}

app.listen(3000, ()=> {
    console.log('Server UP running in PORT 3000');
})