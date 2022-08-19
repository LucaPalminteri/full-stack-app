import {Sequelize} from 'sequelize'

const db = new Sequelize('mern1','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db