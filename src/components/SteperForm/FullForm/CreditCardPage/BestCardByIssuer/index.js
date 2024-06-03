import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
// import "./index.css";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Rating,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import HomeIcon from "@mui/icons-material/Home";
// import HouseIcon from "@mui/icons-material/House";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import SecurityIcon from "@mui/icons-material/Security";
// import AddBusinessIcon from "@mui/icons-material/AddBusiness";
// import CreditScoreIcon from "@mui/icons-material/CreditScore";
// import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import SchoolIcon from "@mui/icons-material/School";
// import tabimg1 from "../../../../assets/personal-loan-bullseye.webp";
// import tabimg2 from "../../../../assets/home-equity-bullseye.webp";
// import tabimg3 from "../../../../assets/home-purchase-bullseye.webp";

import citibank from "../../../../../assets/issueTabIcon/logo-citi.svg";
import capital from "../../../../../assets/issueTabIcon/logo-capital-one.svg";
import bankOfameric from "../../../../../assets/issueTabIcon/logo-bofa.svg";
import discover from "../../../../../assets/issueTabIcon/logo-discover-new.png";
import AExpress from "../../../../../assets/issueTabIcon/logo-amex.svg";
import wells from "../../../../../assets/issueTabIcon/logo-wells-fargo.svg";
import capitalOne from "../../../../../assets/issueTabIcon/logo-credit-one.png";
import chase from "../../../../../assets/issueTabIcon/logo-chase.svg";

import cred1 from "../../../../../assets/CreditCardTab/active-cash_default_All_main.jpg";
import cred2 from "../../../../../assets/CreditCardTab/chase-sapphire-preferred_default_All_main.jpg";
import cred3 from "../../../../../assets/CreditCardTab/discover-it_default_main.jpg";
import cred4 from "../../../../../assets/CreditCardTab/venture-rewards_default_main.jpg";
import cred5 from "../../../../../assets/CreditCardTab/quicksilver-rewards-excellent_default_main.jpg";
import cred6 from "../../../../../assets/CreditCardTab/discover-it-miles_default_main.jpg";
import cred7 from "../../../../../assets/CreditCardTab/citi-rewards-plus_default_All_main.jpg";
import cred8 from "../../../../../assets/CreditCardTab/blue-cash-everyday-sm-card-from-american-express_default_main.jpg";
import cred9 from "../../../../../assets/CreditCardTab/ventureone-rewards_default_main.jpg";
import cred10 from "../../../../../assets/CreditCardTab/wells-fargo-autograph_default_All_main.jpg";
import cred11 from "../../../../../assets/CreditCardTab/blue-cash-preferred_default_main.jpg";
import cred12 from "../../../../../assets/CreditCardTab/unlimited-cash-rewards_default_main.jpg";
import cred13 from "../../../../../assets/CreditCardTab/bank-of-america-travel-rewards_default_main.jpg";
import cred14 from "../../../../../assets/CreditCardTab/bank-of-america-cash_default_main.jpg";
import cred15 from "../../../../../assets/CreditCardTab/venture-x_default_main.jpg";

import citi_strata_premier from "../../../../../assets/CreditCardTab/citi-strata-premier_default_All_main.jpg";
import double_cash_default from "../../../../../assets/CreditCardTab/double-cash_default_All_main.jpg";
import citi_custom_cash_default from "../../../../../assets/CreditCardTab/citi-custom-cash_default_All_main.jpg";
import american_airlines_mileup_default from "../../../../../assets/CreditCardTab/american-airlines-mileup_default_All_main.jpg";
import citi_rewards_plus from "../../../../../assets/CreditCardTab/citi-rewards-plus_default_All_main (1).jpg";
import venture_one from "../../../../../assets/CreditCardTab/ventureone-rewards_default_main (1).jpg";
import capital_one_secured_default from "../../../../../assets/CreditCardTab/capital-one-secured_default_main.jpg";
import venture_x_default from "../../../../../assets/CreditCardTab/venture-x_default_main (1).jpg";
import savorone_card_default from "../../../../../assets/CreditCardTab/savorone-card_default_main.jpg";
import capital_one_spark_default from "../../../../../assets/CreditCardTab/capital-one-spark_default_main.jpg";
import discover_it_chrome from "../../../../../assets/CreditCardTab/discover-it-chrome-card_default_main.jpg";
import discover_it_for_students from "../../../../../assets/CreditCardTab/discover-it-for-students_default_main.jpg";
// import discover_it_chrome from "../../../../../assets/CreditCardTab/discover-it-chrome-card_default_main.jpg";
import discover_it_secured_default from "../../../../../assets/CreditCardTab/discover-it-secured_default_main.jpg";
import alaska_airlines from "../../../../../assets/CreditCardTab/alaska-airlines_default_main.jpg";
import bank_of_america_premier_rewards from "../../../../../assets/CreditCardTab/bank-of-america-premium-rewards_default_main.jpg";
import platinum_delta_skymiles_default from "../../../../../assets/CreditCardTab/platinum-delta-skymiles_default_main.jpg";
import marriott_bonvoy_brilliant_american_express from "../../../../../assets/CreditCardTab/marriott-bonvoy-brilliant-american-express-card_default_main.jpg";
import gold_card_default from "../../../../../assets/CreditCardTab/gold-card_default_main.jpg";
import business_gold_rewards_default from "../../../../../assets/CreditCardTab/business-gold-rewards_default_All_webp.webp";
import amex_blue_business from "../../../../../assets/CreditCardTab/amex-blue-business_default_main.jpg";
import blue_for_business_default from "../../../../../assets/CreditCardTab/blue-for-business_default_main.jpg";
import business_platinum_amex_default from "../../../../../assets/CreditCardTab/business-platinum-amex_default_All_webp.webp";
import platinum_card_default from "../../../../../assets/CreditCardTab/the-platinum-card_default_All_webp.webp";
import blue_cash_everyday from "../../../../../assets/CreditCardTab/blue-cash-everyday-sm-card-from-american-express_default_main (1).jpg";
import blue_delta_skymiles_default from "../../../../../assets/CreditCardTab/blue-delta-skymiles_default_main.jpg";
import hilton_honor_amex_default from "../../../../../assets/CreditCardTab/hilton-honors-amex_default_main.jpg";
import gold_delta_skymiles_default from "../../../../../assets/CreditCardTab/gold-delta-skymiles_default_main.jpg";
import wells_fargo_reflect from "../../../../../assets/CreditCardTab/wells-fargo-reflect_default_All_main.jpg";
import platinum_rewards_default from "../../../../../assets/CreditCardTab/platinum-rewards_default_main.jpg";
import disney_reward_visa from "../../../../../assets/CreditCardTab/disney-rewards-visa-credit-card_default_main.jpg";
import southwest_airlines_rapid_rewards_plus_default from "../../../../../assets/CreditCardTab/southwest-airlines-rapid-rewards-plus_default_All_main.jpg";
import disney_premier_visa_credit_card from "../../../../../assets/CreditCardTab/disney-premier-visa-credit-card_default_All_main.jpg";
import infinite_default_all_main from "../../../../../assets/CreditCardTab/infinite_default_All_main.jpg";
import united_mileageplus_explorer_card from "../../../../../assets/CreditCardTab/united-mileageplus-explorer-card_default_All_main.jpg";
import southwest_rapid_rewards_priority_default from "../../../../../assets/CreditCardTab/southwest-rapid-rewards-priority_default_All_main.jpg";
import chase_sapphire_reserve from "../../../../../assets/CreditCardTab/chase-sapphire-reserve_default_All_main.jpg";
import southwest_rapid_rewards_premier_business from "../../../../../assets/CreditCardTab/southwest-rapid-rewards-premier-business_default_All_main.jpg";
import southwest_perfomance_business from "../../../../../assets/CreditCardTab/southwest-performance-business_default_All_main.jpg";
import ink_business_unlimited from "../../../../../assets/CreditCardTab/ink-business-unlimited_default_All_main.jpg";
import ink_cash_default from "../../../../../assets/CreditCardTab/ink-cash_default_All_main.jpg";
import chase_freedom_unlimited from "../../../../../assets/CreditCardTab/chase-freedom-unlimited_default_All_main.jpg";
import credit_one_bank_platinum_default from "../../../../../assets/CreditCardTab/credit-one-bank-platinum_default_main.jpg";
import plat_rewards_defaults from "../../../../../assets/CreditCardTab/plat-rewards_default_main.jpg";
import credit_one_rebuilding_credit_default from "../../../../../assets/CreditCardTab/credit-one-rebuilding-credit_default_main.jpg";

