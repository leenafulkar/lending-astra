import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import "./index.css";
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
  CircularProgress,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";

// import SchoolIcon from "@mui/icons-material/School";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import LockIcon from "@mui/icons-material/Lock";
// import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
// import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
// import LocalAirportIcon from "@mui/icons-material/LocalAirport";

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
// import tabimg3 from "../../../../assets/home-purchase-bullseye.webp";

import icon1 from "../../../../../assets/icons/yrophy-greybg.svg";
import icon2 from "../../../../../assets/icons/li-greybg.svg";
import icon3 from "../../../../../assets/icons/bt-greybg.svg";
import icon4 from "../../../../../assets/icons/travel-greybg.svg";
import icon5 from "../../../../../assets/icons/cash-back-greybg.svg";
import icon6 from "../../../../../assets/icons/rewards-greybg.svg";
import icon7 from "../../../../../assets/icons/no-annual-fee-greybg.svg";
import icon8 from "../../../../../assets/icons/student.svg";
import SchoolIcon from "@mui/icons-material/School";
import icon9 from "../../../../../assets/icons/briefcase-icon.svg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import icon10 from "../../../../../assets/icons/universal-lock.svg";
import LockIcon from "@mui/icons-material/Lock";
import icon11 from "../../../../../assets/icons/no-annual-fee-greybg.svg";
import icon12 from "../../../../../assets/icons/gas.svg";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import icon13 from "../../../../../assets/icons/universal-medal.svg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import icon14 from "../../../../../assets/icons/airplane-icon.svg";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

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
import venture_one from "../../../../../assets/CreditCardTab/ventureone-rewards_default_main (1).jpg";
import double_cash_default from "../../../../../assets/CreditCardTab/double-cash_default_All_main.jpg";
import citi_custom_cash_default from "../../../../../assets/CreditCardTab/citi-custom-cash_default_All_main.jpg";
import USSA_rate_advantage from "../../../../../assets/CreditCardTab/usaa-rate-advantage_default_All_main.jpg";
import bmo_cash_default from "../../../../../assets/CreditCardTab/bmo-cash_default_main.jpg";
import blue_cash_everyday from "../../../../../assets/CreditCardTab/blue-cash-everyday-sm-card-from-american-express_default_main (1).jpg";
import clear_platinum_1000 from "../../../../../assets/CreditCardTab/clear-platinum-1000_default_All_main.jpg";
import clear_platinum_2000 from "../../../../../assets/CreditCardTab/clear-platinum-2000_default_All_main.jpg";
import first_card_credit_builder from "../../../../../assets/CreditCardTab/firstcard_stage_All_main.jpg";
import bmo_platinum_default from "../../../../../assets/CreditCardTab/bmo-platinum_default_main.jpg";
import wells_fargo_reflect from "../../../../../assets/CreditCardTab/wells-fargo-reflect_default_All_main.jpg";
import chase_freedom_unlimited from "../../../../../assets/CreditCardTab/chase-freedom-unlimited_default_All_main.jpg";
import disney_reward_visa from "../../../../../assets/CreditCardTab/disney-rewards-visa-credit-card_default_main.jpg";
import discover_it_for_students from "../../../../../assets/CreditCardTab/discover-it-for-students_default_main.jpg";
import discover_it_chrome from "../../../../../assets/CreditCardTab/discover-it-chrome-card_default_main.jpg";
import ussa_eagle_navigator_visa from "../../../../../assets/CreditCardTab/usaa-eagle-navigator-visa-signature-credit-card_default_All_main.jpg";
import venture_x_default from "../../../../../assets/CreditCardTab/venture-x_default_main (1).jpg";
import platinum_card_default from "../../../../../assets/CreditCardTab/the-platinum-card_default_All_webp.webp";
import citi_strata_premier from "../../../../../assets/CreditCardTab/citi-strata-premier_default_All_main.jpg";
import citi_rewards_plus from "../../../../../assets/CreditCardTab/citi-rewards-plus_default_All_main (1).jpg";
import chase_freedom_rise from "../../../../../assets/CreditCardTab/chase-freedom-rise-credit-card_default_All_main.jpg";
import USAA_preferred_cash from "../../../../../assets/CreditCardTab/usaa-preferred-cash-rewards_default_All_main.jpg";

import savorone_student_cash_rewards from "../../../../../assets/CreditCardTab/savorone-student-cash-rewards_default_main.jpg";
import ink_business_unlimited from "../../../../../assets/CreditCardTab/ink-business-unlimited_default_All_main.jpg";
import ink_cash_default from "../../../../../assets/CreditCardTab/ink-cash_default_All_main.jpg";
import ink_business_preferred_default from "../../../../../assets/CreditCardTab/ink-business-preferred_default_All_main.jpg";
import ink_business_premier from "../../../../../assets/CreditCardTab/ink-business-premier_default_All_main.jpg";
import revenued_business_default from "../../../../../assets/CreditCardTab/revenued-business_default_All_main.jpg";
import capital_one_spark_cash_select_default from "../../../../../assets/CreditCardTab/capital-one-spark-cash-select_default_main.jpg";
import capital_one_secured_default from "../../../../../assets/CreditCardTab/capital-one-secured_default_main.jpg";
import opensky_plus_secured_default from "../../../../../assets/CreditCardTab/opensky-plus-secured_default_main.jpg";
import first_latitude_default from "../../../../../assets/CreditCardTab/first-latitude_default_All_main.jpg";
import first_progress_default from "../../../../../assets/CreditCardTab/first-progress_default_main.jpg";
import first_progress_platinum_select_mastercard from "../../../../../assets/CreditCardTab/first-progress-platinum-select-mastercard_default_main.jpg";
import merrick_secured_default from "../../../../../assets/CreditCardTab/merrick-secured_default_main.jpg";
import first_progress_platinum_elite_mastercard from "../../../../../assets/CreditCardTab/first-progress-platinum-elite-mastercard_default_main.jpg";
import applied_bank_secured_visa_default from "../../../../../assets/CreditCardTab/applied-bank-secured-visa_default_All_main.jpg";
import opensky_secured_visa_default from "../../../../../assets/CreditCardTab/opensky-secured-visa_default_main.jpg";
import discover_it_secured_default from "../../../../../assets/CreditCardTab/discover-it-secured_default_main.jpg";
import alaska_airlines from "../../../../../assets/CreditCardTab/alaska-airlines_default_main.jpg";
import chase_sapphire_reserve from "../../../../../assets/CreditCardTab/chase-sapphire-reserve_default_All_main.jpg";
import savorone_card_default from "../../../../../assets/CreditCardTab/savorone-card_default_main.jpg";
import bank_of_america_premier_rewards from "../../../../../assets/CreditCardTab/bank-of-america-premium-rewards_default_main.jpg";
import hilton_honor_amex_default from "../../../../../assets/CreditCardTab/hilton-honors-amex_default_main.jpg";
import att_point_plus_default from "../../../../../assets/CreditCardTab/att-points-plus_default_All_main.jpg";
import USSA_preferred_cash_rewards_default from "../../../../../assets/CreditCardTab/usaa-preferred-cash-rewards_default_All_main.jpg";
import gold_delta_skymiles_default from "../../../../../assets/CreditCardTab/gold-delta-skymiles_default_main.jpg";
import southwest_airlines_rapid_rewards_plus_default from "../../../../../assets/CreditCardTab/southwest-airlines-rapid-rewards-plus_default_All_main.jpg";
import blue_delta_skymiles_default from "../../../../../assets/CreditCardTab/blue-delta-skymiles_default_main.jpg";
import aadvantage_default from "../../../../../assets/CreditCardTab/aadvantage_default_All_main.jpg";
import platinum_delta_skymiles_default from "../../../../../assets/CreditCardTab/platinum-delta-skymiles_default_main.jpg";
import aadvantage_business_world_elite_stage from "../../../../../assets/CreditCardTab/aadvantage-business-world-elite_stage_All_main.jpg";
import delta_reserve_default from "../../../../../assets/CreditCardTab/delta-reserve_default_main.jpg";
import united_mileageplus_explorer_card from "../../../../../assets/CreditCardTab/united-mileageplus-explorer-card_default_All_main.jpg";
import american_airlines_mileup_default from "../../../../../assets/CreditCardTab/american-airlines-mileup_default_All_main.jpg";
import citi_advantage_executive_default from "../../../../../assets/CreditCardTab/citi-aadvantage-executive_default_All_main.jpg";
import capital_one_spark_default from "../../../../../assets/CreditCardTab/capital-one-spark_default_main.jpg";

