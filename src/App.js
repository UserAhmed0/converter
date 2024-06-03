import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency,setFromCurrency] = React.useState('RUB');
  const [fromPrice, setFromPrice] = React.useState(0);
  const onChangeFromPrice = (value) => {
    let price = 0
    if(fromCurrency === 'RUB'){
         price = value / 90;
    }else if(fromCurrency === 'EUR'){
         price = (value / 98) * 106;
    }
    setFromPrice(value);
    const div = document.querySelector('.emptyblock');
    div.textContent = price;
  }
  React.useEffect(()=> {
      onChangeFromPrice(fromPrice);
  }, [fromCurrency, fromPrice])
  
  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <div className='cont'>
          <div className='p'>Результат в долларах</div>
          <div className='emptyblock'>0</div>
      </div>

    </div>
  );
}

export default App;
