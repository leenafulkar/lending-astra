import React from "react";
import { Box, Container, Grid } from "@mui/material";
import "./index.css";
import { YouTube, Facebook, Instagram, Pinterest } from "@mui/icons-material";
import imgApple from "../../../assets/apple.svg";
import imgPlay from "../../../assets/playapp.svg";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#101f30",
          color: "#fff",
          paddingBottom: "35px",
          position: { xs: "relative", sm: "relative", md: "relative" },
          top: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },
        }}
        // sx={{
        //   background: "#fff",
        //   position: { xs: "relative", sm: "relative", md: "unset" },
        //   top: { xs: "220px", sm: "220px", md: "0px" },
        //   paddingBottom: "72px",
        // }}
      >
        <Container>
          <Grid container>
            <Grid xs={4} sm={4} md={2} lg={2}>
              <ul className="f-ulSty">
                <Box sx={{ padding: "20px 0px 10px" }}>
                  <p style={{ color: "#fff", fontWeight: 600 }}>About Us</p>
                </Box>
                <li>About LendingTree</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Investors</li>
                <li>Partner with Us</li>
                <li>Press Room</li>
                <li>Widgets</li>
              </ul>
            </Grid>
            <Grid xs={4} sm={4} md={2} lg={2}>
              <ul className="f-ulSty">
                <Box sx={{ padding: "20px 0px 10px" }}>
                  <p style={{ color: "#fff", fontWeight: 600 }}>
                    Legal Information
                  </p>
                </Box>
                <li>Overview</li>
                <li>Privacy Policy</li>
                <li>California Privacy Notice</li>
                <li>Your Privacy Choices</li>
                <li>Security</li>
                {/* <li>Advertising Disclosures</li>
                <li>Terms of Use</li>
                <li>Licenses & Disclosures</li>
                <li>Unsubscribe</li>
                <li>Vulnerability Disclosure Program</li>
                <li>Accessibility Statement</li>
                <li>Other Sites</li>
                <li>CompareCards</li> */}
              </ul>
            </Grid>
            <Grid xs={4} sm={4} md={2} lg={2}>
              <ul className="f-ulSty">
                <Box sx={{ padding: "20px 0px 10px" }}>
                  <p style={{ color: "#fff", fontWeight: 600 }}>Other Sites</p>
                </Box>
                <li>CompareCards</li>
                <li>DepositAccounts</li>
                <li>MagnifyMoney</li>
                <li>QuoteWizard</li>
                <li>SimpleTuition</li>
                <li>SnapCap</li>
                <li>ValuePenguin</li>
              </ul>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6}>
              <ul className="f-ulSty">
                <Box sx={{ padding: "20px 0px 10px" }}>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      paddingBottom: "20px",
                    }}
                  >
                    Follow Us
                  </p>
                  <Box display={"flex"}>
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        background: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        color: "red",
                        marginRight: "20px",
                      }}
                    >
                      <YouTube xs={{ width: "35px", height: "35px" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        background: "#0866ff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        color: "#fff",
                        marginRight: "20px",
                      }}
                    >
                      <Facebook xs={{ width: "35px", height: "35px" }} />
                    </Box>

                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        background:
                          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        color: "#fff",
                        marginRight: "20px",
                      }}
                    >
                      <Instagram xs={{ width: "35px", height: "35px" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "25px",
                        height: "25px",
                        background: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        color: "red",
                        marginRight: "20px",
                      }}
                    >
                      <Pinterest xs={{ width: "35px", height: "35px" }} />
                    </Box>
                  </Box>
                </Box>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    paddingBottom: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Download Our App
                </p>
                <Box>
                  <img
                    src={imgApple}
                    alt="apple"
                    width={"120px"}
                    height={"40px"}
                    style={{ marginRight: "20px" }}
                  />
                  <img
                    src={imgPlay}
                    alt="play"
                    width={"120px"}
                    height={"40px"}
                  />
                </Box>
              </ul>
            </Grid>
            <Box>
              <p className="f-para">
                LendingAstra, LLC operates as a Marketing Lead Generator and is
                a duly licensed Mortgage Broker, as mandated by law, with its
                primary office situated at 8415 Park Drive, Suite 700,
                Charlotte, NC 28203 (TDD/TTY). NMLS Unique Identifier #1136. In
                New York, LendingAstra, LLC is known as LT Technologies instead
                of its true name, LendingTree, LLC. LendingAstra's technology
                and processes are patented under U.S. Patent Nos. 6,385,594 and
                6,611,816, and licensed under U.S. Patent Nos. 5,995,947 and
                5,758,328. © 2024 LendingTree, LLC. All Rights Reserved. This
                website is directed at, and made available to, individuals in
                the continental U.S., Alaska, and Hawaii only.
              </p>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
