module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },

  // Specifies the directory where the contract files are located
  contracts_directory: "./contracts/",
  // Specifies the directory where the compiled contract artifacts are stored
  contracts_build_directory: "./build/contracts",

  compilers: {
    // Solidity compiler
    solc: {
      version: "0.8.19",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  db: {
    enabled: false
  }
};
