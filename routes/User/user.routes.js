const express = require("express");
const router = express.Router();
const userController = require("../../controllers/User/user.controller");
const jwtAuth = require("../../middelware/jwtAuth");

/*================================================== Swagger User Schema ====================================================================*/
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email 
 *         - name 
 *         - userName 
 *         - mobileNumber
 *         - password
 *         - dateOfBirth
 *         - address
 *         - city
 *         - state
 *         - country
 *         - countryCode
 *         - gender
 *         - profilePic
 *         - coverPic
 *         - otpVerification
 *         - otpTime
 *         - otp
 *         - userType
 *         - status
 *       properties:
 *         email:
 *           type: string
 *           description: The book title
 *         name:
 *           type: string
 *           description: The Store  Name
 *         userName:
 *           type: string
 *           description: The Store owner Name
 *         mobileNumber:
 *           type: string
 *           description: The Store owner Name
 *         password:
 *           type: string
 *           description: The Store owner Name
 *         dateOfBirth:
 *           type: string
 *           description: The Store owner Name
 *         address:
 *           type: string
 *           description: The Store owner Name
 *         city:
 *           type: string
 *           description: The Store owner Name
 *         state:
 *           type: string
 *           description: The Store owner Name
 *         country:
 *           type: string
 *           description: The Store owner Name
 *         countryCode:
 *           type: string
 *           description: The Store owner Name
 *         gender:
 *           type: string
 *           description: The Store owner Name
 *         profilePic:
 *           type: string
 *           description: The Store owner Name
 *         coverPic:
 *           type: string
 *           description: The Store owner Name
 *         otpVerification:
 *           type: Boolean
 *           description: The Store owner Name
 *         otpTime:
 *           type: Number
 *           description: The Store owner Name
 *         otp:
 *           type: Number
 *           description: The Store owner Name
 *         userType:
 *           type: string
 *           description: The Store owner Name
 *         status:
 *           type: string
 *           description: The Store owner Name
 *       example:
 *          email: pratik10mahandule@gmail.com
 *          name: Pratik
 *          userName: Prayik@123
 *          mobileNumber: 9156305780
 *          password: Pratik@9911
 */

//===========================================================================================
// /**
//  * @swagger
//  * tags:
//  *   name: Users
//  *   description: The User managing API
//  */
//=============================================================================================


/*================================================== Swagger User Sign Schema ====================================================================*/

/**
 * @swagger
 * components:
 *   schemas:
 *     UserSignUP:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - confirm_Password      
 *       properties:
 *        email:
 *           type: string
 *           description: The user Email address 
 *        firstName:
 *           type: string
 *           description: The user  First Name
 *        lastName:
 *           type: string
 *           description: The user  Last Name 
 *        password:
 *           type: string
 *           description: The user  PassWord
 *        confirm_Password:
 *           type: string
 *           description: The user  confirm Password
 *       example:
 *            email: pratik.mahandyle@Indicchain.com
 *            fName: Pratik
 *            lName: Mahandule
 *            password: Pratik@1234
 *            confirm_Password: Pratik@1234 
 */

/**
 * @swagger
 * /api/user/signUp:
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignUP'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSignUP'
 *       500:
 *         description: Some server error
 */
router.post('/user/signUp', userController.SignUp);




/*================================================================User Login Schema ===================================================*/
/**
 * @swagger
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       required:
 *         - email 
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User Email 
 *         password:
 *           type: string
 *           description: User Password
 *       example:
 *          email: pratik10mahandule@gmail.com
 *          password: Admin@123
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login Existing User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: User Login Sucessfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserLogin'
 *       500:
 *         description: Some server error
 */
 router.post('/user/login', userController.login);



/*===================================================Forget Password=======================================================================*/
/**
 * @swagger
 * components:
 *   schemas:
 *     forgetPassword:
 *       type: object
 *       required:
 *         - email  
 *       properties:
 *        email:
 *           type: string
 *           description: The user Email address 
 *       example:
 *            email: pratik10mahandule@gmail.com
 */

