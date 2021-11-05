require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net prosper hunt perfect fresh squirrel'; 
let testAccounts = [
"0xbe81b36575191238c913a2550ac3e28f9f25b4f60b4eca3896efe738b491dc66",
"0xb1af3dd3b53e7d11b48275cc65000a725a52090c85ac0496c8f369cad86d54fa",
"0x0c2a0107fb58b433cb6c0bd71a190c5270c6508bef8aff7dbc9ae3e5b242ad95",
"0xcad30bef42f9d430bfba781e7380c8507bdc09c3009a2f5e2e24b218666688f5",
"0x25f926874a806e7434a4edec098ed4d3a92891d39defea7469bc34b54c9ba70b",
"0x111c3dacbd8637739cb1114ea21cc5c84dc51d819b5fbcee359bc6714078411d",
"0x8749e725713948dbdd6cecad72b05b21e0954e9fabfe9e1789598e8a6fe9763a",
"0x6d11c08d5926a29307ea587f9f4c3e57d03ac475e2c5d1136f81ee60c7fa18f2",
"0xcf976cff0900a54cfbe08b9a1ac8e61978c0c40f5f9fcd20abf84a2e24658d4f",
"0xc1b81bf1a6f09ce835c2d00c8ba4e8526126894a63cdb481af63971d84224080"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


