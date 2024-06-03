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

import tabimg1 from "../../../../../assets/qulityIcon/credit-excellent-greybg.svg";
import tabimg2 from "../../../../../assets/qulityIcon/credit-good-greybg.svg";
import tabimg3 from "../../../../../assets/qulityIcon/credit-fair-greybg.svg";
import tabimg4 from "../../../../../assets/qulityIcon/credit-poor-greybg.svg";
import tabimg5 from "../../../../../assets/qulityIcon/credit-limited-greybg.svg";

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

import citi_custom_cash_default from "../../../../../assets/CreditCardTab/citi-custom-cash_default_All_main.jpg";
import venture_one from "../../../../../assets/CreditCardTab/ventureone-rewards_default_main (1).jpg";
import blue_cash_everyday from "../../../../../assets/CreditCardTab/blue-cash-everyday-sm-card-from-american-express_default_main (1).jpg";
import citi_strata_premier from "../../../../../assets/CreditCardTab/citi-strata-premier_default_All_main.jpg";
import double_cash_default from "../../../../../assets/CreditCardTab/double-cash_default_All_main.jpg";
import alaska_airlines from "../../../../../assets/CreditCardTab/alaska-airlines_default_main.jpg";
import citi_rewards_plus from "../../../../../assets/CreditCardTab/citi-rewards-plus_default_All_main (1).jpg";
import discover_it_chrome from "../../../../../assets/CreditCardTab/discover-it-chrome-card_default_main.jpg";
import disney_reward_visa from "../../../../../assets/CreditCardTab/disney-rewards-visa-credit-card_default_main.jpg";
import bank_of_america_premier_rewards from "../../../../../assets/CreditCardTab/bank-of-america-premium-rewards_default_main.jpg";
import chase_freedom_rise from "../../../../../assets/CreditCardTab/chase-freedom-rise-credit-card_default_All_main.jpg";
import savorone_card_default from "../../../../../assets/CreditCardTab/savorone-card_default_main.jpg";
import disney_premier_visa_credit_card from "../../../../../assets/CreditCardTab/disney-premier-visa-credit-card_default_All_main.jpg";
import wells_fargo_reflect from "../../../../../assets/CreditCardTab/wells-fargo-reflect_default_All_main.jpg";
import venture_x_default from "../../../../../assets/CreditCardTab/venture-x_default_main (1).jpg";
import upgrade_triple_cash_default from "../../../../../assets/CreditCardTab/upgrade-triple-cash_default_All_main.jpg";
import att_point_plus_default from "../../../../../assets/CreditCardTab/att-points-plus_default_All_main.jpg";
import milestone_gold_mastercard_default from "../../../../../assets/CreditCardTab/milestone-gold-mastercard_default_All_main.jpg";
import standard_platinum_default from "../../../../../assets/CreditCardTab/standard-platinum_default_main.jpg";
import avantcard_default from "../../../../../assets/CreditCardTab/avantcard_default_All_main.jpg";
import upgrade_default from "../../../../../assets/CreditCardTab/upgrade_default_All_main.jpg";
import first_access_visa_card_default from "../../../../../assets/CreditCardTab/first-access-visa-card_default_All_main.jpg";
import premier_default from "../../../../../assets/CreditCardTab/premier_default_All_main.jpg";
import credit_one_bank_platinum_default from "../../../../../assets/CreditCardTab/credit-one-bank-platinum_default_main.jpg";
import fortiva_credit_card_default from "../../../../../assets/CreditCardTab/fortiva-credit-card_default_All_main.jpg";
import ravvi_card_default from "../../../../../assets/CreditCardTab/revvi-card_default_All_main.jpg";
import premier_bank_default from "../../../../../assets/CreditCardTab/premier-bank_default_All_main.jpg";
import aspire_cash_back_rewards_default from "../../../../../assets/CreditCardTab/aspire-cash-back-reward_default_All_main.jpg";
import destiny_default from "../../../../../assets/CreditCardTab/destiny_default_All_main.jpg";
import plat_rewards_defaults from "../../../../../assets/CreditCardTab/plat-rewards_default_main.jpg";
import blaze_default from "../../../../../assets/CreditCardTab/blaze_default_All_main.jpg";
import indigo_platinum_stage from "../../../../../assets/CreditCardTab/indigo-platinum_stage_All_main.jpg";
import capital_one_secured_default from "../../../../../assets/CreditCardTab/capital-one-secured_default_main.jpg";
import total_visa_default from "../../../../../assets/CreditCardTab/total-visa_default_All_main.jpg";
import first_digital_default from "../../../../../assets/CreditCardTab/first-digital_default_main.jpg";
import surge_mastercard_default from "../../../../../assets/CreditCardTab/surge-mastercard_default_All_main.jpg";
import fit_default from "../../../../../assets/CreditCardTab/fit_default_All_main.jpg";
import reflex_default from "../../../../../assets/CreditCardTab/reflex_default_main.jpg";
import chime_credit_builder_default from "../../../../../assets/CreditCardTab/chime-credit-builder_default_All_main.jpg";
import opensky_plus_secured from "../../../../../assets/CreditCardTab/opensky-plus-secured_default_main.jpg";
import first_latitude_default from "../../../../../assets/CreditCardTab/first-latitude_default_All_main.jpg";
import first_progress_default from "../../../../../assets/CreditCardTab/first-progress_default_main.jpg";
import first_progress_platinum_select_mastercard from "../../../../../assets/CreditCardTab/first-progress-platinum-select-mastercard_default_main.jpg";
import merrick_secured_default from "../../../../../assets/CreditCardTab/merrick-secured_default_main.jpg";
import first_progress_platinum_elite_mastercard from "../../../../../assets/CreditCardTab/first-progress-platinum-elite-mastercard_default_main.jpg";
import credit_one_rebuilding_credit_default from "../../../../../assets/CreditCardTab/credit-one-rebuilding-credit_default_main.jpg";
import first_card_credit_builder from "../../../../../assets/CreditCardTab/firstcard_stage_All_main.jpg";

