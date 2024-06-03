import React, { useContext, useEffect } from "react";
import LoanPurpose from "./loanPurpose";
import Borrow from "./borrow";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserContext } from "../../../context";
import NeedMoney from "./needMoney";
import Dob from "./dateOfBirth";
import Residence from "./residence";
import YourCredit from "./yourCredit";
import EmploymentStatus from "./employmentStatus";
import AnnualIncome from "./annualIncome";
import MakingSure from "./makingSure";
import ZipCode from "./zipCode";
import Address from "./address";
import Name from "./name";
import Mobile from "./phone";
import Email from "./email";
import Success from "./success";

const FormComponent = () => {
  const { user } = useContext(UserContext);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  return (
    <Box width={"100%"}>
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
          <h3
            style={{
              fontSize: "18px",
              color: "#08c177",
              fontWeight: "bold",
            }}
          >
            PERSONAL LOAN
          </h3>
        </Box>
        <Box width={"80%"}>
          <Box>
            <LoanPurpose />
            {user.loan_purpose ? <Borrow /> : ""}
            {user.borrow ? <NeedMoney /> : ""}
            {user.need ? <Dob /> : ""}
            {user.dob ? <Residence /> : ""}
            {user.residence ? <YourCredit /> : ""}
            {user.credit ? <EmploymentStatus /> : ""}
            {user.employeeStatus ? <AnnualIncome /> : ""}
            {user.annualIncome ? <MakingSure /> : ""}
            {user.makingSure ? <ZipCode /> : ""}
            {user.zipCode ? <Address /> : ""}
            {user.address ? <Name /> : ""}
            {user.firstName ? <Mobile /> : ""}
            {user.mobile ? <Email /> : ""}
            {user.email ? <Success /> : ""}
          </Box>

          {!user.email && (
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
              Licensed Mortgage Broker, as required by law, with its main office
              located at 1415 Vantage Park Drive, Suite 700, Charlotte, NC
              28203,
              <a
                style={{ color: "#00aeef" }}
                href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1136"
                target="_blank"
              >
                NMLS Unique Identifier #1136
              </a>
              . LendingTree, LLC is known as LT Technologies in lieu of true
              name LendingTree, LLC in NY. LendingTree technology and processes
              are patented under U.S. Patent Nos. 6,385,594 and 6,611,816 and
              licensed under U.S. Patent Nos. 5,995,947 and 5,758,328. © 2024
              LendingTree, LLC. All Rights Reserved. This site is directed at,
              and made available to, persons in the continental U.S., Alaska and
              Hawaii only.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormComponent;
