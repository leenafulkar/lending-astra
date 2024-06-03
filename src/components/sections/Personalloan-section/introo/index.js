import {
    Typography,
    Box,
    Button,
    Container,
    useTheme,
    Stack,
    Link,
  } from "@mui/material";
  import React from "react";
  
  const Intro = () => {
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
            Lowest Personal Loan Rates From Top Lenders
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
            Rates starting at 5.99% APR and amounts up to $50,000
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              margin: "0px 0px 25px",
              fontFamily: "'Lato', sans-serif",
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            Checking rates won't affect your credit score
          </Typography>
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
            See Your Personalized Results
          </Button>
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
              <span style={{ color: "#00AEEF" }}>Jessica Sain-Baird </span> |
              Reviewed April 26, 2024
            </Typography>
            <Typography
              direction={{ xs: "column", md: "column" }}
              sx={{
                fontSize: { xs: "24px", md: "40px" },
                textAlign: "center",
                marginTop: { xs: "20px", md: "40px" },
                fontFamily: "'Georgia', 'Times', 'Times New Roman', serif", // Multiple font families
              }}
            >
              Best personal loans in May 2024
            </Typography>
          </Box>
        </Container>
      </div>
    );
  };
  
  export default Intro;
  