const axios = require("axios");
require("dotenv").config();
const Moralis = require("moralis/node");


var TodayGames;
/* config of get Games Api From live API */
const getOptions = (_date) => {
    const options = {
        method: 'GET',
        url: 'https://api-basketball.p.rapidapi.com/games',
        params: { date: _date },
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_Key,
            'X-RapidAPI-Host': process.env.RapidAPI_Host
        }
    };
    return options;
}

/* Get Data of all Games by Date */
exports.liveData = async (req, res) => {
    let option = await getOptions(req.params.date);
    axios.request(option).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.error(error);
        res.send(error);
    });
}

/* Get Data of All Games of Today  */
exports.todayGames = async (req, res) => {
    let todayDate = new Date().toISOString().slice(0, 10);
    let option = await getOptions(todayDate);
    axios.request(option).then((response) => {
        res.send(response.data);
        TodayGames = response.data.response;
    }).catch((error) => {
        console.error(error);
        res.send(error);
    });
}

/* Get Data of Today Completed Games */
exports.getTodayCompletedGames = async (req, res) => {
    let todayDate = new Date().toISOString().slice(0, 10);
    let option = await getOptions(todayDate);
    axios.request(option).then((response) => {
        TodayGames = response.data.response;
        // res.send(TodayGames);

        let newArray = TodayGames.filter(function (element) {
            return element.status.long == "Game Finished";
        }
        );

        res.send(newArray);
    }).catch((error) => {
        console.error(error);
        res.send(error);
    });
}

/* Get Data of Today Up Comming Games */
exports.getTodayUpCommingGames = async (req, res) => {
    let todayDate = new Date().toISOString().slice(0, 10);
    let option = await getOptions(todayDate);
    axios.request(option).then((response) => {
        TodayGames = response.data.response;
        // res.send(TodayGames);

        let newArray = TodayGames.filter(function (element) {
            return element.status.long == "Not Started";
        }
        );

        res.send(newArray);
    }).catch((error) => {
        console.error(error);
        res.send(error);
    });


}

/* Get Data of Today live Games and Store in db  */
exports.getTodayMatchesAndStoreInDB = async (req, res) => {
    let todayDate = new Date().toISOString().slice(0, 10);
    let option = await getOptions(todayDate);
    axios.request(option).then((response) => {
        if (response.data.response.length > 0) {
            response.data.response.forEach(async(element) => {
                const Matches = Moralis.Object.extend("Matches");
                const query = new Moralis.Query(Matches);
                query.equalTo("matchid", element.id);
                const results = await query.find();
                if(results.length == 0){
                    const matches = new Matches();
                    matches.set("matchid", element.id);
                    matches.set("date", element.date);
                    matches.set("time", element.time);
                    matches.set("timestamp", new Date(element.timestamp));
                    matches.set("timezone", element.timezone);
                    matches.set("stage", element.stage);
                    matches.set("week", element.week);
                    matches.set("status", element.status);
                    matches.set("league", element.league);
                    matches.set("country", element.country);
                    matches.set("teams", element.teams);
                    matches.set("scores", element.scores);
                    matches.set("moneylineOdds", []);
                    matches.set("moneyline1stHalf", []);
                    matches.set("moneyline2ndHalf", []);
                    matches.set("moneylineQtr1", []);
                    matches.set("moneylineQtr2", []);
                    matches.set("moneylineQtr3", []);
                    matches.set("moneylineQtr4", []);
                    matches.set("moneyline3waysOdds", []);
                    matches.set("moneyline3waysOddsQtr1", []);
                    matches.set("moneyline3waysOddsQtr2", []);
                    matches.set("moneyline3waysOddsQtr3", []);
                    matches.set("moneyline3waysOddsQtr4", []);
                    matches.set("moneyline3waysOdds1stHalf", []);
                    matches.set("moneyline3waysOdds2ndHalf", []);
                    matches.set("overunderOdds", []);
                    matches.set("overunder1stHalf", []);
                    matches.set("overunder2ndHalf", []);
                    matches.set("overunderQtr1", []);
                    matches.set("overunderQtr2", []);
                    matches.set("overunderQtr3", []);
                    matches.set("overunderQtr4", []);
                    matches.set("overunder3waysOdds", []);
                    matches.set("oddevenOdds", []);
                    matches.set("spreadOdds", []);
                    matches.set("spreadOddsQtr1", []);
                    matches.set("spreadOddsQtr2", []);
                    matches.set("spreadOddsQtr3", []);
                    matches.set("spreadOddsQtr4", []);
                    matches.set("spreadOdds1stHalf", []);
                    matches.set("spreadOdds2ndHalf", []);
                    matches.set("periodicOdds", []);
                    matches.set("oddEven", []);
                    matches.set("oddEvenOverTime", []);
                    matches.set("oddEven1stHalf", []);
                    matches.set("oddEven2ndHalf", []);
                    matches.set("homeOddEven", []);
                    matches.set("awayOddEven", []);
                    matches.set("oddEvenQtr1", []);
                    matches.set("oddEvenQtr2", []);
                    matches.set("oddEvenQtr3", []);
                    matches.set("oddEvenQtr4", []);
                    matches.set("homeOddEvenQtr1", []);
                    matches.set("homeOddEvenQtr2", []);
                    matches.set("homeOddEvenQtr3", []);
                    matches.set("homeOddEvenQtr4", []);
                    matches.set("homeOddEvenOverTime", []);
                    matches.set("awayOddEvenOverTime", []);
                    matches.save().then((matches) => { });
                }else{
                    const queryResult = await query.first();
                    queryResult.set("scores", element.scores);
                    queryResult.save();
                }
            });
            return res.status(200).send({ status: "success", message: "Get Today Match Successfully.", count: response.data.results, data: response.data.response });
        } else {
            return res.status(400).send({ status: "error", message: "No Data Found" });
        }
    })
}

/* Get Data of Today live Games */
exports.getTodayLiveGames = async (req, res) => {
    let todayDate = new Date().toISOString().slice(0, 10);
    let option = await getOptions(todayDate);
    axios.request(option).then((response) => {
        TodayGames = response.data.response;

        let newArray = TodayGames.filter(function (element) {
            return element.status.long !== "Not Started" &&
                   element.status.long !== "Game Finished" &&
                   element.status.long !== "Cancelled" ;
        }
        );

        res.send(newArray);
    }).catch((error) => {
        console.error(error);
        res.send(error);
    });
}


