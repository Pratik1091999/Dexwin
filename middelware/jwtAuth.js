const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


// verifyToken 
const verifyToken = (req, res, next) => {
    const token = req.headers['token'];

    if(token == '' || token == undefined || token == null){
        return res.status(400).send({status: "error", message: "No Token Provided"});
    }
    
    try {
        var verifyTokenStatus = jwt.verify(token, process.env.Secret);
        if(!verifyTokenStatus){
            return res.status(400).send({status: "error", message: "Something Went Wrong"});
        }
        req.userid = verifyTokenStatus.userID;
        next();
    } catch (err) {
        return res.status(400).send({status: "error", message: err});
    }
}

const isAdmin = (req, res, next) => {
    const userId = req.userid;
    try {
        User.findById(userId, (err, data) =>{
            if(err){
                return res.status(400).send({status: "error", message: err});
            }

            if(data.userType == "admin" || data.userType == "ADMIN" || data.userType == "Admin"){
                next();
                return;
            }else{
                return res.status(400).send({status: "error", message: "Only Admin Access This API"});
            }
        })
    } catch (error) {
        return res.status(400).send({status: "error", message: err});
    }
}

const data ={
    verifyToken,
    isAdmin
};

module.exports = data;