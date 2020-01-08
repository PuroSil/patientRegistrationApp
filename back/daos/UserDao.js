const User = require('../models/User');


const daoAddUser = async (user) => {
  const newUser = new User(user);
  const savedUser = await newUser.save();
  return savedUser;
};

const daoGetUser = async (username, password) => {
  const user = await User.find({ username, password });
  return user;
};

module.exports = {
  daoAddUser,
  daoGetUser
};
