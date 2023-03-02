const express = require('express')
const app = express()
const PORT = 4000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false }))
app.use(express.static('public'));

app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (req,res) => {
    console.log(req.body.searchQuery)
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})