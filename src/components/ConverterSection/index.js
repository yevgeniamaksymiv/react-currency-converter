import { grey } from '@mui/material/colors';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import CurrencyInput from '../CurrencyInput';
import axios from 'axios';

const style = {
  backgroundColor: grey[800],
  height: 'calc(100vh - 64px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

const ConverterSection = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  useEffect(
    () =>
      async() => {
        await axios
          .get('https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR')
          .then(({data}) => {
            setCurrencies([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base);
            setToCurrency(Object.keys(data.rates)[0]);
          }
          );
      },
    []
  );
  
  return (
    <Box sx={style}>
      <CurrencyInput 
        currencies={currencies} 
        selectedCurrency={fromCurrency}
        currencyOnChange={e => setFromCurrency(e.target.value)} 
        />
      <Box mx={4}>
        <CompareArrowsIcon sx={{ color: 'pink' }} />
      </Box>
      <CurrencyInput 
        currencies={currencies}
        selectedCurrency={toCurrency}
        currencyOnChange={e => setToCurrency(e.target.value)} 
      />
    </Box>
  );
}

export default ConverterSection