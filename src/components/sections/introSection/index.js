import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import imgMob from "../../../assets/spring-content-image.webp";
import imgRight from "../../../assets/rightIcon.webp";
import "./index.css";

const IntroSection = () => {
  return (
    <>
      <Box
        className="intro-main"
        sx={{
          position: { xs: "relative", sm: "relative", md: "relative" },
          top: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },
        }}
      >
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <img
                    src={imgMob}
                    alt="mobile"
                    width={"455"}
                    height={"492"}
                    style={{ maxWidth: "100%" }}
                    className="intro-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <h1 className="left-headding">
                    Why do millions of Americans trust LendingAstra?
                  </h1>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", marginRight: "20px" }}>
                      <div className="circle">
                        <img src={imgRight} alt="right" width={"20px"} />
                      </div>
                    </Box>
                    <div>
                      {/* {" "}
                      <h1 className="circle-headding">Security</h1> */}
                      <p className="circle-para">
                        Rather than sharing your information with multiple
                        lenders, complete one simple, secure form in five
                        minutes or less.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", marginRight: "20px" }}>
                      <div className="circle">
                        <img src={imgRight} alt="right" width={"20px"} />
                      </div>
                    </Box>
                    <div>
                      {/* {" "}
                      <h1 className="circle-headding">Savings</h1> */}
                      <p className="circle-para">
                        We'll connect you with up to five lenders from our
                        extensive network of 300+ lenders, who will contact you
                        to compete for your business.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", marginRight: "20px" }}>
                      <div className="circle">
                        <img src={imgRight} alt="right" width={"20px"} />
                      </div>
                    </Box>
                    <div>
                      {/* {" "}
                      <h1 className="circle-headding">Support</h1> */}
                      <p className="circle-para">
                        We offer continuous support with complimentary credit
                        monitoring, budgeting insights, and personalized
                        recommendations to assist you in saving.
                      </p>
                    </div>
                  </div>
                </Box>
                <Box sx={{ padding: "32px 0px" }}>
                  <button className="btn-radius">
                    Access Spring for free!
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default IntroSection;
