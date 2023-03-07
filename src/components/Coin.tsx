import React, { FunctionComponent } from "react";
import { Props } from "./Coin.types";

export const Coin: FunctionComponent<Props> = (Props) => {
  const { name, icon, price, symbol } = Props;
  return (
    <div className="hover:bg-slate-50 hover:text-black px-1 box-shadow-coin flex flex-col justify-between pb-4 w-full sm:w-[290px] md:w-[350px] lg:w-[300px] xl:w-[400px] h-[300px] bg-black text-white m-5 text-center rounded-xl ">
      <h1 className="text-3xl  pb-3 sm:pb-4 pt-3 ">{name}</h1>
      <img
        src={icon}
        alt={name}
        height="100"
        width="100"
        className="mx-auto mb-3 sm:mb-4 w-[100px] h-[100px]"
      ></img>
      <h3 className="text-xl sm:text-2xl pb-3 sm:pb-4">Price: {price}</h3>
      <h3 className="text-xl sm:text-2xl"> Symbol: {symbol}</h3>
    </div>
  );
};
