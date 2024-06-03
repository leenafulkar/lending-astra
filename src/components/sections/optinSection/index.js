import * as React from "react";
import Lottie from 'react-lottie';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import Animation1 from '../../../Lottie-Files/Animation1.json'
import HomeEquity from '../../../Lottie-Files/Homequity.json'
import Homepurchases from '../../../Lottie-Files/Homepurchases.json'
import Creditcard from '../../../Lottie-Files/Creditcards.json'
import Insurance from '../../../Lottie-Files/Insurance.json'
import Businessloans from '../../../Lottie-Files/Businessloans.json'
import Creditscore from '../../../Lottie-Files/Creditscore.json'
import Homerefinance from '../../../Lottie-Files/Homerefinance.json'
import Autoloans from '../../../Lottie-Files/Autoloans.json'
import Debtrelief from '../../../Lottie-Files/Debtrelief.json'
import Bankingproducts from '../../../Lottie-Files/Bankingproducts.json'
import Studentloan from '../../../Lottie-Files/Studentloan.json'
import PropTypes from 'prop-types';


import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import tabFaqImg from "../../../assets/spring-intro-banner.webp";
import img1 from "../../../assets/growth-incentives.png";
import img2 from "../../../assets/pie-chart.png";
import img3 from "../../../assets/loan-explorer.png";
import "./index.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AccordionTransition from "../accordion";
import {
  Money,
  AddHome,
  HomeWork,
  CreditCard,
  Shield,
  Business,
  CreditScore,
  SettingsAccessibility,
  DirectionsCar,
  AccountBalance,
  WorkspacePremium,
} from "@mui/icons-material";


const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

const tabItems = [
  {
    label: "Personal Loans",
    heding: "Discover the perfect personal loan rate for you.",
    subHeading:
      "Need to consolidate debt or make a large purchase? We bring the lenders to you so you can shop and compare personal loan offers in minutes.",
    content: "Content for Personal Loans",
    to: "/form-personal-loan",
    animationData : Animation1,
    animationSize: { height: 270, width: 530 },
  },
  {
    label: "Home Equity",
    heding: "Put your home’s equity to use",
    subHeading:
      "With home values higher than ever, now’s the time to make the most of your equity. Compare offers in minutes.",
    content: "Content for Item Home Equity",
    to: "/form-equity-loan",
    animationData : HomeEquity,
    animationSize: { height: 400, width: 400 },
  },
  {
    label: "Home Purchase",
    heding: "Compare top mortgage lenders",
    subHeading:
      "Get multiple lenders to compete for your business and see how much you could save. It pays to compare your options — literally.",
    content: "Content for Item Home Purchase",
    to: "/form-home-purchase-loan",
    animationData : Homepurchases,
    animationSize: { height: 300, width: 400 },
  },

  {
    label: "Credit Cards",
    heding: "Shop and compare credit cards",
    subHeading:
      "From earning rewards to transferring a balance, find the right credit card to help you score everyday wins.",
    content: "Content for Item Home Purchase",
    animationData : Creditcard,
    animationSize: { height: 300, width: 400 },
  },
  {
    label: "Insurance",
    heding: "Find the best insurance rates for you",
    subHeading:
      "Compare top insurance companies and get affordable, customized coverage for your car, home and more.",
    content: "Content for Item Credit Cards",
    animationData : Insurance,
    animationSize: { height: 300, width: 400 },
    
  },
  {
    label: "Business Loans",
    heding: "Shop and compare business loans",
    subHeading:
      "Our network of lenders will compete for your business, so you can get the funding you need for yours.",
    content: "Content for Item Insurance",
    to: "/form-business-loan",
    animationData : Businessloans,
    animationSize: { height: 300, width: 400 },
  },

  {
    label: "LendingTree Spring",
    heding: "Where smart habits take root",
    subHeading:
      "Track your credit score, get personalized financial recommendations, and grow your credit health — all in LendingTree Spring. It’s free and available now!",
    content: "Content for Item Business Loans",
    animationData : Creditscore,
    animationSize: { height: 300, width: 400 },
  },
  {
    label: "Home Refinance",
    heding: "Compare mortgage refinance offers",
    subHeading:
      "Get personalized refinance offers from multiple lenders in minutes and see how much you could save on your mortgage.",
    content: "Content for Item Credit Score",
    to: "/form-home-refinance",
    animationData : Homerefinance,
    animationSize: { height: 300, width: 400 },
  },
  {
    label: "Debt Relief",
    heding: "Compare debt relief options",
    subHeading:
      "It’s never too late to find relief. Stop juggling bills and resolve your debt with one simple monthly payment.",
    content: "Compare debt relief options",
    to: "/form-debt-relief-loan",
    animationData : Debtrelief,
    animationSize: { height: 300, width: 300 },
  },
  {
    label: "Auto Loans",
    heding: "Discover the right auto loan for you",
    subHeading:
      "Take home the car you love. Compare auto loans to find the right fit for you.",
    content: "Content for Item Ten",
    to: "/form-auto-loan",
    animationData : Autoloans,
    animationSize: { height: 300, width: 400 },
  },
  {
    label: "Banking Products",
    heding: "Find the right place for your money",
    subHeading:
      "Banking shouldn’t be a hassle. Compare the best savings accounts for your money.",
    content: "Content for Item Ten",
    animationData : Bankingproducts,
    animationSize: { height: 400, width: 400 },
  },

  {
    label: "Student Loans",
    heding: "Compare student loan options",
    subHeading:
      "Pay for school the smart way. We’ll help you shop and compare your options in minutes.",
    content: "Content for Item Ten",
    animationData : Studentloan,
    animationSize: { height: 350, width: 400 },
  },
];


