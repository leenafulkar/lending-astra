import React, { useState } from 'react';
import { Card, Typography, Button, Grid, Box, Paper, Container, Link, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import esl_default_logo from '../../../../assets/esl_default_All_main.jpg'
import hudson_valley_logo from '../../../../assets/hudson-valley-platinum_default_All_main.jpg'
import becu_default_logo from '../../../../assets/becu_default_All_main.jpg'
import kinecta_mypower_logo from '../../../../assets/kinecta-mypower_default_All_main.jpg'
import navy_federal_platinum_card_logo from '../../../../assets/navy-federal-platinum-credit-card_default_All_main.jpg'
import psecu_classic_logo from '../../../../assets/psecu-classic_default_All_main.jpg'
import pffcu_contactless_logo from '../../../../assets/pffcu-contactless-rewards-visa_default_All_main.jpg'
import onpoint_cashback_logo from '../../../../assets/onpoint-cash-back_default_All_main.jpg'
import bethpage_lowrate_logo from '../../../../assets/bethpage-low-rate_default_All_main.jpg'
import edward_jones_business_logo from '../../../../assets/edward-jones-business_default_All_main.jpg'
import ccefcu_world_logo from '../../../../assets/cefcu-world_default_All_main.jpg'
import cefcu_cash_back_logo from '../../../../assets/cefcu-cash-back_default_All_main.jpg'
import cefcu_rewards_logo from '../../../../assets/cefcu-rewards_default_All_main.jpg'
import Card2 from '../card2';
const BalanceTransferCards = () => {

  const [content, setContent] = useState('Pros & Cons');
  const [activeHeading, setActiveHeading] = useState('Pros & Cons');

  const handleClick = (newContent) => {
    setContent(newContent);
    setActiveHeading(newContent);
  };

  const theme = useTheme();

  const jsonData = [
    {  
      "id": 1,
      "name": "ESL Visa® Credit Card*",
      "image": esl_default_logo,
      "buttontypo":"on ESL Federal Credit Union's secure site",
      "introBalanceTransferAPR": "0% APR for 12 months on balance transfers then a 13.50%-17.99% variable APR applies",
      "regularBalanceTransferAPR": "13.50%-17.99%",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "No annual fee",
        " zero balance transfer fees",
        "competitively low regular APR"
      ],
      "cons": [
        "No rewards",
        "No sign-up bonus",
        "membership with a credit union is required"
      ],
      "whyWeLikeIt": "The ESL Visa® Credit Card prioritizes savings with minimal fees. You'll enjoy no balance transfer, annual, or cash advance fees. Additionally, you'll have a one-year grace period to settle your balance transfer before transitioning to a low ongoing variable APR ranging from 13.50% to 17.99%.",
      "cardDetails": [
        "Start saving with our 0% introductory APR for 12 months.",
        "Enhance your savings with our consistently low APR of 13.50% to 17.99%.",
        "No annual fees",
        "Balance transfers are fee-free.",
        "Benefit from the robust security of the Visa Zero Liability Policy.",
        "Receive emergency ticket replacement and additional support for travel and emergencies.",
        "Automatically receive auto rental insurance that covers vehicle damage or theft up to the full value of most vehicles when you use your ESL Visa credit card to rent a car.",
        "Extended warranty protection.",
        "- Rates are contingent upon credit assessment. The Annual Percentage Rate (APR) is variable and may fluctuate. A fixed rate of 0.00% is applicable for the initial 12 billing cycles from the account opening date. Following this period, the rate adjusts to Prime Rate + 5.00%, up to Prime Rate + 14.24%, determining both Purchase and Balance Transfer Rates, with a maximum APR of 17.99%. As of 7/27/23, the Prime Rate stood at 8.50%. Foreign transaction fees may be imposed. VISA is a registered trademark of Visa International Service Association and is utilized under license. For comprehensive details regarding the terms and conditions of your ESL Visa Credit Card Account, please refer to our disclosure.",
        "- The Visa Zero Liability Policy excludes ATM transactions and PIN transactions not processed by Visa."

      ],
      "disclaimer": "*The details regarding the ESL Visa® Credit Card have been gathered by LendingTree and have not undergone review or provision by the card issuer prior to publication. Terms and conditions apply."
    }
    ,
    {  
      "id": 2,
      "name": "Hudson Valley Visa® Platinum Credit Card*",
      "image": hudson_valley_logo,
      "buttontypo":"on Hudson Valley Credit Union's secure site",
      "introBalanceTransferAPR": "0% for 12 months on balance transfers then a Variable 16.50%-18.00% APR applies",
      "regularBalanceTransferAPR": "16.50%-18.00% APR",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "No annual fee",
        "No balance transfer fee",
        "competitive regular APR."
      ],
      "cons": [
        "No rewards",
        "No sign-up bonus",
        "Membership at a credit union is required"
      ],
      "whyWeLikeIt": "Though the Hudson Valley Visa® Platinum Credit Card lacks rewards or perks, it does provide a 0% introductory APR for 12 months on balance transfers. Following this, a low ongoing variable APR of 16.50%-18.00% applies. This ensures that even if you can't clear your balance before the interest-free period concludes, you won't face exorbitant interest rates on your remaining balance.",
      "cardDetails": [
           "Introductory APR offer available for both purchases and balance transfers.",
           "No annual fee",
           "$0 balance transfer fees",
           "Access emergency services, price protection, return protection, and additional benefits.",
           "Enjoy complimentary 24/7 assistance services."
      ],
      "disclaimer": "*The details regarding the Hudson Valley Visa® Platinum Credit Card have been compiled by LendingTree and have not undergone review or provision by the card issuer prior to publication. Terms and conditions apply."
    }
    ,
    {  
      "id": 3,
      "name": "BECU Visa Credit Card*",
      "image": becu_default_logo,
      "buttontypo":"on Boeing Employee's Credit Union's secure site",
      "introBalanceTransferAPR": "0% Intro APR for 12 months on balance transfers then a 13.24% to 25.24% variable APR applies",
      "regularBalanceTransferAPR": "13.24% to 25.24% variable",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Low standard APR"
      ],
      "cons": [
        "No rewards",
        "No sign-up bonus",
        "Membership at a credit union is required"
      ],
      "whyWeLikeIt": "With the BECU Visa Credit Card, you have a year to settle your balance transfer without accruing interest. Following this period, any remaining balance will be subject to a variable APR ranging from 13.24% to 25.24%. Moreover, there are multiple avenues to qualify for membership, even if you reside outside of Washington, Oregon, or Idaho.",
      "cardDetails": [
       "No annual fee",
       "Balance transfers incur no fees.",
       "Cash advances come with no fees.",
       "Foreign transactions are fee-free.",
       "Select from four different card designs."
      ],
      "disclaimer": "*Details regarding the BECU Visa Credit Card have been gathered by LendingTree and have not undergone review or provision by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 4,
      "name": "Kinecta MyPower Credit Card*",
      "image": kinecta_mypower_logo,
      "buttontypo":"on Kinecta Federal Credit Union's secure site",

      "introBalanceTransferAPR": "4.99% Introductory APR for a period of 18 billing cycles, then a 13.24%-18.00% Variable APR applies",
      "regularBalanceTransferAPR": "13.24%-18.00% Variable",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "No annual fee",
        "No balance transfer fee",
        "Credit union membership is not necessary."
      ],
      "cons": [
        "No rewardsNo 0% intro APR",
        "No rewards",
        "No sign-up bonus"
      ],
      "whyWeLikeIt": "Unlike several other cards listed, the Kinecta MyPower Credit Card is available to individuals across the U.S. While it doesn't provide a 0% introductory APR period for balance transfers, the introductory APR of 4.99% for the first 18 billing cycles can assist in reducing high-interest credit card debt. Following the introductory period, a low ongoing variable APR of 13.24%-18.00% applies to any remaining balance.",
      "cardDetails": [
           "Benefit from a low introductory APR on balance transfers.",
           "Enjoy a card with no annual fees, late fees, balance transfer fees, cash advance fees, or foreign transaction fees.",
           "Benefit from Mastercard ID Theft Protection.",
           "Compatible with digital wallets."
      ],
      "disclaimer": "*Details concerning the Kinecta MyPower Credit Card have been gathered by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 5,
      "name": "Navy Federal Platinum Credit Card*",
      "image": navy_federal_platinum_card_logo,
      "buttontypo":"on Navy Federal Credit Union's secure site",

      "introBalanceTransferAPR": "0.99% introductory APR for 12 months for balance transfers requested within 60 days of account opening then a 11.24% to 18.00% (variable) APR applies",
      "regularBalanceTransferAPR": "11.24% to 18.00% (variable)",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "600-850 Fair/Good/Excellent",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Accessible to individuals with fair, good, or excellent credit."
      ],
      "cons": [
        "Military affiliation is necessary to qualify for credit union membership.",
        "No 0% intro APR",
      ],
      "whyWeLikeIt": "If you're affiliated with the U.S. Armed Forces, Department of Defense, or National Guard, the Navy Federal Platinum Credit Card is worth considering. It offers some of the lowest introductory and ongoing interest rates for balance transfers. Additionally, with no foreign transaction fees, it's an ideal choice for international travel.",
      "cardDetails": [
      "Enjoy a 0.99% introductory APR on balance transfers for 12 months, applicable to transfers requested within 60 days of account opening (then a variable APR of 11.24% to 18.00%).",
      "Following the introductory period, an APR ranging from 11.24% to 18.00% (variable) applies.",
      "No balance transfer fee",
      "No annual fee"
      ],
      "disclaimer": "*Details regarding the Navy Federal Platinum Credit Card have been gathered by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 6,
      "name": "PSECU Visa® Classic*",
      "image": psecu_classic_logo,
      "buttontypo":"on PSECU's secure site",

      "introBalanceTransferAPR": "4.9% until Dec. 31 2025 on balance transfers, then a 12.90% Variable APR applies",
      "regularBalanceTransferAPR": "12.90% Variable",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Possibly generous credit limit."
      ],
      "cons": [
        "No 0% intro APR",
        "No rewards",
        "No sign-up bonus",
        "Membership with a credit union is necessary."
      ],
      "whyWeLikeIt": "The PSECU Visa® Classic is an excellent option for Pennsylvania residents seeking a no-fee balance transfer card with competitive rates. Additionally, with the potential to qualify for a credit line of up to $30,000, this card can be a fantastic choice for individuals needing to transfer a substantial balance.",
      "cardDetails": [
         "No annual fee",
         "Free credit score service",
         "Qualify and access credit lines of up to $30,000.",
         "No balance transfer fee"
      ],
      "disclaimer": "*Details regarding the PSECU Visa® Classic have been compiled by LendingTree and have not undergone review or provision by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 7,
      "name": "PFFCU Contactless Rewards Visa*",
      "image": pffcu_contactless_logo,
      "buttontypo":"on PFFCU's secure site",

      "introBalanceTransferAPR": "0% for 9 months then a 14.4% to 18.00% variable APR applies",
      "regularBalanceTransferAPR": "14.4% to 18.00% variable",
      "rewardsRate": "Earn 1 point for every $1 spent",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Earns rewards"
      ],
      "cons": [
        "Short intro APR period",
        "No sign-up bonus",
      ],
      "whyWeLikeIt": "Aside from providing an interest-free period on balance transfers, the PFFCU Contactless Rewards Visa lets you accumulate rewards points with every purchase. Its competitive ongoing variable APR of 14.4% to 18.00% on balance transfers ensures affordability when settling any remaining balance post the introductory period.",
      "cardDetails": [
       "Introductory APR offer available for both purchases and balance transfers.",
       "No balance transfer fee",
       "No annual fee",
       "No cash advance fee",
       "Receive complimentary access to your FICO score on your statement.",
       "Same-day card issuance at a branch"  
      ],
      "disclaimer": "*Details concerning the PFFCU Contactless Rewards Visa have been gathered by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 8,
      "name": "OnPoint Signature Visa® with Cash Back Rewards*",
      "image": onpoint_cashback_logo,
      "buttontypo":"on OnPoint Community Credit Union's secure site",
      "introBalanceTransferAPR": "4.99% intro APR for 12 months on balance transfers then a 17.25%-21.75% Variable APR applies",
      "regularBalanceTransferAPR": "17.25%-21.75% Variable",
      "rewardsRate": "2% cash back on every purchase",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Earns rewards"
      ],
      "cons": [
        "No 0% intro APR",
        "No sign-up bonus",
        "Membership at a credit union is required"
      ],
      "whyWeLikeIt": "For those residing in eligible areas, the OnPoint Signature Visa® with Cash Back Rewards offers a chance to benefit from a low introductory APR on balance transfers. Additionally, you'll earn 2% cash back on all purchases, a rate that rivals some of the best cash back credit cards available.",
      "cardDetails": [
             "Receive 2% cash back on all purchases.",
             "Introductory APR offers available for both purchases and balance transfers.",
             "No annual fee",
             "No foreign transaction fees",
             "Travel and accident insurance"
      ],
      "disclaimer": "*Details regarding the OnPoint Signature Visa® with Cash Back Rewards have been compiled by LendingTree and have not undergone review or provision by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 9,
      "name": "BethPage Mastercard® Low Rate Credit Card*",
      "image": bethpage_lowrate_logo,
      "buttontypo":"on Bethpage Federal Credit Union's secure site",

      "introBalanceTransferAPR": "2.99%-4.99% for the first 12 months on balance transfers then a 13.40%-18.00% Variable APR applies",
      "regularBalanceTransferAPR": "13.40%-18.00% Variable",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "Potentially high credit limit",
        "No credit union membership required"
      ],
      "cons": [
        "No rewards",
        "No sign-up bonus",
        "No 0% intro APR"
      ],
      "whyWeLikeIt": "The BethPage Mastercard® Low Rate Credit Card stands out as one of the few cards accessible to consumers nationwide. It features a low introductory APR on balance transfers, coupled with a competitive ongoing APR post-promotional period. Additionally, it offers the potential for a substantial credit limit, with qualifications available for credit lines of up to $35,000.",
      "cardDetails": [
      
      ],
      "disclaimer": "*Details regarding the BethPage Mastercard® Low Rate Credit Card have been gathered by LendingTree and have not undergone review or provision by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 10,
      "name": "Edward Jones Business Plus MasterCard Credit Card*",
      "image": edward_jones_business_logo,
      "buttontypo":"on Elan Financial Services's secure site",

      "introBalanceTransferAPR": " 0% introductory APR for the first 12 billing cycles for balances transferred within 60 days from account opening then a 20.24%–29.99% Variable APR applies",
      "regularBalanceTransferAPR": "20.24%–29.99%",
      "rewardsRate": "Earn 1.5 Loyalty Points on every net $1 spent up to $40,000 and 2 Loyalty Points on every net $1 spent over $40,000",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "Enjoy a $0 annual fee with at least one purchase each year; otherwise, a $25 fee applies.",
        "There are no balance transfer fees during the introductory APR period.",
        "Provides rewards and a sign-up bonus."
      ],
      "cons": [
        "Possibly elevated regular APR.",
        "Applies a balance transfer fee for transfers initiated after the initial 60 days.",
      ],
      "whyWeLikeIt": "The Edward Jones Business Plus MasterCard Credit Card is an excellent option for business owners looking to transfer a balance within the first 60 days of opening an account. It features an interest-free period on balance transfers and a 0% introductory fee for balances transferred during the initial 60 days; thereafter, a fee of 3% of each transferred amount applies, with a $5 minimum. Additionally, the card offers rewards and valuable perks such as travel accident insurance and global emergency services.",
      "cardDetails": [
        "Earn 1.5 Loyalty Points for every net $1 spent up to $40,000, and 2 Loyalty Points for every net $1 spent over $40,000. Redeem points for cash back, travel, gift cards, charitable donations, or direct cash deposits into an Edward Jones account.",
        "Scoreboard Online Reporting helps you track and manage business expenses.",
        "Benefit from the support and personalized service of your Edward Jones financial advisor."


      ],
      "disclaimer": "*Details regarding the Edward Jones Business Plus MasterCard Credit Card have been compiled by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 11,
      "name": "CEFCU World Mastercard*",
      "image": ccefcu_world_logo,
      "buttontypo":"on CEFCU's secure site",

      "introBalanceTransferAPR": "1.99% APR for 12 months on balance transfers then a Variable 14.75% to 24.25% APR applies",
      "regularBalanceTransferAPR": "14.75% to 24.25% APR",
      "rewardsRate": "N/A",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        " balance transfer fee",
        "Earns rewards"
      ],
      "cons": [
        "No 0% intro APR",
        "Rewards have limited redemptions",
      ],
      "whyWeLikeIt": "The CEFCU World Mastercard could be perfect if you plan to travel after paying off your transferred debt. Along with its introductory APR offers, it provides elevated rewards on travel-related purchases such as fuel, dining, and hotels. Additionally, you’ll benefit from various travel perks, including concierge service and exclusive offers from Mastercard.",
      "cardDetails": [
        "N/A"
      ],
      "disclaimer": "*Details regarding the CEFCU World Mastercard have been compiled by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 12,
      "name": "CEFCU Cash Back Credit Mastercard*",
      "image": cefcu_cash_back_logo,
      "buttontypo":"on CEFCU's secure site",

      "introBalanceTransferAPR": "1.99% introductory APR for 12 months on balance transfers then a 15.75%-25.25% Variable APR applies",
      "regularBalanceTransferAPR": "15.75%-25.25% Variable",
      "rewardsRate": "1.5% cash back on every purchase",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        " balance transfer fee",
        "Earns unlimited rewards"
      ],
      "cons": [
        "No intro 0% APR",
        "Rewards have limited redemptions",
      ],
      "whyWeLikeIt": "The CEFCU Cash Back Credit Mastercard provides an introductory APR on balance transfers for one year, followed by an ongoing variable APR of 15.75% to 25.25%. This card remains valuable even after you pay off your balance, as it offers 1.5% cash back on every purchase.",
      "cardDetails": [
      "N/A"  
      ],
      "disclaimer": "*Details regarding the CEFCU Cash Back Credit Mastercard have been gathered by LendingTree and have not been reviewed or provided by the card issuer before publication. Terms and conditions apply."
    },
    {  
      "id": 13,
      "name": "CEFCU Rewards Credit Mastercard*",
      "image": cefcu_rewards_logo,
      "introBalanceTransferAPR": "1.99% for 12 months on balance transfers then a Variable 14.75%-24.25% APR applies",
      "regularBalanceTransferAPR": "14.75%-24.25% APR",
      "rewardsRate": "Earn 1 Point for every dollar of net purchases on your Card.",
      "annualFee": "$0",
      "recommendedCredit": "N/A",
      "pros": [
        "$0 annual fee",
        "No balance transfer fee",
        "The CEFCU cards offer the lowest regular balance transfer APR."
      ],
      "cons": [
        "No 0% intro APR",
        "No rewards",
      ],
      "whyWeLikeIt": "The CEFCU Rewards Credit Mastercard is a suitable option if you want to transfer high-interest debt to a card with a low interest rate. Additionally, you'll earn rewards on every purchase.",
      "cardDetails": [
       "N/A"
      ],
      "disclaimer": "*Details concerning the CEFCU Rewards Credit Mastercard have been compiled by LendingTree and have not undergone review or provision by the card issuer before publication. Terms and conditions apply."

    }
  ];

  return (
   <> <Container sx={{ marginTop: '40px' }}>
      <Typography variant="h2" sx={{ fontSize: '27px', fontFamily: "'Lato', sans-serif'", color: '#101F30' }}>Top balance transfer cards with no transfer fee</Typography><br />
      {jsonData.map(card => (
        <Card key={card.id} sx={{ margin: '20px auto', padding: '20px', boxShadow: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {card.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={4} xl={4} md={4} xs={12} sm={4} display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
              <img src={card.image} alt="img" width={183} height={114} />
              <Button variant="contained" color="primary" sx={{ mt: 2, textTransform: 'none' }}>
                Learn More
              </Button>
              <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>
               {card.buttontypo}</Typography>
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
                }}
              >
                <SwapHorizIcon sx={{ marginRight: 2, color: '#00897b' }} />
                <Box>
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
                    Intro balance transfer APR:
                  </Typography>
                  <Typography variant="body1" component="span" sx={{ marginLeft: '4px' }}>
                    {card.introBalanceTransferAPR}
                  </Typography>
                </Box>
              </Box><br /><br />
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
                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '12px', color: '#848E92', fontWeight: 'bold' }} >Regular Balance Transfer APR</Typography>
                    <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.regularBalanceTransferAPR}</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '12px', color: '#848E92', fontWeight: 'bold' }}>Rewards Rate</Typography>
                    <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.rewardsRate}</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '12px', color: '#848E92', fontWeight: 'bold' }}>Annual Fee</Typography>
                    <Typography sx={{ fontSize: '16px', color: '#101F30', fontWeight: 'bold' }}>{card.annualFee}</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontSize: '12px', color: '#848E92', fontWeight: 'bold' }}>Recommended Credit</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#101F30' }}>{card.recommendedCredit}</Typography>
                    <Link href="#" sx={{ textDecoration: 'none', fontSize: '12px', color: '#0069BA' }}>Get Your Free Credit Score</Link>
                  </Grid>
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
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                  {card.pros.map((pro, index) => (
                    <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px', fontSize: '16px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> {pro}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                  {card.cons.map((con, index) => (
                    <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px', fontSize: '16px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> {con}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            </Grid>)}
          {content === 'Why We Like It' && (
            <>
              <Typography variant="body1" sx={{ marginTop: '24px', fontSize: '16px', color: '#454545', fontFamily: "'Lato', sans-serif'" }}>
                {card.whyWeLikeIt}
              </Typography>
            </>
          )}
          {content === 'Card Details' && (
            <div style={{ margin: '0px 0px 24px', padding: '42px 0px 0px 12px' }}>
              {card.cardDetails.map((detail, index) => (
                <Typography className='black-dot' key={index} variant="body1" sx={{ margin: '15px 0px 9px', fontSize: '14px', color: '#454545', fontFamily: "'Lato', sans-serif'" }}>
                  {detail}
                </Typography>
              ))}
              
            </div>
          )}
          <Typography marginTop={2} sx={{ color: '#A3A3A3', fontSize: '10px', fontFamily: "'Lato', sans-serif'" }}>{card.disclaimer}</Typography>
        </Card>
      ))}
    
    {/* //////////////////////////////////////////////////////////////////////////// */}

    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: '27px',
                                color: '#101F30',
                                fontFamily: "'Lato', sans-serif",
                                textAlign: 'left',
                                margin: '20px 0px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '22px',
                                },
                            }}
                        >
                        Qualifying for a no-fee balance transfer credit card
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        The top no-fee balance transfer credit cards typically originate from credit unions, necessitating membership for all cardholders. Obtaining membership may pose a challenge if you do not reside near a specific credit union or are not employed by a qualifying organization, such as the military or an affiliated company. However, there are alternative methods you can explore:                 
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 9px' }}>
                        1.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Apply alongside a family member residing near the credit union. </span> Several credit unions impose location-based eligibility restrictions, although some permit membership through family members residing in an eligible city, county, or state.                  
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 9px' }}>
                        2.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Qualify through professional, religious, or cultural associations. </span>Numerous credit unions serve distinct groups, such as educators, craftsmen, and members of particular faith and cultural communities. Conduct a brief online search for credit unions extending membership to groups aligning with your identity.                        
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        3.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Meet additional membership criteria. </span>Certain credit unions extend membership to individuals who establish accounts with them or contribute to partner organizations. For instance, you can become a member of Bethpage Federal Credit Union by initiating a savings account with a minimum deposit of $5.                        
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontSize: '27px',
                                color: '#101F30',
                                fontFamily: "'Lato', sans-serif",
                                textAlign: 'left',
                                margin: '20px 0px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '22px',
                                },
                            }}
                        >
                     Top balance transfer credit cards featuring extended 0% APR periods                     
                      </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        These selected balance transfer credit cards, although they do incur balance transfer fees, are worth exploring. Generally, they are more accessible as they are issued by national banks rather than credit unions. Moreover, they offer extended 0% interest introductory periods, potentially resulting in significant savings on interest payments if you manage to clear your balance before the introductory period concludes. Additionally, many of these cards come with rewards programs, adding value even after you've settled your balance.                 
                        </Typography>
                        </Grid>
                    </Grid>
                    {/* ---------------------------------------------------------- */}
                    {/* Card2 */}
                    <Card2/>
    </Container></>
  );
};

export default BalanceTransferCards;