const { urlencoded } = require("express")
const express = require("express")
const server = express()
const routes = require("./routes") //1:23:26

server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))
server.use(routes)

server.listen(3000, () => console.log("Servidor subiu com sucesso!")) //localhost:3000