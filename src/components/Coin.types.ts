export interface CoinType{
    availableSupply: number,
    exp:string[],
    icon:string,
    id: string,
    marketCap:number,
    name: string,
    price:number,
    priceBtc:number,
    priceChange1d:number,
    priceChange1h:number,
    priceChange1w:number,
    rank:number,
    symbol:string,
    totalSupply:number,
    twitterUrl:string,
    volume:number,
    websiteUrl:string
}
export interface Props{
    name:string | undefined, icon:string | undefined, price:string | undefined, symbol:string | undefined
}