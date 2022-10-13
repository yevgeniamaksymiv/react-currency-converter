import { TextField, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
// import { createStyles } from '@mui/styles';

// const useStyles = createStyles({
//   select: {
//     "&:after": {
//       borderColor: "pink",
//     },
//     "& .MuiSvgIcon-root": {
//       color: "pink",
//     },
//   },
// });

const CurrencyInput = () => {
  const [currency, setCurrency] = useState('');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  // const classes = useStyles();

  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ marginRight: 2 }}
      />
      <Select
        labelId="select-label"
        id="select-label"
        value={currency}
        label="Currency"
        onChange={handleChange}
        // className={classes.select}
      >
        <MenuItem value={'UAH'}>UAH</MenuItem>
        <MenuItem value={'USD'}>USD</MenuItem>
        <MenuItem value={'EUR'}>EUR</MenuItem>
      </Select>
    </>
  );
}

export default CurrencyInput