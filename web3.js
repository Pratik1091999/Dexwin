const oddfile = require("./odd.json");
const odds = oddfile[0].values[0].odd * 100;
const type = oddfile[0].values[0].value;
const abi = require("./ABI.json");
const Web3 = require('web3');
const contractAddress = "0xd3b3f6540704e0e1bc42204250a8c29a584324a8";
const url = 'https://polygon-mumbai.g.alchemy.com/v2/IayB8LT29SKY7sh6GjOeV8Tc9SntXOHu';
var web3 = new Web3(url);
contract = new web3.eth.Contract(abi, contractAddress);



var privKey = "0x1941513d63965c36deed9900ac8449315645848df2a5eea731ec590f14d005fa";
var account = web3.eth.accounts.wallet.add(privKey);
console.log()
const data1 = contract.methods.CreateBet(
   ["1", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "12", "1658988719", "1658988719", "20000", "20000"]
).encodeABI()


const data2 = contract.methods.placebet(1, 521, 0, type, odds).encodeABI();


const deploy = async () => {
   console.log(
      `Attempting to createbet `
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: account.address,
         to: contractAddress,
         data: data2,
         gas: '500000'
      },
      privKey // private key variable
   );
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`// for transaction hash in rinkeby
   );
};
// deploy()
const show = async () => {
   //var a = await contract.methods.userlist(0).call();
   var b = await contract.methods.betlist(0).call();
   //console.log(a);
   console.log(b);


}
// show();
// 0x798c67bbead6c365f9e426851dbbb928bed3c21b8f0d1be7916546f703199498

















const moneLineABi = require("./moneyLineABI.json")
const moneyLinewayAddd = "0x3c9506D7528CC53381Fb9B1937105C2596896c05";

moneycontract = new web3.eth.Contract(moneLineABi, moneyLinewayAddd);

const data3 = contract.methods.CreateBet(
   ["1", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "12", "1658988719", "1658988719", "20000", "20000"]
).encodeABI()

const data4 = contract.methods.placebet(1, 521, 0, "draw", 200).encodeABI();

const deployMoneyLine3Way = async () => {
   console.log(
      `Attempting to createbet `
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: account.address,
         to: contractAddress,
         data: data2,
         gas: '500000'
      },
      privKey // private key variable
   );
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`// for transaction hash in rinkeby
   );
};
deployMoneyLine3Way()
const showMoneyLine3Way = async () => {
   var a = await contract.methods.userlist(0).call();
   console.log(a);
}

const showMoneyLine3WaybetList = async () => {
   var b = await contract.methods.betlist(0).call();
   console.log(b);
}

// showMoneyLine3Way();
// showMoneyLine3WaybetList();