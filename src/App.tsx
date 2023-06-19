import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { CoinType } from "./components/Coin.types";
import { Coin } from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState<CoinType[]>([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0&currency=USD"
    ).then((response) => {
      setListOfCoins(response.data.coins);
    });
  }, []);

  const filteredCoins = listOfCoins.filter((coin: CoinType) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="font-sans h-screen w-screen bg-background bg-cover">
      <div className="flex justify-center items-center px-4 md:px-0 w-full h-[200px] ">
        <input
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
          type="text"
          placeholder="Bitcoin..."
          className="w-full sm:w-1/2 h-[50px] rounded placeholder-gray-300 placeholder-opacity-60 bg-white/40 text-xl font-bold text-center mt-2.5 text-white outline-none focus:border-2 focus:border-white"
        ></input>
      </div>
      <div className="flex pb-12 overflow-x-scroll no-scrollbar mt-5 space-x-4 px-4 md:px-0">
        {filteredCoins.map((coin) => {
          return (
            <div className="flex-none">
              <Coin
                name={coin?.name}
                icon={coin?.icon}
                price={`$${coin?.price.toString().slice(0, 7)}`}
                symbol={coin?.symbol}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
