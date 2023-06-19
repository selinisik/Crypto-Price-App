import React, { FunctionComponent } from "react";
import { Props } from "./Coin.types";

export const Coin: FunctionComponent<Props> = (Props) => {
  const { name, icon, price, symbol } = Props;

  return (
    <div className="rounded-xl shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl p-6 flex flex-col items-center justify-between space-y-4 text-center w-full sm:w-72 md:w-88 lg:w-96 h-80 m-5 bg-white/20 backdrop-blur-lg">
      <h1 className="text-3xl text-white ">{name}</h1>
      <div className="w-24 h-24 relative">
        <img
          src={icon}
          alt={name}
          className="w-full h-full rounded-full shadow-lg object-cover"
        />
      </div>
      <h3 className="text-xl text-white">Price: {price}</h3>
      <h3 className="text-xl text-white">Symbol: {symbol}</h3>
    </div>
  );
};
