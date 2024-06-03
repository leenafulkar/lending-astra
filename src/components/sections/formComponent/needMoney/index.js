import React, { useContext, useState } from "react";
import {
  FormControl,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../../../../context";

const NeedMoney = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [show, setShow] = useState(true);
  const { updateUser } = useContext(UserContext)
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const handleSelection = (value) => {
    // setSelectedValue(value);
    updateUser({
      need: value
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
      <Typography margin={"auto"} width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={4}>
        How quickly do you need the money?
      </Typography>

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
            onClick={() => handleSelection("Within 48 hours")}
          >
            Within 48 hours
          </Button>
          <Button
            variant={
              selectedValue === "Within 2 weeks" ? "contained" : "outlined"
            }
            sx={buttonStyle}
            onClick={() => handleSelection("Within 2 weeks")}
          >
            Within 2 weeks
          </Button>
          <Button
            variant={
              selectedValue === "Within a month" ? "contained" : "outlined"
            }
            sx={buttonStyle}
            onClick={() => handleSelection("Within a month")}
          >
            Within a month
          </Button>
          <Button
            variant={
              selectedValue === "Unsure just browsing rates"
                ? "contained"
                : "outlined"
            }
            sx={buttonStyle}
            onClick={() => handleSelection("Unsure just browsing rates")}
          >
            Unsure just browsing rates
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NeedMoney;
