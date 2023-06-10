
//get all pool
console.clear()

console.log('getPools USDC');
const fs = require('fs');
const path = require('path');

const MyTx_ = 11; // Amount
const MyTx__ = Number(MyTx_);
const MyTx = MyTx_.toString();

const chalk = require('chalk');
//const url = 'wss://divine-bitter-butterfly.bsc.discover.quiknode.pro/caf72854fe32ea3d2d9230273443f7d66de7be28/';
//const url = 'wss://ancient-empty-arm.bsc.discover.quiknode.pro/b435fadd079f2ad5a8c21f5c4a34e6f624c004c4/';
const url = 'ws://localhost:8546';


const Web3 = require('web3');
const ethers = require('ethers');


const provider = new ethers.providers.WebSocketProvider(url);
const wallet = new ethers.Wallet('A51adec6e9a46fe0ef154f990922cc28fbfdab7ebe62352e927c80be3c33ce71d');  // private key
const web3 = new Web3(new Web3.providers.WebsocketProvider(url));
const signer = wallet.connect(provider);



 
const abiOfToken = [{"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "","type": "string"}], "payable": false, "stateMutability": "view", "type": "function"},{"constant": false, "inputs": [{"name": "_spender","type": "address"},{"name": "_value","type": "uint256"}], "name": "approve", "outputs": [{"name": "","type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},{"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "","type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},{"constant": false, "inputs": [{"name": "_from","type": "address"},{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}], "name": "transferFrom", "outputs": [{"name": "","type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},{"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "","type": "uint8"}], "payable": false, "stateMutability": "view", "type": "function"},{"constant": true, "inputs": [{"name": "_owner","type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance","type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},{"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "","type": "string"}], "payable": false, "stateMutability": "view", "type": "function"},{"constant": false, "inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}], "name": "transfer", "outputs": [{"name": "","type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},{"constant": true, "inputs": [{"name": "_owner","type": "address"},{"name": "_spender","type": "address"}], "name": "allowance", "outputs": [{"name": "","type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},{"payable": true, "stateMutability": "payable", "type": "fallback"},{"anonymous": false, "inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "spender","type": "address"},{"indexed": false,"name": "value","type": "uint256"}], "name": "Approval", "type": "event"},{"anonymous": false, "inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}], "name": "Transfer", "type": "event"}];
const abi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"},{"anonymous": false, "inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "spender","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}], "name": "Approval", "type": "event"},{"anonymous": false, "inputs": [{"indexed": true,"internalType": "address","name": "sender","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount0","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount1","type": "uint256"},{"indexed": true,"internalType": "address","name": "to","type": "address"}], "name": "Burn", "type": "event"},{"anonymous": false, "inputs": [{"indexed": true,"internalType": "address","name": "sender","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount0","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount1","type": "uint256"}], "name": "Mint", "type": "event"},{"anonymous": false, "inputs": [{"indexed": true,"internalType": "address","name": "sender","type": "address"}, {"indexed": false,"internalType": "uint256","name": "amount0In","type": "uint256"}, {"indexed": false,"internalType": "uint256","name": "amount1In","type": "uint256"}, {"indexed": false,"internalType": "uint256","name": "amount0Out","type": "uint256"}, {"indexed": false,"internalType": "uint256","name": "amount1Out","type": "uint256"}, {"indexed": true,"internalType": "address","name": "to","type": "address"}], "name": "Swap", "type": "event"},{"anonymous": false, "inputs": [{"indexed": false,"internalType": "uint112","name": "reserve0","type": "uint112"}, {"indexed": false,"internalType": "uint112","name": "reserve1","type": "uint112"}], "name": "Sync", "type": "event"},{"anonymous": false, "inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"}, {"indexed": true,"internalType": "address","name": "to","type": "address"}, {"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}], "name": "Transfer", "type": "event"},{"inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{"internalType": "bytes32","name": "","type": "bytes32"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{"internalType": "bytes32","name": "","type": "bytes32"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}, {"internalType": "address","name": "","type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "spender","type": "address"}, {"internalType": "uint256","name": "value","type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool","name": "","type": "bool"}], "stateMutability": "nonpayable", "type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}], "name": "burn", "outputs": [{"internalType": "uint256","name": "amount0","type": "uint256"}, {"internalType": "uint256","name": "amount1","type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8","name": "","type": "uint8"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "factory", "outputs": [{"internalType": "address","name": "","type": "address"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "getReserves", "outputs": [{"internalType": "uint112","name": "_reserve0","type": "uint112"}, {"internalType": "uint112","name": "_reserve1","type": "uint112"}, {"internalType": "uint32","name": "_blockTimestampLast","type": "uint32"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "_token0","type": "address"}, {"internalType": "address","name": "_token1","type": "address"}], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "kLast", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}], "name": "mint", "outputs": [{"internalType": "uint256","name": "liquidity","type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "name", "outputs": [{"internalType": "string","name": "","type": "string"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}], "name": "nonces", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}, {"internalType": "address","name": "spender","type": "address"}, {"internalType": "uint256","name": "value","type": "uint256"}, {"internalType": "uint256","name": "deadline","type": "uint256"}, {"internalType": "uint8","name": "v","type": "uint8"}, {"internalType": "bytes32","name": "r","type": "bytes32"}, {"internalType": "bytes32","name": "s","type": "bytes32"}], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "price0CumulativeLast", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "price1CumulativeLast", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}], "name": "skim", "outputs": [], "stateMutability": "nonpayable", "type": "function"},{"inputs": [{"internalType": "uint256","name": "amount0Out","type": "uint256"}, {"internalType": "uint256","name": "amount1Out","type": "uint256"}, {"internalType": "address","name": "to","type": "address"}, {"internalType": "bytes","name": "data","type": "bytes"}], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "symbol", "outputs": [{"internalType": "string","name": "","type": "string"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function"},{"inputs": [], "name": "token0", "outputs": [{"internalType": "address","name": "","type": "address"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "token1", "outputs": [{"internalType": "address","name": "","type": "address"}], "stateMutability": "view", "type": "function"},{"inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256","name": "","type": "uint256"}], "stateMutability": "view", "type": "function"},{"inputs": [{"internalType": "address","name": "to","type": "address"}, {"internalType": "uint256","name": "value","type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool","name": "","type": "bool"}], "stateMutability": "nonpayable", "type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"}, {"internalType": "address","name": "to","type": "address"}, {"internalType": "uint256","name": "value","type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool","name": "","type": "bool"}], "stateMutability": "nonpayable", "type": "function"}];

 


const BUSD = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
const USDT = '0x55d398326f99059ff775485246999027b3197955';
const USDC = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const ETH = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8';
const BTC = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c';

const FactoryAndRouter = [


{    
        router: "0xbe65b8f75b9f20f4c522e0067a3887fada714800",
        factory: "0x0eb58e5c8aa63314ff5547289185cc4583dfcbd5"
},        
{
        
        router: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
        factory: "0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6"
},        
{
        
        router : "0xBE930734eDAfc41676A76d2240f206Ed36dafbA2",
        factory: "0xA5Ba037Ec16c45f8ae09e013C1849554C01385f5"
},        
       
{
        
        router : "0x78df70615ffc8066cc0887917f2Cd72092C86409",
        factory: "0x878dFE971d44e9122048308301F540910Bbd934c"
},        
{
        
        router : "0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348",
        factory: "0x06530550A48F990360DFD642d2132354A144F31d"
},        
{
        
        router : "0xA63B831264183D755756ca9AE5190fF5183d65D6",
        factory: "0x31aFfd875e9f68cd6Cd12Cee8943566c9A4bBA13"
},        
{
        
        
        router: "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
        factory: "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7"
},        
{
        
        router : "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        factory : "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
},        
{
        
        router : "0x0a04fA4A842fa21e202DD07E721B048b466EDb47",
        factory : "0x70eab9FAfEE9BFA372EbEe7B2B6CFF78b996f6df"
},        
{
        
        router : "0xeE97acdBeF6424d4f98b39d96752C0bb92eCe85b",
        factory : "0xffb4Fcc71ecF3Cb9dAc0F0CE2f19C598EC45c075"
},        
{
        
        router : "0xF29acE1FE5f36389d0dDe450a0195A30c3770245",
        factory : "0xD04A80baeeF12fD7b1D1ee6b1f8ad354f81bc4d7"
},        
{
        
        1: "0xB3ca4D73b1e0EA2c53B42173388cC01e1c226F40",
        factory : "0x9A272d734c5a0d7d84E0a892e891a553e8066dce"
},        
{
        
        router : "0xD3a5d478c9a407b357269eDB1557004704c4Cee0",
        factory : "0xEf06A959B7a722E52341e89D7E59EFdCEdEE5553"
},        
{
        
        router : "0x27F1Bbe74688CA26041F1D8AD3741219750AaF22",
        
        factory : "0xEAF34dFF833d4bcCE7ed393280B02c3C369A4522"
},        
{
        
        router : "0xfF4CEf88372a9139d92141049caD7288F37A6cAB",
        factory : "0x2A24C4b12f62b14E35fdfFe9bAf9c2E16Ba11D08"
},        
{
        
        router : "0x05E61E0cDcD2170a76F9568a110CEe3AFdD6c46f",
        factory : "0xf0bc2E21a76513aa7CC2730C7A1D6deE0790751f"
},        
{
        router : "0x44Bd27A4ea98b9855AAfC8d3e5c9DC37b5Ec6f23",
        factory : "0xe44584C03AA6ed0716D496CeaD7bC2920609F395"
},        
{
        
        router : "0x62c1A0d92B09D0912F7BB9c96C5ecdC7F2b87059",
        factory : "0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8"
},        
{
        
        router : "0x2F30baB00425D480b5E00c2172Cd049F7F01eB64",
        factory : "0x1a5D8287132a6b584D3354a03779CE86C64e3F54"
},        
{
        
        router : "0xD654953D746f0b114d1F85332Dc43446ac79413d",
        factory : "0xd6715A8be3944ec72738F0BFDC739d48C3c29349"
},        
{
        
        router : "0x6B45064F128cA5ADdbf79825186F4e3e3c9E7EB5",
        factory : "0x1A04Afe9778f95829017741bF46C9524B91433fB"
},        
{
        
        router : "0x1b489bD15C04b9a06d98D90816921648ac0565aE",
        factory : "0x04E12e2CCB4aA8d51e95748F17679B6916373bD0"
},        
{
        
        router : "0xC9a0F685F39d05D835c369036251ee3aEaaF3c47",
        factory : "0x4693B62E5fc9c0a45F89D62e6300a03C85f43137"
},        
{
        
        router : "0x7529740ECa172707D8edBCcdD2Cba3d140ACBd85",
        factory : "0x0944AB692786D9104AE9a29778285c41C33c0415"
},        
{
        
        router : "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
        factory : "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
},        
{
        
        router : "0x7a6b53382E9806deB0A3b42450Fb9B7A679E89d9",
        factory : "0x9d6983d173c674F3835A90900d125467d1d02E2e"
},        
{
        
        router : "0x38326a16FDCDEb681d47C3DdfebE4911c7019A86",
        factory : "0x80908495143fF92fB497A937B681a1D44021Ec62"
},        
{
        
        router : "0x8bfFB5562ff30f555894E101E6DAD31D271EEd5a",
        factory : "0x79C342FddBBF376cA6B4EFAc7aaA457D6063F8Cb"
},        
{
        
        router : "0xb91fC15ed0c8C15d5a550fb5D699AeE8aFFB8C53",
        factory : "0x20aB15EaAFB195DeE6a145e845a8e6066513357D"
},        
{
        
        router : "0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd",
        factory : "0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da"
},        
{
        
        router : "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
        factory : "0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
},        
{
        
        router : "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
        factory : "0x858E3312ed3A876947EA49d572A7C42DE08af7EE"
},
        

];
const token = [


        '0xAf98e6c2D3b520F4e9b3D7ea22ad7AeFFFDbc2fd',
        '0x527D5cBB37C56304121f05D54E4Fb75737517Ae0',
        '0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA',
        '0x58f0C2fd4B7B0fBaC97c9cC71A5Eb810627734C8',
        '0x0A7e7D210C45c4abBA183C1D0551B53AD1756ecA',
        '0x61D6C91fAD38856bE94178BEf3aC62994a3b09d7',
        '0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90',
        '0xFAfD4CB703B25CB22f43D017e7e0d75FEBc26743',
        '0xB59A85103b7a21c195D80DC1678550420fcAB724',
        '0x32aF3e999D657917aA646FCad40520686CD41667',
        '0x7164712F2136a03d25859408eb15AAf36640B71A',
        '0x8E10F08C9A56a93B6adbfBcFda421919B3357596',
        '0x1e4fFa373d94c95717Fb83eC026b2e0e2F443bB0',
        '0x6bB069E6012e503e1e343CDBffe937ccA5419E48',
        '0xe5625bAfcEAF7C5a2Ea29C8d377f1808C6Cc3aC0',
        '0x7Ab6eedd9443e0e98E5Ea93667CA5B250b8ddA51',
        '0xdBf8265B1d5244A13424f13977723AcF5395eAB2',
        '0x7283DfA2d8D7e277b148cc263B5d8Ae02f1076D3',
        '0x587C16b84c64751760f6e3e7e32F896634704352',
        '0xBEc4EF64098029A80cc451d7f532C30a8Ebdf5Fb',
        '0x3ab63309F85df5D4c3351ff8EACb87980E05Da4E',
        '0xB4B42D968CBF9e7d07ecA5f03F8B4D99Dfd7f7C9',
        '0xE03495fCa9e644d55B65c30ed9fdC3321C260126',
        '0x7f479d78380Ad00341fdD7322fE8AEf766e29e5A',
        '0x233a010FE3ABE7B354941399A3Dc09f267bA90E0',
        '0x71F2Ee1096f937b96bB85f6656f852667b0c7A32',
        '0xA361C79783833524dc7838399a4862B5f47038b8',
        '0x07B36F2549291d320132712a1E64d3826B1FB4D7',
        '0x4f0E7A273c7FF13062Fa581bEe4Ffabdae94328f',
        '0x19048172b5A0893ad008e7c52C11a6DD3C8784a1',
        '0xbB58F5C1C7521F6dA845B76C75081505254377d7',
        '0x8c01dFbCBCa328F3B379957BD93B992388EdcbEB',
        '0xe2D5F82fcaC139e1E5fDb9C6Ac63BC6443f00890',
        '0xB4A4E713EA36E045bca65D04755AA97a0b70931d',
        '0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99',
        '0x74b5656CDfc26BadB6B76d820565707347911071',
        '0x2c2B19d773Ffa5125a455656ea916399D87BDB15',
        '0xED3f226e2E666be256CeEf3bB139c6e5A7aa6eD3',
        '0xD1587Ee50e0333f0C4aDcF261379A61B1486c5d2',
        '0x3CB7378565718c64Ab86970802140Cc48eF1f969',
        '0x0487b824c8261462F88940f97053E65bDb498446',
        '0xaB95d714a049025F1C7e35D0805575F4a6058a0c',
        '0x6A79E08db6c08b8F88703794bF1a47f5a01eB9dC',
        '0x609ba367dF2DAF325F1266FE4dA58F1CfaF40D51',
        '0x5Db46541738E4213f651639bf3103C1CE3Fd66d4',
        '0xA19D3F4219E2Ed6DC1cb595dB20F70b8b6866734',
        '0x46cA6F4704077651c2D1b55dAADd88475CE15c2c',
        '0x4f491d389A5bF7C56bd1e4d8aF2280fD217C8543',
        '0x980e2937677c7Af859B0A9c741370C60c0A28b26',
        '0xEBA3403DAfAe0788346A232153B1bf654dB53368',
        '0xF71a7D20c6FC34A3Bf362780aee0FC9Ee3eCE5fE',
        '0x4a16965E5D7b6E6af0C4A6b4734C840270cB2311',
        '0x5066C68cAe3B9BdaCD6A1A37c90F2d1723559D18',
        '0x9E327B55D5791bd1b08222F7886d7a82EB11aCEE',
        '0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6',
        '0x6Ec90334d89dBdc89E08A133271be3d104128Edb',
        '0x5344C20FD242545F31723689662AC12b9556fC3d',
        '0x9934C20B285ecEa71B7776a97eCF49556C176673',
        '0x4817d4b076a646fb1248C89250Ce492A5CF1dB81',
        '0x8b14A1d887D2F91Fe8c0C7dD31a454B64df4211c',
        '0x4d2B4bc8a1B861dAEaEE0ef7EBA1764e08bc976a',
        '0xE5e2118415aC39f3589eB74b9c9F452932982C5E',
        '0x819a27c0D14a1D7e05D4E31a4778a0662dB5Cb00',
        '0x7cf2Cb3CD0A4b31a309B78526f33CEDb7CeD0766',
        '0xBe6dE6b614b079236839404440E3e8867B5d6751',
        '0x1C8F79EF0A9502c382DF9ED96e138613A814AF19',
        '0xb6c25FeDC58fA52774608058c1751cF3d6B852ed',
        '0xc836d8dC361E44DbE64c4862D55BA041F88Ddd39',
        '0x28470aDc7FeF2e29E38632d8C17748F53C04e2E0',
        '0x780622E3043D329abd7B1fD522C9B6c877cfb8c0',
        '0x3Cd0e0154acB80bfbDd8DBfFe3cB61ccf23C981e',
        '0xa75d9ca2a0a1D547409D82e1B06618EC284A2CeD',
        '0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D',
        '0x855028C40C9f90CD4295C0FbC9eC06C528900114',
        '0x42E70587ee2A272d215F67e3B0eDCbf35E232c94',
        '0xb160A5F19ebccd8E0549549327e43DDd1D023526',
        '0xa1578dAf3EEB1ACCC3767C687cd5A0d9Df8B20Cb',
        '0x56AA0237244C67B9A854B4Efe8479cCa0B105289',
        '0x6c015277B0f9b8c24B20BD8BbbD29FDb25738A69',
        '0x298632D8EA20d321fAB1C9B473df5dBDA249B2b6',
        '0x95D28C216D7a39FB8Cb62fD67B47eE932C531b5B',
        '0x918f2fe1b50ECaeaeb95482669881eD42A978083',
        '0xcfae931A56aBa505893f2A7681CBB07799078054',
        '0x55F96C7005D7C684A65Ee653B07b5FE1507C56ab',
        '0x5eeB28B5aEF44b6664b342D23b1AaDcE84196386',
        '0xA369EaB397BeF8e35fFc065c3eC9b800A548c059',
        '0xcBCD9c0F344960F40c5CE7eb17A17E837Fe8Bb92',
        '0xe2faF52FfaAf1EC39287DdDae5E6Fc50c3f06Be3',
        '0x7A3e66DAD59b99404dC28D48767B7528301318F6',
        '0xE1c68e6F3DaFeE1Cdd6C1A73D01A6Ca86153DC23',
        '0x6Ad2B6d5d8F96c8E581D3100C12878b2151A0423',
        '0x0eA554fde75405df24D0ec6237C6eF775cd4FED9',
        '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
        '0x17DDa4de32d5d5A43053703E503230953346c7Ed',
        '0x30240b13fdad9eFEB7a8A85994241374090186a9',
        '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
        '0x9e26c50B8A3b7652c3fD2B378252A8647a0C9268',
        '0x6e0D5213791e587452365b9EE9525ED1D06Ac78f',
        '0x8b303d5BbfBbf46F1a4d9741E491e06986894e18',
        '0xd6edbB510af7901b2C049ce778b65a740c4aeB7f',
        '0x31FFbe9bf84b4d9d02cd40eCcAB4Af1E2877Bbc6',
        '0xE894E4296a3857E7Ed858720F2CD1093fA7dba3e',
        '0xAff6a69959314d06f7ED743232144F98701e34D5',
        '0x22ee169291179079BC17963F2c6bFD2f904D030b',
        '0x63982bBD062cf9d8efcA59EC37609DCC0bc2F305',
        '0xE861DFf2099d15185B50dE380Db8249984Cb26Ea',
        '0xE586970CF8f4E8b8360BBc8222D6827a844441FA',
        '0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A',
        '0x31353E2826Cc4402735E55a175a75CE2569B4226',
        '0x4eaf5492838F34AAf6a5E1c603872DA94BAeDc7d',
        '0x6F620EC89B8479e97A6985792d0c64F237566746',
        '0x4c2F66Dc540eB6A87a7aCbBE6d30d16849650884',
        '0x1C25222994531C4AC35E4d94bbf7552c9aa92E32',
        '0x0c2f536d69b0558AB136A071eEd18F3Aee6923F9',
        '0xe89508D74579A06A65B907c91F697CF4F8D9Fac7',
        '0x8b3b45E48bE6C31366ffd9dD4F29C1edFFcbA97D',
        '0x8690Cb98496EF0f8c6417D78b5e0E29907668808',
        '0x948b7b39e665A8adD9e128b0c378F99152172274',
        '0x1C18527A2fa55859836f17D7B44413455476615f',
        '0x6c6D604D3f07aBE287C1A3dF0281e999A83495C0',
        '0x8e17ed70334C87eCE574C9d537BC153d8609e2a3',
        '0x5c0d3C165Dc46cFD5Ec80bbb1Bf7cb8631f9d6c7',
        '0x22168882276e5D5e1da694343b41DD7726eeb288',
        '0x7f4e04aA61B9a46403c1634E91Bf31Df3Bc554CF',
        '0xB7DAcf54a54bFea818F21472d3E71a89287841A7',
        '0x3f203c1403Ce39d4D42c4667287A7fB2b1DB1066',
        '0xafc4d521DF3C0566d61931F81f02f1A525Bad04D',
        '0xe70CBdE2442097B9d0e45145Edf73dBd4639E5f0',
        '0xA58950F05FeA2277d2608748412bf9F802eA4901',
        '0x7207Ab575daDD6025e2B334424C5eD10A0282778',
        '0x837A130aED114300Bab4f9f1F4f500682f7efd48',
        '0x7b0E7E40eE4672599F7095D1DdD730b0805195BA',
        '0x7FA4CD8AeEdCb8d36DBC5d856E3A1BEe490D7b36',
        '0xC19FE21B4ef356f2f65894392dDe4252AA083605',
        '0x541E619858737031A1244A5d0Cd47E5ef480342c',
        '0xe70D287AaD130e2Cee520e75d12C6efa4f1A377d',
        '0x448CE61f8b4B3fC73B6128C91e5689Fa06055bdE',
        '0x46D502Fac9aEA7c5bC7B13C8Ec9D02378C33D36F',
        '0xc757aEAA6F44427f8D2B57D40C4Acbc7b7765EF9',
        '0xaAdFf17d56d80312b392Ced903f3E8dBE5c3ece7',
        '0xD68F9F6769F68cB30505aA3F175F9e81E58503c8',
        '0x747B1223B23E53070c54Df355FAC2E198aA54708',
        '0xaB837ac8800083653E5d15cEaA7E23d20adFC991',
        '0x68172D2AC777b484e13798960BBfD7E4D800fd65',
        '0xd73F32833B6D5D9c8070c23e599e283a3039823C',
        '0x4D78bf71593a529F42960074D7B5Bc8dD1DF8158',
        '0xc61Bf396C6B1116de88529432a8f4f9e3f84124C',
        '0xdc279ddC65Ea17382BbF9a141bb71550CdD587B3',
        '0x06082951EFDb5095E45e3C08cB103782645a2e69',
        '0xCED59c3249F20Ca36FBA764bFDD9D94f471b3154',
        '0xCC9769C83e7BAB501a2bbff47325109334446381',
        '0xF9661bf16f7521102EAF412a29E68cfd791a2Ca3',
        '0x1967ABfdc4ae7961C5a8A5395469222260C27c02',
        '0xAA15535fd352F60B937B4e59D8a2D52110A419dD',
        '0x70802Af0Ba10Dd5bB33276B5b37574b6451Db3D9',
        '0xA502E153ee236a89842Cbd4Bc59779cF99D589e1',
        '0x46943113Ae84e732bB510B5F7686D8B76fF56774',
        '0x3fF997eAeA488A082fb7Efc8e6B9951990D0c3aB',
        '0x2952beb1326acCbB5243725bd4Da2fC937BCa087',
        '0x9d58bE3a935a269D7423D8C027532b7F44dCEE2a',
        '0x3f76cB0b1C2Be725f4015Bc55Fe8cF89dbB4d938',
        '0x421F9D1B2147F534e3AeFc6AF95EdD4Cf2430874',
        '0x1FC2C1C218B079F21b6FdD52b07e4fd256c0A17f',
        '0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322',
        '0xbEA2576F400B070c7cDf11d1cBB49dE0C84e3bCF',
        '0x8F0342BF1063b1d947B0F2Cc611301D611ac3487',
        '0x1F01Dc57C66C2f87D8eab9C625D335e9defE6912',
        '0x84b174628911896a3b87Fa6980D05Dbc2eE74836',
        '0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4',
        '0xA5594a2CAF790C8Eeb9037AB18d0Da305bbdC8b6',
        '0x377c6E37633e390aEf9AFB4F5E0B16689351EeD4',
        '0xAe28714390e95B8dF1Ef847C58AEaC23ED457702',
        '0xA2086F4a3955A520A1743D68CDbcf064Ee1746Cd',
        '0x2eaBcb730cA72f0AFCBc9DA24d105345CB0852AA',
        '0x1657223BB7B9d272957B3F3Cf70F9c36a4c99aB9',
        '0x0EB3DeB9fd51817878e485f575ed766b0032108D',
        '0x02d7F3313e8fE95d2150E0c63461fbC6944cfCaF',
        '0x87e41175921d283c10Ce42C9200AA3c8d51835A2',
        '0xdfd85305A752d70A07A995Fa724Ac4Ff787EBef2',
        '0x51F9e1235107722b25F22c6e6edcB378dfc31EBa',
        '0x3e520f16aC21C271dB7117e8D6574b81FdC9F66C',
        '0x40C0Ba4E74D9B95f2647526ee35D6E756FA8BF09',
        '0x0321394309CaD7E0E424650844c3AB3b659315d3',
        '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
        '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC',
        '0xBd20F9B0DbeED33FC4436F0aE7a34eedEFdA2878',
        '0x431e0cD023a32532BF3969CddFc002c00E98429d',
        '0x9dCD6ab0511b2e72Af3d088538D678bae9bBF552',
        '0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b',
        '0xe8670901E86818745b28C8b30B17986958fCe8Cc',
        '0xd52669712f253CD6b2Fe8A8638F66ed726cb770C',
        '0x4be63a9b26EE89b9a3a13fd0aA1D0b2427C135f8',
        '0x80dbA9C32b7aB5445e482387A5522e24C0Ba4C24',
        '0x4c0415A6e340eCCebff58131799C6c4127cc39FA',
        '0xB68A34756D8A92CCc821EFfA03d802846594b64E',
        '0x326Fda97066970fbfbeE8308731ca40fAC682615',
        '0x2FCB955689616CB4B6dbfAC7319F2A5c991D035A',
        '0xeC722154F3dDf7CC08C136ADFf57c5D4aa210984',
        '0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f',
        '0xfAE5a913fAc73Ef8ED647e53dc42d2fEBc9eA6c9',
        '0x4a080377f83D669D7bB83B3184a8A5E61B500608',
        '0x80Df74Dc3dE4477eaEE5c3E14348c6bF7ffFAd87',
        '0xb897D0a0f68800f8Be7D69ffDD1c24b69f57Bf3e',
        '0x179960442Ece8dE9f390011b7f7c9b56C74e4D0a',
        '0xBC7370641ddCF16A27eeA11230Af4a9F247B61F9',
        '0x4E141769366634D9c4e498257Fa7EC204d22b634',
        '0x1a591BC628458A76D0553A8B8C57bf32d3ac150F',
        '0x3De70DD9F65a860140F69F286A483f46e9Be875A',
        '0x11C3f759c0AAE61078ec923Af15F2f6FA2D326CE',
        '0x1EFB1C30E453Eb4C61E5e30ba80d4FB599378489',
        '0xBB00BCaa4fe12AEa0a74956d9531ec96Cf4470B0',
        '0xC25AF3123d2420054c8fcd144c21113aa2853F39',
        '0x487E464ED2F07306D5D0ADd219c7e13d3be9D867',
        '0xf6baE461bA4dEb0039Fb36006f1d0d7cF62d84e9',
        '0x0e20E3216EA172fcf9eAa19723b119e090fD353f',
        '0x3764Bc0de9B6a68c67929130aaEC16b6060cAb8c',
        '0xf3bE1A4a47576208C1592Cc027087CE154B00672',
        '0x1df2bF8bFf0f2a8d67cf84ca55Fc9cCC9C3dA018',
        '0x00518f36d2E0E514E8EB94D34124fC18eE756f10',
        '0xB2ebbFF04Bdcb3DED0Cb99C544521A17e940FF96',
        '0x61AE5B63C8F7400C21613F882C9b0a8eeC586a10',
        '0x92333A0AD6930ddD73fb310bAC648ed1F451907e',
        '0xDaf4F11947E73f0eeBEf4a820f4Be9B854aa993B',
        '0xC79d1fD14F514cD713b5cA43D288a782Ae53eAb2',
        '0x914737dfbfdb0DBADe3C9Ff10566Fa920d04ac19',
        '0x2e2EA48C9412E0ABb2D6accCeC571C6b6411725a',
        '0x4aD7078208e465FAc0C90DAcB4D58E2901314A63',
        '0x2304AE9aF71a5AE1b92f0091aC3cafF105C67766',
        '0x98631c69602083D04f83934576A53e2a133D482F',
        '0xc9FC056010D41f6D19B1ACA8450b152cE2c3ca8a',
        '0x26A5dFab467d4f58fB266648CAe769503CEC9580',
        '0x26194992e8BbAD50Eb9d9D46d5114068511B910B',
        '0x4118673275844F4dB4b9aaa30753ec3Bddd5F0A9',
        '0xb0CB8dd3B2aa9558bA632A350E242f58D2E289b0',
        '0x9aaB0A9B3A2F7cF669f1385c48e0a063B93834bB',
        '0xB080171C8999C336cC115d4d8224C2dE51657A1c',
        '0x0fA9651a0ecC19906843C13c60443300B9d37355',
        '0x7859B01BbF675d67Da8cD128a50D155cd881B576',
        '0x582C12b30F85162Fa393e5DBe2573f9F601f9D91',
        '0x5F26Fa0C2Ee5d3c0323D861d0C503f31Ac212662',
        '0x805d53D9B85c56aAa059005c553b65C084bcEA85',
        '0xddD9d7D280c78b564C55BEb26562E367d4b9Bd8a',
        '0x19314Dfa75CfC1E5154f95daFaB217646bdb79AC',
        '0xE17915332D853093af2A35b0f7AcB3deA8734F0D',
        '0x180cFBE9843d79BcAFcbcDF23590247793DFc95B',
        '0x6a0b045Ea1cbC87946eE6ca4D118dC0B5c152455',
        '0xdE9620E10b96B6C713dF1df00361e8AaFD486897',
        '0x43B72F3B99564257671D5c47dF663585344C1459',
        '0x849Cc5ef9DDd08691EE908aD8001003b4bF104e5',
        '0x3e29633846E8b857B7f6d7f293F895186804264b',
        '0xc580342c7127c679dB6643C3d2E81586480accFB',
        '0xB7FeEAb5ea787e83a40f185237C717597363E0d6',
        '0x8cf8238abf7b933Bf8BB5Ea2C7E4Be101c11de2A',
        '0xeBB59CeBFb63f218db6B5094DC14AbF34d56D35D',
        '0x5de3939b2F811A61d830E6F52d13B066881412ab',
        '0xaA9826732f3A4973FF8B384B3f4e3c70c2984651',
        '0x7C1b2f618569789941B88680966333F3e8FEdc61',
        '0x4f745c0c7da552a348C384dA1a5BaEb28f2C607C',
        '0x6F3AAf802F57D045efDD2AC9c06d8879305542aF',
        '0x83Ec54A56fea7C7CCd2e65A4839deE1707206164',
        '0x0E53c8779197AC62B93251EbcB1d562325A0F5F3',
        '0x87c91Dd4552c67a4B82F8008Fa08458ca5E62008',
        '0x30c54D82564aeE6a56755F80AA4bbdF2e5093322',
        '0x5f2eA512aa6b875495D2983BD1aDfdC7BD3560d9',
        '0xb25583E5e2dB32b7FCbffe3f5e8E305C36157E54',
        '0x8fda94079913CB921D065Ed9c004Afb43e1f900e',
        '0xb30B27aDb3B0A45e88385eB2BB144Fad9120A420',
        '0xe916EaD212CcbD0dF36D0328891300aDC9096021',
        '0x822D04D22f962d6132f53b0FA6b9409097D12550',
        '0xd23eae3926431C794e2a04e1622A9446D61174A4',
        '0xFF2BF41EC57b897c914E2BAac857D621f4CB1691',
        '0xCd1fAFf6e578Fa5cAC469d2418C95671bA1a62Fe',
        '0x5EcFcced226bA9fCcD8663e7b3263cBd8C84eDB5',
        '0x5F02C4Dcb270999282b850Caa47Af749Ce49FE00',
        '0x2bD5fF741F267C34E9736353e5ceC600EEC73473',
        '0xB7E6a9Ed594954F01aA87B8A8EB0601e0eF38e88',
        '0x70B6C6A555507EE4ac91C15E5c80b7dc8FF3b489',
        '0x16939ef78684453bfDFb47825F8a5F714f12623a',
        '0x324E8E649A6A3dF817F97CdDBED2b746b62553dD',
        '0xffE2A166A3Ea6dd7BB11B2C48f08F1E4202D4E78',
        '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
        '0x4fe2598B2B29840c42Ff1Cb1a9cC151B09522A27',
        '0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc',
        '0xd88ca08d8eec1E9E09562213Ae83A7853ebB5d28',
        '0xc0fe33B654d13AF5a72C47Dc5a370674ba85b3E6',
        '0xe4E43305734E081dB80e40602A8a3Ad5c23aF97D',
        '0xEA01a1a3CF143f90b4aC6D069Bd369826574CD45',
        '0x01e81965B4B28825Fb08e744e807Fb4E22998FE6',
        '0x666666661f9B6D8c581602AAa2f76cbead06C401',
        '0x0047A0DEaDAfb7ee6B1A0d219E70Fb6767057D93',
        '0xCBd8aECe0c920eEF3F215ad4e7319052Bd8eaa74',
        '0x0403d215067cd359F4a9dC124776D262d0896662',
        '0x4eE438be38F8682ABB089F2BFeA48851C5E71EAF',
        '0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64',
        '0x64b783A80D0C05bEd0E2F1a638465a7ba3F4A6fB',
        '0x843CbC1732aE7D7ba0533C6380989DACec315FfE',
        '0x524dF384BFFB18C0C8f3f43d012011F8F9795579',
        '0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
        '0x23e3981052d5280C658e5e18D814Fa9582BFbc9E',
        '0x22Ffa75b746602427203d7Aa3f9Dc2b8af6dFc8A',
        '0xD3b71117E6C1558c1553305b44988cd944e97300',
        '0x84b1270f5A858Dc25dB8cc005ffF27fbF6c8afD2',
        '0xB9d35811424600fa9E8cD62A0471fBd025131cb8',
        '0x77DFb1DaFC92c5Df29996f5528BA1829941cD3Bb',
        '0x6652048Fa5E66ed63a0225FFd7C82e106b0Aa18b',
        '0x9d31f2f011De7b84c8bD8eB907eA80Ab13e3BEB1',
        '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e',
        '0xDcb624C870d73CDD0B3345762977CB14dE598cd0',
        '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
        '0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D',
        '0xF55a93b613D172b86c2Ba3981a849DaE2aeCDE2f',
        '0xfB585322fBd121cE20b857e2CcD85a43Ad496573',
        '0x75b133c19518A479A9eA94876b558C091BEf621d',
        '0x9723c96b1B92cddC036588FD08A6b92607906B57',
        '0x715294832DE407Dd30E6c32ebDa7256eF4B04769',
        '0x3A4329758940Fd7ea94b3754158795Eb412b824a',
        '0x9adBdcB5ed360114240495F6C8ccC14E5BE87f13',
        '0x5f7871433322B9F9795b97801Ec3396276D1D056',
        '0x92c31F7Ac11801Df9f846FF51723636bf3c01240',
        '0x91cb98F1b1954253f03f82579d683732Bae6813F',
        '0xc153e92E11ee84BE0707c6d4C40F68f27d8444D7',
        '0xa98d662E1f7EB8f89a8f86c109b9cB61Ec2740bC',
        '0xDd17629D05E068A9D118ee35d11101d4140D0586',
        '0xFF4245b8Fd43f75476608a94768EbB29bb678c2C',
        '0x68569056c9D8E93201270a22588632a138Fca324',
        '0x428aedF2D404a0EEdB611E3Dd2c7B4d0364D42D3',
        '0xb8C3e8Ff71513AfC8cfb2dDDc5A994A501Db1916',
        '0x02fF5065692783374947393723dbA9599e59F591',
        '0x4374F26F0148a6331905eDf4cD33B89d8Eed78d1',
        '0x141df21e93460216Fe0692e756927118CE4c65BE',
        '0x4AAF59deE18eCc1BbD2BF68b3f7Ba3AF47Eb9CfC',
        '0x9806aec346064183b5cE441313231DFf89811f7A',
        '0x7ed31E24C67971647168502cC7bBb3D4983EE7eA',
        '0x56A0F16AF7c8098141B363094fCf864d52831326',
        '0x95e7c70B58790A1Cbd377bC403CD7E9bE7E0AfB1',
        '0x57488Fcc3dC72Edb0a4c06a356c2c43C08BdfB42',
        '0xb4C61A351F1455FCcfe9D6d35bAf0bd7080F4199',
        '0x51E5dCF44f8eb51dCd44CDc568f7c29e8557f560',
        '0x2BF4Fb066Bc0f08F4723Be2bdfC70Bae8434757D',
        '0xDB5C767157b73C6f5347BdaBeF196d9818554C30',
        '0x90A2902D9f02D68b56D4e5a4D280f97A555A6241',
        '0xd0939CA16CC60e7088A25Fd7CaEcE84c59dFEB92',
        '0xB003C68917BaB76812797d1b8056822f48E2e4fe',
        '0xb6B49A43a3c3192a17FB9417081033763F3f4F9D',
        '0x8526FF6bBd8A976127443b1ce451ca1044aA3Ce2',
        '0x47c1C7B9D7941A7265D123DCfb100D8FB5348213',
        '0x72C3e1CFD42d40E0635ef486527788eF499ac859',
        '0x19E3CAd0891595D27A501301A075Eb680A4348B6',
        '0x1e5F009d4f8cA44b5FcC4963dD301Da82b4eed09',
        '0xfCaDD830fF2D6Cf3AD1681E1e8FC5DDCe9d59E74',
        '0x2efDff1e566202f82e774bB7aDD18c56CbB9427D',
        '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
        '0xBbcF57177D8752B21d080bf30a06CE20aD6333F8',
        '0xa5e279E14eFd60a8F29e5ac3b464e3De0c6bB6B8',
        '0xC5326b32E8BaEF125AcD68f8bC646fD646104F1c',
        '0xcF663a0ef9155BdC35a4B918BbEC75E9bFE40D2a',
        '0x9A2478C4036548864d96a97Fbf93f6a3341fedac',
        '0x4E37353778387a27dE70F97b264715eeDf9cFcd7',
        '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
        '0x1c115a56DAFC5D74F6fF7a4618dde45b38f0a6B1',
        '0xD0dff49De3E314FDFD3f93c5EEee7D5d2F5515cD',
        '0xf01895a61a34072415E6376392b89BFBa7958C50',
        '0xda2dB94fF2df63d7C2Fae24Ee7931498f6622ed7',
        '0x98051143830fa99848E7059E97AcB03B3cc62403',
        '0x5649e392A1BAC3e21672203589aDF8f6C99f8dB3',
        '0x213Fd3C787b6c452F50Fd91f14e12Ddf04A7aB4A',
        '0x6e6beD1409E7c1EebEC4b0dF0419B32e0c6314bA',
        '0xCd0dcfA92B0Be5041A58C2bAE41A2B51fe9A8A02',
        '0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb',
        '0xff44967f2E4EBE0b8c5b6812f25e1b9BceC70b34',
        '0x44754455564474A89358B2C2265883DF993b12F0',
        '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
        '0x23EC58e45ac5313BCB6681F4f7827B8a8453AC45',
        '0x44fC1739a34628C06aeE84906359a35f648b5e7f',
        '0x55533Be59DE022d585a57E29539452d708D4A410',
        '0x382EC3F9F2E79b03abF0127f3Aa985B148cEf6d7',
        '0xA84d7A90bDbBe6dE3FFFe9B7F549366320EF90D3',
        '0x5b52bfB8062Ce664D74bbCd4Cd6DC7Df53Fd7233',
        '0x57C81885FaAd67fC4dE892102f6FEAd3b9215f6b',
        '0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD',
        '0x8CFB3e769A831bab210344c2a437642599981A63',
        '0x1f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf',
        '0x1317844b72a14bE861E0eB8b9D427Cf3FEb84A24',
        '0xe097454853f4df69dBfcf6Aeb8501A772f0D9218',
        '0xdbEb98858f5d4Dca13EA0272B2b786E9415d3992',
        '0x482e6BD0a178f985818c5DFB9AC77918E8412FBA',
        '0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037',
        '0xce6b8B2787C657f1b98b7A66B5B63178863fd719',
        '0xbf27da33A58de2Bc6Eb1C7daB6CF2e84e825D7dc',
        '0x2Cbd87CE69A40aC91378eB8844eF45115a6a5617',
        '0x580e2b3170AA36e7018eaD248298C8cc18B0f019',
        '0x8C907e0a72C3d55627E853f4ec6a96b0C8771145',
        '0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787',
        '0xC12A601724b388bf8c16DdA9DA3DaAc08643DE85',
        '0x095f385be1e631FfdD7C1Ac54dfceF6ed868Eb36',
        '0xFbe0b4aE6E5a200c36A341299604D5f71A5F0a48',
        '0x76BeeD9649c0C297cB6De10d07eFd66Db38e3C47',
        '0xFf3Aa0D4874C3BD5AdcBB94254005ff19f798AcB',
        '0xE0399378f7a92A39DA849EB64CdDdE2940e234Bb',
        '0xe7d76aa271041b2a1ff5FdEf42730d9Ab08F6163',
        '0x48077400FAF11183c043Feb5184a13ea628Bb0DB',
        '0x2770b104374F8130e5a25a203b63C79436B11A0d',
        '0xC07f685bcF67ED7069B67d28556835B7C3bda55f',
        '0x26a7546c8f5e5f706cb598CAA68134f6eCf8d657',
        '0x5dd1E31E1a0e2E077aC98d2a4b781F418ca50387',
        '0xD05A0c5C68ACba9AA9952fA65189038840752977',
        '0x50ba8BF9E34f0F83F96a340387d1d3888BA4B3b5',
        '0xFCb8a4B1a0B645e08064e05B98E9cc6f48D2aa57',
        '0xDE960267B9AabFb5404D9A566C1ED6DB9dB09522',
        '0x31582e4Dd4906f2eb71C0D7b141AA097FB715491',
        '0xB2e841894b1C3d638948517F6234c6e06D3B8e1C',
        '0x3e151Ca82B3686f555c381530732df1cfc3c7890',
        '0x0ccA2F5561Bb0fCa88e5b9B48b7Fbf000349c357',
        '0x8D2b2e3dcF0BcaD65765D256390c5154D3Ba19cF',
        '0x41080CA7Be4b3F0cACBD95164e9a56b582382cAA',
        '0x608940b1061A1B277f0a27c30227f8F95C6Fa14e',
        '0xE00748A31f14eB8FdBBAA77e177480bF8DBef48d',
        '0xB1a05D0EE3c8d936F70b77318A348c0dE2F8a396',
        '0xA8De787E6196A991a35E46a5B8d5505e15B486ad',
        '0xA0a9A71C267aeA60aA9d21d4911791CDb0A900b2',
        '0x1D229B958D5DDFca92146585a8711aECbE56F095',
        '0x09E2b83Fe5485a7c8BeAa5DffD1D324A2B2D5c13',
        '0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC',
        '0xfAA0e6a0730F14BC8D99A480587D0df8D66d9109',
        '0xA060E0c0588D26CabA4a0009513337aCE50752dd',
        '0xb3d691125514Db7a5bE3326af86a72ecdC2CDE16',
        '0x05ad901cf196cbDCEaB3F8e602a47AAdB1a2e69d',
        '0xc8c488fDbBB2E72E41710Ade67784f0812160210',
        '0x39Ae6D231d831756079ec23589D2D37A739F2E89',
        '0x49954Ad438fa9e27C21AeCd35078dD52cDDd96be',
        '0x59604e3C66C3cF25C4e51D4E84631abF41900762',
        '0xb4D4762Ed3591Ec6b672BfB6019BF98c4dda5ea4',
        '0x400A581C2056463Dc573BBbB4b247c6c0769fbA6',
        '0xE81257d932280AE440B17AFc5f07C8A110D21432',
        '0x54C2c07b3Af037567269Ad6A168D5bD527867b58',
        '0xb8aa1ac7ebe9D2a00340FcD48269fadA698b9314',
        '0x5D07eDAbA2151a3C6802B28636eCC23082398EdB',
        '0x92d499e9953979C1a18Ae6Ff1E952F2cFbdD172d',
        '0xF0186490B18CB74619816CfC7FeB51cdbe4ae7b9',
        '0xa6966B70F6d6Cc70a518550f156e81Fc11bd88f2',
        '0x2B53D7014865c705DF383AB58B3C1DE5388ad567',
        '0x5445451C07E20bA1ca887B6c74d66D358F46D083',
        '0x0Df044b7f0aadfEaB21bC134fE525A19484Ac133',
        '0xb3ba14f6a482dfdebc3c2fb726ac10df91ee504c',
        '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        '0xd66b7fec3f891f8a732e489c4591d5e2c4303091',
        '0xc632f90affec7121120275610bf17df9963f181c',
        '0x92df0999c35cae6e6571c1103b3736ed859c3fb2',
        '0x2ed2f883c38fcd0ef3a27d48d62030b53a0deed6',
        '0x8e9b87cad37610d60120a1f48aa1036e24a3831a',
        '0x613813fafa8b2ab299c04ff59fdbf8b8d65a1ea1',
        '0x0d17d0bec371dc3e6774dc11809e525132353c15',
        '0x26619FA1d4c957C58096bBbeCa6588dCFB12E109',
        '0x9f8a75436e7e808f3fb348182e0ea42d2dd467cd',
        '0x7e58a5c150b3c9171100fdee0dd22ee666db9545',
        '0xc544d8ab2b5ed395b96e3ec87462801eca579ae1',
        '0xf4bea2c219eb95c6745983b68185c7340c319d9e',
        '0x7008ed7fdfa1fd5be00cd5c1ca8c7723eb8ce533',
        '0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7',
        '0xb56554296bc11afc98847914254a2beb82ba2bed',
        '0x26619fa1d4c957c58096bbbeca6588dcfb12e109',
        '0x5693ebf94b7c104d8cf2c1b1cc6deb53f7ce48bf',
        '0xae1cdc53bf9b88a6e83b53f32fb30a367a7626c4',
        '0xe1c9ce5e051d44084c1854f6c0cbdb107564db1a',
        '0xf397680d99a92e4b60637e9f5c71a4def1f6c7b5',
        '0xffecf080207264cd6a32883c74bfbed0e10a1096',
        '0x4d1e90ab966ae26c778b2f9f365aa40abb13f53c',
        '0x37a56cdcd83dce2868f721de58cb3830c44c6303',
        '0xac60f566567fbc9c229e10e1fb73e69c8bbfd6e2',
        '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        '0x7268b479eb7ce8d1b37ef1ffc3b82d7383a1162d',
        '0xb452bc9cead0b08c4ef99da0feb8e10ef6bb86bb',
        '0x085d15db9c7cd3df188422f88ec41ec573d691b9',
        '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        '0x223439fa37156ca2344a937ca4dd3e1bde71d1fe',
        '0x82555cc48a532fa4e2194ab883eb6d465149f80e',
        '0x2290c6bd9560e6498dfdf10f9ecb17997ca131f2',
        '0x569f4957176ffa0dff76c507604f6a66d4b9c578',
        '0xb700597d8425ced17677bc68042d7d92764acf59',
        '0xc0e6ad13bd58413ed308729b688d601243e1cf77',
        '0x46404cf8d6277289d8a9c40bd66747cf77297cab',
        '0x6743665257c429605aa344ed04dff7a183a50296',
        '0x66fff5bb007c4885a00fc14bdb1eee389b804ef7',
        '0x71fc2c893e41eabdf9c4afda3b2cdb46b93cd8aa',
        '0x41515885251e724233c6ca94530d6dcf3a20dec7',
        '0xf5f0778bac7efd67dc66fc5a6d1b380853e4f09d',
        '0x156ab3346823b651294766e23e6cf87254d68962',
        '0xced59c3249f20ca36fba764bfdd9d94f471b3154',
        '0x388ee12bb527965c32d6b29c0e81285dd026f1f8',
        '0xd80c121703efe9873b36f72343bd868665613d91',
        '0xe9cd2668fb580c96b035b6d081e5753f23fe7f46',
        '0x875dbac041105f5ae89ba7f7f62de8770cf7065a',
        '0xa3323780331996c35b722e6a13f3dd57a928644c',
        '0x8266fa3adb0e15c8a3e45c63f7cea051b03a1620',
        '0xe52d97af4b08fdfce875631cb0155dc3f97e9057',
        '0x5dc53496e8dd50887785d75d432cba6a86f82cad',
        '0x9131066022b909c65edd1aaf7ff213dacf4e86d0',
        '0x76a797a59ba2c17726896976b7b3747bfd1d220f',
        '0x6867d4a17f3ff5602024b7c2a33df2fd9aeafcfe',
        '0x0ea6a611fd7997f80d5c594bee1ee8536a8026b5',
        '0xa4eacdf5b13a50358c6a995690e71d8ffc2cd6a2',
        '0xeaf64d63db9332c33971ec48e123139cd7cde63d',
        '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
        '0x1c242062ef595a487ea200b44cc7450df800eaa5',
        '0x30f1183dec479387c09eab6dab3db88cffad5366',
        '0x72cd94217f80a0a3c91fdd2aea8cf74d48cef212',
        '0x7a6e3fd7a155cd923f0c51a1beec2ed61b6e864b',
        '0x4d7fa587ec8e50bd0e9cd837cb4da796f47218a1',
        '0xb2d09c5723c2d8fcfc89ae50a6d8919dcb2c9aad',
        '0x7b985a5eb655238d910b52b7e25b2648c1eabc45',
        '0x152ad7dc399269fa65d19bd7a790ea8aa5b23dad',
        '0x4ae4edc2785260bbfb2f2c5f5da7d71ded4d6666',
        '0x25102c5af2d4faa83ddbd36d9f6af5d9c2b84093',
        '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        '0x5dc5f31d5ffcb6cbdf4f1711f76e3b7e6abb6431',
        '0x8bf9dc93b6f81a5fc70d0b451596fd2b09fe92c3',
        '0x2d22e2badc60e9ebd16f511000d88042c9c1c1cf',
        '0xca1acab14e85f30996ac83c64ff93ded7586977c',
        '0x40f75ed09c7bc89bf596ce0ff6fb2ff8d02ac019',
        '0x69bfa36d50d92e8985d27e6aa6e685c0325ce7b4',
        '0x3ef3f6cf9f867a33c4109208a6bd043a9ef0e091',
        '0xb9d35811424600fa9e8cd62a0471fbd025131cb8',
        '0x961814c7d373df0403429e5ff3b25d52ba4f37f3',
        '0x6652fa67b63b108a730c009602f46471d008a4e7',
        '0x69f42963683ebdf7754677a87614c98568ce4ec0',
        '0x35a3fc50af27988f0e947786465335651949a7d8',
        '0x9514b29b77da55253e83c0c1cc483c7850eaa674',
        '0x19debb7732402f872e4818f9c02e9a18bb73a728',
        '0xed1a37e1662315747fba70254a42b76b894ee814',
        '0xbf27da33a58de2bc6eb1c7dab6cf2e84e825d7dc',
        '0x41fe2441c9eeab2158e29185d128ebab82aa8198',
        '0x2d0e4b21307b9c142150385121ee19549002b27b',
        '0x575755d57c7758ccb96f36aef3345393bfb2082e',
        '0xba509bdb71a29301860800e13867b59b461747af',
        '0x3e1d18f4a270faddd36aed81f74252adf5f52f5e',
        '0x0ab62678094a92cad164e21df1ced2529222a883',
        '0x557a09f2a257e7ea0c9edd45f4abc1f5eca05dff',
        '0x0a4e1bdfa75292a98c15870aef24bd94bffe0bd4',
        '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        '0xc9882def23bc42d53895b8361d0b1edc7570bc6a',
        '0xeaed1c1c9abc4096ca07247d570a5b34906c73d8',
        '0xce7709b026ed17b25fedf64b6a4c48f23580c429',
        '0xd7c8c78245c0b5fede797f899c77cd6a18d4dd40',
        '0xc2931e66c361f22f2a3a331a8708d7be383c3cac',
        '0x134b372f5543c5cca30be6a796da032c8274bddf',
        '0x27d195f3ff4dc2142328ba1de6715ac10a7ed290',
        '0xcc079ca45b62c5bc0064e0b40a2dd3d409503119',
        '0x54e4c60f7e2f21bef3d616c14d544138f24bf274',
        '0x26912541d68f35072bebaa821d987cc8f36b78aa',
        '0x104fc6cb9e5f7136540779b3473177777caba691',
        '0xd3095e37ce61ffef076fdafbd56b16f95a225ae5',
        '0xd47adda2a0491fda35892ddc0bc85bf01adec8d1',
        '0xb2343143f814639c9b1f42961c698247171df34a',
        '0x8e7da0ec1caae7d28a5ac38682bfe49a99046694',
        '0xacf34edcc424128cccc730bf85cdaceebcb3eece',
        '0x76d42ca00dc92eb304366f5ded6c2519423a0e1e',
        '0xd81789a7de517b25c09ac9d0f0c0340ce4e70e6e',
        '0xf0afa59b51125405c33f5c417df8be8cd4d45ae6',
        '0x58957ddfbaaa4b643a7dc3adef6df6e4606fcb9e',
        '0x3443fa23670336c7eb2bb0c2bf21f42cccb17f67',
        '0xfe1e4b7515b933faaf7b32e569eb245b7542b03c',
        '0x1d3437e570e93581bd94b2fd8fbf202d4a65654a',
        '0xda0ea290b5e61f0a1ad2fa21be4ad0242567c91e',
        '0x130e6203f05805cd8c44093a53c7b50775eb4ca3',
        '0x0566b9a8ffb8908682796751eed00722da967be0',
        '0xb69974f60eb1499ef06e6dfca23a6fd1f631e40c',
        '0x8ddd993ef68c6e74dab29f1c271a43f808358538',
        '0x8d9cad20080110998966b63a87fb9d51eb49b798',
        '0x40b952aba1c47aff1ef9ece292e374270bcf14e9',
        '0xc79d1fd14f514cd713b5ca43d288a782ae53eab2',
        '0x68306de72d3cad418279a0d2411c1197d34dd17f',
        '0xc598275452fa319d75ee5f176fd3b8384925b425',
        '0x0fad86cc1b412b330494e350bf1dc1994ac55c9e',
        '0x66e29c9dea509640a006c173632c5d5be6cabc93',
        '0x80149bdbb1fb0d60a788d58258399f4ba67fd707',
        '0xba2ae424d960c26247dd6c32edc70b295c744c43',
        '0x3c7014e5fa834791cf2154f163cd0a8cb9e8abb0',
        '0xa3f2d13e003f2fe1f113cf265b2a629494af4459',
        '0x4340499a4bd2869630393b7e4709e4f4581a9793',
        '0x180d64f6326015cb0c4abdd00dcefe52058eb84a',
        '0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13',
        '0x44307b23ea82ff84d9ef5a03f71ec133dbea04e1',
        '0x5ecd430413488c1fbfefe64f0ef759e4b2fc5f8b',
        '0xbc7d6b50616989655afd682fb42743507003056d',
        '0xeb25f1084ff8a305d95e22dcdc20e87fcc896960',
        '0x8f563578a15dedae2b802b7676583769c6f168f4',
        '0x4b0f1812e5df2a09796481ff14017e6005508003',
        '0x7c1e899d9133f76c489cada6f1cd2d47229b7685'
                  ];





const delay = 300; // Set the delay between results in  milliseconds

let getpool = async () => {

    for (let a of token) {
        const contract = new web3.eth.Contract(abi,a);
        const symbol = await contract.methods.symbol().call()

        fs.appendFile(path.join('poolsUSDC.txt'), `'${a}': {
                `, 'utf8', (err) => {
            if (err) console.log(`problem writing pair`)})   
             for (let b of FactoryAndRouter) { 

            await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the specified delay
            await result(a,b);




        }
        fs.appendFile(path.join('poolsUSDC.txt'), `
}`, 'utf8', (err) => {
                if (err) console.log(`problem writing pair`)})  
    }


};
getpool();


let result = async (a,b) => {

            
    try {

        const factoryContract = new ethers.Contract(
            b.factory,
            [
                'function getPair(address tokenA, address tokenB) external view returns (address pair)',
                 
            ],
            signer // pass connected account to pcs factory
          );

        const pairAddress = await factoryContract.getPair(USDC,a);
        const contract = new web3.eth.Contract(abi,a);
        const symbol = await contract.methods.symbol().call()


        if(pairAddress == "0x0000000000000000000000000000000000000000"){
              //  console.log('err pair is 0x00000');
            }else{  
                
                try {

                const pairContract = new ethers.Contract(pairAddress, abi, provider);
                const reserves = await pairContract.getReserves();
    
                const token0 = await pairContract.token0();
                const token1 = await pairContract.token1();
                let liquidity0;
                let liquidity1;
                if(a.toLowerCase() == token0.toLowerCase()){
                    liquidity0 = reserves[1];
                    liquidity1 = reserves[0];
                }else if(a.toLowerCase() == token1.toLowerCase()){
                    liquidity0 = reserves[0];
                    liquidity1 = reserves[1];
                }


// const contractInstance_ = new ethers.Contract(a, abi, provider);
// const DecimalA = await contractInstance_.decimals();
const poolvalue = ((liquidity0) / 10 ** 18).toString();
if(poolvalue > 100) {


  
    fs.appendFile(path.join('poolsUSDC.txt'), `
    'Router': '${b.router}', zaz '${poolvalue}',zzz`, 'utf8', (err) => {
        if (err) console.log(`problem writing pair`)
    })

    //${b.factory} factory
    //${pairAddress} PairAddress

}


                } catch (error) {
                     console.log(error);
                   }      

                }
            }catch (e) {
                //console.log(e);
            }

}

let tryit = async () => {

const PairAddress = [
'0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
'0xbcF3278098417E23d941613ce36a7cE9428724A5',
'0x6eAEC629B9CFa7acd507c50887C4851507Da67E6',
'0x2e707261d086687470B515B320478Eb1C88D49bb',

]
for (let a of PairAddress) {

try {


        const pairContract = new ethers.Contract(a, abi, provider);
        const reserves = await pairContract.getReserves();
        const token0 = await pairContract.token0();
        const token1 = await pairContract.token1();
        let liquidity0;
        let liquidity1;
        if(token1.toLowerCase() == token0.toLowerCase()){
            liquidity0 = reserves[1];
            liquidity1 = reserves[0];
        }else if(token1.toLowerCase() == token1.toLowerCase()){
            liquidity0 = reserves[0];
            liquidity1 = reserves[1];
        }

const reserve0_ = liquidity0;
const reserve0 = reserve0_.toString();

const reserve1_ = liquidity1;
const reserve1 = reserve1_.toString();


const amountA = (reserve0 / 10 ** 18).toString();
const amountB = (reserve1 / 10 ** 18).toString();

const pricebefore = amountA / amountB;
const reserveWithMe = Number(amountA) + Number(10000);
const priceafter = Number(reserveWithMe) / Number(amountB);

const impact__ = (priceafter-pricebefore)/priceafter*100;
const impact_ = impact__.toString();
const impact = impact_.substr(0, 10); 


console.log(impact);
console.log(amountA);
console.log(amountB);
console.log(`pricebefore = ${pricebefore*1}`);
console.log(`priceafter = ${priceafter*1}`);
console.log(`
_______________________________________
`);



        
} catch (e) {
        console.log(e);
        
}

}

};
//tryit()
