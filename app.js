const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get("/",(req,res) => {
    console.log("This is the homepage")
    res.send("<h1>This is the Jack Johnson homepage</h1>")
    //res.sendFile(__dirname + "/views/index.html")
}) 

/* app.get("/dog", (req,res) => {
    res.sendFile(__dirname + "/views/dog.html")
}) */

app.listen(port, () => {
console.log(`listening on port ${port}`)
})
