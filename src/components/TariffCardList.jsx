import React from 'react'
import TariffCard from './TariffCard'
import { useState } from "react";


function TariffCardList() {
    const [selectMonthly, setSelectMonthly] = useState(true);
    return (
        <React.Fragment>
            <TariffCard
            title="Безлимитный 300"
            price={selectMonthly ? "300" : "3000"}
            speed="до 10 Мбит/сек"
            traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 450"
                price={selectMonthly ? "450" : "4500"}
                speed="до 50 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 550"
                price={selectMonthly ? "550" : "5500"}
                speed="до 100 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
            <TariffCard
                title="Безлимитный 1000"
                price={selectMonthly ? "1000" : "10000"}
                speed="до 200 Мбит/сек"
                traffic="Объем включенного трафика не ограничен"
            />
        </React.Fragment>
    );
}

export default TariffCardList;


