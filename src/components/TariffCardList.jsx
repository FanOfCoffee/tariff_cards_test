import React from 'react'
import TariffCard from './TariffCard'

const tariff = [
    {
        id : 1,
        title: "Безлимитный 300",
        price: 300,
        speed: "до 10 Мбит/сек",
        traffic: "Объем включенного трафика не ограничен"
    },
    {
        id : 2,
        title: "Безлимитный 450",
        price: 450,
        speed: "до 50 Мбит/сек",
        traffic: "Объем включенного трафика не ограничен"
    },
    {
        id : 3,
        title: "Безлимитный 550",
        price: 550,
        speed: "до 100 Мбит/сек",
        traffic: "Объем включенного трафика не ограничен"
    },
    {
        id : 4,
        title: "Безлимитный 1000",
        price: 1000,
        speed: "до 200 Мбит/сек",
        traffic: "Объем включенного трафика не ограничен"
    }
]


function TariffCardList() {
    
    return (
        <React.Fragment>
            {tariff.map((item, index) => {
                return(
                    <TariffCard
                    key={index}
                    title={item.title}
                    price={item.price}
                    speed={item.speed}
                    traffic={item.traffic}
                    />
                )
            })}
            
        </React.Fragment>
    );
}

export default TariffCardList;


