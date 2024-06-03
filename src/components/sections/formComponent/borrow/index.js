import { Box, Button, Slider, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FormHelperText } from '@mui/material';
import { UserContext } from '../../../../context';

const Borrow = () => {
  const [value, setValue] = useState(25);
  const [show, setShow] = useState(true);
  const { updateUser } = useContext(UserContext)
  const isLargeScreen = useMediaQuery('(min-width: 768px)');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleButtonClick = () => {
    if (value) {
      updateUser({
        borrow: value * 1000
      })
      setShow(false)
    }
  };
  return (
    <Box display={show ? "block" : "none"} sx={{ textAlign: "center" }}>
      <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={4}>
        How much would you like to borrow?
      </Typography>
      <Box>
        <Typography pb={3} fontSize={"35px"} color={"#00a0dc"} variant="body1" mt={2}>
          ${value * 1000}
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={1}
          max={50}
          sx={{
            width: isLargeScreen ? "350px" : "200px",
            '& .MuiSlider-thumb': {
              color: '#00a0dc',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#00a0dc',
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'white',
            },
          }}
        />
        <Box width={"100%"} margin={"auto"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Typography color={"#00a0dc"}>$1K</Typography>
          <Typography color={"#00a0dc"}>$50K</Typography>
        </Box>
        <FormHelperText sx={{ color: "#dddddd", textAlign: "center", mt: 2 }}>($1,000 min to $50,000 max)</FormHelperText>
      </Box>
      <Button onClick={handleButtonClick} variant="contained" sx={{ marginTop: "40px", backgroundColor: "#08c177", color: "white", width: isLargeScreen ? "300px" : "280px", height: "50px", paddingX: "10px", textTransform: "capitalize", fontSize: "17px" }}>Continue</Button>
    </Box>
  )
}

export default Borrow