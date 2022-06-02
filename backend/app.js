const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const User = require("./model/User");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const auth = require('./middleware/auth')

require("./database/conn")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + "./public/"));

app.use(cors());

app.get("/", (req, res) => {
    res.send("nikhil")
})

app.get("/getuser",auth,async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (err) {
        res.json(err)
    }
})

app.get("/data/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findById(id);
        res.status(200).json(users)
    } catch (err) {
        res.json(err)
    }
})


var storage = multer.diskStorage({
    destination: './public/upload/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage    
    // limits : {fileSize : 1000000}
})


app.post("/add",upload.array("file",5),(req, res,err) => {
    //  var {name,email} = req.body;

    bcrypt.hash(req.body.password, 10, (err, hash) => {

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            // file: req.file.filename
        })
        // if(req.file){
        //     user.file = req.file.filename   
        // }

        if(req.files){
            let path = ""
            req.files.forEach(function(files,index,arr){
                path = path + files.filename + ','
            })
            path = path.substring(0,path.lastIndexOf(","))
            user.file = path
        }


        const token = jwt.sign(
            { _id: user._id },
            'this is dummy text',
            {
                expiresIn: "120s",
            }
        );
        console.log(token)
        res.cookie(token)
        // user.token = token;
        user.save().then(() => {
            res.status(200).json({ user: user, token: token })
        })

            .catch((err) => {
                res.status(400).json(err)
            })

    })
})

app.put("/edit/:id", async (req, res) => {
    const user = new User({
        _id: req.params.id,
        name: req.body.name,
        email: req.body.email

    })
    User.updateOne({ _id: req.params.id }, user)
        .then(() => {
            res.status(200).json(user)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})




app.delete("/delete/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: 'Deleted!'
            })
        })
        .catch((err) => {
            res.status(401).json(err)
        })
})


app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;

        const password = req.body.password;

        const useremail = await User.findOne({ email: email })

        // const ismatch = (password === useremail.password);

        const match = await bcrypt.compare(password, useremail.password);

        if (match) {
            const token = jwt.sign({ _id: useremail._id },
                'this is dummy text',
                {
                    expiresIn: "120s",
                }
            )
            res.cookie(token)
            res.status(200).json({ user: useremail, token: token })
        } else {
            res.json({
                message: 'dont match!'
            })
        }
    } catch (err) {
        res.status(401).json(err)
    }
})



module.exports = app;