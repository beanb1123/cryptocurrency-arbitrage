let markets = [

    {
        marketName: 'newdex',
        URL: 'https://api.newdex.io/v1/tickers',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                    for (let obj of data.filter) {
                        if(obj["symbol"].includes(q => q.symbol === 'eosio.token-wax-eos')) {
                            let coinName = obj["symbol"].replace(q => q.symbol === 'eosio.token-wax-eos', '');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].bittrex = obj.last;
                        }
                    }
                    res(coin_prices);
                }
                catch (err) {
                    console.log(err);
                    rej(err);
                }

            })
        },

    },

];

let marketNames = [];
for(let i = 0; i < markets.length; i++) { // Loop except cryptowatch
    marketNames.push([[markets[i].marketName], [markets[i].pairURL]]);
}
console.log("Markets:", marketNames);
module.exports = function () {
    this.markets = markets;
    this.marketNames = marketNames;
};
