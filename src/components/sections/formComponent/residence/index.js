import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../../../../context";

const Residence = () => {
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
      residence: value
    })
    setShow(false)
  };

  return (
    <Box display={show ? "block" : "none"} sx={{ textAlign: "center" }}>
      <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={2}>
        Type of residence?
      </Typography>

      <Box display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}>
        <Button onClick={() => handleSelection("I own my house")} sx={buttonStyle}>I own my house</Button>
        <Button onClick={() => handleSelection("I am rented")} sx={buttonStyle}>I am rented</Button>
      </Box>
    </Box>
  );
};

export default Residence;
