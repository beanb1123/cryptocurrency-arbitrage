let markets = [
    {
        marketName: 'newdex',
        URL: 'https://api.newdex.io/v1/tickers',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                   
                    for (let obj of data.data) {
                        if(obj["currency"].includes('EOS')) {
                            let coinName = obj["quote_currency"].replace('');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].newdex = obj.last;
                        } else {
                            let coinName = obj["currency"].replace('');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].newdex = obj.last;
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
    {
        marketName: 'alcor',
        URL: 'https://eos.alcor.exchange/api/markets',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                   
                    for (let obj of data) {
                        if(obj.base_token.symbol.name.includes('EOS')) {
                            let coinName = obj.quote_token.symbol.name.replace('');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].alcor = obj.last_price;
                        } else {
                            let coinName = obj.base_token.symbol.name.replace('');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].alcor = obj.last_price;
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

    }

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
