import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import bannerImg from "../../../../assets/student-loans.png";
import "./index.css";
import { Link } from "react-router-dom";

const BannerStuLona = () => {
  return (
    <>
      <Box
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          height: "auto",
          background: "radial-gradient(circle at 50% 0, #e9fcf4, #8ab5b5)", // Radial gradient background
          color: "#101f30", // Set text color to white
          padding: "60px 0px 0px",
          // textAlign: "center",
          display: "flex",
          // flexDirection: "column",
        }}
      >
        <Container sx={{ marginTop: "40px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img
                  src={bannerImg}
                  alt="banner"
                  style={{ width: "100%", maxWidth: "560px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <h1 className="banner-headding">
                  Compare private student loan options
                </h1>
                <Box
                  sx={{
                    paddingTop: "30px",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <form>
                    <TextField
                      label="Enter text"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        maxWidth: "350px",
                        background: "#fff",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    />
                    <Box sx={{ paddingTop: "20px" }}>
                      <Link to="/">
                        <button type="submit" className="banner-btn">
                          View Loan Options
                        </button>
                      </Link>
                    </Box>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BannerStuLona;
