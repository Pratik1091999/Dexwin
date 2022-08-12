const axios = require("axios");
const Moralis = require("moralis/node");
require("dotenv").config();

/* config of get Games Odds From live API */
const getOptionsForData = (gameid, bookmakerid, betid) => {
    const options = {
        method: 'GET',
        url: 'https://api-basketball.p.rapidapi.com/odds',
        params: { game: gameid, bookmaker: bookmakerid, bet: betid },
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_Key,
            'X-RapidAPI-Host': process.env.RapidAPI_Host
        }
    };
    return options;
}



/* Get all Over/Under odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 4);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunderOdds", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under Qtr1 odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_Qtr1_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 16);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunderQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr1 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under Qtr2 odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_Qtr2_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 45);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunderQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr2 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under Qtr3 odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_Qtr3_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 46);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunderQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr3 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under Qtr4 odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_Qtr4_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 45);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunderQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr4 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under 1stHalf odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_1stHalf_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 5);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunder1stHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line 1stHalf Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get all Over/Under 2ndHalf odds Data of Games by Game Id And BookmarkID  */
exports.over_Under_2ndHalf_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 31);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("overunder2ndHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line 2ndHalf Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}