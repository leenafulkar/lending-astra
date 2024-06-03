import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Wimg from "../../../assets/what-does-lt-do-woman.jpeg";
import "./index.css";
import Wimg1 from "../../../assets/mortgage.svg";
import Wimg2 from "../../../assets/rating.svg";
import Lottie from 'react-lottie';
import Animation3 from '../../../Lottie-Files/Animation3.json'

const What = () => {
  const WhatData = [
    {
      img: Wimg1,
      heading: "Mortgage Refinance",
    },
    {
      img: Wimg2,
      heading: "Auto Loans",
    },
    {
      img: Wimg2,
      heading: "Home Equity Loans",
    },
    {
      img: Wimg2,
      heading: "Home Equity Loans",
    },
    {
      img: Wimg2,
      heading: "Home Equity Loans",
    },
    {
      img: Wimg2,
      heading: "Home Equity Loans",
    },
    {
      img: Wimg2,
      heading: "Home Equity Loans",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <Box
        sx={{
          background: "#f5f5f5",
          position: { xs: "relative", sm: "relative", md: "relative" },
          top: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },
          paddingBottom: "72px",
        }}
      >
        <Container>
          <Box sx={{ paddingTop: "72px", maxWidth: "900px", margin: "0 auto" }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={6}>
                <Box sx={{ p: 2 }}>
                  <h1 className="left-heading">What does LendingAstra do?</h1>
                  <p className="whatPara">
                    LendingAstra is a marketplace designed to save you money—we
                    don't originate loans, we locate them. With over 20 years of
                    experience, we've been sourcing the best loans for
                    Americans. Our marketplace is the largest in the country,
                    featuring lenders you recognize and rely on.
                  </p>
                </Box>
                <Box>
                  <Grid container>
                    {WhatData.map((item, index) => (
                      <Grid item xs={6} sm={6} md={6} key={index}>
                        <Box display={"flex"} alignItems={"center"} pt={4}>
                          <img
                            src={item.img}
                            alt="img"
                            width={"42px"}
                            height={"42px"}
                          />
                          <h1 className="w-heading">{item.heading}</h1>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6}>
              <Box>
                <Lottie options={defaultOptions}  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default What;