import { Link } from "react-router-dom";
const BestCardByIssuer = () => {
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

  const tabItems = [
    // Citibank
    {
      cardArray: [
        //1
        {
          img: citi_strata_premier,
          heding: "Citi Strata Premier℠ Card",
          subHeading:
            "10x on Hotels, Car Rentals, and Attractions booked through CitiTravel.com 3x -- Earn 3 Points per $1 spent on Air Travel and Other Hotel Purchases 3x -- Earn 3 Points per $1 spent on Restaurants 3x -- Earn 3 Points per $1 spent on Supermarkets 3x -- Earn 3 Points per $1 spent on Gas and EV Charging Stations 1x -- Earn 1 Point per $1 spent on All Other Purchases",
          button: "Apply Now",
          h1Name: "PURCHASE APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "21.24% - 29.24% (Variable)",
          des2: "Earn 70,000 bonus ThankYou® Points after spending $4,000 in the first 3 months of account opening, redeemable for $700 in gift cards or travel rewards at thankyou.com",
          des3: "No Foreign Transaction Fees",
          des4: "Good/Needed",
          to: "/form-personal-loan",
        },
        //2
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "INTRO BALANCE TRANSFER APR",
          h3Name: "REGULAR PURCHASE & BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des2: "0% intro APR for 18 months on Balance Transfers",
          des3: "19.24% - 29.24% (Variable)",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: citi_custom_cash_default,
          heding: "Citi Custom Cash® Card",
          subHeading:
            "Earn 5% cash back on purchases in your top eligible spend category each billing cycle, up to the first $500 spent, 1% cash back thereafter. Also, earn unlimited 1% cash back on all other purchases. Special Travel Offer: Earn an additional 4% cash back on hotels, car rentals, and attractions booked on Citi Travel℠ portal through 6/30/2025.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "INTRO APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn $200 in cash back after you spend $1500 on purchases in the first 6 months of account opening. This bonus offer will be fulfilled as 20,000 ThankYou® points, which can be redeemed for $200 cash back.",
          des2: "Earn 5% cash back on purchases in your top eligible spend category each billing cycle, up to the first $500 spent, 1% cash back thereafter. Also, earn unlimited 1% cash back on all other purchases. Special Travel Offer: Earn an additional 4% cash back on hotels, car rentals, and attractions booked on Citi Travel℠ portal through 6/30/2025.",
          des3: "0% intro APR for 15 months on Purchases and balance transfers, then 19.24% - 29.24% (Variable)",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: american_airlines_mileup_default,
          heding: "American Airlines AAdvantage® MileUp® Card",
          subHeading:
            "Earn 2 AAdvantage® miles for each $1 spent at grocery stores, including grocery delivery services. Earn 2 AAdvantage® miles for every $1 spent on eligible American Airlines purchases. Earn 1 AAdvantage® mile for every $1 spent on other purchases. Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "PURCHASE APR",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 15,000 American Airlines AAdvantage® bonus miles after making $500 in purchases within the first 3 months of account opening.",
          des2: "21.24% - 29.99% (Variable)",
          des3: "No annual fee & 25% savings on inflight food and beverage purchases",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: citi_rewards_plus,
          heding: "Citi Rewards+® Card",
          subHeading:
            "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases.",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 15 months on Purchases",
          des2: "Earn 20,000 bonus points after you spend $1,500 in purchases with your card within 3 months of account opening; redeemable for $200 in gift cards at thankyou.com. Special offer: earn 5 ThankYou® Points per $1 spent on hotel, car rentals and attractions booked on CitiTravel.com through December 31, 2025.",
          des3: "18.74% - 28.74% (Variable)",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },

    // Capital One
    {
      cardArray: [
        //1
        {
          img: cred5,
          heding: "Capital One Quicksilver Cash Rewards Credit Card",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "INTRO APR",
          h4Name: "CREDIT NEEDED",
          des1: "Unlimited 1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des2: "One-time $200 cash bonus after you spend $500 on purchases within 3 months from account opening",
          des3: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months (Balance transfer fee applies), then 19.99% - 29.99% (Variable). Balance transfer fee applies",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: cred4,
          heding: "Capital One Venture Rewards Credit Card",
          subHeading:
            "2 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "Enjoy a one-time bonus of 75,000 miles once you spend $4,000 on purchases within 3 months from account opening, equal to $750 in travel",
          des2: "2 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          des3: "19.99% - 29.99% (Variable) for purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: venture_one,
          heding: "Capital One VentureOne Rewards Credit Card",
          subHeading:
            "1.25 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "FOREIGN TRANSACTION FEE",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a bonus of 20,000 miles once you spend $500 on purchases within 3 months from account opening, equal to $200 in travel",
          des2: "None",
          des3: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months, then 19.99% - 29.99% (Variable). Balance transfer fee applies",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: capital_one_secured_default,
          heding: "Capital One Platinum Secured Credit Card",
          subHeading: "Non-rewards Card",
          button: "Apply Now",
          h1Name: "REPORTS TO CREDIT BUREAUS",
          h2Name: "MINIMUM DEPOSIT",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Build Credit When Used Responsibly",
          des2: "$49, $99, or $200",
          des3: "29.99% (Variable)",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //5
        {
          img: venture_x_default,
          heding: "Capital One Venture X Rewards Credit Card",
          subHeading:
            "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 75,000 bonus miles when you spend $4,000 on purchases in the first 3 months from account opening, equal to $750 in travel",
          des2: "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel",
          des3: "19.99% - 29.99% (Variable) for purchases and balance transfers",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //6
        {
          img: savorone_card_default,
          heding: "Capital One SavorOne Cash Rewards Credit Card",
          subHeading:
            "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          des2: "$200 Cash Back after you spend $500 on purchases within 3 months from account opening",
          des3: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months, then 19.99% - 29.99% (Variable). After that, balance transfer fee applies.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: cred5,
          heding: "Capital One QuicksilverOne Cash Rewards Credit Card",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "NO LIMITS OR RESTRICTIONS",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des2: "No rotating categories, cash back won't expire for the life of the account and no limit to how much you can earn",
          des3: "29.99% (Variable)",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //8
        {
          img: capital_one_secured_default,
          heding: "Capital One Platinum Credit Card",
          subHeading: "Non-rewards Card",
          button: "Apply Now",
          h1Name: "CREDIT LINE INCREASE",
          h2Name: "ANNUAL FEE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Be automatically considered for a higher credit line in as little as 6 months",
          des2: "$0",
          des3: "29.99% (Variable)",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //9
        {
          img: capital_one_spark_default,
          heding: "Capital One Spark Miles for Business",
          subHeading: "2 Miles per $1 on every purchase, everywhere",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "2 Miles per $1 on every purchase, everywhere",
          des2: "Earn a one-time bonus of 50,000 miles – equal to $500 in travel – once you spend $4,500 on purchases within the first 3 months from account opening.",
          des3: "26.24% (Variable) on purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    // Bank of America
    {
      cardArray: [
        //1
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "FLEXIBLE REDEMPTION",
          h3Name: "FOREIGN TRANSACTION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des2: "Redeem points for a statement credit to pay for travel or dining purchases, such as flights, hotel stays, car and vacation rentals, baggage fees, and also at restaurants including takeout.",
          des3: "None",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: cred12,
          heding: "Bank of America® Unlimited Cash Rewards credit card",
          subHeading: "1.5% cash back on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "INTRO APRS",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des2: "0% Intro APR for 15 billing cycles for purchases, and for any balance transfers made in the first 60 days. After the intro APR offer ends, 19.24% - 29.24% Variable APR will apply. A 3% Intro balance transfer fee will apply for the first 60 days your account is open. After the Intro balance transfer fee offer ends, the fee for future balance transfers is 4%.",
          des3: "1.5% cash back on all purchases.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: alaska_airlines,
          heding: "Alaska Airlines Visa Signature® credit card",
          subHeading:
            "Earn unlimited 3 miles for every $1 spent on eligible Alaska Airlines purchases. 2 miles for every $1 spent on eligible gas, EV charging station, cable, streaming services and local transit purchases including ride share. 1 mile for every $1 spent on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "REGULAR APR",
          h4Name: "CREDIT NEEDED",
          des1: "60,000 bonus miles plus Alaska's Famous Companion Fare™ ($99 fare plus taxes and fees from $23) with this offer. To qualify, make $3,000 or more in purchases within the first 90 days of opening your account.",
          des2: "Earn unlimited 3 miles for every $1 spent on eligible Alaska Airlines purchases. 2 miles for every $1 spent on eligible gas, EV charging station, cable, streaming services and local transit purchases including ride share. 1 mile for every $1 spent on all other purchases.",
          des3: "20.24% - 28.24% Variable APR on purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: cred14,
          heding: "Bank of America® Customized Cash Rewards credit card",
          subHeading:
            "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "INTRO APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR for 15 billing cycles for purchases, and for any balance transfers made in the first 60 days. After the intro APR offer ends, 19.24% - 29.24% Variable APR will apply. A 3% Intro balance transfer fee will apply for the first 60 days your account is open. After the Intro balance transfer fee offer ends, the fee for future balance transfers is 4%.",
          des2: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des3: "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: bank_of_america_premier_rewards,
          heding: "Bank of America® Premium Rewards® credit card",
          subHeading:
            "2 points for every $1 spent on travel and dining purchases. 1.5 points for every $1 spent on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "60,000 online bonus points - a $600 value - after you make at least $4,000 in purchases in the first 90 days of account opening.",
          des2: "2 points for every $1 spent on travel and dining purchases. 1.5 points for every $1 spent on all other purchases.",
          des3: "Get up to $100 in Airline Incidental Statement Credits annually and TSA PreCheck®/Global Entry Statement Credits of up to $100, every four years",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //6
        {
          img: cred12,
          heding:
            "Bank of America® Unlimited Cash Rewards Credit Card for Students",
          subHeading: "1.5% cash back on all purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des2: "1.5% cash back on all purchases",
          des3: "0% Intro APR for 15 billing cycles for purchases, and for any balance transfers made in the first 60 days. After the intro APR offer ends, 19.24% - 29.24% Variable APR will apply. A 3% Intro balance transfer fee will apply for the first 60 days your account is open. After the Intro balance transfer fee offer ends, the fee for future balance transfers is 4%.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: cred14,
          heding:
            "Bank of America® Customized Cash Rewards Credit Card for Students",
          subHeading:
            "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des2: "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          des3: "When handled responsibly, a credit card can help you build your credit history, which could be helpful when looking for an apartment, a car loan, and even a job. Access your FICO® Score for free within Online Banking or your Mobile Banking app.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards Credit Card for Students",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "TRAVEL PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des2: "1.5 points per $1 spent on all purchases.",
          des3: "Redeem points for a statement credit to pay for travel or dining purchases, such as flights, hotel stays, car and vacation rentals, baggage fees, and also at restaurants including takeout.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    //Discover
    {
      cardArray: [
        //1
        {
          img: cred3,
          heding: "Discover it® Cash Back",
          subHeading:
            "Earn 5% cash back on everyday purchases at different places you shop each quarter like grocery stores, restaurants, gas stations, and more, up to the quarterly maximum when you activate. Plus, earn unlimited 1% cash back on all other purchases—automatically. Redeem your rewards for cash at any time.",
          button: "Apply Now",
          h1Name: "0% INTRO APR",
          h2Name: "REWARDS RATE",
          h3Name: "SIGN-UP BONUS",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR for 15 months on purchases and balance transfers, then 17.24% - 28.24% Variable APR.",
          des2: "Earn 5% cash back on everyday purchases at different places you shop each quarter like grocery stores, restaurants, gas stations, and more, up to the quarterly maximum when you activate. Plus, earn unlimited 1% cash back on all other purchases—automatically. Redeem your rewards for cash at any time.",
          des3: "Unlimited Cashback Match for all new cardmembers – only from Discover. Discover will automatically match all the cash back you’ve earned at the end of your first year! There’s no minimum spending or maximum rewards. You could turn $150 cash back into $300.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: discover_it_chrome,
          heding: "Discover it® Chrome",
          subHeading:
            "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "INTRO APR",
          h2Name: "REWARDS RATE",
          h3Name: "ONGOING APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR for 6 months on purchases and 0% Intro APR for 18 months on balance transfers, then 17.24% - 28.24% Variable APR",
          des2: "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          des3: "17.24% - 28.24% Variable APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: discover_it_for_students,
          heding: "Discover it® Student Cash Back",
          subHeading:
            "Earn 5% cash back at different places each quarter up to the quarterly maximum when you activate. 1% unlimited cash back on all other purchases - automatically",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "REWARDS RATE",
          h3Name: "ONGOING APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR for 6 months on purchases",
          des2: "Earn 5% cash back at different places each quarter up to the quarterly maximum when you activate. 1% unlimited cash back on all other purchases - automatically.",
          des3: "18.24% - 27.24% Variable APR",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //4
        {
          img: discover_it_chrome,
          heding: "Discover it® Student Chrome",
          subHeading:
            "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "REWARDS RATE",
          h3Name: "ONGOING APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR for 6 months",
          des2: "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          des3: "18.24% - 27.24% Variable APR",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //5
        {
          img: discover_it_secured_default,
          heding: "Discover it® Secured Credit Card",
          subHeading:
            "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "APRS",
          h3Name: "RATES AND FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Plus earn unlimited 1% cash back on all other purchases.",
          des2: "10.99% Intro APR for 6 months on balance transfers, then 28.24% Variable APR.",
          des3: "No annual fee, no late fee on your first late payment. No penalty APR.*",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //6
        {
          img: cred6,
          heding: "Discover it® Miles",
          subHeading: "1.5 Miles per dollar on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "0% INTRO APR FOR PURCHASES",
          h4Name: "CREDIT NEEDED",
          des1: "Unlimited Mile-for-Mile match for all new cardmembers—only from Discover. Discover gives you an unlimited match of all the Miles you’ve earned at the end of your first year. You could turn 35,000 Miles to 70,000 Miles. There’s no signing up, no minimum spending or maximum rewards. Just a Miles-for-Miles match.",
          des2: "1.5 Miles per dollar on all purchases.",
          des3: "0% Intro APR for 15 months, then 17.24% - 28.24% Variable APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    // American Express
    {
      cardArray: [
        //1
        {
          img: platinum_delta_skymiles_default,
          heding: "Delta SkyMiles® Platinum American Express Card",
          subHeading:
            "Earn 3X Miles on Delta purchases and purchases made directly with hotels. Earn 2X Miles at restaurants worldwide, plus takeout and delivery in the U.S., and at U.S. supermarkets and earn 1X Miles on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 50,000 Bonus Miles after you spend $3,000 in purchases on your new Card in your first 6 months of Card Membership",
          des2: "Earn 3X Miles on Delta purchases and purchases made directly with hotels. Earn 2X Miles at restaurants worldwide, plus takeout and delivery in the U.S., and at U.S. supermarkets and earn 1X Miles on all other eligible purchases.",
          des3: "20.99%-29.99% Variable",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: marriott_bonvoy_brilliant_american_express,
          heding: "Marriott Bonvoy Brilliant® American Express® Card",
          subHeading:
            "Earn 6x Marriott Bonvoy points for each dollar of eligible purchases at hotels participating in Marriott Bonvoy® program. 3x points at restaurants worldwide and on flights booked directly with airlines. 2x points on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 95,000 Marriott Bonvoy bonus points after you use your new Card to make $6,000 in purchases within the first 6 months of Card Membership.",
          des2: "Earn 6x Marriott Bonvoy points for each dollar of eligible purchases at hotels participating in Marriott Bonvoy® program. 3x points at restaurants worldwide and on flights booked directly with airlines. 2x points on all other eligible purchases.",
          des3: "Receive 1 Free Night Award every year after your Card renewal month.*",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: platinum_card_default,
          heding: "The Platinum Card® from American Express",
          subHeading:
            "5X Membership Rewards® points on flights booked directly with airlines or with American Express Travel on up to $500,000 on these purchases per calendar year and 5X Membership Rewards® points on prepaid hotels booked with American Express Travel. Terms apply.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 80,000 Membership Rewards® Points after you spend $8,000 on eligible purchases on your new Card in your first 6 months of Card Membership.",
          des2: "5X Membership Rewards® points on flights booked directly with airlines or with American Express Travel on up to $500,000 on these purchases per calendar year and 5X Membership Rewards® points on prepaid hotels booked with American Express Travel. Terms apply.",
          des3: "$200 Uber Cash: Enjoy Uber VIP status and up to $200 in Uber savings on rides or eats orders in the US annually. Uber Cash and Uber VIP status is available to Basic Card Member only. Terms Apply.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: gold_card_default,
          heding: "American Express® Gold Card",
          subHeading:
            "Earn 4X Membership Rewards® Points at Restaurants, plus takeout and delivery in the U.S., and earn 4X Membership Rewards® points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X), and 3X Membership Rewards® points on flights booked directly with airlines or on amextravel.com. Terms apply.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "FOREIGN TRANSACTION FEE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 60,000 Membership Rewards® Points after you spend $6,000 on eligible purchases with your new Card within the first 6 months of Card Membership.",
          des2: "None",
          des3: "$120 Dining Credit: Satisfy your cravings and earn up to $10 in statement credits monthly when you pay with the American Express® Gold Card at Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, Milk Bar and select Shake Shack locations. Enrollment required.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: business_gold_rewards_default,
          heding: "American Express® Business Gold Card",
          subHeading:
            "Get 4X Membership Rewards® points on the 2 select categories where your business spent the most each month on the first $150,000 in combined purchases each calendar year (then 1X thereafter). Earn 3X Membership Rewards® points on flights and prepaid hotels booked on amextravel.com using your Business Gold Card. Earn up to $20 in statement credits monthly after you use the Business Gold Card for eligible U.S. purchases at FedEx, Grubhub, and Office Supply Stores. This can be an annual savings of up to $240. Enrollment required.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 70,000 Membership Rewards® points after you spend $10,000 on eligible purchases with the Business Gold Card within the first 3 months of Card Membership.*",
          des2: "Get 4X Membership Rewards® points on the 2 select categories where your business spent the most each month on the first $150,000 in combined purchases each calendar year (then 1X thereafter). Earn 3X Membership Rewards® points on flights and prepaid hotels booked on amextravel.com using your Business Gold Card. Earn up to $20 in statement credits monthly after you use the Business Gold Card for eligible U.S. purchases at FedEx, Grubhub, and Office Supply Stores. This can be an annual savings of up to $240. Enrollment required.",
          des3: "No foreign transaction fees & many helpful business tools*",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //6
        {
          img: amex_blue_business,
          heding: "The American Express Blue Business Cash™ Card",
          subHeading:
            "Earn 2% cash back on all eligible purchases on up to $50,000 per calendar year, then 1%",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "EXPANDED BUYING POWER",
          h3Name: "WELCOME OFFER",
          h4Name: "CREDIT NEEDED",
          des1: "0% on purchases for 12 months from date of account opening then 18.49% - 26.49% Variable",
          des2: "From workflow to inventory to floor plans, your business is constantly changing. That’s why you’ve got the power to spend beyond your credit limit with Expanded Buying Power.",
          des3: "Earn a $250 statement credit after you make $3,000 in purchases on your Card in your first 3 months.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: blue_cash_everyday,
          heding: "Blue Cash Everyday® Card from American Express",
          subHeading:
            "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "STREAMING BENEFITS",
          h2Name: "WELCOME OFFER",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "Thinking about getting the Disney Bundle which can include Disney+, Hulu, and ESPN+? Your decision made easy with $7/month back in the form of a statement credit after you spend $9.99 or more each month on an eligible subscription (subject to auto renewal) with your Blue Cash Everyday® Card. Enrollment required.",
          des2: "Earn a $200 statement credit after you spend $2,000 in purchases on your new Card within the first 6 months. ",
          des3: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: blue_delta_skymiles_default,
          heding: "Delta SkyMiles® Blue American Express Card",
          subHeading:
            "Earn 2X Miles per dollar spent on Delta purchases and at restaurants worldwide, plus takeout and delivery in the U.S. Earn 1X Mile on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "ADDITIONAL PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 10,000 bonus miles after you spend $1,000 in purchases on your new Card in your first 6 months.",
          des2: "Earn 2X Miles per dollar spent on Delta purchases and at restaurants worldwide, plus takeout and delivery in the U.S. Earn 1X Mile on all other eligible purchases.",
          des3: "No foreign transaction fees.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //9
        {
          img: cred11,
          heding: "Blue Cash Preferred® Card from American Express",
          subHeading:
            "Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses and more), 1% Cash Back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "BUY NOW, PAY LATER INTRO OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "INTRO APR",
          h4Name: "CREDIT NEEDED",
          des1: "Buy Now, Pay Later: Enjoy $0 intro plan fees when you use Plan It® to split up large purchases into monthly installments. Pay $0 intro plan fees on plans created during the first 12 months from the date of account opening. Plans created after that will have a monthly plan fee up to 1.33% of each eligible purchase amount moved into a plan based on the plan duration, the APR that would otherwise apply to the purchase, and other factors.",
          des2: "Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses and more), 1% Cash Back on other purchases. Terms apply.",
          des3: "0% on purchases for 12 months from the date of account opening, then 19.24%-29.99% Variable",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //10
        {
          img: hilton_honor_amex_default,
          heding: "Hilton Honors American Express Card",
          subHeading:
            "Earn 7X Hilton Honors Bonus Points for each dollar of eligible purchases charged directly with hotels and resorts within the Hilton portfolio, 5X Hilton Honors Bonus Points at U.S. restaurants, U.S. supermarkets, and U.S. gas stations AND 3X Hilton Honors Bonus Points for all other eligible purchases on your Card.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 70,000 Hilton Honors Bonus Points plus a Free Night Reward after you spend $2,000 in purchases on the Hilton Honors American Express Card in the first 6 months of Card Membership. Offer Ends 7/31/2024.",
          des2: "Up to 7X Hilton Bonus Points for each dollar of eligible purchases",
          des3: "No Foreign Transaction Fees. Enjoy international travel without additional fees on purchases made abroad",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //11
        {
          img: blue_for_business_default,
          heding: "The Blue Business® Plus Credit Card from American Express",
          subHeading:
            "Earn 2X Membership Rewards® points on everyday business purchases such as office supplies or client dinners. 2X applies to the first $50,000 in purchases per year, 1 point per dollar thereafter.",
          button: "Apply Now",
          h1Name: "INTRO AND REGULAR APR",
          h2Name: "REWARDS RATE",
          h3Name: "FLEXIBLE SPENDING",
          h4Name: "CREDIT NEEDED",
          des1: "0% on purchases for 12 months from date of account opening, then 18.49% - 26.49% Variable",
          des2: "Earn 2X Membership Rewards® points on everyday business purchases such as office supplies or client dinners. 2X applies to the first $50,000 in purchases per year, 1 point per dollar thereafter.",
          des3: "Enjoy the flexibility to put more purchases on the Card",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
        {
          img: gold_delta_skymiles_default,
          heding: "Delta SkyMiles® Gold American Express Card",
          subHeading:
            "Earn 2X Miles on Delta purchases, at restaurants worldwide, plus takeout and delivery in the U.S., and at U.S. supermarkets. Earn 1X Mile on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "ADDITIONAL PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 40,000 Bonus Miles after you spend $2,000 in purchases on your new Card in your first 6 months of Card Membership.",
          des2: "Earn 2X Miles on Delta purchases, at restaurants worldwide, plus takeout and delivery in the U.S., and at U.S. supermarkets. Earn 1X Mile on all other eligible purchases.",
          des3: "Check your 1st bag free on every Delta flight*",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //13
        {
          img: business_platinum_amex_default,
          heding: "The Business Platinum Card® from American Express",
          subHeading:
            "5X Membership Rewards® points on flights and prepaid hotels on amextravel.com, and 1X points for each dollar you spend on eligible purchases. Earn 1.5X points (that’s an extra half point per dollar) on each eligible purchase at US construction material, hardware suppliers, electronic goods retailers, and software & cloud system providers, and shipping providers, as well as on purchases of $5,000 or more everywhere else, on up to $2 million of these purchases per calendar year.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "TRAVEL BENEFITS",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 150,000 Membership Rewards® points after you spend $20,000 in eligible purchases on the Card within the first 3 months of Card Membership.",
          des2: "Complimentary access to over 1000+ airport lounges*",
          des3: "Get 50% more Membership Rewards® points. That's 1.5 points per dollar, on each eligible purchase of $5,000 or more*",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    // Wells Fargo
    {
      cardArray: [
        //1
        {
          img: cred1,
          heding: "Wells Fargo Active Cash® Card",
          subHeading: "Earn unlimited 2% cash rewards on purchases",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $200 cash rewards bonus after spending $500 in purchases in the first 3 months",
          des2: "Earn unlimited 2% cash rewards on purchases",
          des3: "No categories to track or remember and cash rewards don't expire as long as your account remains open.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: wells_fargo_reflect,
          heding: "Wells Fargo Reflect® Card",
          subHeading: "None",
          button: "Apply Now",
          h1Name: "REGULAR APR",
          h2Name: "INTRO PURCHASE APR",
          h3Name: "INTRO BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "18.24%, 24.74%, or 29.99% Variable APR",
          des2: "0% intro APR 21 months from account opening",
          des3: "0% intro APR for 21 months from account opening on qualifying balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: cred10,
          heding: "Wells Fargo Autograph℠ Card",
          subHeading:
            "Earn unlimited 3X points on restaurants, travel, gas stations, transit, popular streaming services and phone plans. Plus earn 1X points on other purchases",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REDEMPTION OPTIONS",
          h3Name: "INTRO PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 20,000 bonus points when you spend $1,000 in purchases in the first 3 months - that's a $200 cash redemption value.",
          des2: "Redeem your rewards points for travel, gift cards, or statement credits. Or shop at millions of online stores and redeem your rewards when you check out with PayPal.",
          des3: "0% intro APR for 12 months from account opening on purchases, then 20.24%, 25.24%, or 29.99% Variable APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    // Credit One
    {
      cardArray: [
        //1
        {
          img: platinum_rewards_default,
          heding: "Credit One Bank® Platinum Rewards Visa® With No Annual Fee",
          subHeading:
            "Earn 2% cash back rewards on eligible gas and grocery purchases as well as mobile phone, internet, cable, and satellite TV services, terms apply",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "PURCHASE APR",
          h3Name: "CUSTOMIZED PAYMENT DATE",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% cash back rewards on eligible gas and grocery purchases as well as mobile phone, internet, cable, and satellite TV services, terms apply",
          des2: "29.74% Variable",
          des3: "Choose your monthly payment due date for added convenience, terms apply",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: credit_one_rebuilding_credit_default,
          heding: "Credit One Bank® Platinum Visa® for Rebuilding Credit",
          subHeading:
            "1% Cash Back on eligible purchases and mobile phone service, internet, cable and satellite TV services. Terms Apply.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "PURCHASE APR",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "1% Cash Back on eligible purchases and mobile phone service, internet, cable and satellite TV services. Terms Apply.",
          des2: "29.74% Variable",
          des3: "This unsecured card requires no deposit and can help build your credit",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //3
        {
          img: plat_rewards_defaults,
          heding: "Credit One Bank® Platinum X5 Visa®",
          subHeading:
            "Earn 5% cash back rewards on the first $5,000 of eligible gas, grocery, internet, cable, satellite TV, and mobile phone service purchases each year, and then 1% thereafter. Plus 1% cash back rewards on all other purchases, terms apply",
          button: "Apply Now",
          h1Name: "FOREIGN TRANSACTION FEE",
          h2Name: "CASH BACK",
          h3Name: "FRAUD PROTECTION",
          h4Name: "CREDIT NEEDED",
          des1: "N/A",
          des2: "Automatically earn More Cash Back Rewards for using your Credit One Bank card at participating merchants, terms apply.",
          des3: "With $0 Fraud Liability, you won’t be responsible for unauthorized charges",
          des4: "Good",
          to: "/form-personal-loan",
        },
        //4
        {
          img: credit_one_bank_platinum_default,
          heding: "Credit One Bank® Platinum Visa®",
          subHeading:
            "Earn 1% cash back rewards on eligible gas, grocery purchases and mobile phone service, internet, cable and satellite TV services, terms apply",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "PURCHASE APR",
          h3Name: "GROW YOUR CREDIT LINE",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 1% cash back rewards on eligible gas, grocery purchases and mobile phone service, internet, cable and satellite TV services, terms apply",
          des2: "29.74% Variable",
          des3: "Automatic reviews for credit line increase opportunities",
          des4: "Fair/Good",
          to: "/form-personal-loan",
        },
      ],
    },

    // Chase
    {
      cardArray: [
        //1
        {
          img: chase_freedom_unlimited,
          heding: "Chase Freedom Unlimited®",
          subHeading:
            "Enjoy 5% cash back on travel purchased through Chase Travel, our premier rewards program that lets you redeem rewards for cash back, travel, gift cards and more; 3% cash back on drugstore purchases and dining at restaurants, including takeout and eligible delivery service, and 1.5% on all other purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "INTRODUCTORY APR",
          h3Name: "REGULAR APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) — worth up to $300 cash back. That's 6.5% on travel purchased through Chase Travel, 4.5% on dining and drugstores, and 3% on all other purchases.",
          des2: "0% Intro APR on Purchases for 15 months and 0% Intro APR on Balance Transfers for 15 months",
          des3: "20.49% – 29.24% Variable",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: cred2,
          heding: "Chase Sapphire Preferred® Card",
          subHeading:
            "Enjoy beneﬁts such as 5x on travel purchased through Chase Travel℠, 3x on dining, select streaming services and online groceries, 2x on all other travel purchases, 1x on all other purchases, $50 Annual Chase Travel Hotel Credit, plus more.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "FOREIGN TRANSACTION FEE",
          h3Name: "BONUS PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 75,000 bonus points after you spend $4,000 on purchases in the first 3 months from account opening. That's over $900 when you redeem through Chase Travel℠.",
          des2: "$0",
          des3: "Get 25% more value when you redeem for airfare, hotels, car rentals and cruises through Chase Travel℠. For example, 75,000 points are worth $900 toward travel.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: ink_cash_default,
          heding: "Ink Business Cash® Credit Card",
          subHeading:
            "Earn 5% cash back on the first $25,000 spent in combined purchases at office supply stores and on internet, cable and phone services each account anniversary year. Earn 2% cash back on the first $25,000 spent in combined purchases at gas stations and restaurants each account anniversary year. Earn 1% cash back on all other card purchases with no limit to the amount you can earn.",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "CASH BACK REWARDS",
          h4Name: "CREDIT NEEDED",
          des1: "0% Intro APR on Purchases for 12 months, then 18.49% to 24.49% Variable",
          des2: "Earn $350 when you spend $3,000 on purchases in the first three months and an additional $400 when you spend $6,000 on purchases in the first six months after account opening.",
          des3: "Earn 5% cash back in select business categories",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: ink_business_unlimited,
          heding: "Ink Business Unlimited® Credit Card",
          subHeading:
            "Earn unlimited 1.5% cash back on every purchase made for your business",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "ZERO LIABILITY",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Earn $750 bonus cash back after you spend $6,000 on purchases in the first 3 months from account opening.",
          des2: "With Zero Liability you won't be held responsible for unauthorized charges made with your card or account information",
          des3: "$0 annual fee and 0% Intro APR on Purchases for 12 months, then an APR of 18.49% - 24.49% Variable.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: southwest_perfomance_business,
          heding: "Southwest® Rapid Rewards® Performance Business Credit Card",
          subHeading:
            "Earn 4 points per $1 spent on Southwest® purchases. Earn 3 points per $1 spent on Rapid Rewards® hotel and car rental partners. Earn 2 points per $1 spent on local transit and commuting, including rideshare. Earn 2 points per $1 spent on social media and search engine advertising, internet, cable, and phone services. Earn 1 point per $1 spent on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "BONUS PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 80,000 points after you spend $5,000 on purchases in the first 3 months from account opening.",
          des2: "Earn 4 points per $1 spent on Southwest® purchases. Earn 3 points per $1 spent on Rapid Rewards® hotel and car rental partners. Earn 2 points per $1 spent on local transit and commuting, including rideshare. Earn 2 points per $1 spent on social media and search engine advertising, internet, cable, and phone services. Earn 1 point per $1 spent on all other purchases.",
          des3: "9,000 bonus points after your Cardmember anniversary",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //6
        {
          img: southwest_rapid_rewards_premier_business,
          heding: "Southwest® Rapid Rewards® Premier Business Credit Card",
          subHeading:
            "Earn 3 points per $1 spent on Southwest® purchases. Earn 2 points per $1 spent on Rapid Rewards® hotel and car rental partners. Earn 2 points per $1 spent on local transit and commuting, including rideshare. Earn 1 point per $1 spent on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "BONUS MILES",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 60,000 points after you spend $3,000 on purchases in the first 3 months your account is open.",
          des2: "6,000 bonus points after your Cardmember anniversary",
          des3: "Earn 3 points per $1 spent on Southwest® purchases. Earn 2 points per $1 spent on Rapid Rewards® hotel and car rental partners. Earn 2 points per $1 spent on local transit and commuting, including rideshare. Earn 1 point per $1 spent on all other purchases.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: chase_sapphire_reserve,
          heding: "Chase Sapphire Reserve®",
          subHeading:
            "Earn 5x total points on flights and 10x total points on hotels and car rentals when you purchase travel through Chase Travel℠ immediately after the first $300 is spent on travel purchases annually. Earn 3x points on other travel and dining & 1 point per $1 spent on all other purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 75,000 bonus points after you spend $4,000 on purchases in the first 3 months from account opening. That's $1,125 toward travel when you redeem through Chase Travel℠.",
          des2: "Earn 5x total points on flights and 10x total points on hotels and car rentals when you purchase travel through Chase Travel℠ immediately after the first $300 is spent on travel purchases annually. Earn 3x points on other travel and dining & 1 point per $1 spent on all other purchases",
          des3: "$300 Annual Travel Credit as reimbursement for travel purchases charged to your card each account anniversary year.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: southwest_rapid_rewards_priority_default,
          heding: "Southwest Rapid Rewards® Priority Credit Card",
          subHeading:
            "Receive 7,500 anniversary points, 4 upgraded boardings per year when available, and a $75 Southwest® travel credit each year. Enjoy benefits including 3X points on Southwest purchases, 2X points on local transit and commuting, including rideshare, 2X points on internet, cable, and phone services; select streaming, 10,000 Companion Pass® qualifying points boost each year, and more.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 50,000 bonus points after spending $1,000 on purchases in the first 3 months from account opening.",
          des2: "Receive 7,500 anniversary points, 4 upgraded boardings per year when available, and a $75 Southwest® travel credit each year. Enjoy benefits including 3X points on Southwest purchases, 2X points on local transit and commuting, including rideshare, 2X points on internet, cable, and phone services; select streaming, 10,000 Companion Pass® qualifying points boost each year, and more.",
          des3: "21.49% - 28.49% Variable for purchases and balance transfers",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //9
        {
          img: united_mileageplus_explorer_card,
          heding: "United℠ Explorer Card",
          subHeading:
            "Earn 2 miles per $1 spent on dining, hotel stays and United® purchases. 1 mile per $1 spent on all other purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 50,000 bonus miles after you spend $3,000 on purchases in the first 3 months your account is open.",
          des2: "Earn 2 miles per $1 spent on dining, hotel stays and United® purchases. 1 mile per $1 spent on all other purchases",
          des3: "Priority boarding, free first checked bag & $0 foreign transaction fee",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //10
        {
          img: infinite_default_all_main,
          heding: "United Club℠ Infinite Card",
          subHeading:
            "Earn 4 miles per $1 spent on United® purchases, 2 miles per $1 spent on all other travel and dining and 1 mile per $1 spent on all other purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "TRAVEL BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 80,000 bonus miles after you spend $5,000 on purchases in the first 3 months from account opening.",
          des2: "Earn 4 miles per $1 spent on United® purchases, 2 miles per $1 spent on all other travel and dining and 1 mile per $1 spent on all other purchases.",
          des3: "Free first and second checked bags - a savings of up to $320 per roundtrip (terms apply) - and Premier Access® travel services",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //11
        {
          img: disney_premier_visa_credit_card,
          heding: "Disney® Premier Visa® Credit Card",
          subHeading:
            "Earn 5% in Disney Rewards Dollars on card purchases made directly at DisneyPlus.com, Hulu.com or ESPNPlus.com. Earn 2% in Disney Rewards Dollars on card purchases at gas stations, grocery stores, restaurants and most Disney U.S. locations. Earn 1% on all your other card purchases. There are no limits to the number of Rewards Dollars you can earn.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "APRS",
          h3Name: "EXTRA BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 5% in Disney Rewards Dollars on card purchases made directly at DisneyPlus.com, Hulu.com or ESPNPlus.com. Earn 2% in Disney Rewards Dollars on card purchases at gas stations, grocery stores, restaurants and most Disney U.S. locations. Earn 1% on all your other card purchases. There are no limits to the number of Rewards Dollars you can earn.",
          des2: "19.24% to 28.24% Variable on purchases and balance transfers",
          des3: "0% promo APR for 6 months on select Disney vacation packages from the date of purchase (after that a variable APR of 19.24% - 28.24%). Also get 10% off select merchandise purchases, select dining locations most days at the Disneyland® and Walt Disney World® Resorts, and on select purchases at DisneyStore.com.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
        {
          img: southwest_airlines_rapid_rewards_plus_default,
          heding: "Southwest Rapid Rewards® Plus Credit Card",
          subHeading:
            "Receive 3,000 anniversary points each year. Enjoy benefits including 2X points on local transit and commuting, including rideshare, 2X points on internet, cable, and phone services; select streaming, 2 EarlyBird Check-In® each year, 10,000 Companion Pass® qualifying points boost each year, and more.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 50,000 bonus points after spending $1,000 on purchases in the first 3 months from account opening.",
          des2: "Receive 3,000 anniversary points each year. Enjoy benefits including 2X points on local transit and commuting, including rideshare, 2X points on internet, cable, and phone services; select streaming, 2 EarlyBird Check-In® each year, 10,000 Companion Pass® qualifying points boost each year, and more.",
          des3: "21.49% - 28.49% Variable on purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //13
        {
          img: disney_reward_visa,
          heding: "Capital One Spark Miles for Business",
          subHeading: "2 Miles per $1 on every purchase, everywhere",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "2 Miles per $1 on every purchase, everywhere",
          des2: "Earn a one-time bonus of 50,000 miles – equal to $500 in travel – once you spend $4,500 on purchases within the first 3 months from account opening.",
          des3: "26.24% (Variable) on purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Box sx={{ display: { xs: "", sm: "block", paddingTop: "30px" } }}>
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
                sx={{ marginLeft: "20px" }}
              >
                <Tab
                  icon={
                    <img
                      src={citibank}
                      alt="citibank"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Citibank"
                  style={{
                    backgroundColor: value === 0 ? "#08c177" : "",
                    color: value === 0 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={capital}
                      alt="capital"
                      style={{
                        backgroundSize: "30px auto",
                        width: "70px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Capital One"
                  style={{
                    backgroundColor: value === 1 ? "#08c177" : "",
                    color: value === 1 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={bankOfameric}
                      alt="bankOfameric"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Bank Of America"
                  style={{
                    backgroundColor: value === 2 ? "#08c177" : "",
                    color: value === 2 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={discover}
                      alt="discover"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Discover"
                  style={{
                    backgroundColor: value === 3 ? "#08c177" : "",
                    color: value === 3 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={AExpress}
                      alt="AExpress"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="American Express"
                  style={{
                    backgroundColor: value === 4 ? "#08c177" : "",
                    color: value === 4 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={wells}
                      alt="wells"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Wells Fargo"
                  style={{
                    backgroundColor: value === 5 ? "#08c177" : "",
                    color: value === 5 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={capitalOne}
                      alt="Credit One"
                      style={{
                        backgroundSize: "30px auto",
                        width: "70",
                        height: "30px",
                      }}
                    />
                  }
                  label="Credit One"
                  style={{
                    backgroundColor: value === 6 ? "#08c177" : "",
                    color: value === 6 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  icon={
                    <img
                      src={chase}
                      alt="chase"
                      style={{
                        backgroundSize: "30px auto",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  }
                  label="Chase"
                  style={{
                    backgroundColor: value === 7 ? "#08c177" : "",
                    color: value === 7 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "75px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
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
                <Box>
                  <h1 className="page_heading">{item.main_headding}</h1>
                  <p className="main_para">{item.main_para}</p>
                </Box>
                {item.cardArray &&
                  item.cardArray.map((card, cardIndex) => (
                    <Box sx={{ padding: "20px" }}>
                      <Card key={cardIndex} sx={{ paddingTop: "50px" }}>
                        <Grid
                          container
                          sx={{
                            paddingBottom: "20px",
                          }}
                          spacing={1}
                        >
                          <Grid item xs={12} sm={4} lg={3}>
                            <Box sx={{ textAlign: "center" }}>
                              {" "}
                              <img
                                src={card.img}
                                alt="img"
                                width={183}
                                height={114}
                                style={{ margin: "0px 0px 8px" }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={5}>
                            <Box sx={{ padding: "10px" }}>
                              <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                              >
                                {card.heding}
                              </Typography>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                              />
                              <Typography sx={{ fontWeight: "bold" }}>
                                Rewards Rate
                              </Typography>
                              <Typography>{card.subHeading}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={4}>
                            <Box sx={{ padding: "10px" }}>
                              <Button
                                variant="contained"
                                sx={{
                                  width: "183px",
                                  marginTop: "10px",
                                  backgroundColor: "#08c177",
                                  textTransform: "none",
                                }}
                              >
                                {card.button}
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>

                        <Divider sx={{ marginBottom: "20px" }} />
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Box
                              sx={{
                                fontWeight: "bold",
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px",
                              }}
                            >
                              {card?.h1Name}
                            </Box>
                            <Typography
                              sx={{
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px 15px",
                              }}
                            >
                              {card?.des1}
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Box
                              sx={{
                                fontWeight: "bold",
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px",
                              }}
                            >
                              {card?.h2Name}
                            </Box>
                            <Typography
                              sx={{
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px 15px",
                              }}
                            >
                              {card?.des2}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Box
                              sx={{
                                fontWeight: "bold",
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px",
                              }}
                            >
                              {card?.h3Name}
                            </Box>
                            <Typography
                              sx={{
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px 15px",
                              }}
                            >
                              {card?.des3}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Box
                              sx={{
                                fontWeight: "bold",
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px",
                              }}
                            >
                              {card?.h4Name}
                            </Box>
                            <Typography
                              sx={{
                                fontSize: " .85rem",
                                lineHeight: " 1.25rem",
                                padding: "4px 15px 15px",
                              }}
                            >
                              {card?.des4}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Box>
                  ))}
              </div>
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default BestCardByIssuer;
