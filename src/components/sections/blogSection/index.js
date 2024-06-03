import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./index.css";
import bImg1 from "../../../assets/bImg1.webp";
import bImg2 from "../../../assets/bImg2.webp";
import bImg3 from "../../../assets/bImg3.webp";
import bImg4 from "../../../assets/bImg4.webp";
import bImg5 from "../../../assets/bImg5.webp";
import bImg6 from "../../../assets/bImg6.webp";
import { Link } from "react-router-dom";

const Blog = () => {
  const BlogData = [
    {
      img: bImg1,
      heading: "BEST CREDIT CARDS IN MAY 2024",
      subHeading: "14 Best Rewards Credit Cards in April 2024",
      to: "/credit-cards/best/rewards",
    },
    {
      img: bImg2,
      heading: "BEST CREDIT CARDS IN MAY 2024",
      subHeading:
        "Best Balance Transfer Credit Cards with No Transfer Fee in April 2024",
        to:"/best-balance-transfer-credit-card/"
    },
    {
      img: bImg3,
      heading: "PERSONAL LOANS",
      subHeading: "Bad Credit Loans",
    },
    {
      img: bImg4,
      heading: "PERSONAL LOANS",
      subHeading: "When and How to Refinance a Personal Loan",
    },
    {
      img: bImg5,
      heading: "DEBT CONSOLIDATION",
      subHeading:
        "Down the Rabbit Hole: 18% of Disney Goers Have Racked Up Debt, But Most Have No Regrets",
        to:"/debt-consolidation-rewards/"
    },
    {
      img: bImg6,
      heading: "BEST CREDIT CARDS IN MAY 2024",
      subHeading:
        "13% of Millennials are Debt-Free, Credit Card Debt Most Common Problem",
        to:"/debt-free-millennials/"
    },
  ];
  return (
    <>
      <Box
        // className="intro-main"
        sx={{
          background: "#fff",
          position: { xs: "relative", sm: "relative", md: "relative" },
          top: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },
          paddingBottom: "72px",
        }}
      >
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1 className="left-heading">From our experts</h1>
              </Grid>
              {BlogData.map((item, index) => (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Box display={"flex"} alignItems={"center"} pt={4}>
                    <img
                      src={item.img}
                      alt="bimg"
                      width={"160"}
                      height={"112px"}
                      style={{
                        borderRadius: "8px",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box ml={2}>
                      <h1 className="b-heading">{item.heading}</h1>
                      <Link to={item.to}>
                        <h1 className="b-subheading">{item.subHeading}</h1>
                      </Link>
                    </Box>
                  </Box>
                  {/* Add any additional content here */}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
