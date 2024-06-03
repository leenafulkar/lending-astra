import React, { useState } from 'react';
import { Card, Typography, Button, Grid, Box, Paper, Container, Link } from '@mui/material';

import Venture_logo from '../../../../assets/venture-rewards_default_main.jpg'
import flex_default_logo from '../../../../assets/flex_default_All_main.jpg'
import ink_business_preferred_logo from '../../../../assets/ink-business-preferred_default_All_main.jpg'
import citi_custom_logo from '../../../../assets/citi-custom-cash_default_All_main.jpg'
import blue_cash_preferred_logo from '../../../../assets/blue-cash-preferred_default_main.jpg'
import gold_card_default_logo from '../../../../assets/gold-card_default_main.jpg'
import discover_it_logo from '../../../../assets/discover-it-secured_default_main.jpg'
import petal_2_default_logo from '../../../../assets/petal-2_default_main.jpg'
import savorone_student_logo  from '../../../../assets/savorone-student-cash-rewards_default_main.jpg'
import visa_signature_logo from '../../../../assets/visa-signature-card_default_main.jpg'
import chase_sapphire_preferred_default_logo from '../../../../assets/chase-sapphire-preferred_default_All_main.jpg'
import hilton_honors_default_logo from '../../../../assets/hilton-honors_default_main.jpg'
import aadvantage_aviator_logo from '../../../../assets/aadvantage-aviator-red-mastercard_default_All_main.jpg'
import ventureOne_logo from '../../../../assets/ventureone-rewards_default_main.jpg'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const cardData = [
  {
    id: 1,
    title: "The Capital One Venture Rewards Credit Card",
    bestTag: "CHAMPION: TOP TRAVEL REWARDS CREDIT CARD",
    imageSrc: Venture_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Chase's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "2X-5X miles",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "19.99% - 29.99% (Variable)" },
      { label: "Annual Fee", value: "$95" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
      "Enjoy an attractive sign-up bonus",
      "Benefit from a high rewards rate on every purchase",
      "Redeem miles for any travel expense",
      "Transfer miles to over 15 travel loyalty programs",
      "Receive a Global Entry/TSA PreCheck credit"
    ],
    cons: [
      "$95 annual fee applies",
      "No significant U.S. airline partnerships featured",
      "Cash back redemptions offer limited value",
     
    ],
    whyWeLikeIt: [
      "The Capital One Venture Rewards Credit Card stands out as the top rewards credit card due to its substantial sign-up bonus and generous mileage accrual rate on all purchases. Furthermore, Capital One miles offer exceptional flexibility and value compared to other rewards programs. You can utilize miles to offset travel expenses with statement credits or transfer them to Capital One's extensive network of airline and hotel partners at an advantageous 1:1 ratio.",
      "Cardholders also receive complimentary Global Entry or TSA PreCheck membership — a perk typically associated with cards featuring a higher annual fee."
    ],
    averageValue: "$1,320 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "  Good",
    cardDetails: [
      "Receive a one-time bonus of 75,000 miles after spending $4,000 on purchases within the first 3 months of account opening, which is equivalent to $750 in travel rewards.",
      "Earn double miles on all purchases, every day, with no limit.",
      "Get five times the miles when you book hotels and rental cars through Capital One Travel, accessing Capital One's best prices on thousands of travel options.",
      "Your miles will never expire for the duration of your account, and there's no cap on how many you can accumulate.",
      "Get a credit of up to $100 for Global Entry or TSA PreCheck® enrollment.",
      "Redeem your miles for reimbursement on any travel purchase, or utilize them by booking a trip through Capital One Travel.",
      "Enhance every hotel stay within the Lifestyle Collection with a range of cardholder benefits, including a $50 experience credit, room upgrades, and additional perks.",
      "Convert your miles to any of 15+ travel loyalty programs of your choice.",
      "For Capital One products featured here, certain benefits are offered through Visa® or Mastercard® and may differ based on the specific product. Refer to the corresponding Guide to Benefits for comprehensive details, as terms and conditions apply."
    ],
    disclaimer: "*The information related to the Chase Freedom Flex℠ has been collected by LendingTree and has not been reviewed or provided by the issuer of this card prior to publication. Terms apply."
  },
  {
    id: 2,
    title: "Chase Freedom Flex℠*",
    bestTag: "Top Pick: Best No Annual Fee Rewards Credit Card",
    imageSrc: flex_default_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Chase's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-5% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "0% intro APR on purchases for 15 months" },
      { label: "Regular Purchase APR", value: "20.49% - 29.24% variable" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
      "5% cash back in rotating quarterly categories",
      "Additional cash back rewards on dining and drugstore purchases",
      "One of the most attractive sign-up bonuses in the market",
      "No annual fee",
      "Option to transfer points to select Ultimate Rewards cards"
    ],
    cons: [
      "Cash back rewards capped for rotating categories",
      "Quarterly category activation required",
      "Possibility of high APR",
      "Foreign transaction fees apply"
     
    ],
    whyWeLikeIt: [
      "The Chase Freedom Flex℠ card stands out as a top choice among no-annual-fee rewards cards. With an attractive sign-up bonus and up to 5% cash back in rotating categories, it offers exceptional value. Additionally, unlike other 5% cash back cards, it provides a 3% bonus on dining and drugstore purchases.",
      "To unlock the 5% cash back rate, it's essential to enroll in the quarterly categories. Keep in mind that there's a cap of $1,500 in purchases per quarter before the rate drops to 1%. Despite this limitation, with both 5% and 3% categories, this card provides some of the most lucrative rewards among no-annual-fee cash back cards."
    ],
    averageValue: "$541 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Average",
    cardDetails: [
      "Get a $200 bonus when you make $500 in purchases within the initial 3 months of opening your account.",
      "Earn 5% cash back on up to $1,500 in combined purchases across bonus categories every quarter upon activation. Explore fresh 5% categories each quarter!",
      "Earn 5% cash back on travel bought through Chase Ultimate Rewards®, our leading rewards program enabling you to redeem rewards for cash back, travel, gift cards, and beyond.",
      "Get 3% cash back on drugstore purchases and dining at restaurants, including takeout and eligible delivery services, plus unlimited 1% cash back on all other purchases.",
      "There's no minimum required to redeem for cash back. Opt for a statement credit or direct deposit into most U.S. checking and savings accounts. Your Cash Back rewards won't expire as long as your account remains open!",
      "Enjoy a 0% Intro APR for the first 15 months from account opening on both purchases and balance transfers. After that, a variable APR of 20.49% - 29.24% applies.",
      "There's no annual fee for the Freedom Flex℠ card, so you can enjoy its fantastic features without any additional cost.",
      "Monitor your credit health effortlessly with Chase Credit Journey, offering free access to your latest score, real-time alerts, and more."
    ],
    disclaimer: "*The details regarding the Chase Freedom Flex℠ have been compiled by LendingTree and have not been evaluated or furnished by the card issuer before publication. Terms and conditions apply."
  }
  ,
  {
    id: 3,
    title: "Ink Business Preferred® Credit Card",
    bestTag: "TOP PICK: BEST BUSINESS REWARDS CREDIT CARD",
    imageSrc: ink_business_preferred_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Chase's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1x-3x points",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "21.24% – 26.24% Variable" },
      { label: "Annual Fee", value: "$95" },
      { label: "Recommended Credit", value: "720-850 Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
      "Outstanding welcome offer",
      "Earn triple points on travel and designated business expenses",
      "No foreign transaction fees",
      "Transfer points at a 1:1 ratio to over 10 travel loyalty programs",
      "Enjoy a 25% bonus on Chase TravelSM redemptions",
      "Receive primary rental car insurance",
      "Benefit from trip cancellation/interruption insurance"
    ],
    cons: [
      "Annual fee of $95",
      "Substantial spending requirement to qualify for sign-up bonus",
     
     
    ],
    whyWeLikeIt: [
      "The Ink Business Preferred® Credit Card stands out with its substantial sign-up bonus, offering a significant boost to your rewards. Additionally, it excels in earning valuable Ultimate Rewards points across diverse business categories, notably in travel. With flexible redemption choices, including a 1:1 transfer to numerous airline and hotel loyalty programs, it ranks among the most rewarding cards available.",
      "However, it's worth noting that the card's sign-up bonus might pose a challenge for small businesses or startups to achieve."
    ],
    averageValue: "$1,393 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Average",
    cardDetails: [
      "Get rewarded with 100,000 bonus points after spending $8,000 on purchases within the first 3 months of opening your account. That's equivalent to $1,000 cash back or $1,250 towards travel when redeemed through Chase TravelSM.",
      "Earn 3 points per $1 on the first $150,000 spent annually on travel and select business categories. Earn 1 point per $1 on all other purchases.",
      "Continuous monitoring for any unusual credit card transactions",
      "With Zero Liability, you're not accountable for unauthorized charges made with your card or account information.",
      "Exchange your points for cash back, gift cards, travel, and more—your points remain valid as long as your account is active.",
      "Points carry a 25% higher value when redeemed for travel through Chase TravelSM.",
      "Purchase Protection safeguards your new purchases for 120 days against damage or theft, providing coverage of up to $10,000 per claim and $50,000 per account.",
      "Member FDIC"
    ]
    
  }
  ,
  {
    id: 4,
    title: "Citi Custom Cash® Card",
    bestTag: "BEST GAS REWARDS CREDIT CARD",
    imageSrc: citi_custom_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Citibank's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1x-3x points",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "0% intro APR for 15 months on Purchases" },
      { label: "Regular Purchase APR", value: "19.24% - 29.24% (Variable)" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "600-850 Fair/Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
      "Earn 5% cash back on your highest spending category, including gas.",
      "Cash back is earned automatically, so no need to opt in",
      "Enjoy a decent sign-up bonus.",
      "No annual fee required.",
      
    ],
    cons: [
      "Possible high regular APR",
      "Cash back capped at $500 per billing cycle for top spending category",
      "Earn only 1% cash back on most other purchases",
      "Foreign transaction fees apply",
     
     
    ],
    whyWeLikeIt: [
      "The Citi Custom Cash® Card stands out with its exceptional cash back offer for gas purchases, especially if gas is your primary spending category for the month. With its innovative rewards structure, you can earn 5% cash back on your highest eligible spending category every billing cycle, with gas purchases falling under these eligible categories.",
      "The 5% bonus covers other lucrative categories:",
      "- Restaurants",
      "- Grocery stores",
      "- Select travel",
      "- Select transit",
      "- Select streaming services",
      "- Drugstores",
      "- Home improvement stores",
      "- Fitness clubs",
      "- Live entertainment",
      "Regrettably, the card only offers 1% cash back on most purchases that don't fall within your highest spending category. Therefore, it's advisable to primarily use this card specifically for gas purchases to maximize its benefits."
    ],
    averageValue: "$566 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Fair",
    cardDetails: [
      "Get $200 cash back after spending $1,500 on purchases within the first 6 months of opening your account. This bonus will be provided as 20,000 ThankYou® Points, equivalent to $200 cash back when redeemed.",
      "Enjoy a 0% introductory APR on both balance transfers and purchases for the first 15 months. Following this period, the variable APR will be 19.24% - 29.24%, determined based on your creditworthiness.",
      "Receive 5% cash back on purchases in your highest eligible spending category each billing cycle, up to the initial $500 spent, followed by 1% cash back thereafter. Additionally, enjoy unlimited 1% cash back on all other purchases. Take advantage of our special Travel Offer: Earn an extra 4% cash back on hotels, car rentals, and attractions booked through the Citi Travel℠ portal until 6/30/2025.",
      "There are no rotating bonus categories to enroll in. Your earnings automatically adjust each billing cycle based on your spending in any of the eligible categories.",
      "No Annual Fee",
      "Citi restricts issuance to one Citi Custom Cash® Card account per individual."
    ],
   
    
  }
  ,
  {
    id: 5,
    title: "Blue Cash Preferred® Card from American Express",
    bestTag: "BEST GROCERY REWARDS CREDIT CARD",
    imageSrc: blue_cash_preferred_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on American Express's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-6% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "0% on purchases for 12 months" },
      { label: "Regular Purchase APR", value: "19.24%-29.99% Variable" },
      { label: "Annual Fee", value: "$0 intro annual fee for the first year, then $95." },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
      "This card stands out as highly rewarding for U.S. supermarket purchases.",
      "Substantial welcome bonus",
      "Introductory APR for purchases",
      "Statement credit for The Disney Bundle (enrollment required)",
      "Statement credit for Equinox+ (enrollment required)"
      
    ],
    cons: [
      "Limit on highest cash back rate per year",
      "Annual membership fee",
      "Fees for foreign transactions",
      "Possibly elevated APR",
     
     
    ],
    whyWeLikeIt: [
      "The Blue Cash Preferred® Card from American Express stands out as an exceptionally rewarding cash back card, boasting top-tier rewards in everyday spending categories like U.S. supermarket purchases. Its enticing welcome offer adds to its appeal, and redeeming your cash back for statement credits or at Amazon.com is hassle-free.",
     
    ],
    averageValue: " $771 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Good",
    cardDetails: [
    "Receive a $250 statement credit upon spending $3,000 on your new Card within the initial 6 months.",
    "Enjoy a $0 introductory annual fee for the first year, followed by $95 thereafter.",
    "Take advantage of Buy Now, Pay Later  with $0 introductory plan fees when you utilize Plan It® to divide significant purchases into monthly payments. Pay no introductory plan fees on plans established within the initial 12 months from the account opening date. Plans initiated after this period will incur a monthly plan fee of up to 1.33% of each eligible purchase amount transferred into a plan, determined by the plan duration, the applicable APR for the purchase, and additional variables.",  
    "Benefit from a Low Intro APR: Enjoy a 0% introductory rate on both purchases and balance transfers for the first 12 months from the date you open your account. Following this period, your APR will transition to a variable rate ranging from 19.24% to 29.99%. Rest assured, variable APRs will not exceed 29.99%.",
    "Earn a generous 6% Cash Back at U.S. supermarkets on your first $6,000 in purchases annually, after which you'll still receive 1% Cash Back.",
    "Earn an impressive 6% Cash Back on eligible U.S. streaming subscriptions.",
    "Earn a solid 3% Cash Back at U.S. gas stations.",
    "Get a rewarding 3% Cash Back on transit, which includes taxis/rideshare, parking, tolls, trains, buses, and more.",
    "Earn 1% Cash Back on all other purchases.",
    "Cash Back is delivered as Reward Dollars, which can be redeemed as a statement credit or at Amazon.com checkout.",
    "Receive up to $120 in statement credits annually by subscribing to Equinox+ at equinoxplus.com with your Blue Cash Preferred® Card. That's $10 in statement credits per month. Enrollment is required.",
    "Considering the Disney Bundle with Disney+, Hulu, and ESPN+? Simplify your decision with $7 back per month as a statement credit after spending $9.99 or more each month on an eligible subscription (with auto renewal) using your Blue Cash Preferred® Card. Enrollment is necessary.",
    "Terms Apply. "
    ],
   
    
  }
  ,
  {
    id: 6,
    title: "American Express® Gold Card",
    bestTag: "BEST DINING REWARDS CARD",
    imageSrc: gold_card_default_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on American Express's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "3X-4X",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "19.24%-29.99% Variable" },
      { label: "Annual Fee", value: "$250" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "One of the premier cards for dining expenditures",
          "Generous sign-up bonus",
          "Transfer points at a 1:1 ratio to over 15 travel partners",
          "Monthly dining credit available (requires enrollment)",
          "Exclusive Uber benefits",
          "Hotel credit through American Express Travel",
          "Comprehensive travel and shopping protections",
          "No charges for foreign transactions"

    ],
    cons: [
      "Annual fee of $250",
      "Dining statement credits applicable to select restaurants, Grubhub, and limited food-related websites",
      "Rewards offer limited value beyond airline redemption and point transfers",
      "No access to lounges or complimentary elite status",
      "Inability to carry a balance on certain purchases"
     
     
    ],
    whyWeLikeIt: [
      "According to our calculations, the American Express® Gold Card offers the highest rewards rate for restaurant spending among all cards. With an impressive 4X points earned at restaurants worldwide, including takeout and delivery in the U.S., it provides exceptional value. Additionally, you have the flexibility to transfer Amex points to over 15 travel partners, potentially achieving redemption values of 2 cents per point or more. In essence, for those adept at maximizing point redemptions, each dollar spent on restaurant purchases can yield approximately 8 cents' worth of travel rewards.",
     
    ],
    averageValue: " $1,261 (versus $553 for the average rewards card)*",
    flexibility: "Very good",
    otherFeatures: "Good",
    cardDetails: [
    "Receive 60,000 Membership Rewards® points upon spending $6,000 on eligible purchases within the initial 6 months of Card Membership.",
    "Earn 4X Membership Rewards® Points at restaurants, including takeout and delivery in the U.S., as well as 4X Membership Rewards® points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X).",
    "Earn 3X Membership Rewards® points on flights booked directly with airlines or through amextravel.com.",
    "Enjoy $120 in Uber Cash annually with the Gold Card: Simply link your Gold Card to your Uber account and receive $10 in Uber Cash monthly, valid for Uber Eats orders or rides in the U.S., for a total of up to $120 per year.",
    "Receive up to $120 in dining credits annually: Earn up to $10 in statement credits per month when you use your American Express® Gold Card at participating establishments including Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, Milk Bar, and select Shake Shack locations. Enrollment is required.",
    "Enjoy a $100 experience credit with a minimum two-night stay when booking The Hotel Collection through American Express Travel. The value of the experience credit varies by property.",
    "Choose the color that suits your style. Gold or Rose Gold.",
    "No Foreign Transaction Fees.",
    "Annual Fee is $250.",
    "Terms Apply."
    ],
   
    
  }
  ,
  {
    id: 7,
    title: "Discover it® Secured Credit Card",
    bestTag: "BEST REWARDS CREDIT CARD FOR BAD CREDIT",
    imageSrc: discover_it_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Discover's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-2% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "28.24% Variable APR" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "300-600 Limited/Poor", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "Accessible to individuals with limited or poor credit history",
          "Automatic cash back on all transactions",
          "Increased cash back rate at restaurants and gas stations",
          "No annual fee",
          "No foreign transaction fees",
          

    ],
    cons: [
      "Mandatory security deposit",
      "Limited credit ceiling",
      "Elevated APR"
     
     
    ],
    whyWeLikeIt: [
      "The Discover it® Secured Credit Card, our top choice for secured credit cards, offers more than just credit building. With this card, you earn cash back on all purchases, including a boosted rate for gas and restaurant expenses. Additionally, after seven months, Discover initiates monthly account assessments to determine if you qualify for an upgrade to an unsecured card.",
     
    ],
    averageValue: " $422 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Fair",
    cardDetails: [
    "No credit score required to apply.",
    "No Annual Fee, earn cash back, and establish your credit history.",
    "Your secured credit card requires a refundable security deposit, and your credit line will match your deposit amount, starting at $200. Bank information must be provided when submitting your deposit.",
    "We'll conduct automatic reviews starting at 7 months to assess if you qualify for transitioning to an unsecured line of credit and returning your deposit.",
    "Receive 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Additionally, earn unlimited 1% cash back on all other purchases.",
    "Discover can assist you in minimizing the exposure of your personal information online by aiding in its removal from select people-search sites that may sell your data. This service is complimentary and can be activated through the mobile app.",
    "Receive an alert if we detect your Social Security number on any of thousands of Dark Web sites. This service is free to activate.",
    "Terms and conditions apply."
    ],
   
    
  }
  ,
  {
    id: 8,
    title: "Petal® 2 Cash Back, No Fees Visa® Credit Card*",
    bestTag: "BEST REWARDS CREDIT CARD FOR FAIR CREDIT",
    imageSrc: petal_2_default_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Petal's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-10% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "18.24 - 32.24% Variable" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "N/A", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "No prior credit history required for application",
          "No fees charged",
          "No need for a security deposit",
          "Earn cash back rewards on all purchases",
          "Boost your cash back rate to 1.5% with on-time payments",
          

    ],
    cons: [
      "Lacks a sign-up bonus",
      "Potential for a high APR"
      
     
     
    ],
    whyWeLikeIt: [
      "The Petal® 2 Cash Back, No Fees Visa® Credit Card stands out as the top choice for fair credit due to its unique features. Unlike many competitors, it doesn't impose an annual fee or demand a deposit. Moreover, you can apply without an established credit history. Instead, eligibility hinges on a Cash Score that considers factors such as transaction history, income, bill payments, and expenditure patterns.",
      "You'll earn cash back on every purchase, and by consistently paying your balance on time each month, you have the opportunity to increase your cash back rate to 1.5%."
     
    ],
    averageValue: " $200 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Fair",
    cardDetails: [
    "No credit score required to apply.",
    "No Annual Fee, earn cash back, and establish your credit history.",
    "Your secured credit card requires a refundable security deposit, and your credit line will match your deposit amount, starting at $200. Bank information must be provided when submitting your deposit.",
    "We'll conduct automatic reviews starting at 7 months to assess if you qualify for transitioning to an unsecured line of credit and returning your deposit.",
    "Receive 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Additionally, earn unlimited 1% cash back on all other purchases.",
    "Discover can assist you in minimizing the exposure of your personal information online by aiding in its removal from select people-search sites that may sell your data. This service is complimentary and can be activated through the mobile app.",
    "Receive an alert if we detect your Social Security number on any of thousands of Dark Web sites. This service is free to activate.",
    "Terms and conditions apply."
    ],
    disclaimer: "*The details concerning the Petal® 2 Cash Back, No Fees Visa® Credit Card have been gathered by LendingTree and have not been evaluated or furnished by the card issuer before publication. Terms and conditions apply."

   
    
  }
  ,
  {
    id: 9,
    title: "Capital One SavorOne Student Cash Rewards Credit Card",
    bestTag: "BEST STUDENT REWARDS CREDIT CARD",
    imageSrc: savorone_student_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Capital One's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-8% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "19.99% - 29.99% (Variable)" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "600-660 Limited/Fair", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "Earn a generous cash back rate on groceries, dining, and entertainment",
          "Receive a modest sign-up bonus",
          "Redeem rewards effortlessly",
          "No foreign transaction fees",
          

    ],
    cons: [
      "Potentially high APR",
      "No introductory APR offers on purchases or balance transfers"
   
    ],
    whyWeLikeIt: [
      "The Capital One SavorOne Student Cash Rewards Credit Card stands out among student credit cards with its exceptional rewards program, particularly its bonus rewards for dining, groceries, and entertainment. Additionally, it offers enhanced benefits typically not found in starter cards, such as car rental protection, extended warranty, and price protection.",
      "Moreover, it's an ideal companion for your semester abroad, as it waives foreign transaction fees."
     
    ],
    averageValue: " $462 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Average",
    cardDetails: [
    "Receive limitless 3% cash back on dining, entertainment, popular streaming services, and grocery store purchases (excluding superstores like Walmart® and Target®), along with 1% cash back on all other purchases.",
    "Early Spend Bonus: Earn $50 after spending $100 within the initial three months.",
    "Earn 10% cash back on purchases made through Uber & Uber Eats, along with complimentary Uber One membership statement credits through 11/14/2024.",
    "Rest easy with $0 Fraud Liability, ensuring you won't be held responsible for unauthorized charges.",
    "Experience no annual fees, foreign transaction fees, or hidden charges to worry about.",
    "Get an unlimited 5% cash back on hotel stays and rental car bookings made through Capital One Travel, where you'll discover Capital One's most competitive prices on a myriad of travel options. Terms and conditions apply.",
    "Earn up to $500 annually by referring friends and family members who are approved for a Capital One credit card.",
    "Earn an impressive 8% cash back on entertainment purchases when you make bookings through the Capital One Entertainment portal.",
    "Build your credit with responsible card use",
    "This card could be a suitable option for you, whether you're attending a 4-year university, community college, or another higher education institution.",
    "For Capital One products featured on this page, certain benefits are facilitated by Visa® or Mastercard®, and these benefits may differ depending on the specific product. Refer to the corresponding Guide to Benefits for comprehensive details, as terms and conditions apply."


    ],

   
    
  }
  ,
  {
    id:10,
    title: "Prime Visa*",
    bestTag: "BEST AMAZON REWARDS CREDIT CARD",
    imageSrc: visa_signature_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Chase's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1%-5% cash back",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "19.49%–27.49% Variable" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "The premier choice for Amazon shopping",
          "Earn 5% back on Whole Foods purchases",
          "Straightforward reward redemption",
          "Receive an Amazon gift card upon approval",
          "Includes travel and purchase protections",
          "No foreign transaction fees"
          

    ],
    cons: [
      "Requires Amazon Prime membership",
      "No introductory APR"
   
    ],
    whyWeLikeIt: [
      "The Prime Visa stands out as the ultimate rewards credit card for Amazon Prime members, providing an unmatched 5% cash back on all Amazon purchases. Additionally, you'll enjoy 5% back on Whole Foods and Chase Travel purchases. While there's no annual fee for the Prime Visa, it does require an active Prime membership ($139 annually) to access its extensive benefits."
     
    ],
    averageValue: " $415 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Average",
    cardDetails: [
       "Receive a $100 Amazon Gift Card immediately upon approval, available exclusively for Prime members.",
       "Earn an unlimited 5% cash back at Amazon.com, Amazon Fresh, Whole Foods Market, and on Chase Travel purchases with an eligible Prime membership.",
       "Prime Card Bonus: Get 10% back or more on a rotating selection of products and categories at Amazon.com.",
       "Earn unlimited 2% cash back at gas stations, restaurants, and on local transit and commuting (including rideshare).",
       "Earn unlimited 1% cash back on all other purchases.",
       "No annual fee for the credit card.",
       "No more waiting. Redeem your daily rewards at Amazon.com as soon as the next day.",
       "Member FDIC"


    ],
    disclaimer: "*The information regarding the Prime Visa has been gathered by LendingTree and has not been reviewed or furnished by the card issuer before publication. Terms and conditions apply."


   
    
  }
  ,
  {
    id:11,
    title: "Chase Sapphire Preferred® Card",
    bestTag: "BEST TRAVEL REWARDS CREDIT CARD RUNNER UP",
    imageSrc: chase_sapphire_preferred_default_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Chase's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1x-5x points",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "21.49%–28.49% variable" },
      { label: "Annual Fee", value: "$95" },
      { label: "Recommended Credit", value: "720-850 Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "Earns versatile Chase Ultimate Rewards® points",
          "Sign-up bonus",
          "Annual hotel credit",
          "Travel protections",
          "No foreign transaction fees"
          

    ],
    cons: [
      "$95 annual fee",
      "Possibly high APR",
      "No introductory APR on purchases or balance transfers"
   
    ],
    whyWeLikeIt: [
      "The Chase Sapphire Preferred® Card comes in as a strong runner-up to the Capital One Venture card, delivering exceptional overall value for a modest annual fee. Though it may not match the Capital One Venture Card in rewards, it does feature a generous sign-up bonus and enhanced rewards on travel and dining.",
      "Moreover, Ultimate Rewards points outshine Capital One miles in terms of value and versatility. These points can be redeemed for statement credits or receive a 25% bonus when used through the Chase TravelSM portal. Additionally, you have the option to transfer points at a 1:1 ratio to a robust selection of travel partners such as United, Southwest, and World of Hyatt. Alternatively, you can cash out your points at a rate of 1 cent per point.",
      "The card boasts exceptional travel protections, encompassing features like trip cancellation/interruption protection and primary car rental coverage. Additionally, it offers several other valuable travel perks, such as an annual $50 credit for hotels booked through Chase TravelSM."
     
    ],
    averageValue: "$1,352 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Good",
    cardDetails: [
     "Earn a bonus of 75,000 points after spending $4,000 on purchases within the first 3 months of opening your account. That's valued at over $900 when redeemed through Chase Travel℠.",
     "Benefit from perks including earning 5 times the points on travel booked through Chase Travel℠, 3 times the points on dining, select streaming services, and online groceries, 2 times the points on all other travel purchases, 1 point per dollar on all other purchases, a $50 annual credit for Chase Travel hotel bookings, and additional benefits.",
     "Receive 25% more value when you redeem your points for airfare, hotels, car rentals, and cruises through Chase Travel℠. For instance, 75,000 points equate to $937.50 toward travel.",
     "Benefit from Trip Cancellation/Interruption Insurance, Auto Rental Collision Damage Waiver, Lost Luggage Insurance, and more.",
     "Activate by December 31, 2024, and enjoy complimentary access to DashPass, granting $0 delivery fees and reduced service fees for a minimum of one year.",
     "Member FDIC"



    ],


   
    
  }
  ,
  {
    id:12,
    title: "Hilton Honors American Express Surpass® Card",
    bestTag: "BEST HOTEL REWARDS CREDIT CARD",
    imageSrc: hilton_honors_default_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on American Express's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "3x-12x points",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "20.99%-29.99% Variable" },
      { label: "Annual Fee", value: "$150" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "Outstanding sign-up bonus",
          "Elevated rewards on all spending",
          "Automatic enrollment in Hilton Honors Gold status",
          "Access to Priority Pass lounges",
          "Annual $200 Hilton hotel credit",
          "Complimentary free night award"
          

    ],
    cons: [
      "$150 yearly fee",
      "Hilton points value around 0.5 cents each",
      "Required spending to earn free night award",
      "Benefits limited to Hilton properties"
   
    ],
    whyWeLikeIt: [
          "The Hilton Honors American Express Surpass® Card stands out among hotel cards for its ability to expedite your journey to a complimentary hotel night. With an impressive sign-up bonus and substantial rewards on Hilton hotel and resort stays, as well as purchases at U.S. restaurants, supermarkets, gas stations, and online retailers, this card accelerates your point accumulation. Despite the relatively low value of Hilton points (approximately half a cent per point), the card's generous points structure outpaces many other travel cards, ensuring robust earnings with each purchase.",
          "Additionally, the card provides a range of valuable perks such as automatic Hilton Honors Gold Status*, Priority Pass lounge access*, and an annual Hilton Hotel credit of up to $200, which can readily offset its $150 annual fee."     
    ],
    averageValue: " $1,124 (versus $553 for the average rewards card)*",
    flexibility: "Average",
    otherFeatures: "Good",
    cardDetails: [
            "Receive 130,000 Hilton Honors Bonus Points when you make $3,000 in purchases within your first 6 months of Card Membership with the Hilton Honors American Express Surpass® Card.",
            "Receive up to $200 in statement credits each year for eligible Hilton purchases made with your Hilton Honors American Express Surpass® Card.",
            "Get a whopping 12X Hilton Honors Bonus Points for every dollar spent on eligible purchases made directly with a hotel or resort within the Hilton portfolio using your Card.",
            "Earn an impressive 6X Points for every dollar spent on purchases made at U.S. restaurants, U.S. supermarkets, and U.S. gas stations using your Card.",
            "Gain 4X Points for every dollar spent on purchases made at U.S. online retail stores using your card.",
            "Earn 3X Points for every dollar spent on all other eligible purchases made with your card.",
            "Receive a complimentary Free Night Reward from Hilton Honors after reaching $15,000 in eligible purchases on your card within a calendar year.",
            "Benefit from complimentary Hilton Honors™ Gold Status with your Hilton Honors American Express Surpass® Card.",
            "Achieve Hilton Honors™ Diamond Status through the end of the following calendar year by spending $40,000 on eligible purchases with your Card in a calendar year.",
            "Benefit from complimentary National Car Rental® Emerald Club Executive® status when you enroll in the complimentary Emerald Club® program. Terms apply.",
            "Travel internationally without worrying about additional fees on purchases made abroad, as there are no foreign transaction fees.",
            "$150 annual fee.",
            "Terms Apply."

    ],

  }
  ,
  {
    id:13,
    title: "AAdvantage® Aviator® Red World Elite Mastercard®*",
    bestTag: "BEST AIRLINE REWARDS CREDIT CARD",
    imageSrc: aadvantage_aviator_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Barclays's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1x-2x miles",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "N/A" },
      { label: "Regular Purchase APR", value: "21.24% - 29.99%" },
      { label: "Annual Fee", value: "$99" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "Get a sign-up bonus after your first purchase.",
          "Accrues valuable AAdvantage miles.",
          "Complimentary checked baggage and priority boarding.",
          "Earn a Companion Certificate based on your spending.",
          "Intro APR on balance transfer.",
          

    ],
    cons: [
         "No bonus categories apply except for purchases made with American Airlines.",
         "The Companion certificate requires a significant amount of spending to qualify.",
         "AAdvantage miles will expire after 24 months of inactivity."   
    ],
    whyWeLikeIt: [
          "The standout feature of the AAdvantage® Aviator® Red World Elite Mastercard® is its impressive sign-up bonus, offering a substantial pile of valuable AAdvantage miles upon making your first purchase. Additionally, cardholders benefit from perks with American Airlines, such as the first checked bag free and preferred boarding privileges. Moreover, an annual companion certificate can be earned by spending $20,000 on the card each year."     
    ],
    averageValue: "$900 (versus $553 for the average rewards card)*",
    flexibility: "Fair",
    otherFeatures: "Good",
    cardDetails: [
           
           "Get rewarded with 50,000 AAdvantage® bonus miles once you make your first purchase and pay the $99 annual fee in full, all within the initial 90 days.",
           "Get double the AAdvantage® miles on eligible American Airlines purchases.",
           "Earn AAdvantage® miles at a rate of 1X on all other purchases.",
           "Get a 25% discount on food and beverages purchased in-flight.",
           "No foreign transaction fees",
           "Enjoy your first checked bag free for the primary cardmember and up to 4 companions on eligible bags."

    ],

  }
  ,
  {
    id:14,
    title: "Capital One VentureOne Rewards Credit Card",
    bestTag: "BEST TRAVEL REWARDS CREDIT CARD WITH NO ANNUAL FEE",
    imageSrc: ventureOne_logo,
    learnMoreLink: "#",
    ratesFeesLink: "#",
    buttontext:"on Capital One's secure site",
    ratesFeesText: "Rates & Fees",
    rewards: "1.25x-5x miles",
    detailsLink: "#",
    details: [
      { label: "Intro Purchase APR", value: "0% intro on purchases for 15 months" },
      { label: "Regular Purchase APR", value: "19.99% - 29.99% (Variable)" },
      { label: "Annual Fee", value: "$0" },
      { label: "Recommended Credit", value: "660-850 Good/Excellent", linkText: "Get Your Free Credit Score", link: "#" }
    ],
    pros: [
          "No annual fee",
          "Generous sign-up bonus",
          "Straightforward rewards structure",
          "Transfer miles to over 15 travel partners, often at a 1:1 ratio",
          "No foreign transaction fees",
          "Introductory APR on purchases and balance transfers"
          

    ],
    cons: [
           "Balance transfer fee",
           "Lower rewards rate on non-travel purchases compared to other cards"
    ],
    whyWeLikeIt: [
          "The Capital One VentureOne Rewards Credit Card stands out as one of the top no annual fee cards, offering valuable and flexible miles that can be transferred to over 15 travel loyalty programs. It provides a solid sign-up bonus and a consistent flat rewards rate on all purchases.",
          "Enjoy a lengthy 0% introductory APR on purchases for 15 months and 0% introductory APR on balance transfers for 15 months. After the intro period, a variable APR of 19.99% - 29.99% applies. Note that a balance transfer fee is applicable."     
    ],
    averageValue: "$656 (versus $553 for the average rewards card)*",
    flexibility: "Excellent",
    otherFeatures: "Average",
    cardDetails: [
           "No annual fee and zero foreign transaction fees.",
           "Earn a bonus of 20,000 miles after spending $500 on purchases within the first 3 months from account opening, equivalent to $200 in travel.",
           "Earn unlimited 1.25X miles on every purchase, every day.",
           "Miles won't expire for the life of the account, and there's no limit to how many you can earn.",
           "Get 5 times the miles when you book hotels and rental cars through Capital One Travel, where you'll find Capital One's top deals on thousands of travel choices.",
           "Utilize your miles for reimbursement on any travel expense—or opt to redeem them by booking a trip via Capital One Travel.",
           "Easily transfer your miles to over 15 travel loyalty programs of your preference.",
           "Experience a 0% introductory APR on purchases and balance transfers for 15 months. Afterward, a variable APR of 19.99% to 29.99% applies, with a balance transfer fee.",
           "For the Capital One products featured on this page, certain benefits are offered by Visa® or Mastercard®, and their availability may vary depending on the specific product. Refer to the corresponding Guide to Benefits for comprehensive details, including terms and exclusions."
    ],

  }
  // Add more card objects here as needed
];

