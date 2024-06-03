import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  styled,
  Paper,
  Link,
  Button,
  Rating,
} from "@mui/material";
import Ascentlogo from "../../../../assets/StuLoanAssets/Dark-logo-175x60-1.webp";
import citiBank from "../../../../assets/StuLoanAssets/citizensbank-logo.webp";
import collage from "../../../../assets/StuLoanAssets/college-ave.webp";
import ernest from "../../../../assets/StuLoanAssets/1_Earnest.webp";
import funding from "../../../../assets/StuLoanAssets/fundingulogo.webp";
import pnc from "../../../../assets/StuLoanAssets/PNC-Bank-logo-1024x614.webp";
import risle from "../../../../assets/StuLoanAssets/rislaa.webp";
import sallie from "../../../../assets/StuLoanAssets/Sallie-Mae-logo-1024x398.webp";
import sofi from "../../../../assets/StuLoanAssets/sofilogonew-1.webp";
import Avant_logo from "../../../../assets/Avant-2023-2048x286.webp";
import Happymoney_logo from "../../../../assets/Happy-Money-logo.webp";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BoxSection = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [expanded, setExpanded] = useState([false, false]);

  const ArrayData = [
    {
      img: Ascentlogo,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: citiBank,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: collage,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: ernest,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: funding,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: pnc,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: risle,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: sallie,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
    {
      img: sofi,
      Loan_amounts: "Min: $1,000 Max: Up to 100% cost of attendance",
      Variable_APR: "6.24% to 15.85% with autopay discount",
      Fixed_APR: "4.29% to 15.76% with autopay discount",
      Terms: "5, 7, 10, 12, 15 years",
      Origination_fee: "None",
      Minimum_credit_score: "Varies",
      Pro1: "Free monthly credit score",
      Pro2: "Will send your loan directly to who you owe",
      Pro3: "Can change loan payment due date",
      con1: "Loan may come with an origination fee",
      con2: "Customer service not available on weekends",
      con3: "No mobile app",
      para: "What to know Need additional funds while studying abroad in the U.S.? Ascent Student Loans offers student loans for non-U.S. citizens, non-U.S. permanent residents and non-Deferred Action for Childhood Arrivals (DACA) student Undergraduate students can borrow up to 100% of their school’s cost of attendance ($200,000 aggregate) after other financial aid, with graduate student loans going up to $400,000. You can opt for up to nine months of deferred repayment after graduation — though interest will accrue during the deferment. You may also be able to access a personal loan for non-U.S. citizens to cover non-educational-related expenses. Eligibility requirements You must be enrolled at least half-time at an eligible institution and have a U.S. citizen or permanent resident cosigner when applying for an Ascent international student loan. You and your cosigner must meet income and credit score requirements, which vary. U.S. citizens, permanent residents and DACA students can apply with or without a cosigner.",
    },
  ];

  return (
    <div>
      {ArrayData.map((item) => (
        <React.Fragment key={item.id}>
          <Container sx={{ marginTop: "40px" }}>
            <img src={item.img} alt="img" width={150} height={66} />
            <Typography
              direction={{ xs: "column", md: "column" }}
              sx={{
                fontSize: "27px",
                textAlign: "left",
                margin: "20px 0px 30px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Best for international students
            </Typography>
          </Container>

          {/* ----------------------------------------- */}
          <Container
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              maxWidth: "1286px",
              textAlign: "left",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Grid container sx={12}>
                <Grid container xs={12} sm={6} md={6} lg={6}>
                  <Grid xs={3}>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      APR range
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Loan amounts
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Fixed APR
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Loan terms
                    </Item>

                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Origination fee
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Min. credit score
                    </Item>
                  </Grid>
                  <Grid xs={9}>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Loan_amounts}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Variable_APR}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Fixed_APR}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Terms}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Origination_fee}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      {item.Minimum_credit_score}
                    </Item>
                  </Grid>
                </Grid>
                {/* ////////////////////////////// */}

                <Grid container xs={12} sm={6} md={6} lg={6} spacing={1}>
                  <Grid item xs={6}>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        textAlign: "left",
                        bgcolor: "#08C177",
                      }}
                    >
                      Pros
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: "#08C177",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.Pro1}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: "#08C177",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.Pro2}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: "#08C177",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.Pro3}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        textAlign: "left",
                        bgcolor: "#08C177",
                      }}
                    >
                      Cons
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          color: "#FF0000",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.con1}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          color: "#FF0000",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.con2}
                    </Item>
                    <Item
                      sx={{
                        boxShadow: "none",
                        fontSize: "14px",
                        fontFamily: "'Lato', sans-serif",
                        color: "#000000",
                        textAlign: "left",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          color: "#FF0000",
                          fontSize: "22px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />
                      {item.con3}
                    </Item>
                  </Grid>
                </Grid>
                <Box sx={{ paddingTop: "20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "17px",
                      color: "454545",
                      marginBottom: "25px",
                    }}
                  >
                    {item.para}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      ))}
      {/* ///////////////////////////////////////////////////////////////// */}

      <Container>
        <Box sx={{ paddingBottom: "15px" }}>
          <Typography
            direction={{ xs: "column", md: "column" }}
            sx={{
              fontSize: "27px",
              textAlign: "left",
              margin: "20px 0px 30px",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Frequently asked questions
          </Typography>
          <Grid>
            <Accordion className="accordionn-border" sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  expanded[0] ? (
                    <RemoveIcon sx={{ color: "#00AEEF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#00AEEF" }} />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordionn-headd"
                sx={{ color: "#00AEEF" }}
                onClick={() => setExpanded([!expanded[0], expanded[1]])}
              >
                How do I qualify for a private student loan?
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "17px",
                    color: "#454545",
                    marginBottom: "25px",
                  }}
                >
                  To qualify for a private loan, you’ll need to attend an
                  eligible school and meet the lender’s age, education or
                  citizenship requirements, as well as credit and income
                  criteria. Undergraduate students usually need to apply with a
                  creditworthy cosigner. Many lenders let you check your rates
                  with an online prequalification that won’t impact your credit
                  (as opposed to a more in-depth hard credit inquiry). Compare
                  offers from a few different lenders to find the lowest rate
                  for your private student loan. Information usually needed to
                  get a private student loan Credit history Valid ID Social
                  Security number Employment and income verification Tax
                  documents Bank account and asset details Debt or payment
                  obligations If you have a cosigner, they will likely need to
                  submit this information too.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordionn-border" sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  expanded[1] ? (
                    <RemoveIcon sx={{ color: "#00AEEF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#00AEEF" }} />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordionn-headd"
                sx={{ color: "#00AEEF" }}
                onClick={() => setExpanded([expanded[0], !expanded[1]])}
              >
                Can I get a private student loan with bad credit?
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "17px",
                    color: "#454545",
                    marginBottom: "25px",
                  }}
                >
                  Most private lenders require a minimum credit score before
                  approving you for a private student loan. If you have limited
                  or bad credit, you can boost your chances of qualifying by
                  applying with a cosigner. Even if you can qualify on your own,
                  adding a creditworthy cosigner to your application could help
                  secure better rates. Note that your cosigner will hold equal
                  responsibility for the loan, and their credit will suffer if
                  your loan falls into delinquency or defaults. Some lenders
                  allow you to release your cosigner after a certain period of
                  on-time payments. For more information on this, check out our
                  guide to student loans for bad credit.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordionn-border" sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  expanded[2] ? (
                    <RemoveIcon sx={{ color: "#00AEEF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#00AEEF" }} />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordionn-headd"
                sx={{ color: "#00AEEF" }}
                onClick={() => setExpanded([expanded[0], !expanded[2]])}
              >
                Will I need a cosigner for private student loans?
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "17px",
                    color: "#454545",
                    marginBottom: "25px",
                  }}
                >
                  Historically, about 9 out of 10 private student loans are
                  borrowed with cosigners — creditworthy individuals who agree
                  to repay the debt if the primary borrower falls behind. That’s
                  because teens and 20-somethings often don’t have an adequate
                  credit history to meet the underwriting standards of banks,
                  credit unions and online-only lenders. Even if you’re a rare
                  case who could qualify on your own, including a cosigner could
                  potentially lower your interest rate. Make sure you and your
                  cosigner understand the legal obligations of repayment before
                  deciding to team up. And if you prefer to apply alone, check
                  out student loans without cosigner requirements.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordionn-border" sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  expanded[3] ? (
                    <RemoveIcon sx={{ color: "#00AEEF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#00AEEF" }} />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordionn-headd"
                sx={{ color: "#00AEEF" }}
                onClick={() => setExpanded([expanded[0], !expanded[3]])}
              >
                How much should you borrow in private student loans?
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "17px",
                    color: "#454545",
                    marginBottom: "25px",
                  }}
                >
                  Each lender sets its own minimum and maximum borrowing
                  amounts. However, just because you can borrow up to your
                  remaining cost of attendance doesn’t mean you should. Your
                  loan balance, interest rate and loan term (definitions below)
                  can dramatically impact the overall costs of a private student
                  loan. Balance When you take out a student loan, your balance
                  is the amount you borrowed. As interest accumulates, your loan
                  balance grows. You might have several student loan balances,
                  depending on how many loans you took out. Interest rate When
                  you borrow a student loan, you agree to pay back your borrowed
                  amount, plus interest. With the exception of federal
                  subsidized loans, interest starts racking up from day one.
                  Private student loans can come with fixed or variable interest
                  rates. Variable rates often start lower than fixed ones, but
                  they can drastically increase over time. Loan term The term is
                  the number of years it takes to repay your loan. Private loans
                  are not eligible for federal repayment plans. Most private
                  lenders let you choose a term of five to 20 years, though some
                  have longer or shorter terms available. Use the following
                  questions to determine how much private funds you should
                  borrow:
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordionn-border" sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  expanded[4] ? (
                    <RemoveIcon sx={{ color: "#00AEEF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#00AEEF" }} />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordionn-headd"
                sx={{ color: "#00AEEF" }}
                onClick={() => setExpanded([expanded[0], !expanded[4]])}
              >
                What happens after applying for a student loan?
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "17px",
                    color: "#454545",
                    marginBottom: "25px",
                  }}
                >
                  After applying for a private student loan, you should receive
                  a formal approval or denial within days, sometimes hours. More
                  likely, a customer service representative from your potential
                  lender will follow up to provide a status update or request
                  additional documentation. If your application is rejected, the
                  lender may describe ways to improve your chances, perhaps by
                  including a cosigner. If your application is approved, the
                  lender will share forms to complete, and will contact your
                  school to certify the loan amount. If time is of the essence —
                  perhaps your next semester or academic term is fast
                  approaching — consult the preferred lenders on your list about
                  how quickly you can expect an answer on your application. You
                  might also consider emergency student loans for immediate
                  financial needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default BoxSection;
