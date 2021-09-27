import React, { useState } from 'react';
import Button from './Button';

import Slots from './Slots';

export default function SlotMachine() {
    const [icons, setIcons] = useState([]);
    const [win, setWin] = useState(null);

    const pullSlots = () => {
        const symbols = ["🍒", "🍊", "🔔"];
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(symbols[Math.floor(Math.random() * 3)]);
        }
        setIcons(arr);
        setWin(arr[0] === arr[1] && arr[1] === arr[2] ? true : false);
    };


    return (
        <div>
            <h1>Slot Machines!</h1>
            <Button text="Pull Slot" clickFunc={pullSlots} />
            <Slots icons={icons} winner={win} />
        </div>
    );
}
