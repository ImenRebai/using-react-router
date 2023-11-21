import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// import { Avatar } from '@mui/material';

// import { deepPurple, deepOrange} from '@mui/material/colors';


function Material() {
  return (
    <>
    <Stack direction="row" spacing={2}>
     <Box sx={{ '& button': { m: 1 } }}>
    <Button 
       onClick={() => {
        alert('clicked');
          }}   
       color="primary" variant="contained" >
    Primary
    </Button>
    </Box>
    <Box sx={{ '& button': { m: 1 } }}>
    <Button variant="contained" size="medium" color="success">
      Success
      </Button>
    </Box>
    <Box sx={{ '& button': { m: 1 } }}>
      <Button variant="outlined"  size="large" color="error">
      Error
      </Button>
      </Box>
      <Checkbox {...label} />
      <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      
    </Box>
    <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
    </>
    // <Stack direction="row" spacing={2}>
    //   <Avatar>H</Avatar>
    //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    // </Stack>
   
  );
}



export default Material
