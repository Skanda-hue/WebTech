const router = require("express").Router();
const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const { verficationToken } = require("../middlewares/autenticacion");

router.get("/", (req, res) => {
  //put verficationToken bw / amd ()
  Users.find({})
    .exec()
    .then((users) => {
      console.log(users);
      res.json({
        users: users,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/", async (req, res) => {
  let body = req.body;

  let newuser = new Users({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  // Users.findOne({ email: body.email }, (err, user) => {
  //   if (user) {
  //     console.log("exists");
  //   }
  // });

  await newuser.save((err, user) => {
    if (err) {
      console.log(err);
      return res.json({
        err: err,
      });
    }

    res.json({
      user: user,
    });
  });
});

module.exports = router;

// const User = require("../models/users");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// //const session = require('express-session')

// const register = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
//     if (err) {
//       res.json({
//         error: err,
//       });
//     }

//     let user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPass,
//     });

//     let userData = {
//       name: req.body.name,
//       email: req.body.email,
//     };

//     user
//       .save()
//       .then((user) => {
//         return res.json({
//           success: true,
//           message: "Successful",
//           user,
//         });
//       })
//       .catch((error) => {
//         res.json({
//           message: "An error occured!!!",
//         });
//       });
//   });
// };

// module.exports = {
//   register, //login    //,logout,getUserDetails
// }