const OptionSection = ({items}) => {

  

  const [value, setValue] = React.useState(0);
  const tabsRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = (scrollType) => {
    const tabsContainer = tabsRef.current;
    const tabsWidth = tabsContainer.offsetWidth;
    const scrollAmount = scrollType === "right" ? tabsWidth : -tabsWidth;
    tabsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  //
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // mob
  const data = [
    {
      icon: <Money fontSize="medium" />,
      title: "Personal Loans",
      subTitle: "Discover the perfect personal loan rate for you.",
      content:
        "Looking to consolidate debt or make a large purchase? We connect you with lenders, allowing you to shop and compare personal loan offers in minutes.",
      route: "/form-personal-loan",
    },
    {
      icon: <AddHome fontSize="medium" />,
      title: "Home Equity",
      subTitle: "Leverage your home’s equity to your advantage",
      content:
        "With home values at an all-time high, now is the perfect time to maximize your equity. Compare offers in minutes.",
      route: "/form-equity-loan",
    },
    {
      icon: <HomeWork fontSize="medium" />,
      title: "Home Purchase ",
      subTitle: "Compare top mortgage lenders",
      content:
        "Let multiple lenders compete for your business and see how much you could save. Comparing your options really pays off—literally ",
      route: "/form-home-purchase-loan",
    },
    {
      icon: <Business fontSize="medium" />,
      title: "Business Loans",
      subTitle: "Shop and compare business loans ",
      content:
        "Our network of lenders will compete for your business, ensuring you get the funding you need for your venture.",
      route: "/form-business-loan",
    },
    {
      icon: <CreditCard fontSize="medium" />,
      title: " Credit Cards",
      subTitle: "Explore and compare credit card options.",
      content:
        "Discover the perfect credit card to earn rewards or transfer balances, helping you achieve daily victories.  ",
      route: "/form",
    },
    {
      icon: <Shield fontSize="medium" />,
      title: " Insurance",
      subTitle: "Discover the best insurance rates tailored to your needs",
      content:
        "Compare leading insurance providers and secure affordable, personalized coverage for your car, home, and beyond.",
      route: "/form",
    },

    {
      icon: <CreditScore fontSize="medium" />,
      title: "Credit Score",
      subTitle: "Where intelligent habits flourish.",
      content:
        "Monitor your credit score, receive personalized financial advice, and enhance your credit wellness — all within LendingTree Spring. It's free and accessible now!",
      route: "/form",
    },
    {
      icon: <AddHome fontSize="medium" />,
      title: "Home Refinance",
      subTitle: "Compare offers for mortgage refinancing.",
      content:
        "Receive personalized refinance offers from multiple lenders in minutes and discover how much you could save on your mortgage.",
      route: "/form-home-refinance",
    },
    {
      icon: <SettingsAccessibility fontSize="medium" />,
      title: "Debt Relief",
      subTitle: "Explore and compare debt relief options.",
      content:
        "It's never too late to find relief. Say goodbye to bill juggling and resolve your debt with one simple monthly payment.",
      route: "/form-debt-relief-loan",
    },
    {
      icon: <DirectionsCar fontSize="medium" />,
      title: "Auto Loans",
      subTitle: "Find the perfect auto loan tailored to your needs.",
      content:
        "Drive off with the car you adore. Compare auto loans to discover the perfect fit for you.",
      route: "/Form",
    },
    {
      icon: <AccountBalance fontSize="medium" />,
      title: "Banking Products",
      subTitle: "Discover the perfect destination for your funds.",
      content:
        "Banking made easy. Compare the top savings accounts for your money.",
      route: "/Form",
    },
    {
      icon: <WorkspacePremium fontSize="medium" />,
      title: "Student Loans",
      subTitle: "Explore and compare student loan choices.",
      content:
        "Fund your education wisely. Let us assist you in shopping and comparing your options in just minutes.",
      route: "/Form",
    },
  ];

  
  return (
    <>
      <Box sx={{ background: "#f5f5f5", position: "relative", top: "0px" }}>
        <Container>
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "35px" },
              margin: "auto",
              color: "#101f30",
              fontWeight: "700",
            }}
            className="option-main-headding"
          >
            We present your options, you secure the victory.
          </Typography>

          <Box sx={{ display: { sm: "none" } }}>
            <AccordionTransition data={data} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{ position: "relative", overflowX: "auto" }}
              ref={tabsRef}
            >
              {value > 0 && (
                <KeyboardArrowLeft
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleScroll("left")}
                />
              )}
              <Paper elevation={3}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    icon={<CurrencyRupeeIcon />}
                    label="Personal Loans"
                    style={{
                      backgroundColor: value === 0 ? "#08c177" : "",
                      color: value === 0 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />
                  <Tab
                    icon={<HomeIcon />}
                    label="Home Equity"
                    style={{
                      backgroundColor: value === 1 ? "#08c177" : "",
                      color: value === 1 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />
                  <Tab
                    icon={<HouseIcon />}
                    label="Home Purchase"
                    style={{
                      backgroundColor: value === 2 ? "#08c177" : "",
                      color: value === 2 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />
                  <Tab
                    icon={<CreditCardIcon />}
                    label="Credit Cards"
                    style={{
                      backgroundColor: value === 3 ? "#08c177" : "",
                      color: value === 3 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<SecurityIcon />}
                    label="Insurance"
                    style={{
                      backgroundColor: value === 4 ? "#08c177" : "",
                      color: value === 4 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<AddBusinessIcon />}
                    label="Business Loans"
                    style={{
                      backgroundColor: value === 5 ? "#08c177" : "",
                      color: value === 5 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<CreditScoreIcon />}
                    label="Credit Score"
                    style={{
                      backgroundColor: value === 6 ? "#08c177" : "",
                      color: value === 6 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<CurrencyExchangeIcon />}
                    label="Home Refinance"
                    style={{
                      backgroundColor: value === 7 ? "#08c177" : "",
                      color: value === 7 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<OnDeviceTrainingIcon />}
                    label="Debt Relief"
                    style={{
                      backgroundColor: value === 8 ? "#08c177" : "",
                      color: value === 8 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<DirectionsCarIcon />}
                    label="Auto Loans"
                    style={{
                      backgroundColor: value === 9 ? "#08c177" : "",
                      color: value === 9 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<AccountBalanceIcon />}
                    label="Banking Products"
                    style={{
                      backgroundColor: value === 10 ? "#08c177" : "",
                      color: value === 10 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  <Tab
                    icon={<SchoolIcon />}
                    label="Student Loan"
                    style={{
                      backgroundColor: value === 11 ? "#08c177" : "",
                      color: value === 11 ? "#fff" : "#101f30",
                      width: "150px",
                      height: "100px",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      letterSpacing: "0.3px",
                    }}
                  />{" "}
                  {/* Add more Tab components here if needed */}
                </Tabs>
              </Paper>
              {value < tabItems.length - 1 && (
                <KeyboardArrowRight
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleScroll("right")}
                />
              )}
            </div>

            <div className="tab-content">
              {tabItems.map((item, index) => (
                <div key={index} hidden={value !== index}>
                  {/* {item.content} */}
                  <Box className="tab-grid-box" height="auto">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        {/* <h1 className="tab-first-headding">Personal Loans</h1> */}
                        <h1 className="tab-first-headding">{item.label}</h1>

                        {/* <h1 className="tab-second-headding">
                          Discover the perfect personal loan rate for you.
                        </h1> */}
                        <h1 className="tab-second-headding">{item.heding}</h1>
                        {/* <h1 className="tab-theard-headding">
                          Need to consolidate debt or make a large purchase? We
                          bring the lenders to you so you can shop and compare
                          personal loan offers in minutes.
                        </h1> */}
                        <h1 className="tab-theard-headding">
                          {item.subHeading}
                        </h1>
                        <Box sx={{ pt: "25px" }}>
                          <Button
                            sx={{
                              padding: "10px 42px",
                              background: "#00aeef",
                              color: "#fff",
                              fontWeight: 700,
                              textTransform: "capitalize",
                              fontSize: "18px",
                              "&:hover": {
                                color: "inherit",
                                backgroundColor: "#4dc7f5 !important",
                              },
                            }}
                            disableElevation
                          >
                            <Link
                              to={item.to}
                              style={{
                                textDecoration: "none",
                                color: "#fff",
                                "&:hover": {
                                  color: "inherit",
                                  backgroundColor: "#00aeef !important",
                                },
                              }}
                            >
                              Compare Rates
                            </Link>
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} >
                      {item.img ? (
                    <img src={item.img} alt={item.label} className="img-fluid" />
                  ) : (
                    <Lottie 
                    options={{ ...defaultOptions, animationData: item.animationData }} 
                    height={item.animationSize?.height || 100}
                    width={item.animationSize?.width || 100}
                      />
                  )}
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              ))}
            </div>
          </Box>
        </Container>
        <Box
          sx={{
            background: "#effef8",
            borderBottom: "1px solid #c6cdd0",

            position: { xs: "relative", sm: "relative", md: "relative" },
            top: { xs: "0px", sm: "220px", md: "220px", lg: "0px" },
          }}
        >
          <Container>
            {/* <Grid container spacing={2}>
              <Grid item lg={4}>
                <img src={tabFaqImg} alt="img" />
              </Grid>
              <Grid item lg={8}>
                <h1>Introducing LendingTree Spring</h1>
                <p>
                  Want to take control of your finances but not sure where to
                  start? Spring helps you unlock a whole new world of potential,
                  one easy step at a time.
                </p>
              </Grid>
            </Grid> */}
            <List>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  {/* <InboxIcon /> icon */}
                  <Box sx={{ display: { xs: "none" } }}>
                    <img
                      src={tabFaqImg}
                      alt="img"
                      width="196px"
                      height="157px"
                    />
                  </Box>
                </ListItemIcon>
                <Grid container>
                  <Grid item xs={12} sm={7} lg={7}>
                    <Box>
                      <h1 className="faq-headding">
                        Introducing LendingAstra Spring
                      </h1>
                      <p className="faq-para">
                        Ready to seize control of your finances but unsure where
                        to begin? Spring guides you through unlocking a whole
                        new realm of potential, one simple step at a time.
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7} lg={5}>
                    <Box
                      sx={{
                        display: "flex",
                        width: "200px",
                        paddingTop: "50px",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "16px",
                        color: "#0069ba",
                        background: "0 0",
                        border: 0,
                      }}
                    >
                      <span>Read More</span>{" "}
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                  </Grid>
                </Grid>
                <Box></Box>
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Container fluid>
                  <Grid container spacing={2}>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={10}>
                      {" "}
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          {/* <ListItemText primary="Starred" /> */}
                          <Grid container spacing={2}>
                            <Grid item lg={4}>
                              <Box className="singal-box-headding">
                                <Box sx={{ display: "flex" }}>
                                  <Box sx={{ paddingRight: "10px" }}>
                                    <img src={img1} alt="imag1" width="24px" />
                                  </Box>
                                  <p className="faq-box-headding">
                                    Credit Score Insights
                                  </p>
                                </Box>
                                <p className="faq-box-para">
                                  Get a detailed look at the factors making up
                                  your credit score and track your progress.
                                </p>
                              </Box>
                            </Grid>
                            <Grid item lg={4}>
                              <Box className="singal-box-headding">
                                <Box sx={{ display: "flex" }}>
                                  <Box sx={{ paddingRight: "10px" }}>
                                    <img src={img2} alt="imag2" width="24px" />
                                  </Box>

                                  <p className="faq-box-headding">
                                    Personalized Money Tips
                                  </p>
                                </Box>
                                <p className="faq-box-para">
                                  Savings opportunities? Budget fixes? Ah-ha
                                  moments? Check, check, check.
                                </p>
                              </Box>
                            </Grid>
                            <Grid item lg={4}>
                              <Box className="singal-box-headding">
                                <Box sx={{ display: "flex" }}>
                                  <Box sx={{ paddingRight: "10px" }}>
                                    <img src={img3} alt="imag3" width="24px" />
                                  </Box>

                                  <p className="faq-box-headding">
                                    Better Loan Shopping
                                  </p>
                                </Box>
                                <p className="faq-box-para">
                                  Find your match! Get customized loan and
                                  credit card offers just for you.
                                </p>
                              </Box>
                            </Grid>
                            <Box sx={{ pt: "25px" }}>
                              <Button
                                sx={{
                                  padding: "10px 42px",
                                  background: "#00aeef",
                                  color: "#fff",
                                  fontWeight: 700,
                                  textTransform: "capitalize",
                                  fontSize: "18px",
                                  marginLeft: "12px",
                                }}
                                disableElevation
                              >
                                Get Spring For Free
                              </Button>
                            </Box>
                          </Grid>
                        </ListItemButton>
                      </List>
                    </Grid>
                  </Grid>
                </Container>
              </Collapse>
            </List>
          </Container>
        </Box>
      </Box>
    </>
  );
};

OptionSection.propTypes = {
  items: PropTypes.array.isRequired,
  animationSize: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default OptionSection;
