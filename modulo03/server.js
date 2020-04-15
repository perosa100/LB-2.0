const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function (req, res) {
    const about = {
        avatar_url: "pp.jpg",
        name: "Patrick Perosa",
        role: "Jovem Aprendiz em curso",
        description: 'Entusiasta e pesquisador por natureza cuja página se encontra em <a href="https://www.facebook.com/patrick.perosa" target="_black">Patrick Perosa</a>',
        links: [
            { name: "Facebook", url: "https://www.facebook.com/patrick.perosa" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/patrick-perosa-4950b434/" },

        ]
    }
    return res.render("about", { about })
})
server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function () {
    console.log("server is running")
})