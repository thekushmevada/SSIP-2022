const express = require("express");
const app = express();
// const cors = require('cors');
// app.use(cors({
//     origin: 'https://www.section.io'
// }));
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json())


var sx, sy, dx, dy;

app.post("/directions", (req, res) => {
       var data = req.body;
    //console.log(req.body);
    sx = data.sx;
    sy = data.sy;
    dx = data.dx;
    dy = data.dy;
    //    console.log(data.sx,data.sy,data.dx,data.dy);
    res.json({ user: 'devpatel' })
});
app.get("/directions", (req, res) => {
    res.json({
        "sx": sx,
        "sy": sy,
        "dx": dx,
        "dy": dy
    })
});

app.get("/", (req, res) => {
    res.send("<h1>dev</h1>");
})



app.listen(3000, (req, res) => {
    console.log("listening on 3000...");
})