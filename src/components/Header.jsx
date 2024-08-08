import React from 'react'
import { useState } from "react";
import '../styles/TariffApp.css'

export default function Header() {
    const [selectMonthly, setSelectMonthly] = useState(true);
    return (
        <header>
            <h1 className="header-topic">Тарифные планы</h1>
            <div className="header-row">
                <p>За год</p>
                <label className="price-switch">
                <input
                    className="price-checkbox"
                    onChange={() => {
                    setSelectMonthly((prev) => !prev);
                    }}
                    type="checkbox"
                />
                <div className="switch-slider"></div>
                </label>
                <p>За месяц</p>
            </div>
            </header>
    )
}
