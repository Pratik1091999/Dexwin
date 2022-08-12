
const axios = require("axios");
require("dotenv").config();
const  CronJob = require('cron').CronJob;
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


exports.job = new CronJob(
    '0 1 * * *',
    async function () {
        console.log('You will see this message every second');
        let todayDate = new Date().toISOString().slice(0, 10);
        let option = await getOptions(todayDate);
        axios.request(option).then((response) => {
            if (response.data.response.length > 0) {
                response.data.response.forEach(async(element) => {
                    const Matches = Moralis.Object.extend("MatchesToday");
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
                        matches.save().then((matchesToday) => {
                            // console.log("today data :" +  matchesToday);
                         });

                    }else{
                            console.log("Data Is already Save");
                    }
                });
            }
        })
    }
);
// job.start();