import { Link } from "react-router-dom";
const BestCardsByCreditQuality = () => {
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
    // Excellent

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
        //7
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
        //8
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
        //9
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
        }, //10
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
        //11
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
        //12
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
        //13
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
        //14
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
        //15
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
        //16
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
        //17
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
        //18
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
        //19
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
        //20
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
        //21
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
        //22
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
        //23
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

    //  Good
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
        //3
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
        //4
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
        //5
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
        //6
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
          img: upgrade_triple_cash_default,
          heding: "Upgrade Triple Cash Rewards Visa®",
          subHeading:
            "Unlimited cash back on payments - 3% on Home, Auto and Health categories and 1% on everything else",
          button: "Apply Now",
          h1Name: "REGULAR PURCHASE APR",
          h2Name: "ANNUAL FEE",
          h3Name: "REWARDS RATE",
          h4Name: "CREDIT NEEDED",
          des1: "14.99% - 29.99% APR",
          des2: "$0",
          des3: "Unlimited cash back on payments - 3% on Home, Auto and Health categories and 1% on everything else",
          des4: "Fair/Good",
          to: "/form-personal-loan",
        },
        //9
        {
          img: cred5,
          heding: "Capital One Quicksilver Cash Rewards for Good Credit",
          subHeading:
            "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CASH BACK DETAILS",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.5% Cash Back on every purchase, every day; 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply)",
          des2: "No rotating categories or sign-ups needed to earn cash rewards",
          des3: "29.99% (Variable) on purchases and balance transfers",
          des4: "Good",
          to: "/form-personal-loan",
        },
        //10
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
        //11
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
        },
        //12
        {
          img: venture_one,
          heding: "Capital One VentureOne Rewards for Good Credit",
          subHeading:
            "1.25 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "FLEXIBLE REDEMPTION",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "1.25 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel",
          des2: "Travel when you want with no blackout dates and fly any airline, stay at any hotel, anytime",
          des3: "29.99% (Variable) on purchases and balance transfers",
          des4: "Good",
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
          img: savorone_card_default,
          heding: "Capital One SavorOne Cash Rewards for Good Credit",
          subHeading:
            "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "CASH BACK DETAILS",
          h3Name: "APR",
          h4Name: "CREDIT NEEDED",
          des1: "3% Cash Back on dining, entertainment, popular streaming services and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases",
          des2: "No rotating categories or sign-ups needed to earn cash rewards",
          des3: "29.99% (Variable) on purchases and balance transfers",
          des4: "Good",
          to: "/form-personal-loan",
        },
      ],
    },
    // Fair
    {
      cardArray: [
        //1
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
        //4
        {
          img: milestone_gold_mastercard_default,
          heding: "Milestone Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "MASTERCARD BENEFITS",
          h2Name: "MOBILE ACCESS",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "Accepted Worldwide and $0 Fraud Liability",
          des2: "Access your account online or from your mobile device 24/7",
          des3: "Account history is reported to the three major credit bureaus in the U.S.",
          des4: "Fair/Good",
          to: "/form-personal-loan",
        },
        //5
        {
          img: standard_platinum_default,
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
        //6
        {
          img: avantcard_default,
          heding: "AvantCard Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "APPLY ONLINE",
          h2Name: "NO HIDDEN FEES",
          h3Name: "REGULAR APR",
          h4Name: "CREDIT NEEDED",
          des1: "Fast and easy application process",
          des2: "No deposit required and no penalty APR",
          des3: "35.99%",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //7
        {
          img: upgrade_default,
          heding: "Upgrade Cash Rewards Visa®",
          subHeading:
            "1.5% unlimited cash back on card purchases every time you make a payment",
          button: "Apply Now",
          h1Name: "CREDIT LINE",
          h2Name: "REWARDS RATE",
          h3Name: "ANNUAL FEE",
          h4Name: "CREDIT NEEDED",
          des1: "Up to $20,000*",
          des2: "1.5% unlimited cash back on card purchases every time you make a payment",
          des3: "$0",
          des4: "Fair",
          to: "/form-personal-loan",
        },
        //8
        {
          img: first_access_visa_card_default,
          heding: "First Access VISA® Credit Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "GET APPROVED FAST",
          h2Name: "REWARDS RATE",
          h3Name: "ONGOING PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Quick and Easy Secure Online Application",
          des2: "1% Cash Back",
          des3: "35.99%*",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //9
        {
          img: premier_default,
          heding: "PREMIER Bankcard® Grey Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "BUILD CREDIT",
          h2Name: "FAST APPLICATION",
          h3Name: "ONLINE ACCOUNT ACCESS",
          h4Name: "CREDIT NEEDED",
          des1: "Start building credit by keeping your balance low and paying all your bills on time each month.",
          des2: "Fill out an application and receive a response in 60 seconds!",
          des3: "A full-service website means PREMIER Bankcard® customers enjoy 24-hour access to easily manage personal account needs.",
          des4: "Poor",
          to: "/form-personal-loan",
        },
        //10
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
        //11
        {
          img: fortiva_credit_card_default,
          heding: "Fortiva® MasterCard® Credit Card",
          subHeading:
            "Up to 3% Cash Back Rewards; 3% Cash Back Reward on Gas, Groceries and Utility Bill Payments. 1% Cash Back Reward on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "SECURITY DEPOSIT",
          h2Name: "REWARDS RATE",
          h3Name: "CREDIT LIMIT",
          h4Name: "CREDIT NEEDED",
          des1: "No security deposit",
          des2: "Up to 3% Cash Back Rewards; 3% Cash Back Reward on Gas, Groceries and Utility Bill Payments. 1% Cash Back Reward on all other eligible purchases.",
          des3: "Up to $1000 Credit Limit",
          des4: "Fair",
          to: "/form-personal-loan",
        },
        //12
        {
          img: ravvi_card_default,
          heding: "Revvi Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "MONTHLY FEE",
          h3Name: "ACTIVATION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "1% Cash Back",
          des2: "None 1st year, $8.25 after",
          des3: "$95*",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //13
        {
          img: premier_bank_default,
          heding: "PREMIER Bankcard® Mastercard® Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "AWARD-WINNING US-BASED CUSTOMER SERVICE",
          h2Name: "CREDIT LIMIT",
          h3Name: "ONLINE ACCOUNT ACCESS",
          h4Name: "CREDIT NEEDED",
          des1: "PREMIER's dedicated team of professionals are one phone call away and ready to help you",
          des2: "Credit Limit Increase Eligible after 12 months of consistent responsible account management.",
          des3: "A full-service website means PREMIER Bankcard® customers enjoy 24-hour access to easily manage personal account needs.",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //14
        {
          img: aspire_cash_back_rewards_default,
          heding: "Aspire® Cash Back Reward Card",
          subHeading:
            "Up to 3% Cash Back Rewards; 3% Cash Back Reward on Gas, Groceries and Utility Bill Payments. 1% Cash Back Reward on all other eligible purchases.",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "REGULAR APR",
          h3Name: "CREDIT LINE",
          h4Name: "CREDIT NEEDED",
          des1: "Up to 3% Cashback Reward",
          des2: "29.99% or 36% Fixed",
          des3: "Up to $1,000 credit limit subject to credit approval",
          des4: "Fair",
          to: "/form-personal-loan",
        },
        //15
        {
          img: destiny_default,
          heding: "Destiny Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "NO SECURITY DEPOSIT",
          h2Name: "EASY ACCESS",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "All the benefits of a Mastercard, without a security deposit",
          des2: "24/7 access to your account, even on mobile!",
          des3: "Reports to all three major credit bureaus",
          des4: "Limited/Poor/Fair/Good",
          to: "/form-personal-loan",
        },
        //16
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
          des2: "Automatically earn More Cash Back Rewards for using your Credit One Bank card at participating merchants, terms apply",
          des3: "With $0 Fraud Liability, you won’t be responsible for unauthorized charges",
          des4: "Good",
          to: "/form-personal-loan",
        },
        //17
        {
          img: blaze_default,
          heding: "Blaze Mastercard® Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "GET THE LINE YOU DESERVE",
          h2Name: "NO SURPRISES",
          h3Name: "SAFE & SECURE",
          h4Name: "CREDIT NEEDED",
          des1: "We automatically review your account for a Credit Line Increase after 6 months!",
          des2: "No monthly maintenance fees, No set up fees, No security deposit!",
          des3: "$0 fraud liability if your card is lost or stolen – our U.S. based Customer Care team is here for you.",
          des4: "Fair",
          to: "/form-personal-loan",
        },
        //18
        {
          img: indigo_platinum_stage,
          heding: "Indigo® Mastercard® for Less than Perfect Credit",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "FEES & DEPOSIT",
          h2Name: "CUSTOM CARD DESIGN",
          h3Name: "REPORTS TO CREDIT BUREAUS",
          h4Name: "CREDIT NEEDED",
          des1: "$175 - $199 annual fee, no security deposit required",
          des2: "Pick from multiple card designs at no extra charge*",
          des3: "Account history is reported to the three major credit bureaus in the U.S.",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
      ],
    },

    // Poor
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
          img: indigo_platinum_stage,
          heding: "Indigo® Mastercard® for Less than Perfect Credit",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "FEES & DEPOSIT",
          h2Name: "CUSTOM CARD DESIGN",
          h3Name: "REPORTS TO CREDIT BUREAUS",
          h4Name: "CREDIT NEEDED",
          des1: "$175 - $199 annual fee, no security deposit required",
          des2: "Pick from multiple card designs at no extra charge*",
          des3: "Account history is reported to the three major credit bureaus in the U.S.",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //3
        {
          img: avantcard_default,
          heding: "AvantCard Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "APPLY ONLINE",
          h2Name: "NO HIDDEN FEES",
          h3Name: "REGULAR APR",
          h4Name: "CREDIT NEEDED",
          des1: "Fast and easy application process",
          des2: "No deposit required and no penalty APR",
          des3: "35.99%",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //4
        {
          img: destiny_default,
          heding: "Destiny Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "NO SECURITY DEPOSIT",
          h2Name: "EASY ACCESS",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "All the benefits of a Mastercard, without a security deposit",
          des2: "24/7 access to your account, even on mobile!",
          des3: "Reports to all three major credit bureaus",
          des4: "Limited/Poor/Fair/Good",
          to: "/form-personal-loan",
        },
        //5
        {
          img: milestone_gold_mastercard_default,
          heding: "Milestone Mastercard®",
          subHeading: "Non-rewards Card",
          button: "Apply Now",
          h1Name: "MASTERCARD BENEFITS",
          h2Name: "MOBILE ACCESS",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "Accepted Worldwide and $0 Fraud Liability",
          des2: "Access your account online or from your mobile device 24/7",
          des3: "Account history is reported to the three major credit bureaus in the U.S.",
          des4: "Fair/Good",
          to: "/form-personal-loan",
        },
        //6
        {
          img: total_visa_default,
          heding: "Total VISA® Credit Card",
          subHeading:
            "Earn 1% cash back rewards on payments made to your Total Credit Card",
          button: "Apply Now",
          h1Name: "SAME DAY APPROVAL",
          h2Name: "BUILD YOUR CREDIT",
          h3Name: "REGULAR PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Get a Response in Seconds",
          des2: "Reports to all Three Major Credit Bureaus",
          des3: "35.99%",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //7
        {
          img: first_access_visa_card_default,
          heding: "First Access VISA® Credit Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "GET APPROVED FAST",
          h2Name: "REWARDS RATE",
          h3Name: "ONGOING PURCHASE APR",
          h4Name: "CREDIT NEEDED",
          des1: "Quick and Easy Secure Online Application",
          des2: "1% Cash Back",
          des3: "35.99%",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //8
        {
          img: first_digital_default,
          heding: "First Digital Mastercard®",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "WIDELY ACCEPTED",
          h2Name: "BUILD CREDIT",
          h3Name: "FAST APPLICATION AND DELIVERY",
          h4Name: "CREDIT NEEDED",
          des1: "Get the security and convenience of a full-feature, unsecured Mastercard® Credit Card – accepted at millions of merchant and ATM locations nationwide and online.",
          des2: "Build up your Credit with a card that reports to all three major credit bureaus every month.",
          des3: "Easy and secure online application – it just takes moments to apply. Receive your card more quickly with optional Expedited Processing (additional fee applies).",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //9
        {
          img: surge_mastercard_default,
          heding: "Surge® Platinum Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "BUILD CREDIT",
          h2Name: "WORLDWIDE USE",
          h3Name: "EASY APPLICATION PROCESS",
          h4Name: "CREDIT NEEDED",
          des1: "Monthly reporting to the three major credit bureaus",
          des2: "Use your card wherever Mastercard is accepted",
          des3: "Fast and easy application process; results in seconds. All credit types welcome to apply",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //10
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
        //11
        {
          img: fit_default,
          heding: "FIT™ Platinum Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "CREDIT LINE",
          h2Name: "EASY APPLICATION",
          h3Name: "BUILD CREDIT",
          h4Name: "CREDIT NEEDED",
          des1: "Initial Credit Limit of $400.00* (Subject to available credit)",
          des2: "Fast and easy application process; results in seconds. All credit types welcome to apply.",
          des3: "Free access to your Vantage 3.0 score from Experian* (When you sign up for e-statements). Monthly reporting to the three major credit bureaus.",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //12
        {
          img: reflex_default,
          heding: "Reflex® Platinum Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "EASY APPLICATION",
          h2Name: "BUILD CREDIT",
          h3Name: "PRE-QUALIFICATION",
          h4Name: "CREDIT NEEDED",
          des1: "Fast and easy application process; results in seconds.",
          des2: "Free access to your Vantage 3.0 score from Experian* (When you sign up for e-statements). Monthly reporting to the three major credit bureaus.",
          des3: "See if you’re Pre-Qualified with no impact to your credit score.",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //13
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
        //14
        {
          img: ravvi_card_default,
          heding: "Revvi Card",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "REWARDS RATE",
          h2Name: "MONTHLY FEE",
          h3Name: "ACTIVATION FEE",
          h4Name: "CREDIT NEEDED",
          des1: "1% Cash Back",
          des2: "None 1st year, $8.25 after",
          des3: "$95*",
          des4: "Poor/Fair",
          to: "/form-personal-loan",
        },
        //15
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
        //16
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
        //17
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
        //18
        {
          img: chime_credit_builder_default,
          heding: "Secured Chime Credit Builder Visa® Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "BUILD YOUR CREDIT HISTORY",
          h2Name: "ANNUAL FEE",
          h3Name: "INTEREST & FEE FREE CASH WITHDRAWALS",
          h4Name: "CREDIT NEEDED",
          des1: "Your direct deposit sets how much you could spend, spend up to that amount, and have your monthly balance automatically paid with your direct deposit.",
          des2: "$0",
          des3: "Interest & fee free cash withdrawals at 60K+ ATMs at retailers like Walgreens, CVS, and more.",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
      ],
    },

    //  No/Limited
    {
      cardArray: [
        //1
        {
          img: standard_platinum_default,
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
        //2
        {
          img: capital_one_secured_default,
          heding: "Capital One Platinum Secured Credit Card",
          subHeading: "Non-rewards card",
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
        //3
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
        //4
        {
          img: first_digital_default,
          heding: "First Digital Mastercard®",
          subHeading: "1% Cash Back",
          button: "Apply Now",
          h1Name: "WIDELY ACCEPTED",
          h2Name: "BUILD CREDIT",
          h3Name: "FAST APPLICATION AND DELIVERY",
          h4Name: "CREDIT NEEDED",
          des1: "Get the security and convenience of a full-feature, unsecured Mastercard® Credit Card – accepted at millions of merchant and ATM locations nationwide and online.",
          des2: "Build up your Credit with a card that reports to all three major credit bureaus every month.",
          des3: "Easy and secure online application – it just takes moments to apply. Receive your card more quickly with optional Expedited Processing (additional fee applies).",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //5
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
        //6
        {
          img: reflex_default,
          heding: "Reflex® Platinum Mastercard®",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "EASY APPLICATION",
          h2Name: "BUILD CREDIT",
          h3Name: "PRE-QUALIFICATION",
          h4Name: "CREDIT NEEDED",
          des1: "Fast and easy application process; results in seconds.",
          des2: "Free access to your Vantage 3.0 score from Experian* (When you sign up for e-statements). Monthly reporting to the three major credit bureaus.",
          des3: "See if you’re Pre-Qualified with no impact to your credit score.",
          des4: "Limited/Poor/Fair",
          to: "/form-personal-loan",
        },
        //7
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
        //8
        {
          img: opensky_plus_secured,
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
        //9
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
        //10
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
          des2: "$0 fraud liability for unauthorized charges",
          des3: "Use it anywhere Mastercard is accepted.",
          des4: "Limited/Poor",
          to: "/form-personal-loan",
        },
        //11
        {
          img: avantcard_default,
          heding: "AvantCard Credit Card",
          subHeading: "Non-rewards card",
          button: "Apply Now",
          h1Name: "APPLY ONLINE",
          h2Name: "NO HIDDEN FEES",
          h3Name: "REGULAR APR",
          h4Name: "CREDIT NEEDED",
          des1: "Fast and easy application process",
          des2: "No deposit required and no penalty APR",
          des3: "35.99%",
          des4: "Limited/Poor/Fair",
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
                  icon={<img src={tabimg1} alt="tabimg1" />}
                  label="Excellent"
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
                <Tab
                  // icon={<HomeIcon />}
                  icon={<img src={tabimg2} alt="tabimg2" />}
                  label="Good"
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
                <Tab
                  // icon={<HouseIcon />}
                  icon={<img src={tabimg3} alt="tabimg3" />}
                  label="Fair"
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
                <Tab
                  // icon={<HouseIcon />}
                  icon={<img src={tabimg4} alt="tabimg4" />}
                  label="Poor"
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
                <Tab
                  // icon={<HouseIcon />}
                  icon={<img src={tabimg5} alt="tabimg5" />}
                  label="No/Limited"
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

export default BestCardsByCreditQuality;
