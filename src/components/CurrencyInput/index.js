import { TextField, Select, MenuItem, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    light: {
      main: 'rgba(255, 255, 255, .6)',
    },
    mode: 'dark',
  },
});

const CurrencyInput = ({ currencies, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) => {
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4}>
        <Box p={3}>
          <TextField
            color="light"
            id="outlined-basic"
            variant="outlined"
            sx={{ marginRight: 2, input: { color: 'rgba(255, 255, 255, .6)' } }}
            value={amount}
            onChange={onChangeAmount}
          />
          <Select
            color="light"
            labelId="select-label"
            id="select-label"
            value={selectedCurrency}
            label="Currency"
            onChange={onChangeCurrency}
            sx={{
              color: 'rgba(255, 255, 255, .6)',
              '& .MuiSvgIcon-root': {
                color: 'rgba(255, 255, 255, .6)',
              },
            }}
          >
            {currencies.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default CurrencyInput;
