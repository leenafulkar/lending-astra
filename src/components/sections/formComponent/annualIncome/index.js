import React, { useContext, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../../../../context";

const AnnualIncome = () => {
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
        annualIncome: value
      })
      setShow(false)

    }

  };
  return (

    <Box width={"100%"} textAlign={"center"} display={show ? "block" : "none"}>
      <Typography margin={"auto"} width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={4}>
        What’s your annual income before taxes?
      </Typography>

      <Box
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          variant="filled"
          size="small"
          value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            width: isLargeScreen ? "300px" : "280px",
          }}
          label="$234"
        />
        <Button
          variant="contained"
          onClick={handleButtonClick}
          sx={{
            marginTop: "20px",
            backgroundColor: "#08c177",
            color: "white",
            width: isLargeScreen ? "300px" : "280px",
            height: "50px",
            paddingX: "10px",
            textTransform: "capitalize",
            fontSize: "17px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>

  );
};

export default AnnualIncome;
