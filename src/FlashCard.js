import Card from './Card/Card';

import DrawButton from './DrawButton/DrawButton';
const FlashCard = ({autoplayAudio, currentCard, updateCard}) => {
  return ( 
    <div>
      <div className="cardRow">
        <Card {...currentCard} autoplayAudio={autoplayAudio}  />
      </div>
      <div className="buttonRow">
        <DrawButton drawCard={updateCard}/>
      </div>
    </div>
  );
}
 
export default FlashCard;