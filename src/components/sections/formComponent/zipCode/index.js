import { Box, Button, Slider, Typography, TextField, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../context';

const ZipCode = () => {
  const [show, setShow] = useState(true);
  const { updateUser } = useContext(UserContext)
  const [value, setValue] = useState()
  const isLargeScreen = useMediaQuery('(min-width: 768px)');


  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const handleButtonClick = () => {
    if (value) {
      updateUser({
        zipCode: value
      })
      setShow(false)

    }

  };

  return (
    <Box textAlign={"center"} display={show ? "block" : "none"}  >
      <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={5}>
        What is your Zip Code?
      </Typography>


      <Box width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}>
        <TextField
          variant='filled'
          size="small"
          value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: 'white', color: 'black', borderRadius: '10px',
            width: isLargeScreen ? "300px" : "280px",

          }}
          label="Enter ZIP code"
        />
        <Button onClick={handleButtonClick} variant="contained" sx={{ marginTop: "20px", backgroundColor: "#08c177", color: "white", width: isLargeScreen ? "300px" : "280px", height: "50px", paddingX: "10px", textTransform: "capitalize", fontSize: "17px" }}>Continue</Button>
      </Box>
    </Box>
  )
}

export default ZipCode