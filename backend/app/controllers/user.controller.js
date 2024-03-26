const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken } = db;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUserDetailsById = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
        res.status(200).send({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          phone: user.phone,
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
