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

/* Get Odd Even Qtr1 odds Data of Games by Game Id And BookmarkID */
exports.Odd_Even_Qtr1_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 26);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEvenQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get odd Even Qtr1 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Odd Even Qtr2 odds Data of Games by Game Id And BookmarkID */
exports.Odd_Even_Qtr2_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 66);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEvenQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get odd Even Qtr2 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Odd Even Qtr3 odds Data of Games by Game Id And BookmarkID */
exports.Odd_Even_Qtr3_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 67);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEvenQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get odd Even Qtr3 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Odd Even Qtr4 odds Data of Games by Game Id And BookmarkID */
exports.Odd_Even_Qtr4_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 68);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEvenQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get odd Even Qtr4 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Home Odd Even Qtr1 odds Data of Games by Game Id And BookmarkID */
exports.home_Odd_Even_Qtr1_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 69);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEvenQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Home odd Even Qtr1 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Home Odd Even Qtr2 odds Data of Games by Game Id And BookmarkID */
exports.home_Odd_Even_Qtr2_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 69);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEvenQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Home odd Even Qtr2 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Home Odd Even Qtr3 odds Data of Games by Game Id And BookmarkID */
exports.home_Odd_Even_Qtr3_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 69);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEvenQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Home odd Even Qtr3 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Home Odd Even Qtr4 odds Data of Games by Game Id And BookmarkID */
exports.home_Odd_Even_Qtr4_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 69);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEvenQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Home odd Even Qtr4 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Home Odd Even Over Time  odds Data of Games by Game Id And BookmarkID */
exports.home_Odd_Even_Over_Time_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 87);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEvenOverTime ", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Home odd Even Over Time  Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}

/* Get Away Odd Even Over Time  odds Data of Games by Game Id And BookmarkID */
exports.Away_Odd_Even_Over_Time_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOptionsForData(req.query.gameid, req.query.bookmakerid, 88);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("awayOddEvenOverTime ", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Away odd Even Over Time  Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        return res.status(500).send({ status: "error", message: "Sever Error" });
    });
}