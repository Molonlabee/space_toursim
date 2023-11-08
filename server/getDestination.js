const { response } = require("express");

let destination = [{}];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(destination);
    }
}