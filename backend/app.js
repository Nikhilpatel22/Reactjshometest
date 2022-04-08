const express = require("express");
const app = express();
const User = require("./model/User");
var bodyParser = require('body-parser');

require("./database/conn")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get("/", (req, res) => {
    res.send("nikhil")

})

app.get("/getuser", async (req, res) => {
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


app.put("/:id", async(req,res)=>{
    // const id = req.params.id;
    // let user = await User.findById(req.params.id)
    // user = req.body;
    // const editUser = new User(user)
    // try{
    //     const data = await User.updateOne({_id : req.params.id},editUser)
    //     res.status(200).json(data)
    // }catch(err){
    //     res.json(err)
    // }
    let user = await User.findById(req.params.id);
    user = req.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json(error);     
    }

})

app.post("/add", (req, res) => {
    //  var {name,email} = req.body;

    const user = new User({
        name: req.body.name,
        email: req.body.email
    })
    user.save().then(() => {
        res.status(200).json(user)
    })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = app;