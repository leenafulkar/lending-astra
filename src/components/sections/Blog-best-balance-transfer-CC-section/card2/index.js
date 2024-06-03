import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Link,
  useTheme,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import double_cash_default_logo from "../../../../assets/double-cash_default_All_main.jpg";
import bank_america_logo from "../../../../assets/bankamericard-credit-card-for-students_default_All_main.jpg";
import unlimited_cash_rewards_logo from "../../../../assets/unlimited-cash-rewards_default_main.jpg";
import bank2_of_america_cash from "../../../../assets/bank2-of-america-cash_default_main.jpg";
import citi_simplicity from "../../../../assets/Citi_Simplicity_5182.jpg";

// CardsData

const cardData = [
  {
    id: 1,
    name: "Citi Double Cash® Card",
    image: double_cash_default_logo,
    buttontypo: "on Citibank's secure site",
    introAPR:
      "of 0% intro apr for 18 months on balance transfers, then 19.24% - 29.24% (variable).",
    regularBalanceTransferAPR: "19.24% - 29.24% (Variable)",
    rewardsRate:
      "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
    annualFee:
      "There is an intro balance transfer fee of 3% of each transfer (minimum $5) completed within the first 4 months of account opening. A balance transfer fee of 5% of each transfer ($5 minimum) applies if completed after 4 months of account opening.",
    recommendedCredit: "600-850 Fair/Good/Excellent",
    pros: [
      "No annual fee",
      "Intro APR on balance transfers",
      "Cash back on every purchase",
    ],
    cons: [
      "Balance transfer fee",
      "No intro APR on purchases",
      "Foreign transaction fee",
    ],
    whyWeLikeIt:
      "The Citi Double Cash® Card stands out as one of the top cash back balance transfer cards available. It not only offers an extended introductory APR on balance transfers but also provides an impressive cash back rate. You can earn a total of 2% cash back on every purchase: 1% when you make a purchase and an additional 1% when you pay for those purchases, with no limit on the cash back you can earn. Just ensure you pay at least the minimum due on time to qualify for cash back. Additionally, for a limited period, you can earn 5% total cash back on hotel stays, car rentals, and attractions booked through the Citi Travel℠ portal until 12/31/24.",
    cardDetails: [
      "Earn $200 cash back by spending $1,500 on purchases within the first 6 months of opening your account. This bonus is provided as 20,000 ThankYou® Points, which can be redeemed for $200 cash back.",
      "Get 2% cash back on all purchases: 1% when you make the purchase, and an additional 1% when you pay for those purchases. Earn unlimited cash back with this method. Just make sure to pay at least the minimum amount due on time to qualify for cash back. Additionally, for a limited time until 12/31/24, enjoy 5% total cash back on hotel stays, car rentals, and attractions when booked through the Citi Travel℠ portal.",
      "Exclusive Balance Transfer Offer: Enjoy a 0% introductory APR on Balance Transfers for 18 months. Following this period, the variable APR will range from 19.24% to 29.24%, depending on your creditworthiness.",
      "Balance Transfers do not qualify for cash back rewards. The introductory APR is not applicable to purchases.",
      "If you initiate a balance transfer, interest will accrue on your purchases unless you settle your entire balance, including the transferred amount, by the monthly due date.",
      "During the initial 4 months of account opening, a 3% introductory balance transfer fee applies to each transfer, with a minimum of $5. Subsequently, the fee increases to 5% per transfer, with a minimum of $5.",
    ],
  },
  {
    id: 2,
    name: "Citi Simplicity® Card*",
    image: citi_simplicity,
    buttontypo: "on Citibank's secure site",
    introAPR:
      "of 0% intro apr for 21 months on balance transfers, then 19.24% - 29.99% (variable).",
    regularBalanceTransferAPR: "19.24% - 29.99% (Variable)",
    rewardsRate: "N/A",
    annualFee:
      "There is an intro balance transfer fee of 3% of each transfer (minimum $5) completed within the first 4 months of account opening. Then a balance transfer fee applies with this offer 5% of each balance transfer; $5 minimum.",
    recommendedCredit: "660-850 Good/Excellent",
    pros: [
      "No annual fee",
      "No balance transfer fee",
      "Intro APR on purchases",
      "Long transfer window",
    ],
    cons: [
      "Balance transfer fee",
      "No rewards program",
      "Foreign transaction fees",
    ],
    whyWeLikeIt:
      "The Citi Simplicity® Card offers an exceptionally long intro APR of 0% intro apr for 21 months on balance transfers, followed by a 19.24% - 29.99% (variable) APR. It doesn’t assess late fees or a penalty APR if you pay your bill late. This can be a huge relief if you accidentally miss your bill due date (though we recommend always paying your bill on time).",
    cardDetails: [
      "No Late Fees, No Penalty Rate, and No Annual Fee... Ever",
      "Enjoy a 0% introductory APR for 21 months on balance transfers from the date of the first transfer and a 0% introductory APR for 12 months on purchases from the date of account opening. Following this period, the variable APR will be 19.24% - 29.99%, depending on your creditworthiness. Balance transfers must be completed within 4 months of account opening.",
      "During the initial 4 months of account opening, a 3% introductory balance transfer fee applies to each transfer (minimum $5). After this period, the fee adjusts to 5% per transfer (minimum $5).",
      "Stay protected with Citi® Quick Lock",
    ],
    disclaimer:
      "*The details regarding the Citi Simplicity® Card have been gathered by LendingTree and have not undergone review or provision by the card issuer prior to publication. Terms and conditions apply.",
  },
  {
    id: 3,
    name: "BankAmericard® Credit Card for Students*",
    image: bank_america_logo,
    buttontypo: "on Citibank's secure site",
    introAPR:
      "0% Intro APR for 18 billing cycles for any balance transfers made in the first 60 days, then 16.24% - 26.24% Variable APR.",
    regularBalanceTransferAPR: "3% intro fee for 60 days, then 4%.",
    rewardsRate: "N/A",
    annualFee:
      "There is an intro balance transfer fee of 3% of each transfer (minimum $5) completed within the first 4 months of account opening. Then a balance transfer fee applies with this offer 5% of each balance transfer; $5 minimum.",
    recommendedCredit: "660-850 Good/Excellent",
    pros: [
      "Long intro APR for purchases",
      "$0 annual fee",
      "Access to your credit score",
    ],
    cons: ["Balance transfer fee"],
    whyWeLikeIt:
      "The BankAmericard® Credit Card for Students stands out as our premier choice for student balance transfers, ideal for consolidating debt. Enjoy a generous window of over a year to repay your balance transfer without incurring interest, before transitioning to a Variable APR of 16.24% - 26.24%. Additionally, benefit from continuous access to your credit score and various educational resources, empowering you to cultivate responsible financial management skills.",
    cardDetails: [
      "Enjoy a 0% Introductory APR for 18 billing cycles on purchases, as well as for any balance transfers initiated within the first 60 days. Following the conclusion of the introductory APR period, a Variable APR of 16.24% - 26.24% will be applicable. Please note, a 3% fee is imposed on all balance transfers.",
      "No annual fee.",
      "No penalty APR. Paying late won't automatically raise your interest rate (APR). Other account pricing and terms apply.",
      "When used responsibly, a credit card can contribute to building your credit history, which can be beneficial when seeking an apartment, a car loan, or even a job. Gain complimentary access to your FICO® Score through Online Banking or your Mobile Banking app.",
      "Contactless Cards - The security of a chip card, with the convenience of a tap.",
      "This exclusive online offer may not remain accessible if you navigate away from this page or visit a Bank of America financial center. Seize this opportunity by applying now to take full advantage of the offer.",
    ],
    disclaimer:
      "*The details regarding the BankAmericard® Credit Card for Students have been compiled by LendingTree and have not undergone review or provision by the card issuer prior to publication. Terms and conditions apply.",
  },
  {
    id: 4,
    name: "Bank of America® Unlimited Cash Rewards credit card",
    image: unlimited_cash_rewards_logo,
    buttontypo: "on Bank Of America's secure site",
    introAPR:
      "0% Intro APR for 15 billing cycles for any balance transfers made in the first 60 days, then 19.24% - 29.24% Variable APR on balance transfers.",
    regularBalanceTransferAPR:
      "19.24% - 29.24% Variable APR on balance transfers",
    rewardsRate: "1.5% cash back on all purchases.",
    annualFee: "3% for 60 days from account opening, then 4%",
    recommendedCredit: "660-850 Good/Excellent",
    pros: [
      "Long intro APR on balance transfers",
      "Long intro APR on purchases",
      "Unlimited cash back",
      "$0 annual fee",
    ],
    cons: ["Balance transfer fee", "Short window to make balance transfers"],
    whyWeLikeIt:
      "The Bank of America® Unlimited Cash Rewards credit card offers an extended introductory period for both balance transfers and purchases. Moreover, it remains a valuable asset even after clearing your balance transfer, courtesy of its unlimited 1.5% cash back on all purchases.",
    cardDetails: [
      "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening.",
      "Earn unlimited 1.5% cash back on all purchases.",
      "Bank of America Preferred Rewards® members can enjoy an additional 25% to 75% cash back on every purchase. This translates to potentially earning 1.87% to 2.62% cash back on every purchase with Preferred Rewards.",
      "No annual fee.",
      "There's no cap on the cash back you can earn, and your cash rewards won't expire as long as your account stays open.",
      "Enjoy a 0% introductory APR for 15 billing cycles on purchases and balance transfers made within the first 60 days. After the introductory period, a variable APR of 19.24% - 29.24% will apply. Additionally, there's a 3% introductory balance transfer fee for the first 60 days, which increases to 4% for future balance transfers after the introductory period ends.",
      "Contactless Cards - The security of a chip card, with the convenience of a tap.",
      "This online only offer may not be available if you leave this page or if you visit a Bank of America financial center. You can take advantage of this offer when you apply now.",
    ],
  },
  {
    id: 5,
    name: "Bank of America® Customized Cash Rewards credit card",
    image: bank2_of_america_cash,
    buttontypo: "on Bank Of America's secure site",
    introAPR:
      "0% Intro APR for 15 billing cycles for any balance transfers made in the first 60 days Then, a 19.24% - 29.24% Variable APR on balance transfers applies",
    regularBalanceTransferAPR:
      "19.24% - 29.24% Variable APR on balance transfers",
    rewardsRate:
      "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
    annualFee: "3% for 60 days from account opening, then 4%",
    recommendedCredit: "660-850 Good/Excellent",
    pros: [
      "Extended introductory APR duration for balance transfers",
      "Accelerated cash back rewards in category of your choice",
      "$0 annual fee",
    ],
    cons: [
      "Balance transfer fee",
      "Short window to make balance transfers",
      "$2,500 combined spending cap on 3% and 2% categories each quarter",
    ],
    whyWeLikeIt:
      "Similar to the Bank of America® Unlimited Cash Rewards credit card, the Bank of America® Customized Cash Rewards credit card offers an extended period to pay off your balance transfer without accruing interest. Additionally, it provides the flexibility of earning 3% cash back in a chosen category, 2% cash back at grocery stores and wholesale clubs for up to $2,500 in combined quarterly purchases, and 1% cash back on all other purchases.",
    cardDetails: [
      "Receive a $200 online cash rewards bonus when you spend at least $1,000 on purchases within the first 90 days of opening your account.",
      "Get 3% cash back in a category of your choice, automatic 2% at grocery stores and wholesale clubs (up to $2,500 in combined choice category/grocery store/wholesale club quarterly purchases), and unlimited 1% cash back on all other purchases.",
      "Opt for 3% cash back on gas and EV charging stations, online shopping, cable, internet, phone plans, streaming services, dining, travel, drug stores or pharmacies, or home improvement and furnishings purchases.",
      "As a Bank of America Preferred Rewards® member, you can boost your cash back earnings by 25% to 75% on every purchase. This translates to potentially earning 3.75% to 5.25% cash back on purchases in your selected category.",
      "No annual fee and cash rewards don’t expire as long as your account remains open.",
      "Enjoy a 0% introductory APR for 15 billing cycles on purchases and balance transfers made within the first 60 days. After the introductory APR period, a variable APR, currently ranging from 19.24% to 29.24%, will apply. Additionally, take advantage of a 3% introductory balance transfer fee during the first 60 days of account opening. Following this period, the fee for future balance transfers will be 4%.",
      "Contactless Cards - The security of a chip card, with the convenience of a tap.",
      "This online only offer may not be available if you leave this page or if you visit a Bank of America financial center. You can take advantage of this offer when you apply now.",
    ],
  },
];

