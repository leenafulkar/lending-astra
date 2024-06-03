import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
} from "@mui/material";
import "./index.css";
import imgMob from "../../../assets/Phones-MP24.jpg";
const Trust = () => {
  return (
    <>
      <Box
        sx={{
          background: "#fff",
          // position: { xs: "relative", sm: "relative", md: "relative" },
          // top: { xs: "140px", sm: "220px", md: "220px", lg: "0px" },
          paddingBottom: "50px",
        }}
      >
        <Container>
          <h1 className="trust-headding">
            Why do millions of Americans trust LendingAstra?
          </h1>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <img src={imgMob} alt="mobile" width={"100%"} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", paddingRight: "50px" }}>
                      <div className="circle">1</div>
                    </Box>
                    <div>
                      {" "}
                      <h1 className="circle-headding">Security</h1>
                      <p className="circle-para">
                        Instead of divulging your information to multiple
                        lenders, complete one straightforward, secure form in
                        five minutes or less.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", paddingRight: "50px" }}>
                      <div className="circle">2</div>
                    </Box>
                    <div>
                      {" "}
                      <h1 className="circle-headding">Savings</h1>
                      <p className="circle-para">
                        We'll pair you with up to five lenders from our network
                        of 300+ lenders who will reach out to compete for your
                        business
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "40px" }}>
                    <Box sx={{ width: "30px", paddingRight: "50px" }}>
                      <div className="circle">3</div>
                    </Box>
                    <div>
                      {" "}
                      <h1 className="circle-headding">Support</h1>
                      <p className="circle-para">
                        We offer continual support with complimentary credit
                        monitoring, budgeting insights, and personalized
                        recommendations to assist you in saving.
                      </p>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Trust;
