import { AppBar, Box, Toolbar, Typography, Divider } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Header = () => {
  const [currencyUSD, setCurrencyUSD] = useState();
  const [currencyEUR, setCurrencyEUR] = useState();

  useEffect(() => {
    axios
      .get('https://api.exchangerate.host/latest?base=USD&symbols=UAH')
      .then(({ data }) =>
        setCurrencyUSD(Number(Object.values(data.rates)).toFixed(2))
      );
  }, []);

  useEffect(() => {
    axios
      .get('https://api.exchangerate.host/latest?base=EUR&symbols=UAH')
      .then(({ data }) =>
        setCurrencyEUR(Number(Object.values(data.rates)).toFixed(2))
      );
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: 'static',
          backgroundColor: '#121212',
          textAlign: 'center',
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 2,
              textAlign: 'end',
              color: 'rgba(255, 255, 255, .87)',
            }}
          >
            Current rate for today:
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1, color: 'rgba(255, 255, 255, .6)' }}
          >
            1 USD = {currencyUSD} UAH
          </Typography>
          <Typography
            component="div"
            sx={{
              flexGrow: 2,
              color: 'rgba(255, 255, 255, .6)',
              textAlign: 'start',
            }}
          >
            1 EUR = {currencyEUR} UAH
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default Header;
