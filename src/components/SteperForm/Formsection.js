import React, { useState } from "react";

import "./css/Formsection.css";
import Forminput from "./FullForm/PersonalLoanForm";
import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PersonalLoanForm from "./FullForm/PersonalLoanForm";
import { useLocation } from "react-router-dom";
import EquityForm from "./FullForm/EquityForm";
import HomePurchase from "./FullForm/HomePurchase";
import BusinessLoanForm from "./FullForm/BusinessLoanForm";
import DebtReliefForm from "./FullForm/DebtReliefForm";
import HomeRefinance from "./FullForm/HomeRefinance";
import AutoLoanForm from "./FullForm/AutoLoanForm";
// import Header from "../../Sections/Header/Header";
// import Footer from "../../Sections/Footer/Footer";

function Formsection(props) {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const [currentProgress, setCurrentProgress] = useState(0);
  const changeProgress = (e) => {
    setCurrentProgress(e);
  };

  const location = useLocation();
  return (
    <div className="form-sections">
      {/* <Header /> */}
      <div className="form-wraper">
        <div className="form_margins ">
          {/* <div className="formquestions"> */}
          {/* <Formquestion headtitle="What is the reason for loan?" subtitle="Select the loan reason from below." /> */}
          {/* <Formquestion headtitle="i'm heading question text" subtitle="i'm sub text" /> */}
          {/* <Formquestion headtitle="i'm heading second question text" subtitle="i'm second sub text" /> */}
          {/* </div> */}

          <Box>
            <Box
              height={isLargeScreen ? "150px" : "126px"}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ backgroundColor: "#08c177", color: "white" }}
              position={"relative"}
            >
              <Box
                // py={isLargeScreen ? 3 : 1}
                margin={"0 auto"}
                display="flex"
                justifyContent={isLargeScreen ? "space-evenly" : "center"}
                flexDirection={isLargeScreen ? "" : "column"}
                alignItems="center"
                width={"90%"}
              >
                <Box
                  width={isLargeScreen ? "161px" : "120px"}
                  height={isLargeScreen ? "59px" : "42px"}
                >
                  <img
                    style={{
                      objectFit: "cover",
                    }}
                    src="https://www.lendingtree.com/forms/assets/images/lt-logo-white.svg"
                    className="img-responsive header-logo"
                  />
                </Box>
                <Typography
                  paddingRight={isLargeScreen ? 10 : ""}
                  m={0}
                  sx={{
                    fontSize: isLargeScreen ? "27px" : "15px",
                    textAlign: "center",
                  }}
                >
                  Hi, I'm Marie, {!isLargeScreen && "your loan expert"}
                  {isLargeScreen && (
                    <>
                      <br />
                      <p style={{ fontSize: "17px" }}>Your loan expert</p>
                    </>
                  )}
                </Typography>

                <Typography
                  width={isLargeScreen ? "" : "100%"}
                  textAlign={"right"}
                  fontSize={12}
                >
                  Disclosures
                </Typography>
              </Box>

              <Box
                width={isLargeScreen ? 78 : 50}
                height={isLargeScreen ? 78 : 50}
                position="absolute"
                top={isLargeScreen ? 120 : 100}
                left="50%"
                sx={{ transform: "translateX(-50%)" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.lendingtree.com/forms/assets/images/marie-convo.png"
                  alt="Image"
                />
              </Box>
            </Box>

            <Box
              height={"100%"}
              width={"100%"}
              back
              pt={10}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent="space-between"
              sx={{ backgroundColor: "#101f30" }}
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    height: 7,
                    m: "auto",
                    width: isLargeScreen ? "400px" : "280px",
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#08c177",
                    },
                  }}
                />
                {location.pathname === "/form-personal-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    PERSONAL LOAN
                  </h3>
                )}
                {location.pathname === "/form-equity-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Home Equity
                  </h3>
                )}
                {location.pathname === "/form-home-purchase-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Home Purchase
                  </h3>
                )}
                {location.pathname === "/form-business-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Business Loans
                  </h3>
                )}
                {location.pathname === "/form-home-refinance" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Home Refinance
                  </h3>
                )}
                {location.pathname === "/form-debt-relief-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Debt Relief
                  </h3>
                )}
                {location.pathname === "/form-auto-loan" && (
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#08c177",
                      fontWeight: "bold",
                    }}
                  >
                    Auto Loans
                  </h3>
                )}
              </Box>
              <Box width={"80%"}>
                <Box>
                  <div className="forminput">
                    {location.pathname === "/form-personal-loan" && (
                      <PersonalLoanForm
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                    {location.pathname === "/form-equity-loan" && (
                      <EquityForm
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                    {location.pathname === "/form-home-purchase-loan" && (
                      <HomePurchase
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                    {location.pathname === "/form-business-loan" && (
                      <BusinessLoanForm
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}

                    {location.pathname === "/form-debt-relief-loan" && (
                      <DebtReliefForm
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                    {location.pathname === "/form-home-refinance" && (
                      <HomeRefinance
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                    {location.pathname === "/form-auto-loan" && (
                      <AutoLoanForm
                        changeProgress={changeProgress}
                        progress={currentProgress}
                        setCurrentProgress={setCurrentProgress}
                      />
                    )}
                  </div>
                </Box>

                {false && (
                  <Box
                    alignItems={"center"}
                    my={5}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    <Typography
                      color={"#FFFFFF"}
                      fontSize={"12px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                    >
                      Your information is securely encrypted
                    </Typography>
                    <Typography
                      color={"#FFFFFF"}
                      fontSize={"12px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                    >
                      No Impact to your credit score
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box
                width={isLargeScreen ? "70%" : "90%"}
                textAlign={"center"}
                color={"#a3a3a3"}
                fontSize={"13px"}
                px={2}
              >
                <Divider
                  color={"#a3a3a3"}
                  width={"100%"}
                  height={"5%"}
                  style={{ margin: "25px 0" }}
                />
                <a
                  style={{ color: "#00aeef" }}
                  href="https://www.lendingtree.com/legal/privacy-policy?popup=true"
                  target="_blank"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
                |
                <a
                  style={{ color: "#00aeef" }}
                  href="https://www.lendingtree.com/legal/terms-of-use?popup=true"
                  target="_blank"
                >
                  {" "}
                  Terms of Use{" "}
                </a>{" "}
                |
                <a
                  style={{ color: "#00aeef" }}
                  href=" https://www.lendingtree.com/legal/licenses-and-disclosures?popup=true"
                  target="_blank"
                >
                  {" "}
                  Licenses &amp; Disclosure{" "}
                </a>{" "}
                |
                <a
                  style={{ color: "#00aeef" }}
                  href="https://www.lendingtree.com/legal/accessibility-statement/"
                  target="_blank"
                >
                  {" "}
                  Accessibility Statement{" "}
                </a>
                <Box my={3}>
                  <p>
                    LendingTree, LLC is a Marketing Lead Generator and is a Duly
                    Licensed Mortgage Broker, as required by law, with its main
                    office located at 1415 Vantage Park Drive, Suite 700,
                    Charlotte, NC 28203,
                    <a
                      style={{ color: "#00aeef" }}
                      href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1136"
                      target="_blank"
                    >
                      NMLS Unique Identifier #1136
                    </a>
                    . LendingTree, LLC is known as LT Technologies in lieu of
                    true name LendingTree, LLC in NY. LendingTree technology and
                    processes are patented under U.S. Patent Nos. 6,385,594 and
                    6,611,816 and licensed under U.S. Patent Nos. 5,995,947 and
                    5,758,328. © 2024 LendingTree, LLC. All Rights Reserved.
                    This site is directed at, and made available to, persons in
                    the continental U.S., Alaska and Hawaii only.
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <div className="forminput">
            <Forminput
              changeProgress={props.changeProgress}
              progress={props.progress}
              // IP={props.IP}
            />
          </div> */}
          {/* <div className="formbutton">
                        Formbutton
                    </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Formsection;
