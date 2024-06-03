import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as echarts from "echarts";

const Calc = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [interestRate, setInterestRate] = useState("8.00");
  const [loanTerm, setLoanTerm] = useState("5");
  const [totalPayment, setTotalPayment] = useState("10800");
  const [estimatedPayment, setEstimatedPayment] = useState("180");
  const [principalAmount, setPrincipalAmount] = useState("10000");
  const [totalInterestPaid, setTotalInterestPaid] = useState("800");
  const theme = useTheme();
  const [error, setError] = useState(false);

  const handleLoanAmountChange = (event) => {
    const value = event.target.value;
    // Check if the input value is a valid number or empty//
    if (!isNaN(value) || value === "") {
      setLoanAmount(value); // Update state with the input value
      setError(false); // Reset error state
    } else {
      setError(true); // Set error state to true if input is not a valid number
    }
  };

  const handleInterestRateChange = (event) => {
    const value = event.target.value;
    // Check if the input value is a valid number or empty
    if (!isNaN(value) || value === "") {
      setInterestRate(value); // Update state with the input value
      setError(false); // Reset error state
    } else {
      setError(true); // Set error state to true if input is not a valid number
    }
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const calculate = () => {
    // Convert interest rate to decimal
    const interestRateDecimal = parseFloat(interestRate) / 100;

    // Calculate total payment
    const totalPaymentValue =
      parseFloat(loanAmount) * (1 + interestRateDecimal);

    // Calculate estimated payment
    const estimatedPaymentValue =
      totalPaymentValue / (parseFloat(loanTerm) * 12);

    // Calculate principal amount
    const principalAmountValue = parseFloat(loanAmount);

    // Calculate total interest paid
    const totalInterestPaidValue = totalPaymentValue - principalAmountValue;

    // Update states
    setTotalPayment(totalPaymentValue.toFixed(2));
    setEstimatedPayment(estimatedPaymentValue.toFixed(2));
    setPrincipalAmount(principalAmountValue.toFixed(2));
    setTotalInterestPaid(totalInterestPaidValue.toFixed(2));
  };
  useEffect(() => {
    if (parseFloat(loanAmount) !== 0) {
      const chartDom = document.getElementById("main");
      const myChart = echarts.init(chartDom);

      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        color: ["#08C177", "#078181"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: parseFloat(principalAmount), name: "Principal Amount" },
              { value: parseFloat(totalInterestPaid), name: "Total Interest" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);

      // Make chart responsive
      window.addEventListener("resize", () => {
        myChart.resize();
      });

      return () => {
        // Clean up chart instance
        myChart.dispose();
      };
    }
  }, [loanAmount, principalAmount, totalInterestPaid]);

  return (
    <Container>
      <Typography
        sx={{
          fontSize: "40px",
          color: "#101F30",
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          textAlign: "center",
          marginTop: "40px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
          },
        }}
      >
        Personal Loan calculator
      </Typography>

      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ textAlign: "center", marginBottom: "8px" }}>
              Loan Amount
            </Typography>
            <TextField
              id="loan-amount"
              // label="$ 10000 "
              variant="outlined"
              fullWidth
              value={loanAmount}
              onChange={handleLoanAmountChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <br />
            <br />

            <Typography sx={{ textAlign: "center", marginBottom: "8px" }}>
              Estimated Interest Rate
            </Typography>
            <TextField
              id="interest-rate"
              // label="8 %"
              variant="outlined"
              fullWidth
              value={interestRate}
              onChange={handleInterestRateChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
            />
            <br />
            <br />

            <Typography sx={{ textAlign: "center", marginBottom: "8px" }}>
              Loan Term
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="loan-term-label">5 years</InputLabel> */}
              <Select
                labelId="loan-term-label"
                id="loan-term"
                value={loanTerm}
                // label="Loan Term"
                onChange={handleLoanTermChange}
              >
                <MenuItem value={3}>3 years</MenuItem>
                <MenuItem value={4}>4 years</MenuItem>
                <MenuItem value={5}>5 years</MenuItem>
                <MenuItem value={6}>6 years</MenuItem>
                <MenuItem value={7}>7 years</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none", fontSize: "18px" }}
              onClick={calculate}
            >
              Calculate
            </Button>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography sx={{ textAlign: "center", marginTop: "24px" }}>
              Estimated Monthly Payment
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "34px",
                fontFamily: "Lato, Arial, sans-serif",
                color: "#101F30",
                fontWeight: "bold",
              }}
            >
              ${estimatedPayment}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "300px",
              }}
            >
              <div id="main" style={{ width: "100%", height: "100%" }}></div>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none", fontSize: "18px" }}
            >
              View Free Offers
            </Button>
            <br />
            <br />
            <Typography sx={{ textAlign: "center", marginTop: "24px" }}>
              Total Repayment
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "Lato, sans-serif",
                color: "#454545",
              }}
            >
              ${totalPayment}
            </Typography>
            <br />
            <br />

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "16px",
                fontFamily: "Lato, Arial, sans-serif",
                color: "#101F30",
                fontWeight: "bold",
              }}
            >
              PAYMENT BREAKDOWN
            </Typography>

            <Typography sx={{ textAlign: "center", marginTop: "24px" }}>
              Principal Amount
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "Lato, Arial, sans-serif",
                color: "#08C177",
              }}
            >
              ${principalAmount}
            </Typography>
            <Typography sx={{ textAlign: "center", marginTop: "24px" }}>
              Total Interest Paid
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "Lato, Arial, sans-serif",
                color: "#078181",
                marginBottom: "5px",
              }}
            >
              ${totalInterestPaid}
            </Typography>

            <Link to="#" sx={{ textDecoration: "none" }}>
              Show Payment Schedule
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Calc;
