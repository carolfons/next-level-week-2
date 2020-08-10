/*instalar o express e o nodemon (npm install)
mudar dentro do package. json o nome para dev e o caminho ( "dev" : "node src/server.js")
rodar npm run dev => com isso o servidor da restart sozinho */

//! imports
const express = require('express')
const server = express()


//static files(css,html,images)
server.use(express.static("public"))

//application routers
.get("/",(req,res) => {
    return res.sendFile(__dirname + "/views/index.htm")
})

.get("/study", (req,res) => {
    return res.sendFile(__dirname + "/views/study.htm")
})
server.listen(5000)

//functions





