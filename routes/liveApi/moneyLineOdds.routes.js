const express = require("express");
const router = express.Router();
const moneyLineoddsData = require("../../controllers/live.Score/moneyLineOdds.controllers");



 /*================================================== Live  Money Line Odds API With Rapid API Start From Here ======================================================= */
 
 /***************************************************** Money Line Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line:
  *   get:
  *     summary: Money Line  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line  Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line', moneyLineoddsData.money_Line_Odds_Data_Of_Single_Game);


  /*****************************************************  Money Line Qtr1  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-Qtr1:
  *   get:
  *     summary: Money Line Qtr1  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line Qtr1 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-Qtr1', moneyLineoddsData.money_Line_Qtr1_Odds_Data_Of_Single_Game);


  /*****************************************************  Money Line Qtr2  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-Qtr2:
  *   get:
  *     summary: Money Line Qtr2  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line Qtr2 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-Qtr2', moneyLineoddsData.money_Line_Qtr2_Odds_Data_Of_Single_Game);

 /*****************************************************  Money Line Qtr3  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-Qtr3:
  *   get:
  *     summary: Money Line Qtr3  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line Qtr3 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-Qtr3', moneyLineoddsData.money_Line_Qtr3_Odds_Data_Of_Single_Game);


  /*****************************************************  Money Line Qtr4  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-Qtr4:
  *   get:
  *     summary: Money Line Qtr4  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line Qtr4 Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-Qtr4', moneyLineoddsData.money_Line_Qtr4_Odds_Data_Of_Single_Game);


/***************************************************** Money Line 1st Half Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-1st-half:
  *   get:
  *     summary: Money Line 1st Half  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line 1st Half Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-1st-half', moneyLineoddsData.money_Line_1stHalf_Odds_Data_Of_Single_Game);


  /*****************************************************  Money Line 2nd Half Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-money-line-2nd-half:
  *   get:
  *     summary: Money Line 2nd Half  Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Money Line]
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
  *         description: The Money Line 2nd Half Odds Data With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-money-line-2nd-half', moneyLineoddsData.money_Line_2ndHalf_Odds_Data_Of_Single_Game);



 /*======================================================= Live Money Line Odds API With Rapid API End Here ======================================================= */
  



 
//Money Line All Api Routes  with rapid api
// router.get('/live/get-live-odds-money-line', moneyLineoddsData.money_Line_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-Qtr1', moneyLineoddsData.money_Line_Qtr1_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-Qtr2', moneyLineoddsData.money_Line_Qtr2_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-Qtr3', moneyLineoddsData.money_Line_Qtr3_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-Qtr4', moneyLineoddsData.money_Line_Qtr4_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-1st-half', moneyLineoddsData.money_Line_1stHalf_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-money-line-2nd-half', moneyLineoddsData.money_Line_Qtr1_Odds_Data_Of_Single_Game);




module.exports = router;