const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require('./routes/User/user.routes');
const liveApiRoute = require('./routes/liveApi/liveApi.routes');
const moneylineOddsRoute = require('./routes/liveApi/moneyLineOdds.routes');
const overUnderOddsRoute =  require('./routes/liveApi/overUnderOdds.routes');
oddEvenOddsRoute = require('./routes/liveApi/oddEvenOdds.routes')
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const Moralis = require("moralis/node");
const cronUpdateGame = require("./services/cronJob/cronschedule")
app.use(express.json());


cronUpdateGame.job.start();

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "DexWin",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:8080",
			},
		],
	},
	apis: ["./routes/User/*.js" , "./routes/liveApi/*.js" ],
}; 


const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));




/* User  API Routes */
app.use('/api', userRoute);
/* live API  Routes */
app.use('/api', liveApiRoute);
/* Money Line Odds Routes*/
app.use('/api', moneylineOddsRoute);
/* Money Line Odds Routes*/
app.use('/api', overUnderOddsRoute);
/* Odd/Even Odds Routes*/
app.use('/api', oddEvenOddsRoute);



/* Mongodb Coonect */
mongoose.connect(process.env.DEVELOPMENT_DB_URL).then(() => {
    console.log("Database Connected");
});

let PORT = process.env.PORT || 8080
app.listen(PORT , () => {
    console.log("Server running on port 8080");
});

/*moralis Connet */
const moralisConnet = async() => {
    const serverUrl = process.env.MORALIS_APP_API;
    const appId = process.env.MORALIS_APP_ID;
    const masterKey = process.env.MORALIS_MASTER_KEY;
    await Moralis.start({ serverUrl, appId, masterKey });
    console.log("MoralisDB Connect 😄😄😄");
}

moralisConnet();