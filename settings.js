let markets = [

    {
        marketName: 'defibox',
        URL: 'https://api.jsonstorage.net/v1/json/ea4562bd-ac24-4518-bfa5-c92e3a7691cc/bdf7d911-05d1-4877-a66a-0f3811f43362',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                    for (let obj of data) {
                        if(obj.sym0.includes('WAX')) {
                            let coinName = obj.sym1.replace();
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].defibox = obj.price1;
                        } else if(obj.sym1.includes('WAX')) {
                            let coinName = obj.sym0.replace();
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].defibox = obj.price2;
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
        marketName: 'alcorswap',
        URL: 'https://api.jsonstorage.net/v1/json/ea4562bd-ac24-4518-bfa5-c92e3a7691cc/adccf7c1-3abb-4aa9-b87d-98e91105d181',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                    for (let obj of data) {
                        if(obj.sym0.includes('WAX')) {
                            let coinName = obj.sym1.replace();
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].alcorswap = obj.price1;
			} else if(obj.sym1.includes('WAX')) {
				 let coinName = obj.sym0.replace();
				 if (!coin_prices[coinName]) coin_prices[coinName] = {};
				 coin_prices[coinName].alcorswap = obj.price2;
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
        URL: 'https://api.jsonstorage.net/v1/json/ea4562bd-ac24-4518-bfa5-c92e3a7691cc/4618b788-8179-434e-beaf-d5e96f2d21f0',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                    for (let obj of data) {
                        if(obj.sym0.includes('WAX')) {
                            let coinName = obj.sym1.replace();
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].alcorp = obj.price1;
			} else if(obj.sym1.includes('WAX')) {
				 let coinName = obj.sym0.replace();
				 if (!coin_prices[coinName]) coin_prices[coinName] = {};
				 coin_prices[coinName].alcor = obj.price2;
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
