import { TextField, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    light: {
      main: '#9ebaf3',
    },
  },
});

const CurrencyInput = ({ currencies, selectedCurrency, currencyOnChange, amount, onChangeAmount }) => {

  return (
    <ThemeProvider theme={theme}>
      <TextField
        color="light"
        id="outlined-basic"
        variant="outlined"
        sx={{ marginRight: 2, input: { color: '#353a5f' } }}
        value={amount}
        onChange={onChangeAmount}
      />
      <Select
        color="light"
        labelId="select-label"
        id="select-label"
        value={selectedCurrency}
        label="Currency"
        onChange={currencyOnChange}
        sx={{
          color: '#9ebaf3',
          '& .MuiSvgIcon-root': {
            color: '#9ebaf3',
          },
        }}
      >
        {currencies.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  );
};

export default CurrencyInput;
