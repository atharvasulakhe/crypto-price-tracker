import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Coin from './components/Coin'
//import bannerImage from './banner-943868.jpg';

//API used- Public API

function App() {
  const[listOfCoins, setListOfCoins]=useState([]);
  const[searchWord, setSearchWord]= useState("")
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, [] ) //[] is the dependency array or else it will run forever

  const filteredCoins=listOfCoins.filter((coin) => { //searchbar
      return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })
  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1>Cryptocurrency Price Tracker</h1>
        <input type='text' placeholder='Search by name' onChange={(event) => {setSearchWord(event.target.value)}}/> {/* searchbar */}
        <h3>An Atharva Sulakhe Site</h3>
      </div>
      <div className="cryptoDisplay">
        { filteredCoins.map((coin) => { 
        return <Coin 
                  name={coin.name} 
                  icon={coin.icon} 
                  price={coin.price} 
                  symbol={coin.symbol} 
              />
        })}
      </div>
    </div>
  );
}

export default App;
