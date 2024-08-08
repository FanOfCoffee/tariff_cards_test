import React from 'react'
import '../styles/TariffCard.css'

const TariffCard = ({ title, price, speed, traffic }) => {
    return (
        <div className="TariffCard">
            <header>
            <p className="card-title">{title}</p>
            <div className='pricing-price'>
                <span className='rub'>
                    <p>руб</p>  
                </span>
                <span className='price-card'>
                    <h1 className="card-price">{price}</h1>
                </span>
                <span className='month'>
                    <p>мес</p>
                </span>
            </div>
            
            </header>
            <div className="card-features">
            <div className="card-speed">{speed}</div>
            <div className="card-traffic">{traffic}</div>
            
            </div>
        </div>
    );
};
export default TariffCard 