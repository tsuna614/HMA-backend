const { log } = require("console");
const User = require("../models/user.model");
const path = require("path");
const fs = require("fs");

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  getUserById: async (req, res, next) => {
    try {
      // THIS IS FIND BY userId, NOT BY _id
      const { id } = req.params;
      const user = await User.find({
        userId: id,
      });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  getUserByEmail: async (req, res, next) => {
    try {
      const { email } = req.params;
      const user = await User.find({
        email: email,
      });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  addUser: async (req, res, next) => {
    try {
      console.log(req);
      const user = await User.create(req);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  deleteUserByEmail: async (req, res, next) => {
    try {
      const email = req.params.email;
      await User.deleteMany({ email: email });
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteUserById: async (req, res, next) => {
    console.log("delete by id");
    try {
      const id = req.params.id;
      await User.deleteMany({ userId: id });
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  editUserById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await User.findOneAndUpdate({ userId: id }, req.body, {
        new: true,
      });
      res.status(200).json("Updated successfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  editAllUsers: async (req, res, next) => {
    try {
      await User.updateMany({}, req.body, {
        new: true,
      });
      res.status(200).json("Updated all users successfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  uploadImage: async (req, res, next) => {
    try {
      const image = req.file;
      console.log(image);

      // write image

      // const id = req.params.id;
      // const user = await User.findOneAndUpdate(
      //   { userId: id },
      //   {
      //     profileImage: image.buffer,
      //     score: 200,
      //   },
      //   {
      //     new: true,
      //   }
      // );

      res.status(200).json(image);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getUserEmail: async (email) => {
    try {
      const data = await User.find({
        email: email,
      });
      return data;
    } catch {
      return null;
    }
  },
  updateRefreshToken: async (email, refreshToken) => {
    try {
      await User.findOneAndUpdate(
        { email: email },
        {
          refreshToken: refreshToken,
        },
        {
          new: true,
        }
      );
    } catch {
      return null;
    }
  },
};

// exports.getUserName = async (username) => {
//   try {
//     const data = await User.find({
//       username: username,
//     });
//     return data;
//   } catch {
//     return null;
//   }
// };

module.exports = userController;
