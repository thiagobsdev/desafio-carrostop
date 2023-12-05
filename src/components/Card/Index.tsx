import "./styles.css"

import cardCard from "../../assets/car-card.png"

export default function Card () {
    return (
        <div className="dscar-card dscar-borderBlue">
           <img className="imgCar" src={cardCard} alt="Imagem carro" />
           <h3>Lorem ipsum dolor</h3>
        </div>
    );
}