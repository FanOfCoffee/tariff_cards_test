import React from 'react'
import TariffCard from './TariffCard'


function TariffCardList() {
    return (
        <React.Fragment>
            <TariffCard
            title="Безлимитный 300"
            price={"300"}
            speed="до 10 Мбит/сек"
            traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 450"
                price={"450"}
                speed="до 50 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 550"
                price={"550"}
                speed="до 100 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 1000"
                price={"1000"}
                speed="до 200 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
        </React.Fragment>
    );
}

export default TariffCardList;


