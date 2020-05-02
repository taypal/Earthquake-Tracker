const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.user
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findByEmail: function (req, res) {
        db.user
            .findOne(req.body)
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
        db.user
            .findOneAndUpdate(req.body, req.body, {
                new: true,
                upsert: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    check: function (req, res) {

    },
};