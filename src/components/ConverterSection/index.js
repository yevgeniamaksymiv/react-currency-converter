import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import CurrencyInput from '../CurrencyInput';
import axios from 'axios';

const style = {
  backgroundColor: '#121212',
  height: 'calc(100vh - 65px)',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ConverterSection = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  const [changeRate, setChangeRate] = useState('');

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * changeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / changeRate).toFixed(2);
  }

  useEffect(() => {
    axios
      .get('https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR')
      .then(({ data }) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencies([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setChangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios
        .get(
          `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`
        )
        .then(({ data }) => setChangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };
  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={style}>
        <CurrencyInput
          currencies={currencies}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <Box mx={4}>
          <CompareArrowsIcon sx={{ color: 'rgba(255, 255, 255, .6)' }} />
        </Box>
        <CurrencyInput
          currencies={currencies}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </Box>
    </ThemeProvider>
  );
};

export default ConverterSection;
