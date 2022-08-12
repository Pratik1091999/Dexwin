//import { SEPCPushConnector } from '@everymatrix/om-connector';
const { toggleDebugMode,SEPCPushConnector, SEPCPullConnector } = require('@everymatrix/om-connector');
var fs = require('fs');

class LbPushConnector extends SEPCPushConnector

{

// variable where the last update batch uuid will be saved; use your own logic to save the latest processed update

lastChangeBatchUuid = null;



// override method responsible for notifying

// about new initial data messages

async notifyInitialDump(initialData)

{

console.log(initialData);
const data = await JSON.stringify(initialData, null, 4);
fs.writeFileSync('initaldata.json', data, function (err) {
    if (err) throw err;
    console.log('Saved inital');
  });

}



// override method responsible for notifying

// about new update messages

async notifyEntityUpdates(updateData){
console.log(updateData);
const  updatedData = await JSON.stringify(updateData, null, 4);
fs.writeFileSync('updatedData.json', updateData, function (err) {
    if (err) throw err;
    console.log('Saved updated Data ');
  });

{

    //console.log(updateData);
    const data = await JSON.stringify(updateData, null, 4);
    fs.writeFileSync('updateddata.json', data, function (err) {
        if (err) throw err;
        console.log('Savedupdate ');
      });
}

}

// return the last saved uuid as you see fit, in order to avoid re-subscription

getLastAppliedEntityChangeBatchUuid()

{

return this.lastChangeBatchUuid;

}

}

const hostName = "sept.oddsmatrix.com";
const port =7000;



const pushConnector = new LbPushConnector(hostName, port);
const subscriptionName  = "DexWin.bet";
pushConnector.start(subscriptionName);


