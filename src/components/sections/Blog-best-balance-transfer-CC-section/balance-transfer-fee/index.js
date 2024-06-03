import React from "react";
import { Container, Grid, useTheme, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const BalanceTransferFee = () => {
  const rows = [
    {
      feature: "Intro APR",
      venture: "0% for 21 months",
      blueCash: "0% for 12 months",
    },
    {
      feature: "Regular APR",
      venture: "22%",
      blueCash: "14%",
    },
    {
      feature: "BT fee",
      venture: "3%",
      blueCash: "0%",
    },
    {
      feature: "Cost to transfer $6,000 balance",
      venture: "$180",
      blueCash: "$0",
    },
    {
      feature: "Interest paid ($300 monthly payment)",
      venture: "$0",
      blueCash: "$137",
    },
    {
      feature: "Overall cost",
      venture: "$180",
      blueCash: "$137",
    },
  ];

  const theme = useTheme();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "27px",
              color: "#101F30",
              fontFamily: "'Lato', sans-serif",
              textAlign: "left",
              margin: "20px 0px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "22px",
              },
            }}
          >
            What is a balance transfer credit card?
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 34px",
            }}
          >
            Balance transfer credit cards provide introductory APR periods of
            0%, lasting from 6 to 21 months specifically for balance transfers.
            This ensures that all of your monthly payments directly reduce your
            balance during the promotional interest-free period. The most
            advantageous balance transfer cards either eliminate balance
            transfer fees (usually 3% to 5% of each transfer amount) or extend
            lengthy interest-free introductory periods to facilitate balance
            repayment and savings.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 34px",
            }}
          >
            Certain restrictions apply when transferring balances. You cannot
            transfer balances between cards issued by the same credit card
            company or issuer. For instance, transferring a balance from one
            Citi card to another Citi card is not permitted. Additionally, to
            benefit from the promotional interest rate, you must complete your
            transfer within a specified time frame known as the balance transfer
            window, typically set at 60 days from the account opening date.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "27px",
              color: "#101F30",
              fontFamily: "'Lato', sans-serif",
              textAlign: "left",
              margin: "20px 0px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "22px",
              },
            }}
          >
            What is a balance transfer fee?
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 34px",
            }}
          >
            A balance transfer fee is straightforward: it's a fee charged each
            time you transfer a balance to a new card. Typically, these fees
            amount to 3% or 5% of the transferred amount, with a minimum fee of
            either $5 or $10.
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
              fontWeight: "bold",
            }}
          >
            How do balance transfer fees work?
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
            }}
          >
            When you transfer a balance to a card with a balance transfer fee,
            the fee is usually added to your balance right away. This means you
            don't have to pay it upfront; instead, you can gradually pay it off
            along with your transferred balance over time.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 34px",
            }}
          >
            The balance transfer fee decreases the total amount you can
            transfer. For instance, if you're permitted to transfer up to $5,000
            to a card with a 3% balance transfer fee, the fee of $150 ($5,000 x
            3% = $150) will reduce the transferable amount to $4,850 ($5,000 -
            $150 = $4,850).
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
              fontWeight: "bold",
            }}
          >
            How much can you save with no balance transfer fee?
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
            }}
          >
            The primary advantage of a credit card with no balance transfer fee
            is the cost savings by bypassing the balance transfer fee. Typically
            ranging from 3% to 5%, avoiding these fees translates to saving
            between $180 and $300 on a $6,000 balance.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
            }}
          >
            Choosing a card with no balance transfer fee can often yield greater
            savings compared to transferring to a card with a longer
            introductory period, especially when considering the typically lower
            ongoing interest rates. As illustrated in the comparison table
            below, the no-balance transfer fee card presents a lower overall
            cost for transferring and paying down a balance compared to the card
            with a longer 0% APR.
          </Typography>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ padding: "16px 0px 0px 16px" }}>
        <Table aria-label="credit card comparison table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "#08C177",
                  color: "#08C177",
                  fontWeight: "bold",
                }}
              >
                Feature
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#08C177", color: "white", fontWeight: "bold" }}
              >
                Card A (balance transfer fee)
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#08C177", color: "white", fontWeight: "bold" }}
              >
                Card B (0% transfer fee)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.feature}>
                <TableCell>{row.feature}</TableCell>
                <TableCell>{row.venture}</TableCell>
                <TableCell>{row.blueCash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ---------------------------------------- */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "27px",
              color: "#101F30",
              fontFamily: "'Lato', sans-serif",
              textAlign: "left",
              margin: "20px 0px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "22px",
              },
            }}
          >
            How to calculate a balance transfer fee
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 18px",
            }}
          >
            Determining the cost of a balance transfer fee is simple. Just
            multiply the amount you intend to transfer by the balance transfer
            fee percentage. For instance, if you're transferring a $10,000
            balance to a card with a 5% balance transfer fee, the fee would
            amount to $500 ($10,000 x 5% = $500).
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 20px",
              padding: "20px",
              bgcolor: "#dbf8ed",
            }}
          >
            $10,000 balance x 5% balance transfer fee = $500
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              color: "#454545",
              margin: "0px 0px 34px",
            }}
          >
            As previously stated, the balance transfer fee is deducted from the
            initial transferable amount, reducing it to $9,500 ($10,000 - $500 =
            $9,500).
          </Typography>
        </Grid>
      </Grid>

      {/* ----------------------------------------------- */}

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "27px",
              color: "#101F30",
              fontFamily: "'Lato', sans-serif",
              textAlign: "left",
              margin: "20px 0px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "22px",
              },
            }}
          >
            Pros and cons of no-balance transfer fee cards
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper
            elevation={0}
            sx={{ padding: "10px", backgroundColor: "#f9f9f9" }}
          >
            <Typography
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
              Has the potential to save you thousands in balance transfer fees
              and interest payments.
            </Typography>
            <Typography
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
              />
              Extend a promotional interest-free introductory period for an
              extended duration.
            </Typography>
            <Typography
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
              Assist in consolidating credit card debt from multiple cards into
              one with an extended interest-free period.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper
            elevation={0}
            sx={{ padding: "10px", backgroundColor: "#f9f9f9" }}
          >
            <Typography
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
              />
              Could entail high ongoing interest rates once the introductory APR
              period concludes.
            </Typography>
            <Typography
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
              May feature low credit limits, potentially restricting the amount
              you can transfer.
            </Typography>
            <Typography
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
              May decline applicants with fair or poor credit histories.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BalanceTransferFee;
