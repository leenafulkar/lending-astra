import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
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
import tabimg1 from "../../../../assets/personal-loan-bullseye.webp";
import tabimg2 from "../../../../assets/home-equity-bullseye.webp";
import tabimg3 from "../../../../assets/home-purchase-bullseye.webp";

import cred1 from "../../../../assets/CreditCardTab/active-cash_default_All_main.jpg";
import cred2 from "../../../../assets/CreditCardTab/chase-sapphire-preferred_default_All_main.jpg";
import cred3 from "../../../../assets/CreditCardTab/discover-it_default_main.jpg";
import cred4 from "../../../../assets/CreditCardTab/venture-rewards_default_main.jpg";
import cred5 from "../../../../assets/CreditCardTab/quicksilver-rewards-excellent_default_main.jpg";
import cred6 from "../../../../assets/CreditCardTab/discover-it-miles_default_main.jpg";
import cred7 from "../../../../assets/CreditCardTab/citi-rewards-plus_default_All_main.jpg";
import cred8 from "../../../../assets/CreditCardTab/blue-cash-everyday-sm-card-from-american-express_default_main.jpg";
import cred9 from "../../../../assets/CreditCardTab/ventureone-rewards_default_main.jpg";
import cred10 from "../../../../assets/CreditCardTab/wells-fargo-autograph_default_All_main.jpg";
import cred11 from "../../../../assets/CreditCardTab/blue-cash-preferred_default_main.jpg";
import cred12 from "../../../../assets/CreditCardTab/unlimited-cash-rewards_default_main.jpg";
import cred13 from "../../../../assets/CreditCardTab/bank-of-america-travel-rewards_default_main.jpg";
import cred14 from "../../../../assets/CreditCardTab/bank-of-america-cash_default_main.jpg";
import cred15 from "../../../../assets/CreditCardTab/venture-x_default_main.jpg";
import { Link } from "react-router-dom";
const CreditCardTab = () => {
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
    {
      cardArray: [
        //1
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

    //3

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
      ],
    },
  ];

  return (
    <>
      <Container>
        <Box sx={{ display: { xs: "", sm: "block" } }}>
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
                  // icon={<CurrencyRupeeIcon />}
                  label="BEST CARDS BY CATEGORY"
                  style={{
                    backgroundColor: value === 0 ? "#08c177" : "",
                    color: value === 0 ? "#fff" : "#101f30",
                    width: "100%",
                    height: "55px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  // icon={<HomeIcon />}
                  label="BEST CARDS BY ISSUER"
                  style={{
                    backgroundColor: value === 1 ? "#08c177" : "",
                    color: value === 1 ? "#fff" : "#101f30",
                    width: "100%",
                    height: "55px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "0.3px",
                  }}
                />
                <Tab
                  // icon={<HouseIcon />}
                  label="BEST CARDS BY CREDIT QUALITY"
                  style={{
                    backgroundColor: value === 2 ? "#08c177" : "",
                    color: value === 2 ? "#fff" : "#101f30",
                    width: "100%",
                    height: "55px",
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
                          <Grid item xs={12} sm={12} lg={5}>
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
                          <Grid item xs={12} sm={12} lg={4}>
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
                          <Grid item xs={6} lg={3}>
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

                          <Grid item xs={6} lg={3}>
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
                          <Grid item xs={6} lg={3}>
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
                          <Grid item xs={6} lg={3}>
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

export default CreditCardTab;
