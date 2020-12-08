const Users = require("../models/users");
// const express = require("express");
const router = require("express").Router();

router.post("/updateScore", (req, res) => {
  const score = req.body.score;
  const userId = req.body.userId;

  Users.findOneAndUpdate(
    { _id: userId },
    { score: score },
    { returnOriginal: false },
    (err, doc) => {
      if (err) {
        res.json({ successful: false, error: err });
      }

      res.json({ successful: true, user: doc });
    }
  );
});

module.exports = router;
