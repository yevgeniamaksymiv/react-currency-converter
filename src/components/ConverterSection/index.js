import { pink, grey } from "@mui/material/colors";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Box, TextField, Select, MenuItem } from "@mui/material";
import CurrencyInput from '../CurrencyInput';

const style = {
  backgroundColor: grey[800],
  height: 'calc(100vh - 64px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
};
const color = pink[100]

const ConverterSection = () => {
  
  return (
    <Box sx={style}>
      <CurrencyInput />
      <Box mx={4}>
        <CompareArrowsIcon sx={{ color: 'pink' }} />
      </Box>
      <CurrencyInput />
    </Box>
  );
}

export default ConverterSection