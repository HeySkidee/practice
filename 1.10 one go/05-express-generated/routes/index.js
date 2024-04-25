var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { render } = require('../app');

router.get('/',(req, res)=>{
    res.cookie("age", 25),
    res.render("index");
})

router.get('/read', (req, res)=>{
    res.send("<h2>Age: \n</h2>" + req.cookies.age)
    console.log(req.cookies)
})

router.get('/checkban', (req, res) => {
    if(req.session.ban === true){
        res.send("<h2>YOU ARE BANNNED LMAO</h2>");
    }
    else res.send("<h2>Not Banned</h2>")
})

router.get('/removeban', (req, res)=>{
    req.session.destroy((err)=>{
        if (err) throw err;
        else res.send("<h2>Ban Removed</h2>")
    })
})

router.get('/create', async function (req, res){
    const createdUser = await userModel.create({
        username: "HeySkidee",
        name: "skidee",
        age: 20
    });
    res.send(createdUser);
});

router.get('/allusers', async (req, res) => {
    const allusers = await userModel.find();
    res.send(allusers);
})

router.get('/delete', async (req, res)=>{
    let deleteduser = await userModel.findOneAndDelete({
        username: "HeySkidee"
    })
    res.send("<h2>Deleted Schema:</h2> <br>" + deleteduser)
})

module.exports = router;
