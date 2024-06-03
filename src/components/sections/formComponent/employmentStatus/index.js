import React, { useContext, useState } from 'react'
import {
    Autocomplete,
    Box,
    Button,
    TextField,
    Typography,
    useMediaQuery,
  } from "@mui/material";
import { UserContext } from '../../../../context';

const EmploymentStatus = () => {
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
          employeeStatus: value
        })
        setShow(false)
      };
  return (
    <div>
        <Box display={show ? "block" : "none"} sx={{textAlign:'center'}}>
        <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={4}>
        What's your employment status?
      </Typography>

      <Box display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}>
        <Button onClick={() => handleSelection("Full Time")} sx={buttonStyle}>Full Time</Button>
        <Button onClick={() => handleSelection("Part Time")} sx={buttonStyle}>Part Time</Button>
        <Button onClick={() => handleSelection("Self Employee")} sx={buttonStyle}>Self Employed</Button>
        <Button onClick={() => handleSelection("Unemployed")} sx={buttonStyle}>Unemployed</Button>
        <Button onClick={() => handleSelection("Other")} sx={buttonStyle}>Other</Button>
      </Box>
        </Box>
    </div>
  )
}

export default EmploymentStatus