require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember evil install open fortune someone'; 
let testAccounts = [
"0x8222f3e16ed4436c9ecfaef5c6ab61f4848a6606a950d896b74b08dfe5761c7a",
"0xd95af4dbe4cbf369fb1f1fbeb396aca02b00e50d748979a96f02e8e9495f88c7",
"0x65f0378e392ee1bc7fedc4705f5b871ddc670d6b9927dd7fb835a774b8a81570",
"0xf5f91406360ca55a79abb91fe7810d2f31f38e68d6f8fb2b6fea6f7426b81385",
"0x8577a0db427998be4a9beb4ac68027e98cea43038406364616f0ef536ae21846",
"0x52df0d4482edca37d7ee3cceb7f46687ff9dda87f078752e4104b9c4d19b4fda",
"0xe25dc35afdb7af089e776192c8961e912580be704603236b05254cc6dd41158d",
"0xb307deab69cd027709bf498db0d18db685c59c775d43cb965d59399caadef00b",
"0xf4f8de97f8b37bcc5309210517ef73001afbf4f4723ec8ba55cc791bb64327d8",
"0xbc42a86e0982343c19a3c298c4c1ee46d889f1ca55aa8dd14a58c965809f432b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

