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
  console.log(listOfCoins);

  const filteredCoins = listOfCoins.filter((coin: CoinType) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="font-sans h-auto w-screen ">
      <div className="flex justify-center items-center px-4 md:px-0 w-full h-[200px] bg-amber-400">
        <input
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
          type="text"
          placeholder="Bitcoin..."
          className="w-full sm:w-1/2 h-[50px] b-none rounded bg-white text-xl font-bold text-center mt-2.5 text-black "
        ></input>
      </div>
      <div className="px-4 md:px-0 grid-cols-1 justify-center grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center mt-5  ">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin?.name}
              icon={coin?.icon}
              price={`$${coin?.price.toString().slice(0, 7)}`}
              symbol={coin?.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
