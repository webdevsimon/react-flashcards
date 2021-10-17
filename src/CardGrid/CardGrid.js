import Card from '../Card/Card';
import "./CardGrid.css";

const CardGrid = ({list, autoplayAudio}) => {
  return ( 
    <div className="card-grid">
      {list.map(item => <Card autoplayAudio={autoplayAudio} {...item} />)}
    </div>
  );
}
 
export default CardGrid;