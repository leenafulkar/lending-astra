import React, { useContext, useState } from 'react'
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from '../../../../context';

const YourCredit
  = () => {
    const isLargeScreen = useMediaQuery('(min-width: 768px)');
    const buttonStyle = {
      marginTop: "10px",
      backgroundColor: "#08c177",
      color: "white",
      width: "330px",
      height: "50px",
      padding: "10px",
      fontSize: "14.5px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 3.9s",
      width: isLargeScreen ? "300px" : "280px",
      "&:hover": {
        backgroundColor: "#07a16f",
        transform: "scale(1.1)",
        border: "none",
      },
    };

    const [show, setShow] = useState(true);
    const { updateUser } = useContext(UserContext)

    const handleSelection = (value) => {
      updateUser({
        credit: value
      })
      setShow(false)
    };

    return (
      <Box display={show ? "block" : "none"}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={2}>
            Estimate your credit
          </Typography>

          <Box display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            width={"100%"}>
            <Button onClick={() => handleSelection("Excellent")} sx={buttonStyle}>Excellent (720-850)</Button>
            <Button onClick={() => handleSelection("Good")} sx={buttonStyle}>Good (680-719)</Button>
            <Button onClick={() => handleSelection("Fair")} sx={buttonStyle}>Fair (640-679)</Button>
            <Button onClick={() => handleSelection("Poor")} sx={buttonStyle}>Poor (0-639)</Button>
          </Box>
        </Box>
      </Box>
    )
  }

export default YourCredit
