const router = require("express").Router();

const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

const createUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send(user);
};

const updateUser = async (req, res) => {
  try {
    const user = User.findOne({ _id: req.params.id });
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = User.findOne({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "User was not found - Couldn't delete" });
  }
};

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;