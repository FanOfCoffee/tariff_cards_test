import React from 'react'
import '../styles/TariffCard.css'

const TariffCard = ({ title, price, speed, traffic }) => {
    return (
        <div className="TariffCard">
            <header>
            <p className="card-title">{title}</p>
            <h1 className="card-price">{price}</h1>
            </header>
            <div className="card-features">
            <div className="card-speed">{speed}</div>
            <div className="card-traffic">{traffic}</div>
            
            </div>
        </div>
    );
};
export default TariffCard 