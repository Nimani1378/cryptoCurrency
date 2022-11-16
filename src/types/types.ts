
export type DATA = {
  "id": string,
  "symbol": string,
  "name": string,
  "image": string,
  "current_price": number,
  "market_cap": number,
  "market_cap_rank": number,
  "fully_diluted_valuation": number,
  "total_volume": number,
  "high_24h": number,
  "low_24h": number,
  "price_change_24h": number,
  "price_change_percentage_24h": number,
  "market_cap_change_24h": number,
  "market_cap_change_percentage_24h": number,
  "circulating_supply": number,
  "total_supply": number,
  "max_supply": number,
  "ath": number,
  "ath_change_percentage": number,
  "ath_date": string,
  "atl": number,
  "atl_change_percentage": number,
  "atl_date": string,
  "roi": null,
  "last_updated": string,
  "favorite"?:boolean,
  "toman"?:string
};

// export const FirstValue: DATA = {
//   "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 18392.7,
//     "market_cap": 352834393692,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 385865148648,
//     "total_volume": 89186019115,
//     "high_24h": 20643,
//     "low_24h": 17579.02,
//     "price_change_24h": -1223.7753950345432,
//     "price_change_percentage_24h": -6.23851,
//     "market_cap_change_24h": -25502357531.02008,
//     "market_cap_change_percentage_24h": -6.74065,
//     "circulating_supply": 19202362,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 69045,
//     "ath_change_percentage": -73.39622,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 67.81,
//     "atl_change_percentage": 26988.61489,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2022-11-09T05:17:02.859Z"
// }