const CashBackRewardCards = () => {
  const [content, setContent] = useState('Pros & Cons');
  const [activeHeading, setActiveHeading] = useState('Pros & Cons');
  
  const handleClick = (newContent) => {
    setContent(newContent);
    setActiveHeading(newContent);
  };

  return (
    <Container>
      {cardData.map((card) => (
        <Card key={card.id} sx={{ margin: '20px auto', padding: '20px', boxShadow: 3 }}>
          <Typography sx={{ fontSize: '14px', color: 'green', fontWeight: 'bold', marginBottom: '10px' }}>
            {card.bestTag}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {card.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={4} xl={4} md={4} xs={12} sm={4} display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
              <img src={card.imageSrc} alt="img" width={183} height={114} />
              <Button variant="contained" color="primary" sx={{ mt: 2, textTransform: 'none' }}>
                Learn More
              </Button>
              <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>
                {card.buttontext}
              </Typography>
              <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>
                {card.ratesFeesText}
              </Button>
            </Grid>
            <Grid item lg={8} xl={8} md={8} xs={12} sm={8}>
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#e8f5e9',
                  padding: 2,
                  borderRadius: '8px',
                  borderLeft: '4px solid #00897b',
                  margin: '0 auto',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MonetizationOnIcon sx={{ marginRight: 1, color: '#00897b' }} />
                  <Box>
                    <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                      Rewards:
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ marginLeft: '4px' }}>
                      {card.rewards}
                    </Typography>
                  </Box>
                </Box>
                <Link href={card.detailsLink} variant="body2" sx={{ marginRight: 1 ,textDecoration:'none'}}>
                  See details
                </Link>
              </Box>
              <br /><br />
              <Box 
                sx={{
                  padding: 2,
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  margin: '0 auto',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <Grid container spacing={2} justifyContent="space-around">
                  {card.details.map((detail, index) => (
                    <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }} key={index}>
                      <Typography sx={{ fontSize: '12px', color: '#848E92', fontWeight: 'bold' }}>{detail.label}</Typography>
                      <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{detail.value}</Typography>
                      {detail.linkText && <Link href={detail.link} sx={{ textDecoration: 'none', fontSize: '12px', color: '#0069BA' }}>{detail.linkText}</Link>}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '20px' }}>
            <Typography variant="body2" color="textSecondary" sx={{ display: 'inline-block', padding: '10px', cursor: 'pointer', borderBottom: activeHeading === 'Pros & Cons' ? '2px solid green' : 'none' }} onClick={() => handleClick('Pros & Cons')}>
              Pros & Cons
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ display: 'inline-block', padding: '10px', cursor: 'pointer', borderBottom: activeHeading === 'Why We Like It' ? '2px solid green' : 'none' }} onClick={() => handleClick('Why We Like It')}>
              Why We Like It
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ display: 'inline-block', padding: '10px', cursor: 'pointer', borderBottom: activeHeading === 'Card Details' ? '2px solid green' : 'none' }} onClick={() => handleClick('Card Details')}>
              Card Details
            </Typography>
          </Box>
          {content === 'Pros & Cons' && (
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
              <Grid item xs={12} sm={6}>
                {card.pros.map((pro, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                    <CheckIcon sx={{ color: 'green', marginRight: 1 ,fontSize:'32px'}} />
                    <Typography >{pro}</Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} sm={6}>
                {card.cons.map((con, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                    <CloseIcon sx={{ color: 'red', marginRight: 1 ,fontSize:'32px'}} />
                    <Typography >{con}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          )}
          {content === 'Why We Like It' && (
            <Box>
              {card.whyWeLikeIt.map((reason, index) => (
                <Typography key={index} sx={{ fontSize: '16px', color: '#101F30', marginTop: '20px' }}>{reason}</Typography>
              ))}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }}>
                <Typography sx={{ fontSize: '16px', color: '#848E92', fontWeight: 'bold' }}>Average annual value over two years : </Typography>
                <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.averageValue}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }}>
                <Typography sx={{ fontSize: '16px', color: '#848E92', fontWeight: 'bold' }}>Flexibility : </Typography>
                <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.flexibility}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }}>
                <Typography sx={{ fontSize: '16px', color: '#848E92', fontWeight: 'bold' }}>Other features : </Typography>
                <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.otherFeatures}</Typography>
              </Box>
            </Box>
          )}
          {content === 'Card Details' && (
            <Box sx={{ marginTop: '10px' }}>
              {card.cardDetails.map((detail, index) => (
                <Typography className='black-dot' key={index} sx={{ fontSize: '16px', color: '#101F30', marginTop: '15px' }}>{detail}</Typography>
              ))}
            </Box>
          )}
           <Typography sx={{ fontSize: '12px', color: '#848E92', marginTop: '10px' }}>{card.disclaimer}</Typography>

        </Card>
      ))}
    </Container>
  );
};

export default CashBackRewardCards;
