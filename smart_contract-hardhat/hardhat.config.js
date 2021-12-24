require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.7.3",
  networks: {
    fantom: {
      url: process.env.FANTOM_NET,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};