import LazyImage from "../../../../../utils/LazyLoading";

const BestCreditCard = () => {
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
    //Top Credit Card
    //1
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
        //4
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
          des1: "Enjoy a one-time bonus of 75,000 miles once you spend $4,000 on purchases within 3 months from account opening, equal to $750 in travel.",
          des2: "2 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          des3: "19.99% - 29.99% (Variable) for purchases and balance transfers",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
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
          des1: "Unlimited 1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply).",
          des2: "One-time $200 cash bonus after you spend $500 on purchases within 3 months from account opening",
          des3: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months (Balance transfer fee applies), then 19.99% - 29.99% (Variable). Balance transfer fee applies.",
          des4: "Good/Excellent",
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
        //7
        {
          img: cred7,
          heding: "Citi Rewards+® Card",
          subHeading:
            "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases..",
          button: "Apply Now",
          h1Name: "INTRO PURCHASE APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 15 months on Purchases.",
          des2: "Earn 20,000 bonus points after you spend $1,500 in purchases with your card within 3 months of account opening; redeemable for $200 in gift cards at thankyou.com. Special offer: earn 5 ThankYou® Points per $1 spent on hotel, car rentals and attractions booked on CitiTravel.com through December 31, 2025.",
          des3: "18.74% - 28.74% (Variable)",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: cred8,
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
        //9
        {
          img: cred9,
          heding: "Capital One VentureOne Rewards Credit Card",
          subHeading:
            "1.25 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "FOREIGN TRANSACTION FEE",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a bonus of 20,000 miles once you spend $500 on purchases within 3 months from account opening, equal to $200 in travel.",
          des2: "None",
          des3: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months, then 19.99% - 29.99% (Variable). Balance transfer fee applies",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        }, //10
        {
          img: cred10,
          heding: "Wells Fargo Autograph℠ Card",
          subHeading:
            "Earn unlimited 3X points on restaurants, travel, gas stations, transit, popular streaming services and phone plans. Plus earn 1X points on other purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REDEMPTION OPTIONS",
          h3Name: "INTRO PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 20,000 bonus points when you spend $1,000 in purchases in the first 3 months - that's a $200 cash redemption value.",
          des2: "Redeem your rewards points for travel, gift cards, or statement credits. Or shop at millions of online stores and redeem your rewards when you check out with PayPal..",
          des3: "0% intro APR for 12 months from account opening on purchases, then 20.24%, 25.24%, or 29.99% Variable APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //11
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
        //12
        {
          img: cred12,
          heding: "Bank of America® Unlimited Cash Rewards credit card",
          subHeading: "1.5% cash back on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "INTRO APRS",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening.",
          des2: "0% Intro APR for 15 billing cycles for purchases, and for any balance transfers made in the first 60 days. After the intro APR offer ends, 19.24% - 29.24% Variable APR will apply. A 3% Intro balance transfer fee will apply for the first 60 days your account is open. After the Intro balance transfer fee offer ends, the fee for future balance transfers is 4%",
          des3: "1.5% cash back on all purchases.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //13
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases..",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "FLEXIBLE REDEMPTION",
          h3Name: "FOREIGN TRANSACTION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases.",
          des2: "Redeem points for a statement credit to pay for travel or dining purchases, such as flights, hotel stays, car and vacation rentals, baggage fees, and also at restaurants including takeout.",
          des3: "None",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //14
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
        //15
        {
          img: cred15,
          heding: "Capital One Venture X Rewards Credit Card",
          subHeading:
            "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 75,000 bonus miles when you spend $4,000 on purchases in the first 3 months from account opening, equal to $750 in travel",
          des2: "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel",
          des3: "19.99% - 29.99% (Variable) for purchases and balance transfers.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
      ],
    },
    //2
    // low interest
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
          img: cred5,
          heding: "Capital One Quicksilver Cash Rewards Credit Card",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "INTRODUCTORY APR",
          h2Name: "REWARDS RATE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable). 0% intro on balance transfers for 15 months (Balance transfer fee applies), then 19.99% - 29.99% (Variable)",
          des2: "Unlimited 1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des3: "19.99% - 29.99% (Variable)",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: cred1,
          heding: "Wells Fargo Active Cash® Card",
          subHeading: "Earn unlimited 2% cash rewards on purchases",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "PURCHASE AND BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $200 cash rewards bonus after spending $500 in purchases in the first 3 months",
          des2: "Earn unlimited 2% cash rewards on purchases",
          des3: "0% intro APR for 15 months from account opening on purchases and qualifying balance transfers, then a 20.24%, 25.24%, or 29.99% Variable APR; balance transfers made within 120 days qualify for the intro rate and fee of 3% intro for 120 days from account opening, then up to 5%; min: $5",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: venture_one,
          heding: "Capital One VentureOne Rewards Credit Card",
          subHeading:
            "1.25 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "FOREIGN TRANSACTION FEE",
          h2Name: "INTRO PURCHASE APR",
          h3Name: "INTRO BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "None",
          des2: "0% intro on purchases for 15 months, then 19.99% - 29.99% (Variable)",
          des3: "0% intro on balance transfers for 15 months, then 19.99% - 29.99% (Variable). Balance transfer fee applies",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: double_cash_default,
          heding: "Capital One Quicksilver Cash Rewards Credit Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "INTRO BALANCE TRANSFER APR",
          h2Name: "REWARDS RATE",
          h3Name: "REGULAR PURCHASE & BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 18 months on Balance Transfers",
          des2: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des3: "19.24% - 29.24% (Variable)",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //6
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
        //7
        {
          img: USSA_rate_advantage,
          heding: "USAA Rate Advantage Credit Card",
          subHeading: "N/A",
          button: "Apply Now",
          h1Name: "INTRO BT APR",
          h2Name: "ELIGIBILITY",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 15 months on balance transfers, then 12.15% to 27.15% variable regular APR",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "$0 annual fee, no penalty APR & no foreign transaction fee",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
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
        //9
        {
          img: bmo_cash_default,
          heding: "BMO Cash Back Credit Card",
          subHeading:
            "5% cash back on streaming, cable TV and satellite services; 3% cash back on gas and grocery purchases, up to $2,500 in gas and grocery purchases each calendar quarter; and 1% cash back on all other eligible purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "CALL PHONE PROTECTION",
          h4Name: "CREDIT NEEDED",
          des1: "Earn $200 cash back bonus when you spend $2,000 within 3 months of opening your account.",
          des2: "5% cash back on streaming, cable TV and satellite services; 3% cash back on gas and grocery purchases, up to $2,500 in gas and grocery purchases each calendar quarter; and 1% cash back on all other eligible purchases",
          des3: "Cell phone protection in case of a lost, stolen or damaged device when you charge your monthly cell phone bill to your card.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        }, //10
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
        //11
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
          des2: "Earn a $200 statement credit after you spend $2,000 in purchases on your new Card within the first 6 months.",
          des3: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
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
        //13
        {
          img: bmo_platinum_default,
          heding: "BMO Platinum Rewards Credit Card",
          subHeading:
            "2 points per $1 spent on eligible gas and groceries, up to $2,500 in combined spend each calendar and 1 point per $1 spent on all other eligible purchases. Plus enjoy a 10% anniversary bonus points every year.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "CALL PHONE PROTECTION",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 25,000 bonus points when you spend $2,000 within 3 months of opening your account.",
          des2: "2 points per $1 spent on eligible gas and groceries, up to $2,500 in combined spend each calendar and 1 point per $1 spent on all other eligible purchases. Plus enjoy a 10% anniversary bonus points every year.",
          des3: "Cell phone protection in case of a lost, stolen or damaged device when you charge your monthly cell phone bill to your card.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //14
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
        //15
        {
          img: cred7,
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
        //16
        {
          img: clear_platinum_1000,
          heding:
            "The Clear Platinum Visa Credit Card with $1,000 Credit Limit",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "APRS",
          h2Name: "FEES",
          h3Name: "EXTRA BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "No interest - just a simple monthly fee*",
          des2: "No late payment or foreign transaction fees. $10 monthly membership fee.*",
          des3: "Enjoy Visa benefits like cell phone protection, emergency card replacement and Visa Zero Liability",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //17
        {
          img: clear_platinum_2000,
          heding:
            "The Clear Platinum Visa Credit Card with $2,000 Credit Limit",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "APRS",
          h2Name: "FEES",
          h3Name: "EXTRA BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "No interest - just a simple monthly fee*",
          des2: "No late payment or foreign transaction fees. $20 monthly membership fee.*",
          des3: "Enjoy Visa benefits like cell phone protection, emergency card replacement and Visa Zero Liability",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //18
        {
          img: first_card_credit_builder,
          heding:
            "Firstcard® Credit Builder Card with Cashback for College Students",
          subHeading:
            "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          button: "Apply Now",
          h1Name: "RATES & FEES",
          h2Name: "BUILD CREDIT & SAVINGS",
          h3Name: "REWARDS",
          h4Name: "CREDIT NEEDED",
          des1: "0% APR on purchases and no annual fee, late fees, overdraft fees, or foreign exchange fees",
          des2: "When you use your Firstcard for purchases and make timely payments, this responsible repayment behavior is reported to major credit bureaus and can have a positive impact on your credit score over time. Additionally, earn 1.25% APY on the money in your Firstcard",
          des3: "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          des4: "Limited",
          to: "/form-personal-loan",
        },
      ],
    },

    //3
    //  Balance Transfer

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
          h3Name: "PURCHASE AND BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $200 cash rewards bonus after spending $500 in purchases in the first 3 months",
          des2: "Earn unlimited 2% cash rewards on purchases",
          des3: "0% intro APR for 15 months from account opening on purchases and qualifying balance transfers, then a 20.24%, 25.24%, or 29.99% Variable APR; balance transfers made within 120 days qualify for the intro rate and fee of 3% intro for 120 days from account opening, then up to 5%; min: $5",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
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
        //3
        {
          img: blue_cash_everyday,
          heding: "Blue Cash Everyday® Card from American Express",
          subHeading:
            "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "INTRO BALANCE TRANSFER APR",
          h2Name: "INTRO PURCHASE APR",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "0% on balance transfers for 15 months, then 19.24%-29.99% Variable",
          des2: "0% on purchases for 15 months, then 19.24%-29.99% Variable",
          des3: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //4
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
        //5
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "INTRO APRS",
          h3Name: "FOREIGN TRANSACTION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des2: "0% Intro APR for 15 billing cycles for purchases and for any balance transfers made in the first 60 days. After the intro APR offer ends, 19.24% - 29.24% Variable APR will apply. A 3% Intro balance transfer fee will apply for the first 60 days your account is open. After the Intro balance transfer fee offer ends, the fee for future balance transfers is 4%.",
          des3: "None",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //6
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
        //7
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
        //8
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
        //9
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
        }, //10
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "INTRO BT APR",
          h2Name: "REWARDS RATE",
          h3Name: "REGULAR PURCHASE & BT APR",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 18 months on Balance Transfers",
          des2: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des3: "19.24% - 29.24% (Variable)",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //11
        {
          img: USSA_rate_advantage,
          heding: "USAA Rate Advantage Credit Card",
          subHeading: "N/A",
          button: "Apply Now",
          h1Name: "INTRO BT APR",
          h2Name: "ELIGIBILITY",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 15 months on balance transfers, then 12.15% to 27.15% variable regular APR",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "$0 annual fee, no penalty APR & no foreign transaction fee",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
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
      ],
    },
    // Travel

    {
      cardArray: [
        //1
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
        //2
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
        //3
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
        //4
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
        //5
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
        //6
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
        //7
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
        //8
        {
          img: ussa_eagle_navigator_visa,
          heding: "USAA Eagle Navigator™ Credit Card",
          subHeading:
            "3X points on travel purchases, 2X points on everyday purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "ELIGIBILITY",
          h3Name: "REGULAR APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 30,000 bonus points ($300 travel value) after spending $3,000 on qualifying purchases within 90 days of account opening.",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "20.15% to 28.40% variable on purchases, balance transfers, and cash advances",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //9
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
        }, //10
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
      ],
    },

    // Cash Back

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
        //3
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
          des2: "Earn a $200 statement credit after you spend $2,000 in purchases on your new Card within the first 6 months.",
          des3: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //4
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
        //5
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
        //6
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CASH BACK DETAILS",
          h3Name: "REDEEM CASH BACK",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des2: "No rotating categories and no caps on cash back",
          des3: "Receive a Check, Statement Credit, or Direct Deposit",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
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
        //8
        {
          img: cred14,
          heding: "Bank of America® Customized Cash Rewards credit card",
          subHeading:
            "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "BONUS CASH",
          h2Name: "REWARDS RATE",
          h3Name: "REWARD TERMS",
          h4Name: "CREDIT NEEDED",
          des1: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des2: "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          des3: "You can update your choice category for future purchases once each calendar month using the Mobile Banking app or Online Banking, or do nothing and it stays the same.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //9
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
      ],
    },

    // Rewards
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
        //3
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
        //4
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
        //5
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
        //6
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "FOREIGN TRANSACTION FEE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "FLEXIBLE REDEMPTION",
          h4Name: "CREDIT NEEDED",
          des1: "None",
          des2: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des3: "Redeem points for a statement credit to pay for travel or dining purchases, such as flights, hotel stays, car and vacation rentals, baggage fees, and also at restaurants including takeout.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
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
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CASH BACK DETAILS",
          h3Name: "REDEEM CASH BACK",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des2: "No rotating categories and no caps on cash back",
          des3: "Receive a Check, Statement Credit, or Direct Deposit",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //9
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
        }, //10
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
        //11
        {
          img: USAA_preferred_cash,
          heding: "USAA Preferred Cash Rewards Credit Card",
          subHeading: "1.5% cash back on purchases",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "ELIGIBILITY",
          h3Name: "INTRO APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% cash back on purchases",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "0% intro APR on purchases for 15 months, then 17.15% - 31.15% variable regular APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
        {
          img: cred13,
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
        //13
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
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //14
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
        //15
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
        //16
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
        //17
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
        //18
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
        //19
        {
          img: cred14,
          heding: "Bank of America® Customized Cash Rewards credit card",
          subHeading:
            "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "REWARDS TERMS",
          h3Name: "CASH BONUS",
          h4Name: "CREDIT NEEDED",
          des1: "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          des2: "You can update your choice category for future purchases once each calendar month using the Mobile Banking app or Online Banking, or do nothing and it stays the same.",
          des3: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //20
        {
          img: citi_rewards_plus,
          heding: "Citi Rewards+® Card",
          subHeading:
            "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "POINTS ROUND UP",
          h3Name: "SIGN-UP BONUS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases.",
          des2: "Rewards automatically round up to the nearest 10 points on every purchase - with no cap",
          des3: "Earn 20,000 bonus points after you spend $1,500 in purchases with your card within 3 months of account opening; redeemable for $200 in gift cards at thankyou.com. Special offer: earn 5 ThankYou® Points per $1 spent on hotel, car rentals and attractions booked on CitiTravel.com through December 31, 2025.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },

    // No Annual fee

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
        //3
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
        //4
        {
          img: blue_cash_everyday,
          heding: "Blue Cash Everyday® Card from American Express",
          subHeading:
            "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "RATES AND FEES",
          h2Name: "REWARDS RATE",
          h3Name: "STREAMING BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "Up to 3% cash back and no annual fee",
          des2: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          des3: "Thinking about getting the Disney Bundle which can include Disney+, Hulu, and ESPN+? Your decision made easy with $7/month back in the form of a statement credit after you spend $9.99 or more each month on an eligible subscription (subject to auto renewal) with your Blue Cash Everyday® Card. Enrollment required.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
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
        //6
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
        //7
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
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
        {
          img: chase_freedom_rise,
          heding: "Chase Freedom Rise℠ Credit Card",
          subHeading:
            "With Chase Freedom Rise℠, you can start building credit while earning 1.5% cash back on all purchases. Cash Back rewards do not expire as long as your account is open and there is no minimum to redeem for cash back.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "ANNUAL FEE",
          h4Name: "CREDIT NEEDED",
          des1: "With Chase Freedom Rise℠, you can start building credit while earning 1.5% cash back on all purchases. Cash Back rewards do not expire as long as your account is open and there is no minimum to redeem for cash back.",
          des2: "Earn a $25 statement credit after signing up for automatic payments within the first three months of opening your account. With automatic payments, just pick a date and dollar amount to make sure your Credit Card gets paid on time.",
          des3: "$0",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //9
        {
          img: citi_rewards_plus,
          heding: "Citi Rewards+® Card",
          subHeading:
            "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "POINT ROUND UP",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 20,000 bonus points after you spend $1,500 in purchases with your card within 3 months of account opening; redeemable for $200 in gift cards at thankyou.com. Special offer: earn 5 ThankYou® Points per $1 spent on hotel, car rentals and attractions booked on CitiTravel.com through December 31, 2025.",
          des2: "Earn 2X ThankYou® Points at Supermarkets and Gas Stations for the first $6,000 per year and then 1X Points thereafter. Plus, earn 1X ThankYou® Points on All Other Purchases.",
          des3: "Rewards automatically round up to the nearest 10 points on every purchase - with no cap",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        }, //10
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
        //11
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
        //12
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "RATES & FEES",
          h2Name: "REWARDS RATE",
          h3Name: "CASH BACK DETAILS",
          h4Name: "CREDIT NEEDED",
          des1: "No Annual Fee & a Low Regular APR",
          des2: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des3: "No rotating categories and no caps on cash back",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //13
        {
          img: disney_reward_visa,
          heding: "Disney® Visa® Credit Card",
          subHeading:
            "Earn 1% in Disney Rewards Dollars on all card purchases. There are no limits to the number of Rewards Dollars you can earn.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "ANNUAL FEE",
          h3Name: "EXTRA BENEFITS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $150 Statement Credit after you spend $500 on purchases in the first 3 months from account opening.",
          des2: "$0",
          des3: "0% promo APR for 6 months on select Disney vacation packages from the date of purchase, after that a variable APR of 19.24% - 28.24%. Also get 10% off select merchandise purchases of $50 or more at select locations, select dining locations most days at the Disneyland® and Walt Disney World® Resorts, and on select purchases at DisneyStore.com",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //14
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
        //15
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
      ],
    },
    {
      cardArray: [
        //1
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
        //2
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
        //3
        {
          img: savorone_student_cash_rewards,
          heding: "Capital One SavorOne Student Cash Rewards Credit Card",
          subHeading:
            "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "NO ROTATING CATEGORIES",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          des2: "No rotating categories or sign-ups needed to earn cash rewards; plus, cash back won't expire for the life of the account and there's no limit to how much you can earn",
          des3: "19.99% - 29.99% (Variable)",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //4
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
        //5
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
        //6
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
        //7
        {
          img: cred5,
          heding: "Capital One Quicksilver Student Cash Rewards Credit Card",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "NO ROTATING CATEGORIES",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des2: "No rotating categories or sign-ups needed to earn cash rewards; plus, cash back won't expire for the life of the account and there's no limit to how much you can earn",
          des3: "19.99% - 29.99% (Variable)",
          des4: "Limited/Fair",
          to: "/form-personal-loan",
        },
        //8
        {
          img: first_card_credit_builder,
          heding:
            "Firstcard® Credit Builder Card with Cashback for College Students",
          subHeading:
            "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          button: "Apply Now",
          h1Name: "RATES & FEES",
          h2Name: "BUILD CREDIT & SAVINGS",
          h3Name: "REWARDS",
          h4Name: "CREDIT NEEDED",
          des1: "0% APR on purchases and no annual fee, late fees, overdraft fees, or foreign exchange fees",
          des2: "When you use your Firstcard for purchases and make timely payments, this responsible repayment behavior is reported to major credit bureaus and can have a positive impact on your credit score over time. Additionally, earn 1.25% APY on the money in your Firstcard",
          des3: "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          des4: "Limited",
          to: "/form-personal-loan",
        },
      ],
    },
    //  Business

    {
      cardArray: [
        //1
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
          des4: "Good/Needed",
          to: "/form-personal-loan",
        },
        //2
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
        //3
        {
          img: ink_business_preferred_default,
          heding: "Ink Business Preferred® Credit Card",
          subHeading:
            "Earn 3 points per $1 on the first $150,000 spent in combined purchases on travel, shipping purchases, Internet, cable and phone services, advertising purchases made with social media sites and search engines each account anniversary year. Earn 1 point per $1 on all other purchases—with no limit to the amount you can earn.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "BONUS PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 100,000 bonus points after you spend $8,000 on purchases in the first 3 months from account opening.",
          des2: "Earn 3 points per $1 on the first $150,000 spent in combined purchases on travel, shipping purchases, Internet, cable and phone services, advertising purchases made with social media sites and search engines each account anniversary year. Earn 1 point per $1 on all other purchases—with no limit to the amount you can earn.",
          des3: "Points are worth 25% more when you redeem for travel through Chase Travel℠",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //4
        {
          img: ink_business_premier,
          heding: "Ink Business Premier® Credit Card",
          subHeading:
            "Earn unlimited 2.5% total cash back on purchases of $5,000 or more and unlimited 2% cash back on all other business purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "TRAVEL BENEFITS",
          h3Name: "FOREIGN TRANSACTION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "Earn $1,000 bonus cash back after you spend $10,000 on purchases in the first 3 months from account opening.",
          des2: "Unlimited 5% total cash back on travel purchased through Chase Travel℠, No Foreign Transaction Fees and Trip Cancellation/Trip Interruption Insurance.",
          des3: "$0",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //5
        {
          img: revenued_business_default,
          heding: "Revenued Business Card",
          subHeading: "N/A",
          button: "Apply Now",
          h1Name: "FLEX LINE",
          h2Name: "REWARDS RATE",
          h3Name: "NO FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Includes flex line, similar to a line of credit and only pay for what you use",
          des2: "N/A",
          des3: "No application, annual or draw fees",
          des4: "Limited/Poor/Fair/Good",
          to: "/form-personal-loan",
        },
        //6
        {
          img: capital_one_spark_cash_select_default,
          heding: "Capital One Spark Cash Select for Excellent Credit",
          subHeading:
            "1.5% Cash Back on every purchase; 5% Cash Back on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% Cash Back on every purchase; 5% Cash Back on hotels and rental cars booked through Capital One Travel",
          des2: "$750 Cash Back once you spend $6,000 on purchases within the first 3 months from account opening",
          des3: "18.49% - 24.49% (Variable) on purchases and balance transfers",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
      ],
    },

    // Secured

    {
      cardArray: [
        //1
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
        //2
        {
          img: opensky_plus_secured_default,
          heding: "OpenSky® Plus Secured Visa® Credit Card",
          subHeading:
            "Up to 10% cash back* rewards on purchases at over 40,000 retailers",
          button: "Apply Now",
          h1Name: "REBUILD CREDIT",
          h2Name: "SECURITY DEPOSIT",
          h3Name: "FLEXIBLE DUE DATES",
          h4Name: "CREDIT NEEDED",
          des1: "2/3 of cardholders increase their credit score by an average of 41 points in just 3 months",
          des2: "Make smaller partial payments towards funding your security deposit over 60 days",
          des3: "Choose any available due date that fits your payment schedule",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //3
        {
          img: first_latitude_default,
          heding: "First Latitude Select Mastercard® Secured Credit Card",
          subHeading: "1% Cash Back on payments",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "PURCHASE APR",
          h3Name: "CREDIT BUILDING",
          h4Name: "CREDIT NEEDED",
          des1: "1% Cash Back on payments",
          des2: "19.24% (V)",
          des3: "Reports to all 3 major credit bureaus",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //4
        {
          img: first_progress_default,
          heding:
            "First Progress Platinum Prestige Mastercard® Secured Credit Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "IMPROVE YOUR CREDIT SCORE",
          h2Name: "CREDIT LINE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Free Credit Bureau Reporting",
          des2: "$200 - $2,000 Credit Line*",
          des3: "15.24% (Variable)",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //5
        {
          img: cred5,
          heding: "Capital One Quicksilver Secured Cash Rewards Credit Card",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CREDIT LINE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des2: "Put down a refundable $200 security deposit to get a $200 initial credit line.",
          des3: "29.99% (Variable)",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //6
        {
          img: first_progress_platinum_select_mastercard,
          heding:
            "First Progress Platinum Select Mastercard® Secured Credit Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "IMPROVE YOUR CREDIT SCORE",
          h2Name: "CREDIT LINE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Free Credit Bureau Reporting",
          des2: "$200 - $2,000 Credit Line",
          des3: "19.24% (Variable)",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //7
        {
          img: merrick_secured_default,
          heding: "Merrick Bank Secured Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "CREDIT LINE",
          h2Name: "FRAUD LIABILITY",
          h3Name: "WORLDWIDE ACCEPTANCE",
          h4Name: "CREDIT NEEDED",
          des1: "Upon approval, you’ll have an initial credit line based on your $200 -$3,000 deposit - It’s up to you!",
          des2: "$0 fraud liability for unauthorized charges.",
          des3: "Use it anywhere Mastercard is accepted.",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //8
        {
          img: first_progress_platinum_elite_mastercard,
          heding:
            "First Progress Platinum Elite Mastercard® Secured Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "IMPROVE YOUR CREDIT SCORE",
          h2Name: "CREDIT LINE",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Free Credit Bureau Reporting",
          des2: "$200 - $2,000 Credit Line*",
          des3: "25.24% (Variable)",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //9
        {
          img: applied_bank_secured_visa_default,
          heding: "Applied Bank® Secured Visa® Gold Preferred® Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "REPORTS TO CREDIT BUREAUS",
          h2Name: "REGULAR APR",
          h3Name: "NO PENALTY RATE",
          h4Name: "CREDIT NEEDED",
          des1: "Build Credit When Used Responsibly",
          des2: "9.99% Low Fixed APR",
          des3: "Your Rate Won’t Go Up Even if You Are Late",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        }, //10
        {
          img: opensky_secured_visa_default,
          heding: "OpenSky® Secured Visa® Credit Card",
          subHeading: "Earn up to 10% cash back* on everyday purchases",
          button: "Apply Now",
          h1Name: "PURCHASE APR",
          h2Name: "BUILD CREDIT",
          h3Name: "FLEXIBLE DUE DATE",
          h4Name: "CREDIT NEEDED",
          des1: "25.64% (variable)",
          des2: "Build credit quickly. OpenSky reports to all 3 major credit bureaus.",
          des3: "Choose the due date that fits your schedule with flexible payment dates",
          des4: "Poor",
          to: "/form-personal-loan",
        },
        //11
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
      ],
    },

    // No Foreign fees
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
        //3
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
        //4
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
        //5
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
        //6
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "RATES & FEES",
          h2Name: "FOREIGN TRANSACTION FEE",
          h3Name: "SIGN-UP BONUS",
          h4Name: "CREDIT NEEDED",
          des1: "No Foreign Fees, No Annual Fee, & No Rewards Cap",
          des2: "None",
          des3: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: cred2,
          heding: "Chase Sapphire Preferred® Card",
          subHeading:
            "Enjoy beneﬁts such as 5x on travel purchased through Chase Travel℠, 3x on dining, select streaming services and online groceries, 2x on all other travel purchases, 1x on all other purchases, $50 Annual Chase Travel Hotel Credit, plus more.",
          button: "Apply Now",
          h1Name: "RATES AND FEES",
          h2Name: "SIGN-UP BONUS",
          h3Name: "BONUS PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "3X points on dining & no foreign transaction fees",
          des2: "Earn 75,000 bonus points after you spend $4,000 on purchases in the first 3 months from account opening. That's over $900 when you redeem through Chase Travel℠.",
          des3: "Get 25% more value when you redeem for airfare, hotels, car rentals and cruises through Chase Travel℠. For example, 75,000 points are worth $900 toward travel.",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //8
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
        //9
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
        }, //10
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
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //11
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
        //12
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
        //13
        {
          img: first_card_credit_builder,
          heding:
            "Firstcard® Credit Builder Card with Cashback for College Students",
          subHeading:
            "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          button: "Apply Now",
          h1Name: "RATES & FEES",
          h2Name: "BUILD CREDIT & SAVINGS",
          h3Name: "REWARDS",
          h4Name: "CREDIT NEEDED",
          des1: "0% APR on purchases and no annual fee, late fees, overdraft fees, or foreign exchange fees",
          des2: "When you use your Firstcard for purchases and make timely payments, this responsible repayment behavior is reported to major credit bureaus and can have a positive impact on your credit score over time. Additionally, earn 1.25% APY on the money in your Firstcard",
          des3: "Get up to 10% Random Cashback on all qualifying purchases. Earn up to 15% cashback across 29,000 select campus merchants. Earn an additional 1% Unlimited Cashback with Firstcard+ on all purchases on top of the two cashback offerings, and earn an additional 2% Cashback on Cafes and Restaurants through February 29, 2024.",
          des4: "Limited",
          to: "/form-personal-loan",
        },
        //14
        {
          img: hilton_honor_amex_default,
          heding: "Hilton Honors American Express Card",
          subHeading:
            "Earn 7X Hilton Honors Bonus Points for each dollar of eligible purchases charged directly with hotels and resorts within the Hilton portfolio, 5X Hilton Honors Bonus Points at U.S. restaurants, U.S. supermarkets, and U.S. gas stations AND 3X Hilton Honors Bonus Points for all other eligible purchases on your Card.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "RATES AND FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 70,000 Hilton Honors Bonus Points plus a Free Night Reward after you spend $2,000 in purchases on the Hilton Honors American Express Card in the first 6 months of Card Membership. Offer Ends 7/31/2024.",
          des2: "Up to 7X Hilton Bonus Points for each dollar of eligible purchases",
          des3: "No Foreign Transaction Fees. Enjoy international travel without additional fees on purchases made abroad",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //15
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
      ],
    },

    // Gas

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
        //3
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
        //4
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
        //5
        {
          img: blue_cash_everyday,
          heding: "Blue Cash Everyday® Card from American Express",
          subHeading:
            "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%. 3% Cash Back on U.S. online retail purchases, on up to $6,000 per year, then 1%. 3% Cash Back at U.S. gas stations, on up to $6,000 per year in purchases, then 1%. 1% cash back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "GAS REWARDS",
          h2Name: "STREAMING BENEFITS",
          h3Name: "BONUS CASH BACK",
          h4Name: "CREDIT NEEDED",
          des1: "3% Cash Back at U.S. gas stations on up to $6,000 per year in purchases, then 1%.",
          des2: "Thinking about getting the Disney Bundle which can include Disney+, Hulu, and ESPN+? Your decision made easy with $7/month back in the form of a statement credit after you spend $9.99 or more each month on an eligible subscription (subject to auto renewal) with your Blue Cash Everyday® Card. Enrollment required.",
          des3: "3% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases, then 1%.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //6
        {
          img: cred11,
          heding: "Blue Cash Preferred® Card from American Express",
          subHeading:
            "Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses and more), 1% Cash Back on other purchases. Terms apply.",
          button: "Apply Now",
          h1Name: "GAS REWARDS",
          h2Name: "BUY NOW, PAY LATER INTRO OFFER",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "3% Cash Back at US gas stations",
          des2: "Buy Now, Pay Later: Enjoy $0 intro plan fees when you use Plan It® to split up large purchases into monthly installments. Pay $0 intro plan fees on plans created during the first 12 months from the date of account opening. Plans created after that will have a monthly plan fee up to 1.33% of each eligible purchase amount moved into a plan based on the plan duration, the APR that would otherwise apply to the purchase, and other factors.",
          des3: "Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses and more), 1% Cash Back on other purchases. Terms apply.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //7
        {
          img: double_cash_default,
          heding: "Citi Double Cash® Card",
          subHeading:
            "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CASH BACK DETAILS",
          h3Name: "REDEEM CASH BACK",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 2% on every purchase with unlimited 1% cash back when you buy, plus an additional 1% as you pay for those purchases. To earn cash back, pay at least the minimum due on time. Plus, for a limited time, earn 5% total cash back on hotel, car rentals and attractions booked on the Citi Travel℠ portal through 12/31/24.",
          des2: "No rotating categories and no caps on cash back",
          des3: "Receive a Check, Statement Credit, or Direct Deposit",
          des4: "Fair/Good/Excellent",
          to: "/form-personal-loan",
        },
        //8
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
        //9
        {
          img: att_point_plus_default,
          heding: "AT&T Points Plus® Card from Citi",
          subHeading:
            "Earn 3 ThankYou® Points per $1 spent at Gas Stations. Earn 2 ThankYou® Points per $1 spent at Grocery Stores. Earn 1 ThankYou® Point per $1 spent on all other purchases. Earn up to an additional $240 back toward your qualifying AT&T Wireless bills every year after eligible spend.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Earn a $100 Statement Credit after spending $1,000 in eligible purchases in the first 3 months of account opening.",
          des2: "Earn 3 ThankYou® Points per $1 spent at Gas Stations. Earn 2 ThankYou® Points per $1 spent at Grocery Stores. Earn 1 ThankYou® Point per $1 spent on all other purchases. Earn up to an additional $240 back toward your qualifying AT&T Wireless bills every year after eligible spend.",
          des3: "21.24% - 29.24% (Variable)",
          des4: "Good",
          to: "/form-personal-loan",
        }, //10
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
        //11
        {
          img: cred14,
          heding: "Bank of America® Customized Cash Rewards credit card",
          subHeading:
            "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "REWARDS TERMS",
          h3Name: "CASH REWARDS",
          h4Name: "CREDIT NEEDED",
          des1: "3% cash back in the category of your choice. 2% cash back at grocery stores and wholesale clubs for the first $2,500 in combined choice category/grocery store/wholesale club quarterly purchases. 1% cash back on all other purchases.",
          des2: "You can update your choice category for future purchases once each calendar month using the Mobile Banking app or Online Banking, or do nothing and it stays the same.",
          des3: "$200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },

    // Military
    {
      cardArray: [
        //1
        {
          img: USSA_rate_advantage,
          heding: "USAA Rate Advantage Credit Card",
          subHeading: "N/A",
          button: "Apply Now",
          h1Name: "INTRO BT APR",
          h2Name: "ELIGIBILITY",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "0% intro APR for 15 months on balance transfers, then 12.15% to 27.15% variable regular APR",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "$0 annual fee, no penalty APR & no foreign transaction fee",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //2
        {
          img: USSA_preferred_cash_rewards_default,
          heding: "USAA Preferred Cash Rewards Credit Card",
          subHeading: "1.5% cash back on purchases",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "ELIGIBILITY",
          h3Name: "INTRO APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% cash back on purchases",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "0% intro APR on purchases for 15 months, then 17.15% - 31.15% variable regular APR",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
        {
          img: ussa_eagle_navigator_visa,
          heding: "USAA Eagle Navigator™ Credit Card",
          subHeading:
            "3X points on travel purchases, 2X points on everyday purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "ELIGIBILITY",
          h3Name: "REGULAR APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 30,000 bonus points ($300 travel value) after spending $3,000 on qualifying purchases within 90 days of account opening.",
          des2: "Must be a USAA member, or become a member, to apply.",
          des3: "20.15% to 28.40% variable on purchases, balance transfers, and cash advances",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
      ],
    },

    // Airline

    {
      cardArray: [
        //1
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
        //2
        {
          img: cred13,
          heding: "Bank of America® Travel Rewards credit card",
          subHeading: "1.5 points per $1 spent on all purchases.",
          button: "Apply Now",
          h1Name: "FOREIGN TRANSACTION FEE",
          h2Name: "SIGN-UP BONUS",
          h3Name: "FLEXIBLE REDEMPTION",
          h4Name: "CREDIT NEEDED",
          des1: "None",
          des2: "25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel purchases",
          des3: "Redeem points for a statement credit to pay for flights on any airline",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //3
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
        //4
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
        //5
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
        //6
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
        //7
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
        //8
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
        //9
        {
          img: venture_x_default,
          heding: "Capital One Venture X Rewards Credit Card",
          subHeading:
            "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "APRS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 75,000 bonus miles when you spend $4,000 on purchases in the first 3 months from account opening, equal to $750 in travel",
          des2: "2 Miles per dollar on every purchase, every day; 10 Miles per dollar on hotels and rental cars booked through Capital One Travel; 5 Miles per dollar on flights booked through Capital One Travel",
          des3: "19.99% - 29.99% (Variable) for purchases and balance transfers",
          des4: "Excellent",
          to: "/form-personal-loan",
        }, //10
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
        //11
        {
          img: aadvantage_default,
          heding:
            "Citi® / AAdvantage® Platinum Select® World Elite Mastercard®",
          subHeading:
            "Earn 2 AAdvantage® miles for every $1 spent at gas stations and restaurants, and on eligible American Airlines purchases. Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases.",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "BONUS REWARDS",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 50,000 American Airlines AAdvantage® bonus miles after spending $2,500 in purchases within the first 3 months of account opening",
          des2: "First checked bag free on domestic itineraries & preferred boarding on American Airlines itineraries and flights",
          des3: "Earn 2 AAdvantage® miles for every $1 spent at gas stations and restaurants, and on eligible American Airlines purchases. Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //12
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
        //13
        {
          img: aadvantage_business_world_elite_stage,
          heding: "Citi® / AAdvantage Business™ World Elite Mastercard®",
          subHeading:
            "Earn 2 AAdvantage® miles per $1 spent on eligible American Airlines purchases, and on purchases at telecommunications merchants, cable and satellite providers, car rental merchants and at gas stations. Earn 1 AAdvantage® mile per $1 spent on other purchases. Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases",
          button: "Apply Now",
          h1Name: "PURCHASE APR",
          h2Name: "SIGN-UP BONUS",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "21.24% - 29.99% (Variable)",
          des2: "For a limited time, earn 75,000 American Airlines AAdvantage® bonus miles after $5,000 in purchases within the first 5 months of account opening",
          des3: "Preferred boarding and 25% savings on American Airlines inflight Wi-Fi, and no foreign transaction fees",
          des4: "Excellent",
          to: "/form-personal-loan",
        },
        //14
        {
          img: delta_reserve_default,
          heding: "Delta SkyMiles® Reserve American Express Card",
          subHeading:
            "Earn 3X Miles on Delta purchases. Earn 1X Mile on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "WELCOME OFFER",
          h2Name: "REWARDS RATE",
          h3Name: "EXTRA PERKS",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 60,000 Bonus Miles after you spend $5,000 in purchases on your new Card in your first 6 months of Card Membership.",
          des2: "Earn 3X Miles on Delta purchases. Earn 1X Mile on all other eligible purchases.",
          des3: "Receive a Companion Certificate on First Class, Delta Comfort+®, or Main Cabin domestic, Caribbean, or Central American roundtrip flights each year after renewal of your Card.",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //15
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
        //16
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
        //17
        {
          img: citi_advantage_executive_default,
          heding: "Citi® / AAdvantage® Executive World Elite Mastercard®",
          subHeading:
            "Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases",
          button: "Apply Now",
          h1Name: "SIGN-UP BONUS",
          h2Name: "REWARDS RATE",
          h3Name: "RATES & FEES",
          h4Name: "CREDIT NEEDED",
          des1: "Earn 70,000 American Airlines AAdvantage® bonus miles after spending $7,000 within the first 3 months of account opening.",
          des2: "Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases",
          des3: "No Foreign Transaction Fees on purchases",
          des4: "Good/Excellent",
          to: "/form-personal-loan",
        },
        //18
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
      ],
    },
  ];

  return (
    <>
      <Container>
        <Box
          sx={{
            display: { xs: "", sm: "block", paddingTop: "30px" },
          }}
        >
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
                // sx={{ marginLeft: "20px" }}
              >
                {/* //0 */}
                <Tab
                  icon={<LazyImage src={icon1} alt="" />}
                  label="Top Credit Cards"
                  style={{
                    backgroundColor: value === 0 ? "#08c177" : "",
                    color: value === 0 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //1 */}
                <Tab
                  icon={<LazyImage src={icon2} alt="" />}
                  label="LowInterest"
                  style={{
                    backgroundColor: value === 1 ? "#08c177" : "",
                    color: value === 1 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //2 */}
                <Tab
                  icon={<LazyImage src={icon3} alt="" />}
                  label="Balence Transfer"
                  style={{
                    backgroundColor: value === 2 ? "#08c177" : "",
                    color: value === 2 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //3 */}
                <Tab
                  icon={<LazyImage src={icon4} alt="" />}
                  label="Travel"
                  style={{
                    backgroundColor: value === 3 ? "#08c177" : "",
                    color: value === 3 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //4 */}
                <Tab
                  icon={<LazyImage src={icon5} alt="" />}
                  label="Cash Back"
                  style={{
                    backgroundColor: value === 4 ? "#08c177" : "",
                    color: value === 4 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //5 */}
                <Tab
                  icon={<LazyImage src={icon6} alt="" />}
                  label="Rewards"
                  style={{
                    backgroundColor: value === 5 ? "#08c177" : "",
                    color: value === 5 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //6 */}
                <Tab
                  icon={<LazyImage src={icon7} alt="" />}
                  label="No Annual Fee"
                  style={{
                    backgroundColor: value === 6 ? "#08c177" : "",
                    color: value === 6 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //7 */}
                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SchoolIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Student"
                  style={{
                    backgroundColor: value === 7 ? "#08c177" : "",
                    color: value === 7 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //8 */}

                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocalMallIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Business"
                  style={{
                    backgroundColor: value === 8 ? "#08c177" : "",
                    color: value === 8 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //9 */}
                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LockIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Securd"
                  style={{
                    backgroundColor: value === 9 ? "#08c177" : "",
                    color: value === 9 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //10 */}
                <Tab
                  icon={<LazyImage src={icon11} alt="" />}
                  label="No Foreign Fee"
                  style={{
                    backgroundColor: value === 10 ? "#08c177" : "",
                    color: value === 10 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //11 */}
                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocalGasStationIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Gas"
                  style={{
                    backgroundColor: value === 11 ? "#08c177" : "",
                    color: value === 11 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //12 */}
                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MilitaryTechIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Military"
                  style={{
                    backgroundColor: value === 12 ? "#08c177" : "",
                    color: value === 12 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //13 */}
                <Tab
                  icon={
                    <Box
                      sx={{
                        backgroundColor: "#ecfbf5",
                        color: "#08c177",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocalAirportIcon style={{ fontSize: "32px" }} />
                    </Box>
                  }
                  label="Airline"
                  style={{
                    backgroundColor: value === 13 ? "#08c177" : "",
                    color: value === 13 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                {/* //14 */}
                {/* <Tab
                  icon={<LazyImage  src={icon14} alt="" />}
                  label="Balence Transfer"
                  style={{
                    backgroundColor: value === 14 ? "#08c177" : "",
                    color: value === 14 ? "#fff" : "#101f30",
                    width: "150px",
                    height: "85px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                /> */}
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
            <>
              {tabItems.map((item, index) => (
                <div key={index} hidden={value !== index}>
                  <Box>
                    <h1 className="page_heading">{item.main_headding}</h1>
                    <p className="main_para">{item.main_para}</p>
                  </Box>
                  {item.cardArray &&
                    item.cardArray.map((card, cardIndex) => (
                      <Box sx={{ padding: "20px 0px" }}>
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
                                <LazyImage
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
            </>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default BestCreditCard;
