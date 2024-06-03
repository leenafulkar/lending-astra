import React from "react";
import { Box, Container } from "@mui/material";
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
        position: { xs: "relative", sm: "relative", md: "relative" },
        top: { xs: "50px", sm: "220px", md: "220px", lg: "0px" },
        height: "120px",
      }}
    >
      <Container>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
          >
            <div>
              <p className="feature-para">
                Publications featuring LendingAstra experts this month
              </p>
            </div>
            <div className="featue-img-main">
              <img src={featureimg1} className="featureimg" />
            </div>
            <div className="featue-img-main">
              <img src={featureimg2} className="featureimg" />
            </div>
            <div className="featue-img-main">
              <img src={featureimg3} className="featureimg" />
            </div>
            <div className="featue-img-main">
              <img src={featureimg4} className="featureimg" />
            </div>
            <div className="featue-img-main">
              <img src={featureimg5} className="featureimg" />
            </div>
            <div className="featue-img-main">
              <img src={featureimg6} className="featureimg" />
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;