const Card2 = () => {
  const [content, setContent] = useState("Pros & Cons");
  const [activeHeading, setActiveHeading] = useState("Pros & Cons");

  const handleClick = (newContent) => {
    setContent(newContent);
    setActiveHeading(newContent);
  };

  const theme = useTheme();
  return (
    <Box>
      {cardData.map((card) => (
        <Card
          key={card.id}
          sx={{ margin: "20px auto", padding: "20px", boxShadow: 3 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {card.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              lg={4}
              xl={4}
              md={4}
              xs={12}
              sm={4}
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt="Card image"
                  width={183}
                  height={114}
                />
              )}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, textTransform: "none" }}
              >
                Learn More
              </Button>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "'Lato', sans-serif'",
                  color: "#687073",
                  marginTop: "5px",
                }}
              >
                {card.buttontypo}
              </Typography>
            </Grid>
            <Grid item lg={8} xl={8} md={8} xs={12} sm={8}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#e8f5e9",
                  padding: 2,
                  borderRadius: "8px",
                  borderLeft: "4px solid #00897b",
                  margin: "0 auto",
                }}
              >
                <SwapHorizIcon sx={{ marginRight: 2, color: "#00897b" }} />
                <Box>
                  <Typography variant="body1" component="span">
                    Intro APR:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ marginLeft: "4px" }}
                  >
                    {card.introAPR}
                  </Typography>
                </Box>
              </Box>
              <br />
              <br />
              <Box
                sx={{
                  padding: 2,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  margin: "0 auto",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <Grid container spacing={2} justifyContent="space-around">
                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#848E92",
                        fontWeight: "bold",
                      }}
                    >
                      Regular Balance Transfer APR
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#101F30",
                        fontWeight: "bold",
                      }}
                    >
                      {card.regularBalanceTransferAPR}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#848E92",
                        fontWeight: "bold",
                      }}
                    >
                      Rewards Rate
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#101F30",
                        fontWeight: "bold",
                      }}
                    >
                      {card.rewardsRate}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#848E92",
                        fontWeight: "bold",
                      }}
                    >
                      Balance Transfer Fee
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#101F30",
                        fontWeight: "bold",
                      }}
                    >
                      {card.annualFee}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#848E92",
                        fontWeight: "bold",
                      }}
                    >
                      Recommended Credit
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#101F30" }}>
                      {card.recommendedCredit}
                    </Typography>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: "none",
                        fontSize: "12px",
                        color: "#0069BA",
                      }}
                    >
                      Get Your Free Credit Score
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", marginTop: "20px" }}
          >
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline-block",
                padding: "10px",
                cursor: "pointer",
                borderBottom:
                  activeHeading === "Pros & Cons" ? "2px solid green" : "none",
              }}
              onClick={() => handleClick("Pros & Cons")}
            >
              Pros & Cons
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline-block",
                padding: "10px",
                cursor: "pointer",
                borderBottom:
                  activeHeading === "Why We Like It"
                    ? "2px solid green"
                    : "none",
              }}
              onClick={() => handleClick("Why We Like It")}
            >
              Why We Like It
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline-block",
                padding: "10px",
                cursor: "pointer",
                borderBottom:
                  activeHeading === "Card Details" ? "2px solid green" : "none",
              }}
              onClick={() => handleClick("Card Details")}
            >
              Card Details
            </Typography>
          </Box>
          {content === "Pros & Cons" && (
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <Paper
                  elevation={0}
                  sx={{ padding: "10px", backgroundColor: "#f9f9f9" }}
                >
                  {card.pros.map((pro, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontSize: "16px",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: "#08C177",
                          fontSize: "32px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {pro}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <Paper
                  elevation={0}
                  sx={{ padding: "10px", backgroundColor: "#f9f9f9" }}
                >
                  {card.cons.map((con, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontSize: "16px",
                      }}
                    >
                      <CloseIcon
                        sx={{
                          color: "#FF0000",
                          fontSize: "32px",
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {con}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          )}
          {content === "Why We Like It" && (
            <>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "24px",
                  fontSize: "16px",
                  color: "#454545",
                  fontFamily: "'Lato', sans-serif'",
                }}
              >
                {card.whyWeLikeIt}
              </Typography>
            </>
          )}
          {content === "Card Details" && (
            <div
              style={{ margin: "0px 0px 24px", padding: "42px 0px 0px 12px" }}
            >
              {card.cardDetails.map((detail, index) => (
                <Typography
                  className="black-dot"
                  key={index}
                  variant="body1"
                  sx={{
                    margin: "15px 0px 9px",
                    fontSize: "14px",
                    color: "#454545",
                    fontFamily: "'Lato', sans-serif'",
                  }}
                >
                  {detail}
                </Typography>
              ))}
            </div>
          )}
          <Typography
            marginTop={2}
            sx={{
              color: "#A3A3A3",
              fontSize: "10px",
              fontFamily: "'Lato', sans-serif'",
            }}
          >
            {card.disclaimer}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default Card2;
