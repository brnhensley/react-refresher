import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Hello from './Hello';
import SlotMachine from "./SlotMachine";

function App() {
  const [renderSlots, setRenderSlots] = useState(false);

  const showSlots = () => {
    setRenderSlots(!renderSlots);
  };

  return (
    <div className="App">
      <Hello to="Ringo" from="Paul" num={666} data={[1, 2, 3, 4, 5]} />
      <Hello to="Cher" from="Sonny" num={69} data={[14, 5]} />
      <Button clickFunc={showSlots} text="Show/Hide slot machine" />
      {renderSlots ? <SlotMachine /> : null}
    </div>
  );
}

export default App;
