const express = require("express");
const router = express.Router();
const oddEvenOdds= require("../../controllers/live.Score/oddEven.controller");


/*****************************************************  Odd Even Qtr1  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-odd-even-Qtr1:
  *   get:
  *     summary: Odd Even Qtr1 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Odd Even Qtr1Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-odd-even-Qtr1', oddEvenOdds.Odd_Even_Qtr1_Odds_Data_Of_Single_Game); 
 
 /*****************************************************  Odd Even Qtr2  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-odd-even-Qtr2:
  *   get:
  *     summary: Odd Even Qtr2 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Odd Even Qtr2Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-odd-even-Qtr2', oddEvenOdds.Odd_Even_Qtr2_Odds_Data_Of_Single_Game); 

 /*****************************************************  Odd Even Qtr3  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-odd-even-Qtr3:
  *   get:
  *     summary: Odd Even Qtr3 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Odd Even Qtr3Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-odd-even-Qtr3', oddEvenOdds.Odd_Even_Qtr3_Odds_Data_Of_Single_Game); 

   /*****************************************************  Odd Even Qtr4  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-odd-even-Qtr4:
  *   get:
  *     summary: Odd Even Qtr4 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Odd Even Qtr4Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-odd-even-Qtr4', oddEvenOdds.Odd_Even_Qtr4_Odds_Data_Of_Single_Game); 

 /*****************************************************  Home Odd Even Qtr1  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-home-odd-even-Qtr1:
  *   get:
  *     summary: Home Odd Even Qtr1 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Home Odd Even Qtr1Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-home-odd-even-Qtr1', oddEvenOdds.home_Odd_Even_Qtr1_Odds_Data_Of_Single_Game);

 /*****************************************************  Home Odd Even Qtr2  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-home-odd-even-Qtr2:
  *   get:
  *     summary: Home Odd Even Qtr2 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Home Odd Even Qtr2 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-home-odd-even-Qtr2', oddEvenOdds.home_Odd_Even_Qtr2_Odds_Data_Of_Single_Game);

/*****************************************************  Home Odd Even Qtr3  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-home-odd-even-Qtr3:
  *   get:
  *     summary: Home Odd Even Qtr3 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Home Odd Even Qtr3 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-home-odd-even-Qtr3', oddEvenOdds.home_Odd_Even_Qtr3_Odds_Data_Of_Single_Game);

/*****************************************************  Home Odd Even Qtr4  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-home-odd-even-Qtr4:
  *   get:
  *     summary: Home Odd Even Qtr4 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Home Odd Even Qtr4 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-home-odd-even-Qtr4', oddEvenOdds.home_Odd_Even_Qtr4_Odds_Data_Of_Single_Game);

/*****************************************************  Home Odd Even Over Time Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-home-odd-even-Over-Time:
  *   get:
  *     summary: Home Odd Even Over Time Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Home Odd Even Over Time Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-home-odd-even-Over-Time', oddEvenOdds.home_Odd_Even_Over_Time_Odds_Data_Of_Single_Game);

/*****************************************************  Away Odd Even Over Time Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-Away-odd-even-Over-Time:
  *   get:
  *     summary: Away Odd Even Over Time Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Odd/Even]
  *     parameters:
  *       - in: query
  *         name: gameid
  *         schema:
  *           type: string 
  *         required: true
  *         description: The 
  *       - in: query
  *         name: bookmakerid
  *         schema:
  *           type: string
  *         description: The bookmark Id
  *     responses:
  *       200:
  *         description: The Away Odd Even Over Time Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-Away-odd-even-Over-Time', oddEvenOdds.Away_Odd_Even_Over_Time_Odds_Data_Of_Single_Game);
  
  module.exports = router;