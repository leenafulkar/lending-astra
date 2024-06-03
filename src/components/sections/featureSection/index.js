import React from "react";
import { Box, Container, Grid } from "@mui/material";
import "../featureSection/index.css";
import featureimg1 from "../../../assets/logo-entrepreneur-hp-tablet.png";
import featureimg2 from "../../../assets/logo-ny-times-hp-tablet.png";
import featureimg3 from "../../../assets/logo-cnn-hp-tablet.png";
import featureimg4 from "../../../assets/logo-usa-today-hp-tablet.png";
import featureimg5 from "../../../assets/logo-forbes-hp-tablet.png";
import featureimg6 from "../../../assets/logo-abc-hp-tablet.png";

const Feature = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #d8d8d8",
        // position: { xs: "relative", sm: "relative", md: "relative" },
        // top: { xs: "210px", sm: "230px", md: "220px", lg: "0px" },
        // bottom: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },// display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // height: "120px",
        paddingTop: "60px",
      }}
    >
      <Container>
        <Box>
          <Box
          // display={"flex"}
          // justifyContent={"center"}
          // alignItems={"center"}
          // sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <div>
                  <p className="feature-para">
                    Publications featuring LendingAstra experts this month
                  </p>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg1} className="featureimg" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg2} className="featureimg" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg3} className="featureimg" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg4} className="featureimg" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg5} className="featureimg" />
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={1.5}>
                <div className="featue-img-main">
                  <img src={featureimg6} className="featureimg" />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;
