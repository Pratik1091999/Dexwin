const userModel = require("../../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const OTPInfo = require("../../models/OTPSchema");
const { isEmpty, validatePassword, validateEmail, validateMobile, isValidURL } = require("../../helper/validationFunction.helper")
const sendMail = require("../../services/signUpMailService/signUpMail")
const sendOTPMail = require('../../services/OTP/sendMail');
const genOTP = require('../../services/OTP/sentOTP');

// SignUp Api 
exports.SignUp = async (req, res) => {
    try {

        const { fName, lName, email, password, confirm_Password } = req.body;

        if (!isEmpty(fName)) {
            return res.status(400).send("Please Enter First Name  felid is Empty !");
        } else if (!isEmpty(lName)) {
            return res.status(400).send("Please Enter Last Name felid is Empty !");
        } else if (!isEmpty(email)) {
            return res.status(400).send("Please Enter Email felid is Empty !");
        } else if (!isEmpty(password)) {
            return res.status(400).send("Please Enter Password felid is Empty !");
        } else if (!isEmpty(confirm_Password)) {
            return res.status(400).send("Please Enter Confirm Password felid is Empty !");
        } else if (!validateEmail(email)) {
            return res.status(400).send("Your Email is not valid Enter valid Email");
        } else if (!validatePassword(password)) {
            return res.status(400).send("Please Enter password 8 characters long, One uppercase letter, one lowercase letter, one numeric value, One special character,not any blank space");
        } else if (password !== confirm_Password) {
            return res.status(400).send("Password And Confirm Password Not Match");
        } else {
            let userEmailCheck = await userModel.findOne({ email: email });
            if (userEmailCheck) {
                return res.status(400).send("This Email is already Register");
            } else {
                let salt = await bcryptjs.genSalt(10);
                let hashPassword = await bcryptjs.hash(password, salt);
                const addingUsersRecord = new userModel({
                    firstName: fName,
                    lastName: lName,
                    email: email,
                    password: hashPassword
                })
                addingUsersRecord.save();
                sendMail(email, fName);
                return res.status(200).send("User Register Sucessfully");
            }
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}

// Login Api
exports.login = async (req, res) => {

    const { password, email } = req.body;
    try {
        if (!isEmpty(email)) {
            return res.status(400).send("Please Enter Email felid is Empty !");
        } else if (!isEmpty(password)) {
            return res.status(400).send("Please Enter Password felid is Empty !");
        } else if (!validateEmail(email)) {
            return res.status(400).send("Your Email is not valid Enter valid Email");
        } else {
            let user = await userModel.findOne({ email: email });
            if (!user) {
                return res.status(400).send("Please Enter Valid Email Or Sign Up First for login");
            } else {
                let checkPassword = await bcryptjs.compare(password, user.password);
                if (checkPassword) {
                    let token = jwt.sign({ userID: user._id }, process.env.Secret, { expiresIn: '15m' });
                    return res.status(200).json({ "message": "Login Succesfully", "Token valid for 15 Min": token, "userID": user._id, "userEmail": user.email })
                } else {
                    return res.send("Enter valid  Password")
                }
            }

        }
    } catch (error) {
        return res.status(500).send({ status: "error", message: error });
    }
}

//Forget Password 
exports.Forget_Password = async (req, res) => {
    const { email } = req.body;
    if (!email == "") {
        let user = await userModel.findOne({ email: email });
        if (user) {
            let checkUserOTP = await OTPInfo.findOne({ email: email });
            if (!checkUserOTP) {
                let OTP = genOTP()
                sendOTPMail(email, OTP)
                let addingOTP = new OTPInfo({
                    email: email,
                    userOTP: OTP
                })
                addingOTP.save()
                res.status(200).send("OTP send SucessFully");
            } else {
                res.send("For Resend OTP wait For 5 Min")
            }
        } else {
            res.send("This Email is not exit in Database")
        }
    } else {
        res.send("Please Enter Email ")
    }

}


// Reset Password 12
exports.Reset_Password = async (req, res) => {
    const { email } = req.params;
    const { OTP, newPassword, confirm_Password } = req.body;
    if (!isEmpty(email)) {
        return res.status(400).send("Please Enter Email felid is Empty !");
    } else if (!isEmpty(OTP)) {
        return res.status(400).send("Please Enter OTP felid is Empty !");
    }else if (!isEmpty(newPassword)) {
        return res.status(400).send("Please Enter New Password felid is Empty !");
    } else if (!isEmpty(confirm_Password)) {
        return res.status(400).send("Please Enter Confirm Password felid is Empty !");
    } else if (!validateEmail(email)) {
        return res.status(400).send("Your Email is not valid Enter valid Email");
    } else if (!validatePassword(newPassword)) {
        return res.status(400).send("Password Must be 8 characters long, One uppercase letter, one lowercase letter, one numeric value, One special character,not any blank space");
    } else if (newPassword !== confirm_Password) {
        return res.status(400).send("Password And Confirm Password Not Match");
    } else {
        if (email) {
            let user = await OTPInfo.findOne({ email: email });
            if (user) {
                if (OTP == user.userOTP) {
                    await OTPInfo.findOneAndDelete({ email: email })
                    let salt = await bcryptjs.genSalt(10);
                    let hashPassword = await bcryptjs.hash(newPassword, salt)
                    userModel.findOneAndUpdate({ email: email }, {
                        $set: {
                            password: hashPassword
                        }
                    })
                        .then(result => {
                            return  res.status(200).send("Password Resst Successfully")
                        })
                        .catch(error => {
                            return  res.status(500).send(error)
                        })
                } else {
                    return res.status(401).send("Enter valid  OTP")
                }
            } else {
                return res.status(302).send("OTP Exipre")
            }
        }

    }
}
        
       
// Single User Details Api
exports.getSingleUserDetails = async (req, res) => {
    const userId = req.params.userId;
    if (isEmpty(userId)) {
        const userResult = await userModel.findOne({ _id: userId, status: "ACTIVE" });
        if (!userResult) {
            return res.status(404).send({ status: "error", message: "User not found" });
        }
        const result = await userModel.findOne({ _id: userId, userType: "USER" });
        if (result) {
            return res.status(200).send({ status: "success", message: "Successfully get user details", data: result });
        } else {
            return res.status(500).send({ status: "error", message: "Something went wrong." });
        }
    } else {
        return res.status(500).send({ status: "error", message: "Required User Id" });
    }
}

// All User Details Api Only For Admin
exports.getAllUserDetails = async (req, res) => {
    const result = await userModel.find({ userType: "USER" });
    if (result.length > 0) {
        return res.status(200).send({ status: "success", message: "Successfully get all users details", data: result });
    } else {
        return res.status(500).send({ status: "error", message: "Users not showing." });
    }
}

// Edit User  Profile 
exports.Edit_Profile = async (req, res) => {
    const { userName, emailAddress, phoneNunber, facebookUrl, instagramUrl, twitterUrl, discord } = req.body;
    const { Id } = req.params;

    let user = await userModel.findOne({ _id: Id });
    if (!user) {
        return res.status(400).send("User is Not Register In Database");
    } else if (!validateEmail(emailAddress)) {
        return res.status(400).send("Your Email is not valid Enter valid Email");
    } else if (!validateMobile(phoneNunber)) {
        return res.status(400).send("Your Phone Number is not valid Enter valid Number");
    } else if (!isValidURL(facebookUrl)) {
        return res.status(400).send("Your Facebook Url is not valid Enter valid Url");
    } else if (!isValidURL(instagramUrl)) {
        return res.status(400).send("Your Instagram Url Url is not valid Enter valid Url");
    } else if (!isValidURL(twitterUrl)) {
        return res.status(400).send("Your twitter Url is not valid Enter valid Url");
    }
    else {
        let userEmailCheck = await userModel.findOne({ email: emailAddress });
        if (userEmailCheck) {
            return res.status(400).send("This Email is already Register");
        } else {
            userModel.findOneAndUpdate({ _id: Id }, {
                $set: {
                    userName: userName,
                    email: emailAddress,
                    mobileNumber: phoneNunber,
                    facebookUrl: facebookUrl,
                    instagramUrl: instagramUrl,
                    twitterUrl: twitterUrl,
                    discord: discord
                }
            })
                .then(result => {
                    return res.status(200).json({ "message": " User Profile Sucessfully Update" })
                })
                .catch(error => {
                    return res.status(500).send(error)
                })
        }
    }
}

// Delete USer Api only for Admin 
exports.deleteUser = async (req, res) => {
    const userId = req.params.userId;
    if (isEmpty(userId)) {
        const userResult = await userModel.findOne({ _id: userId, status: "ACTIVE" });
        if (!userResult) {
            return res.status(404).send({ status: "error", message: "User not found" });
        }
        const result = await userModel.deleteOne({ _id: userId });
        if (result.deletedCount > 0) {
            return res.status(200).send({ status: "success", message: "Delete User Successfully." });
        } else {
            return res.status(500).send({ status: "error", message: "Something went wrong." });
        }
    } else {
        return res.status(500).send({ status: "error", message: "Required User Id" });
    }
}

// Get Admin Details
exports.getAdminDetails = async (req, res) => {
    const result = await userModel.findOne({ userType: { $in: ["ADMIN", "Admin", "admin"] } });
    if (result) {
        return res.status(200).send({ status: "success", message: "Successfully admin details", data: result });
    } else {
        return res.status(500).send({ status: "error", message: "Something went wrong." });
    }
}

// User Status Change
exports.updateStatus = async (req, res) => {
    const userId = req.params.userId;
    const status = req.body.status;
    if (isEmpty(userId) && isEmpty(status)) {
        const userResult = await userModel.findOne({ _id: userId });
        if (!userResult) {
            return res.status(404).send({ status: "error", message: "User not found" });
        }
        if (status !== "ACTIVE" && status !== "BLOCK" && status !== "DELETE" && status !== "HOLD") {
            return res.status(500).send({ status: "error", message: "Status invalid." });
        }
        const result = await userModel.findOneAndUpdate({ _id: userId }, { $set: { status: status } }, { new: true });
        if (result) {
            return res.status(200).send({ status: "success", message: "Successfully User Status Update.", data: result });
        } else {
            return res.status(500).send({ status: "error", message: "Something Went Wrong." });
        }
    } else {
        return res.status(500).send({ status: "error", message: "Required User Id or Status" });
    }
};

// Fetch Account 
exports.fetchAccount = async (req, res) => {
    const { chain, address } = req.body;
    const serverUrl = process.env.MORALIS_APP_API;
    const appId = process.env.MORALIS_APP_ID;
    const masterKey = process.env.MORALIS_MASTER_KEY;
    await Moralis.start({ serverUrl, appId, masterKey });

    const options = {
        chain: chain,
        address: address,
        from_block: "0",
    };
    const balance = await Moralis.Web3API.account.getNativeBalance(options)
    return res.status(200).send({ status: "success", message: "Fetch Account.", data: balance });
}   