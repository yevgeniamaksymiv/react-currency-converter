import { TextField, Select, MenuItem } from '@mui/material';

const CurrencyInput = ({ currencies, selectedCurrency, currencyOnChange }) => {
  
  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ marginRight: 2, color: 'pink', border: '.5px solid pink' }}
      />
      <Select
        labelId="select-label"
        id="select-label"
        value={selectedCurrency}
        label="Currency"
        onChange={currencyOnChange}
        sx={{
          color: 'pink',
          border: '.5px solid pink',
          '& .MuiSvgIcon-root': {
            color: 'pink',
          },
          '.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-focused': {
            border: 'none',
          },
        }}
      >
        {currencies.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default CurrencyInput