/**
 * @swagger
 * /api/user/forget-password:
 *   post:
 *     summary: Forget Password Send OTP To Mail
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/forgetPassword'
 *     responses:
 *       200:
 *         description: OTP mail is successfully Send To 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/forgetPassword'
 *       500:
 *         description: server error
 */
 router.post('/user/forget-password', userController.Forget_Password);



/* ****************************************************Reset Password************************************************************* */
/**
 * @swagger
 * components:
 *   schemas:
 *     Re-setPasword:
 *       type: object
 *       required:
 *         - OTP
 *         - password
 *         - confirm_Password      
 *       properties:
 *        email:
 *           type: string
 *           description: The user Email address 
 *        OTP:
 *           type: Number
 *           description: The OTP for Reset Password
 *        password:
 *           type: string
 *           description: The user  PassWord
 *        confirm_Password:
 *           type: string
 *           description: The user  confirm Password
 *       example:
 *            OTP: 1234
 *            newPassword: Pratik@1234
 *            confirm_Password: Pratik@1234 
 */

/**
  * @swagger
  * /api/user/reset-password/{email}:
  *   put:
  *     summary: Get the Single User by id
  *     tags: [User]
  *     parameters:
  *       - in: path
  *         name: email
  *         schema:
  *           type: string
  *         required: true
  *         description: The email
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Re-setPasword'
  *     responses:
  *       200:
  *         description: OTP mail is successfully Send To 
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Re-setPasword'
  *       500:
  *         description: server error
  */
 router.put('/user/reset-password/:email', userController.Reset_Password);




/****************************************************  Get All User Details ********************************************************/
/**
 * @swagger
 * /api/user/all/details:
 *   get:
 *     summary: Returns the list of all the user
 *     tags: [Admin]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: The Admin login JWT token
 *     responses:
 *       200:
 *         description: Get the list of all the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The Admin was not found
 */
 router.get('/user/all/details', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.getAllUserDetails);




 /****************************************************  Get Single User Details ********************************************************/
 /**
  * @swagger
  * /api/user/details/{userId}:
  *   get:
  *     summary: Get the Single User by id
  *     tags: [Admin]
  *     parameters:
  *       - in: path
  *         name: userId
  *         schema:
  *           type: string
  *         required: true
  *         description: The userId
  *       - in: header
  *         name: token
  *         schema:
  *           type: string
  *         required: true
  *         description: The Admin login Token
  *     responses:
  *       200:
  *         description: The user data by userId
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/User'
  *       404:
  *         description: The User was not found
  */
  router.get('/user/details/:userId', jwtAuth.verifyToken,  jwtAuth.isAdmin,  userController.getSingleUserDetails);



 /****************************************************  Get Admin Details ********************************************************/
/**
 * @swagger
 * /api/user/admin/details:
 *   get:
 *     summary: Get the Admin details only check by admin
 *     tags: [Admin]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: The Admin token
 *     responses:
 *       200:
 *         description: Get  admin Data  
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The Admin was not found
 */
 router.get('/user/admin/details', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.getAdminDetails);



// User API 
// router.post('/user/signUp', userController.SignUp);
// router.post('/user/login', userController.login);
// router.post('user/forget-password', userController.Forget_Password);
// router.post('/resetPass/:email', userController.Reset_Password);
// router.post('/user/editProfile/:Id', jwtAuth.verifyToken ,userController.Edit_Profile);
// router.get('/user/details/:userId', jwtAuth.verifyToken, userController.getSingleUserDetails);
// router.get('/user/all/details', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.getAllUserDetails);
// router.get('/user/admin/details', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.getAdminDetails);
// router.delete('/user/delete/:userId', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.deleteUser);
// router.patch('/user/update/status/:userId', jwtAuth.verifyToken, jwtAuth.isAdmin, userController.updateStatus);
// router.post('/user/fetch-account', jwtAuth.verifyToken, userController.fetchAccount);



module.exports = router;