import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Header = () => {
  const [currencyUSD, setCurrencyUSD] = useState();
  const [currencyEUR, setCurrencyEUR] = useState();

  useEffect(() => 
  async function fetchResponce() {
    await axios.get('https://api.exchangerate.host/latest?base=USD&symbols=UAH')
    .then(({data}) => setCurrencyUSD(Number(Object.values(data.rates)).toFixed(2)))
  },
  []);

  useEffect(
    () =>
      async function fetchResponce() {
        await axios
          .get('https://api.exchangerate.host/latest?base=EUR&symbols=UAH')
          .then(({data}) => setCurrencyEUR(Number(Object.values(data.rates)).toFixed(2)))
      },
    []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: 'static',
          backgroundColor: grey[800],
          textAlign: 'center',
        }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2, textAlign: 'end', color: grey[300] }}>
            Current rate for today:
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, color: 'pink' }}
          >
            1 USD = {currencyUSD} UAH
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 2, color: 'pink', textAlign: 'start' }}
          >
            1 EUR = {currencyEUR} UAH
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
