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


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const mongoose = require("mongoose");
const connectDB = require("./utils/connectDb");
const Coordinates = require("./models/operator.js");
mongoose.set('strictQuery', false);
connectDB().then(() => {
    Coordinates.findOne({}, function (error, data) {
        if (error) return console.error(error);
        console.log(data);
        // if (data.password == req.body.password) {
        //     res.sendFile(__dirname + "/dashboard.html");
        // }
        // else{
        //     console.log("Wrong password");
        //     res.sendFile(__dirname + "/login.html");
        // }

    });
})

app.use(express.static("public"));


var sx, sy, dx, dy;

app.post("/directions", (req, res) => {
    var data = req.body;
    console.log(req.body);
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



app.get("/data", (req, res) => {
    Coordinates.find({}, function (err, dataa) {
        dataa = dataa[dataa.length - 1]
        data = dataa.data;
        const newArr = [];
        while (data.length) newArr.push(data.splice(0, 2));
        console.log(newArr);
        // res.send(newTurns);
        res.json({newArr});
    })
    // res.send("<h1>Hey</h1>");
})


var arrayCoords;
app.post('/dev', (req, res) => {
    // Save the data available in req.body somewhere
    console.log(req.body.JSONObject);
    arrayCoords = req.body.JSONObject;
    const coords = new Coordinates({
        data: arrayCoords
    });
    coords.save((error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('User saved successfully!');
        }
    });
    //console.log(typeof(arrayCoords[0]))
    // Coordinates.insertOne(arrayCoords,function(err,res){
    //     console.log("Document Inserted Into Collection");
    // });
    // const document=new Coordinates({
    //     "data":['music','movies']
    // });
    // document.save(function(err){
    //     console.log("error");
    // })

    res.status(200).send('Got data');
})

const user = "GJ02AB5252";
const password = "abc";


app.post("/login", (req, res) => {
    // console.log("hey");
    console.log(req.body);
    if (req.body.password == password) {
        res.sendFile(__dirname + "/index.html");
    }
    else {
        // res.sendFile(__dirname+"/index.html");
        res.redirect("/login");
    }

    // req.send("<h1>Hey</h1>");
})
app.get("/login", (req, res) => {
    console.log("hey");
    // res.send("<h1>Welcome</h1>");
    res.sendFile(__dirname + "/login.html");
})


app.listen(3000, (req, res) => {
    console.log("listening on 3000...");
})












// dv
// SVGDefsElement
// sv
// sv
// SVGSVGElementsvds
// vds
// vds
// v
// dispatchEventdsvdv
// SVGDefsElementsv
// dispatchEventdsvds
// vdsvds
// vdsvdssdv
// vdsvdsvdsv
// sv