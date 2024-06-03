import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Container, Grid, useTheme, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FandQs2 = () => {
  const theme = useTheme();
  const [expanded0, setExpanded0] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <Container>
      <Typography
        sx={{
          fontSize: '27px',
          color: '#101F30',
          fontFamily: "'Lato', sans-serif",
          textAlign: 'left',
          margin: '30px 0px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
          },
        }}
      >
        Frequently asked questions
      </Typography>
      <Grid>
        <Accordion
          
          sx={{ boxShadow: 'none', margin: 0 ,padding:'20px'}}
        >
          <AccordionSummary
            expandIcon={
              expanded0 ? (
                <RemoveIcon sx={{ color: '#00AEEF' }} />
              ) : (
                <AddIcon sx={{ color: '#00AEEF' }} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headd'
            sx={{ color: '#00AEEF', fontSize: '15px' }}
            onClick={() => setExpanded0(!expanded0)}
          >
           How to initiate a zero-interest balance transfer?
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >
             To circumvent interest charges on your balance transfer, you'll require a credit card featuring an extended 0% APR introductory period specifically for balance transfers. Typically, cards with balance transfer fees offer lengthier introductory offers. If you're transferring a substantial balance, the savings on interest payments will often outweigh the balance transfer fee, provided you can repay the balance before the introductory period expires.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
         
          sx={{ boxShadow: 'none', margin: 0,padding:'20px'}}
        >
          <AccordionSummary
            expandIcon={
              expanded1 ? (
                <RemoveIcon sx={{ color: '#00AEEF' }} />
              ) : (
                <AddIcon sx={{ color: '#00AEEF' }} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headd'
            sx={{ color: '#00AEEF', fontSize: '15px' }}
            onClick={() => setExpanded1(!expanded1)}
          >
           Which banks provide balance transfer offers without fees?
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >
             Balance transfer credit cards with no transfer fees are not typically offered by major banks such as Chase and Bank of America. Instead, these cards are commonly provided by credit unions, which may have regional availability or specific eligibility criteria.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
         
          sx={{ boxShadow: 'none', margin: 0 ,padding:'20px'}}
        >
          <AccordionSummary
            expandIcon={
              expanded2 ? (
                <RemoveIcon sx={{ color: '#00AEEF' }} />
              ) : (
                <AddIcon sx={{ color: '#00AEEF' }} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headd'
            sx={{ color: '#00AEEF', fontSize: '15px' }}
            onClick={() => setExpanded2(!expanded2)}
          >
            What is the typical duration for a balance transfer to complete?
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >
              The processing time for a balance transfer varies depending on the issuer. For instance, with Chase, most transfers are completed within a week but can take up to 21 days. Likewise, American Express balance transfers usually take five to seven days, although some may extend to six weeks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          
          sx={{ boxShadow: 'none', margin: 0,padding:'20px'}}
        >
          <AccordionSummary
            expandIcon={
              expanded3 ? (
                <RemoveIcon sx={{ color: '#00AEEF' }} />
              ) : (
                <AddIcon sx={{ color: '#00AEEF' }} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headd'
            sx={{ color: '#00AEEF', fontSize: '15px' }}
            onClick={() => setExpanded3(!expanded3)}
          >
            Can balance transfers negatively impact your credit score?
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >
              Upon applying for a new balance transfer credit card, a hard inquiry is generated on your credit report. This inquiry can temporarily decrease your credit score by a few points and will persist on your report for two years, although its adverse effects diminish gradually over time.
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >
              Conversely, increasing your available credit can lower your overall credit utilization ratio, potentially boosting your credit score. Consistent, timely payments towards reducing your debt are likely to lead to a gradual improvement in your credit score over time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
         
          sx={{ boxShadow: 'none', margin: 0 ,padding:'20px'}}
        >
          <AccordionSummary
            expandIcon={
              expanded4 ? (
                <RemoveIcon sx={{ color: '#00AEEF' }} />
              ) : (
                <AddIcon sx={{ color: '#00AEEF' }} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headd'
            sx={{ color: '#00AEEF', fontSize: '15px' }}
            onClick={() => setExpanded4(!expanded4)}
          >
            What are the steps to obtain a balance transfer credit card without any fees?
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '15px',
                color: '#454545',
                margin: '0px 0px 22px',
              }}
            >To secure a balance transfer credit card with complimentary balance transfers, locate a suitable card and submit an application. Ensure your credit score aligns with the card's specified credit range for increased approval odds.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>




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
                 Methodology
                </Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}>Our selection process for the top balance transfer credit cards without fees involved careful evaluation of several factors.</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}>In compiling our list of the best no-fee balance transfer cards, we employ an impartial rating and ranking methodology. This system assesses features across a broad spectrum of credit cards, encompassing over 200 offerings from more than 50 issuers. Utilizing calculations derived from LendingTree and U.S. Bureau of Labor data, we estimate the value of each card for the average cardholder.</Typography>
                <Typography className='green-dot' sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}><span style={{fontWeight:'bold'}}>Intro offer savings (90% of rating): </span>Our calculation of potential savings on a balance transfer hinges on the duration of the introductory period. We consider a transfer amount of $6,000 and a monthly payment of $300. Deducting balance transfer fees, annual fees, and any remaining interest accrued after the introductory period, we arrive at the estimated savings. </Typography>
                <Typography className='green-dot' sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}><span style={{fontWeight:'bold'}}>Ongoing value (10% of rating): </span> Additionally, we factor in the annual rewards value for the average cardholder, subtracting the card's annual fee where applicable. For non-rewards cards, this value may amount to $0, or even less than $0 if the card imposes an annual fee.</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 60px'}}>Please keep in mind that our ratings serve as a foundation for comparing and selecting the most suitable balance transfer credit cards. Nonetheless, your individual balance transfer requirements may deviate from those of the average cardholder. It's essential to contemplate the sum you anticipate transferring and prioritize the benefits that align with your preferences when determining the optimal card for your needs.</Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'12px',color:'#7A7A7A',margin:'24px 0px 60px'}}>The information pertaining to the Wings Visa Platinum Credit Card, ESL Visa® Credit Card, Hudson Valley Visa® Platinum Credit Card, BECU Visa Credit Card, CEFCU Rewards Credit Mastercard, Kinecta MyPower Credit Card, Navy Federal Platinum Credit Card, PSECU Visa® Classic, PFFCU Contactless Rewards Visa, OnPoint Signature Visa® with Cash Back Rewards, BethPage Mastercard® Low Rate Credit Card, Edward Jones Business Plus MasterCard Credit Card, and CEFCU Cash Back Credit Mastercard has been gathered independently by LendingTree. It has not undergone review or been provided by the issuer of these cards before publication.</Typography>





               
            </Grid>
            </Grid>
        </Container>
  )
}

export default FandQs2