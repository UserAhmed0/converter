import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency,setFromCurrency] = React.useState('RUB');
  const [fromPrice, setFromPrice] = React.useState(0);
  const onChangeFromPrice = (value) => {
    const price = value / 90;
    setFromPrice(value);
    const div = document.querySelector('.emptyblock');
    div.textContent = price;
  }

  
  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <div className='cont'>
          <div className='p'>Результат долларах</div>
          <div className='emptyblock'>0</div>
      </div>

    </div>
  );
}

export default App;
