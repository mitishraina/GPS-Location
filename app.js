const express = require('express');
const http = require('http')
const { Server } = require('socket.io')
const path = require("path")

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname, "public")))

app.use(express.static('public'));

io.on("connection", function(socket) {
    socket.on("send-location", function(data) {
        io.emit("receive-location", {id: socket.id, ...data})
    })
    socket.on("disconnect", function() {
        io.emit("user-disconnected", socket.id)
    })
})

app.get("/", function(req, res) {
    res.render("index")
})

server.listen(3000)