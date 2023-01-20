import CardContainer from "./Card-styles/CardContainer";
import CardButton from "./Card-styles/CardButton";

export default function Card({ name, species, gender, image, onClose }) {
   return (
      <CardContainer>
         <CardButton onClick={onClose}>X</CardButton>
         <p>{name}</p>
         <p>{species}</p>
         <p>{gender}</p>
         <img src={image} alt={name}/>
      </CardContainer>
   );
}
