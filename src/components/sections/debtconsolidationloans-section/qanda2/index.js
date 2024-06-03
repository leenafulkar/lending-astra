import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid , Link, Typography,useTheme} from '@mui/material';
import '../qanda2/index.css'




const QandA2 = () => {
    const theme = useTheme();
  const [expanded0, setExpanded0] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  return (
    <><Container sx={{ display: 'flex', justifyContent: 'center', marginTop:'80px' }}> <Typography 
    sx={{color:'#101F30', fontSize:"34px", margin:'0px 0px 40px', fontWeight:'bold', [theme.breakpoints.down('sm')]: {fontSize: '22px'}  }}
    > Frequently asked questions</Typography>
</Container>
    <Container>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

   
      <Grid>
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded0 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '14px'} }}
            onClick={() => setExpanded0(!expanded0)} 
          >
          How does debt consolidation affect your credit?
          </AccordionSummary>
          <AccordionDetails >
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            There might be a small drop in your credit score after consolidating debt, since you are taking out a new credit product or loan. You might also see a dip in your credit score if you settle a debt or work with a debt management service.            </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Some borrowers see their credit score increase by consolidating debt, particularly credit card balances. Paying off credit card balances lowers your credit utilization ratio, which can give your credit score a boost.

           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            Whatever the initial effect on your credit score, debt consolidation can help you increase your credit score over the long term. If you choose an option with affordable payments, you can build up a healthy payment history, which is central to a good credit score.


          </Typography>
            
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded1 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545' , [theme.breakpoints.down('sm')]: {fontSize: '16px'} }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' , [theme.breakpoints.down('sm')]: {fontSize: '14px'} }}
            onClick={() => setExpanded1(!expanded1)} 
          >
          How do I qualify for a debt consolidation loan?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Applicants with good credit will have a wider range of debt consolidation options. They can get approved more easily for balance transfer credit cards with introductory 0% APR periods and personal loans with lower APRs.

           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            Still, there may be options for consolidating debt if you have bad credit. You could try a secured loan, such as a home equity loan, which may come with a lower APR. There are also 401(k) loans, which let you borrow money from your own retirement fund without a credit check.


          </Typography>
            
          </AccordionDetails>
        </Accordion>



        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded2 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545' , [theme.breakpoints.down('sm')]: {fontSize: '16px',} }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '14px'}  }}
            onClick={() => setExpanded2(!expanded2)} 
          >
        What is the best way to consolidate debt?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            That will depend on your financial situation. There are a few primary methods of debt consolidation, including personal loans, balance transfer credit cards and home equity loans. You may also consider a 401(k) loan or debt management plan to consolidate debt. To learn about your <Link href="#" sx={{textDecoration:'none'}}>credit card refinancing</Link> options, talk to a credit counselor who can provide free or low-cost guidance on your debt relief options.
            </Typography>
            
          </AccordionDetails>
        </Accordion>


        
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded3 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: { fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '16px'}  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '14px'}  }}
            onClick={() => setExpanded3(!expanded3)} 
          >
        How much does debt consolidation cost?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            It always costs money to borrow money, which is why you want to find the debt consolidation option with the lowest APR to save yourself the most money in the long run.

           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Different debt consolidation options come with their own set of interest rates and fees. For example, some personal loan lenders charge <Link href="#" sx={{textDecoration:'none'}}>origination fees</Link> (upfront, administrative charges) or prepayment penalty fees (for paying off a loan before the term ends). If you go with a balance transfer card, it can come with a  <Link href="#" sx={{textDecoration:'none'}}>balance transfer fee</Link>.

            </Typography>
            
          </AccordionDetails>
        </Accordion>



        
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px'}}>
          <AccordionSummary
            expandIcon={expanded4 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: { fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '14px' }  }}
            onClick={() => setExpanded4(!expanded4)} 
          >
          Can a debt consolidation save me money?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Debt consolidation has the potential to save you money, but it’s not guaranteed. To save money, you’ll have to consolidate your debt into another form of financing that has a lower APR than what you’re currently paying on your debts. Before you consolidate debt, it’s important to take a look at your current credit card and loan agreements to determine the APR you’re paying, so you can shop around for financial products that will save you money.


          </Typography>
            
          </AccordionDetails>
        </Accordion>



          
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded5 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: { fontSize: '16px' }  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '16px' }  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' , [theme.breakpoints.down('sm')]: { fontSize: '14px' } }}
            onClick={() => setExpanded5(!expanded5)} 
          >
          Can debt consolidation help me out of debt sooner?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            If your goal is to get out of debt faster, consolidating your debts can be a smart move. Consolidating with a personal loan, for example, can give you the option to choose a short loan term, so your debt will be paid off sooner. And if you get a lower APR than what you’re currently paying on your debts, then you can pay off your debt faster even if you pay the same amount of money toward your debt each month.

            </Typography>
            
          </AccordionDetails>
        </Accordion>



  
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded6 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: {fontSize: '16px',  }  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '16px' }  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '14px' }  }}
            onClick={() => setExpanded6(!expanded6)} 
          >
         How does your credit score impact loan rates?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            When it comes to debt consolidation loans, the higher your credit score, the lower the APR you’ll likely receive on your loan. This is because your credit score indicates to lenders how likely you are to repay a loan. A high credit score indicates a lower risk to lenders, especially since debt consolidation loans are typically unsecured.


            </Typography>
            
          </AccordionDetails>
        </Accordion>



      </Grid>
    </Box>
  </Container>
  </>
  
  )
}

export default QandA2