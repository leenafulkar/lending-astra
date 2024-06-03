import React, { useContext, useState } from "react";
import {
  FormControl,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../../../../context";

const MakingSure = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [show, setShow] = useState(true);
  const {user, updateUser } = useContext(UserContext)
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const handleSelection = (value) => {
    // setSelectedValue(value);
    updateUser({
      makingSure: value
    })
    setShow(false)
  };

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
    transition: 'background-color 3.9s',
    width: isLargeScreen ? "300px" : "280px",
    '&:hover': {
      backgroundColor: '#07a16f',
      transform: 'scale(1.1)',
      border: 'none'
    },

  };

  return (
    <Box sx={{ textAlign: "center" }} display={show ? "block" : "none"}  >
      <Typography margin={"auto"} width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "27px" : "22px"}>
        Just Maaking Sure...
      </Typography>
      <Typography
        margin={"auto"}
        width={isLargeScreen ? "100%" : "60%"}
        sx={{
          fontSize: isLargeScreen ? "24px" : "21px",
          color: "#a6a6a6",
          fontWeight: 500,
          mb: 4
        }}>Did you mean to say you make ${user.annualIncome} a month?</Typography>

      <FormControl component="fieldset">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            variant={
              selectedValue === "Within 48 hours" ? "contained" : "outlined"
            }
            sx={buttonStyle}
            onClick={() => handleSelection("year")}
          >
            I make ${user.annualIncome} a year
          </Button>
          <Button
            variant={
              selectedValue === "Within 2 weeks" ? "contained" : "outlined"
            }
            sx={buttonStyle}
            onClick={() => handleSelection("month")}
          >
            I make ${user.annualIncome} a month
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default MakingSure;
