var Users = {};

var allusers = [
    {
        "id": 1,
        "name": "John Smith",
        "age": 22,
        "gender": "Male",
        "paid": false
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 22,
        "gender": "Female",
        "paid": true
    }
];

/* GET all users */
Users.getAllUsers = function (req, res) {
    res.send({
        "users": allusers
    });
}

/* GET one user */
Users.getOneUser = function (req, res, next) {
    res.send(allusers[req.swagger.params.id.originalValue]);
}

Users.deleteUser = function (req, res, next) {
    res.send({
        "status": "success"
    });
}

/* Create user */
Users.createUser = function (req, res, next) {
    var inputJson = req.swagger.params.user.originalValue;
    console.log("Should not pass validation!!");
    console.log("inputJson = " + JSON.stringify(inputJson));
    res.send({
        "status": "success"
    });
}

/* Update user */
Users.updateUser = function (req, res, next) {
    res.send({
        "status": "success"
    });
}


module.exports = Users;
