import Card from './Card/Card';
import CardGrid from './CardGrid/CardGrid';
import DrawButton from './DrawButton/DrawButton';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import './App.css';
import {useState, useEffect} from 'react'

const fetchCards = async (url = '/data/set1.json') => {
  const json = await fetch(url)
    .then( res => res.json())
  return json
}

function App() {
  const [autoplayAudio, setAutoplayAudio] = useState(false)
  const [cardList, setCardList] = useState();
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    fetchCards().then(data => {
      setCurrentCard(data[0])
      setCardList(data)
    })
  }, []);

  const updateCard = () => {
    if(cardList){
      // filter previous cards
      let cardsLeft = cardList.filter(m => true)
      let item = cardsLeft[Math.floor(Math.random()*cardsLeft.length)];
      setCurrentCard(item)
    }
  }

  return (
    <div className="App">
      {/* <ToggleSwitch value={autoplayAudio} handleChange={setAutoplayAudio} /> */}
      {cardList && <CardGrid autoplayAudio={autoplayAudio} list={cardList} />}
      {/* {cardList && <>
      <div className="cardRow">
        <Card {...currentCard} autoplayAudio={autoplayAudio}  />
      </div>
      <div className="buttonRow">
        <DrawButton drawCard={updateCard}/>
      </div>
      </>} */}
  </div>
  );
}

export default App;
