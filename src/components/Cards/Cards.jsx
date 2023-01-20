import Card from '../Card/Card';
import CardsContainer from './Cards-styles/CardsContainer';

export default function Cards({ characters, onClose }) {
   return (
   <CardsContainer>
      {  
         characters.map(({id, name, species, gender, image}) => <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />)
        }

   </CardsContainer>);}