const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        // db.user
        //     .find(req.query)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
        res.send("Hello World")
        console.log("It works")
    },
    findByEmail: function (req, res) {
        db.user
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.user
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};