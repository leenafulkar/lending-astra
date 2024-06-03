import React from "react";
import "../RateSection/index.css";
import { Box, Grid, Container, Card } from "@mui/material";
import featureImg from "../../../assets/man-with-phone-desktop.webp";
import { Link } from "react-router-dom";

const FeatureRate = () => {
  return (
    <>
      <Box
        sx={{
          // background: "#fff",
          // paddingBottom: "52px",
          // position: { xs: "relative", sm: "relative", md: "relative" },
          // top: { xs: "220px", sm: "220px", md: "220px", lg: "0px" },
          paddingTop: "30px",
        }}
      >
        <Box sx={{ margin: "0 auto 50px", background: "#fff" }}>
          <Container>
            <h1 className="trust-headding">Featured rates on our network</h1>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card sx={{ padding: "16px 16px 16px", height: "100%" }}>
                  <Box
                    sx={{
                      borderLeft: "3px solid  #ffc507",

                      paddingLeft: "10px",
                      paddingTop: "0px",
                    }}
                  >
                    <h1 className="box-headding">Mortgage</h1>
                    <p className="box-para">APR rates as low as</p>
                  </Box>
                  <Box sx={{ paddingLeft: "20px" }}>
                    {" "}
                    <h1 className="box-number">7.71%</h1>
                    <p className="box-amount">
                      5/1 ARM <br /> $200,000 LOAN
                    </p>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card sx={{ padding: "16px 16px 16px", height: "100%" }}>
                  <Box
                    sx={{
                      borderLeft: "3px solid #00b29f",

                      paddingLeft: "10px",
                      paddingTop: "0px",
                    }}
                  >
                    <h1 className="box-headding">Home Refinance</h1>
                    <p className="box-para">APR rates as low as</p>
                  </Box>
                  <Box sx={{ paddingLeft: "20px" }}>
                    {" "}
                    <h1 className="box-number">7.56%</h1>
                    <p className="box-amount">
                      30 YEAR FIXED <br /> $200,000 LOAN
                    </p>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card sx={{ padding: "16px 16px 16px", height: "100%" }}>
                  <Box
                    sx={{
                      borderLeft: "3px solid #00aeef",

                      paddingLeft: "10px",
                      paddingTop: "0px",
                    }}
                  >
                    <h1 className="box-headding">Personal Loans</h1>
                    <p className="box-para">APR rates as low as</p>
                  </Box>
                  <Box sx={{ paddingLeft: "20px" }}>
                    {" "}
                    <h1 className="box-number">6.99%</h1>
                    <p className="box-amount">
                      3 YEAR
                      <br /> $20,000 LOAN
                    </p>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card sx={{ padding: "16px 16px 16px", height: "100%" }}>
                  <Box
                    sx={{
                      borderLeft: "3px solid #00aeef",

                      paddingLeft: "10px",
                      paddingTop: "0px",
                    }}
                  >
                    <h1 className="box-headding">HELOC</h1>
                    <p className="box-para">APR rates as low as</p>
                  </Box>
                  <Box sx={{ paddingLeft: "20px" }}>
                    {" "}
                    <h1 className="box-number">6.99%</h1>
                    <p className="box-amount">
                      30 YEAR FIXED
                      <br />
                      $50,000 LOAN
                    </p>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <p className="bottom-para-rate">
              Rates above may change at lender discretion and may not be
              available at the time of loan commitment or lock-in.
            </p>
          </Container>
        </Box>
        <Box sx={{ margin: "0 auto", background: "#f5f5f5" }}>
          <Container>
            <Box sx={{ display: "flex", textAlign: "start" }}>
              {" "}
              <h1 className="trust-headding">
                Tools to start your financial journey
              </h1>
            </Box>

            <Box
              sx={{
                background: "#08c177",
                borderRadius: "15px",
                minHeight: "535px",
                width: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Grid container spacing={2} className="main-box">
                    <Grid xs={12} sm={12} md={6} lg={6}>
                      <Box>
                        <Card className="feature-card">
                          <h1 className="card-headding">Mortgage Rates</h1>
                          <p className="card-para">
                            Comparing to find your lowest rate could save you
                            thousands.
                          </p>
                          <Link className="card-link">Compare Rates</Link>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                      <Box>
                        <Card className="feature-card">
                          <h1 className="card-headding">Ratings & Reviews</h1>
                          <p className="card-para">
                            Read real reviews about the lenders on our network.
                          </p>
                          <Link className="card-link">Read lender reviews</Link>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                      <Box>
                        <Card className="feature-card">
                          <h1 className="card-headding">Payment Calculator</h1>
                          <p className="card-para">
                            Figure out your estimated payments the easy way.
                          </p>
                          <Link className="card-link">Mortgage Calculator</Link>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                      <Box>
                        <Card className="feature-card">
                          <h1 className="card-headding">Credit Score</h1>
                          <p className="card-para">
                            Get actionable insights to help you boost your
                            score.
                          </p>
                          <Link className="card-link">
                            Get your credit score
                          </Link>
                        </Card>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6}>
                  <img src={featureImg} alt="img" width={"100%"} />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default FeatureRate;
