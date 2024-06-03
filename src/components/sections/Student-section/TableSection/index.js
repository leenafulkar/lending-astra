import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, Typography, Button, Container, Box } from "@mui/material";
import loging1 from "../../../../assets/StuLoanAssets/Dark-logo-175x60-1.webp";
import loging2 from "../../../../assets/StuLoanAssets/citizensbank-logo.webp";
import loging3 from "../../../../assets/StuLoanAssets/college-ave.webp";
import loging4 from "../../../../assets/StuLoanAssets/1_Earnest.webp";
import loging5 from "../../../../assets/StuLoanAssets/fundingulogo.webp";
import loging6 from "../../../../assets/StuLoanAssets/PNC-Bank-logo-1024x614.webp";
import loging7 from "../../../../assets/StuLoanAssets/rislaa.webp";
import loging8 from "../../../../assets/StuLoanAssets/Sallie-Mae-logo-1024x398.webp";
import loging9 from "../../../../assets/StuLoanAssets/sofilogonew-1.webp";
import "./index.css";

const TableDataArray = [
  {
    img: loging1,
    bestFor: "International students",
    Apr_Range: "4.29% to 15.76% *with autopay discount",
    Minimum_Credit_Score: "	Varies",
  },
  {
    img: loging2,
    bestFor: "Short-term loans",
    Apr_Range: "4.50%",
    Minimum_Credit_Score: "12-84 months",
  },

  {
    img: loging3,
    bestFor: "Multi-year borrowing",
    Apr_Range: "4.43% to 12.57% *with autopay and loyalty discounts",
    Minimum_Credit_Score: "700",
  },
  {
    img: loging4,
    bestFor: "Rate match",
    Apr_Range: "Starting at 4.11% *with autopay discount",
    Minimum_Credit_Score: "650",
  },
  {
    img: loging5,
    bestFor: "No cosigner",
    Apr_Range: "7.49% to 12.99% *with autopay discount",
    Minimum_Credit_Score: "Not required",
  },
  {
    img: loging6,
    bestFor: "Traditional bank features",
    Apr_Range: "4.49% to 12.24% *with autopay discount",
    Minimum_Credit_Score: "Not disclosed",
  },
  {
    img: loging7,
    bestFor: "Part-time students",
    Apr_Range: "4.40% to 8.45% *with autopay discount",
    Minimum_Credit_Score: "680",
  },
  {
    img: loging8,
    bestFor: "Speedy cosigner release",
    Apr_Range: "4.50% to 15.69% *with auto debit discount",
    Minimum_Credit_Score: "Mid-600s",
  },
  {
    img: loging9,
    bestFor: "Member benefits",
    Apr_Range:
      "Fixed APR rate: 4.24% - 13.13% Variable APR rate: 5.24% - 12.88%",
    Minimum_Credit_Score: "Not disclosed",
  },
];

function createData(name, fat, carbs, protein, mincreditscore, Clickhere) {
  return { name, fat, carbs, protein, mincreditscore, Clickhere };
}

const rows = TableDataArray.map((item) =>
  createData(
    <img src={item.img} alt="img" width={160} height={53} />,
    <Typography sx={{ fontSize: "14px" }}>{item.bestFor}</Typography>,
    <Typography sx={{ fontSize: "14px" }}>{item.Apr_Range}</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      {item.Minimum_Credit_Score}
    </Typography>,
    <Button
      variant="text"
      sx={{
        fontSize: "14px",
        color: "#FFFFFF",
        padding: "8px",
        bgcolor: "#FF704D",
        maxWidth: "190px",
        textTransform: "none",
        "&:hover": { bgcolor: "#FF471A" },
      }}
    >
      See Personalized Results
    </Button>
  )
);

export default function TableSectioStuLoan() {
  return (
    <>
      <Box sx={{ background: "#f1f3f3" }}>
        <Box sx={{ textAlign: "center", padding: "32px 0px" }}>
          {" "}
          <h1 className="stu_headding">Best private student loans</h1>
        </Box>
        <Container>
          <TableContainer
            component={Paper}
            sx={{
              display: { sm: "none", md: "none", lg: "flex", xs: "none" },
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <Table
              sx={{ minWidth: 650, marginTop: "0px" }}
              aria-label="simple table"
            >
              <TableHead sx={{ height: "50px" }}>
                <TableRow sx={{ background: "#08c177" }}>
                  <TableCell
                    align="start"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "'Lato', sans-serif",
                      //   bgcolor: "#101F30",
                      color: "#FFFFFF",
                      padding: " 0px 10px 0px",
                    }}
                  >
                    Lender
                  </TableCell>
                  <TableCell
                    align="start"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "'Lato', sans-serif",
                      //   bgcolor: "#101F30",
                      color: "#FFFFFF",
                      padding: " 0px 10px 0px",
                    }}
                  >
                    Best for...
                  </TableCell>
                  <TableCell
                    align="start"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "'Lato', sans-serif",
                      //   bgcolor: "#101F30",
                      color: "#FFFFFF",
                      padding: " 0px 10px 0px",
                    }}
                  >
                    Starting APRs
                  </TableCell>
                  <TableCell
                    align="start"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "'Lato', sans-serif",
                      //   bgcolor: "#101F30",
                      color: "#FFFFFF",
                      padding: " 0px 10px 0px",
                    }}
                  >
                    Loan term
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="start">
                      {row.name}
                    </TableCell>
                    <TableCell align="start" sx={{ paddingRight: "12px" }}>
                      {row.fat}
                    </TableCell>
                    <TableCell align="start" sx={{ paddingRight: "12px" }}>
                      {row.carbs}
                    </TableCell>
                    <TableCell align="start" sx={{ paddingRight: "12px" }}>
                      {row.protein}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        {/* --------------------------------------------------------------
    ------------------------------------------------------------- */}

        <Container
          sx={{
            direction: "column",
            alignContent: "start",
            // Center the buttons horizontally
            width: "100%",
            height: "auto",
            paddingBottom: "10px",
            flexGrow: 1,
            display: { sm: "none", md: "none", lg: "flex", xs: "none" },
            px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
          }}
        >
          <Box>
            <Typography
              direction={{ xs: "column", md: "column" }}
              sx={{
                fontSize: "17px",
                textAlign: "center",
                marginTop: "40px",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Find out more about
              <span style={{ color: "#00AEEF" }}>
                {" "}
                how we chose the best student loans.
              </span>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
