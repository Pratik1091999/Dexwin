const express = require("express");
const router = express.Router();
const overUnderOddsData = require("../../controllers/live.Score/overUnderOdds.controllers");



 /*================================================== Live  Over/Under Odds API With Rapid API Start From Here ======================================================= */
 
 
 /******************************************************* Over/Under Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under:
  *   get:
  *     summary: Over/Under Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under', overUnderOddsData.over_Under_Odds_Data_Of_Single_Game);

 /***************************************************** Over/Under Qtr1 Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-Qtr1:
  *   get:
  *     summary: Over/Under Qtr1 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under Qtr1 Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-Qtr1', overUnderOddsData.over_Under_Qtr1_Odds_Data_Of_Single_Game);

  /**************************************************** Over/Under Qtr2 Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-Qtr2:
  *   get:
  *     summary: Over/Under Qtr2 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under Qtr2 Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-Qtr2', overUnderOddsData.over_Under_Qtr2_Odds_Data_Of_Single_Game);

 /***************************************************** Over/Under Qtr3 Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-Qtr3:
  *   get:
  *     summary: Over/Under Qtr3 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under Qtr3 Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-Qtr3', overUnderOddsData.over_Under_Qtr3_Odds_Data_Of_Single_Game);

  /**************************************************** Over/Under Qtr4 Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-Qtr4:
  *   get:
  *     summary: Over/Under Qtr4 Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under Qtr4 Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-Qtr4', overUnderOddsData.over_Under_Qtr4_Odds_Data_Of_Single_Game);

  /**************************************************** Over/Under 1stHalf Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-1stHalf:
  *   get:
  *     summary: Over/Under 1stHalf Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under 1stHalf Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-1stHalf', overUnderOddsData.over_Under_1stHalf_Odds_Data_Of_Single_Game);

  /***************************************************** Over/Under 2ndHalf Odd API   *******************************************************************/
 /**
  * @swagger
  * /api/live/get-live-odds-over-under-2ndHalf:
  *   get:
  *     summary: Over/Under 2ndHalf Odds With GameID And BookmarkID
  *     tags: [LIVE Odds Over/Under]
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
  *         description: The Over/Under 2ndHalf Odds Data  With GameID And BookmarkID
  *         contens:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Live'
  *       404:
  *         description: The data was not found
  */
  router.get('/live/get-live-odds-over-under-2ndHalf', overUnderOddsData.over_Under_2ndHalf_Odds_Data_Of_Single_Game);


  /*======================================================= Live Over/Under Odds API With Rapid API End Here ======================================================= */
  






//odds API with rapid api
// router.get('/live/get-live-odds-over-under', oddsRapidApiData.over_under_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-Qtr1', overUnderOddsData.over_Under_Qtr1_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-Qtr2', overUnderOddsData.over_Under_Qtr2_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-Qtr3', overUnderOddsData.over_Under_Qtr3_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-Qtr4', overUnderOddsData.over_Under_Qtr4_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-1stHalf', overUnderOddsData.over_Under_1stHalf_Odds_Data_Of_Single_Game);
// router.get('/live/get-live-odds-over-under-2ndHalf', overUnderOddsData.over_Under_2ndHalf_Odds_Data_Of_Single_Game);





module.exports = router;