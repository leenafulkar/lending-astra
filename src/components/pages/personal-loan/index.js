import React from "react";
import BestLoans from "../../sections/Personalloan-section/tableofloans";
import Lenders from "../../sections/Personalloan-section/lenders";
import FundedLoans from "../../sections/Personalloan-section/fundedloans";
import PersonalLoannn from "../../sections/Personalloan-section/PersonalLoan";
import ReasonsToGetPL from "../../sections/Personalloan-section/ReasonstogetPL";
import InterestRate from "../../sections/Personalloan-section/Interestrate";
import FedInterest from "../../sections/Personalloan-section/fedinterest";
import BenifitsofPL from "../../sections/Personalloan-section/benifitsofPL";
import WheretogetPL from "../../sections/Personalloan-section/wheretogetPL";
import HowtocomparePL from "../../sections/Personalloan-section/howtocomparepl";
import HowtogetPL from "../../sections/Personalloan-section/howtogetPL";
import Howlendingtreeworks from "../../sections/Personalloan-section/howlendingtreeworks";
import HowtomanagePL from "../../sections/Personalloan-section/howtomanage";
import QandA from "../../sections/Personalloan-section/qanda";
import RatingsAboutLT from "../../sections/Personalloan-section/ratingaboutLT";
import Calc from "../../sections/Personalloan-section/calculator";
import PricingDisclosure from "../../sections/Personalloan-section/pricingdisclosure";
import Intro from "../../sections/Personalloan-section/introo";

const PersonalLoan = () => {
  return (
    <>
      <Intro/>
      <BestLoans />
      <Lenders />
      <Calc />
      <FundedLoans />
      <RatingsAboutLT />
      <PersonalLoannn />
      <ReasonsToGetPL />
      <InterestRate />
      <FedInterest />
      <BenifitsofPL />
      <WheretogetPL />
      <HowtocomparePL />
      <HowtogetPL />
      <Howlendingtreeworks />
      <HowtomanagePL />
      <QandA />
      <PricingDisclosure />
    </>
  );
};

export default PersonalLoan;
