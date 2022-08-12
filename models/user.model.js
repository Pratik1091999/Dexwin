const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema;

var userModel = new schema(
  {
    email: {
      type: String,
      default: ""
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    userName: {
      type: String
    },walletAddress: {
      type: String,
      default: ""
    },
    mobileNumber: {
      type: String,
      default: ""
    },
    password: {
      type: String
    },
    dateOfBirth: {
      type: String,
      default: ""
    },
    facebookUrl: {
      type: String,
      default: ""
    },
    instagramUrl: {
      type: String,
      default: ""
    },
    twitterUrl: {
      type: String,
      default: ""
    },
    discord: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    countryCode: {
      type: String
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Trans"]
    },
    profilePic: {
      type: String,
      default: ""
    },
    coverPic: {
      type: String,
      default: ""
    },
    otpVerification: {
      type: Boolean,
      default: false
    },
    otpTime: {
      type: Number
    },
    otp: {
      type: Number
    },
    userType: {
      type: String,
      enum: ["ADMIN", "USER", "SUBADMIN"],
      default: "USER",
      uppercase: true
    },
    status: {
      type: String,
      enum: ["ACTIVE", "BLOCK", "DELETE", "HOLD"],
      default: "ACTIVE"
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("users", userModel);

mongoose.model("users", userModel).find({ userType: "ADMIN" }, async (err, result) => {
  if (err) {
    console.log("DEFAULT ADMIN ERROR", err);
  }
  else if (result.length != 0) {
    console.log("Default Admin.😊");
  }
  else {
    let obj = {
      firstName:"Admin",
      userType: "ADMIN",
      email: "pratik.mahandule@indicchain.com",
      dateOfBirth: "10/09/1999",
      password: bcrypt.hashSync("Admin@123"),
      address: "India"
    };
    mongoose.model("users", userModel).create(obj, async (err1, result1) => {
      if (err1) {
        console.log("DEFAULT ADMIN  creation ERROR", err1);
      } else {
        console.log("DEFAULT ADMIN Created", result1);
      }
    });
  }
});
