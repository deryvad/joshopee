let express = require('express');
let router = express.Router();

let createResponse = (message) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve({"message": message});
        }, 500); //respond after 0.5 second
    });
}

router.get("/home", (req, res) => {
    return createResponse("Data For the Homepage").then((data)=>{
        res.status(200).send(data);
    });
});

router.get("/page", (req, res) => {
    return createResponse("Data For the Sample Page").then((data)=>{
        res.status(200).send(data);
    });
});


module.exports = router;