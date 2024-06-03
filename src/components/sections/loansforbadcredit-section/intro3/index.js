import {
    Typography,
    Box,
    Button,
    Container,
    useTheme,
    Stack,
    Link,
    InputLabel,
    FormControl,
    NativeSelect,
    Grid

  } from "@mui/material";
  import React from "react";
  
  const Intro3 = () => {
    const theme = useTheme();
  
    return (
      <div>
        <Box
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "auto",
            background: "radial-gradient(circle at 50% 0, #317298, #101f30)", // Radial gradient background
            color: "#FFFFFF", // Set text color to white
            padding: "60px 0px 0px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              padding: "0px 0px 20px",
              fontFamily: 'Georgia, Times, "Times New Roman", serif', // Multiple font families
              [theme.breakpoints.down("sm")]: {
                fontSize: "36px",
              },
            }}
          >
            Loans for Bad Credit

          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              margin: "0px 0px 25px",
              fontFamily: "inherit",
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },
            }}
          >
        Checking rates won't affect your credit score

        </Typography>
          
        <Grid container spacing={{ xs: 2, sm: 0 , md:0, lg:-60}} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item>
    <Box sx={{ minWidth: 294 ,bgcolor:'#FFFFFF',borderRadius:'5px'}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Select Loan Purpose
        </InputLabel>
        <NativeSelect
        
          defaultValue={1}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native'
          }}
        >
          <option value={1}>Debt Consolidation</option>
          <option value={2}>Credit Card Consolidation</option>
          <option value={3}>Home Improvement</option>
          <option value={4}>Home Buying</option>
          <option value={5}>Major Purchase</option>
          <option value={6}>Car Financing</option>
          <option value={7}>Business</option>
          <option value={8}>Moving and Relocation</option>
          <option value={9}>Medical Expenses</option>
          <option value={10}>Other</option>

        </NativeSelect>
      </FormControl>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Button
      variant="text"
      sx={{
        fontSize: "16px",
        color: "#FFFFFF",
        padding: "10px 24px",
        fontWeight: "bold",
        textTransform: "none",
        fontFamily: "'Lato', sans-serif",
        bgcolor: "#FF704D",
        "&:hover": {
          bgcolor: "#FF471A",
        },
      }}
    >
      See  Personalized Results
    </Button>
  </Grid>
</Grid>


          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ lg: 100, md: 60, sm: 30, xs: 2 }}
            sx={{ marginBottom: "40px", marginTop: "40px" }}
          >
            <Link
              href="#"
              sx={{
                fontSize: "12px",
                fontFamily: "'Lato', sans-serif",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              {" "}
              How does lending tree Get paid?
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: "12px",
                fontFamily: "'Lato', sans-serif",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              {" "}
              Privacy Secured | Advertising Disclosure
            </Link>
          </Stack>
        </Box>
        {/* -----------------------------------------------------------------
        ----------------------------------------------------------------- */}
        <Container
          sx={{
            direction: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center", // Center the buttons horizontally
            width: "100%",
            height: "auto",
            flexGrow: 1,
            display: { xs: "block", md: "flex" },
            px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
          }}
        >
          <Box>
            <Typography
              direction={{ xs: "column", md: "column" }}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                textAlign: "center",
                marginTop: { xs: "20px", md: "40px" },
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Written by <span style={{ color: "#00AEEF" }}>Amanda Push </span> |
              Edited by{" "}
              <span style={{ color: "#00AEEF" }}>Katie Lowery </span> |
             Updated May 1, 2024
            </Typography>
            
          </Box>
        </Container>
      </div>
    );
  };
  
  export default Intro3;
  