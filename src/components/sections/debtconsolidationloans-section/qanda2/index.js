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
         What impact does debt consolidation have on your credit score?
          </AccordionSummary>
          <AccordionDetails >
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Consolidating debt could result in a minor decrease in your credit score as it involves acquiring a new credit product or loan. Additionally, settling a debt or engaging with a debt management service might also cause a temporary dip in your credit score. </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            For certain borrowers, consolidating debt, especially credit card balances, can lead to an increase in their credit score. By paying off credit card balances, you reduce your credit utilization ratio, potentially resulting in a credit score improvement.

           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            Regardless of the initial impact on your credit score, debt consolidation has the potential to improve your credit score in the long run. Opting for a solution with manageable payments enables you to establish a positive payment history, which is crucial for a strong credit score.

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
         What are the eligibility requirements for obtaining a debt consolidation loan?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Individuals with favorable credit ratings will find themselves with a broader array of debt consolidation choices. They'll encounter smoother approval processes for balance transfer credit cards offering introductory 0% APR periods and personal loans featuring lower APRs.
           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            Even with poor credit, there are avenues available for consolidating debt. Consider exploring secured loan options like a home equity loan, which often offer lower APRs. Additionally, 401(k) loans allow you to borrow from your retirement fund without undergoing a credit check.

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
                What method offers the most effective approach to consolidating debt?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            The optimal approach to consolidating debt varies based on your individual financial circumstances. Several common methods include personal loans, balance transfer credit cards, and home equity loans. Additionally, options such as 401(k) loans or debt management plans may be considered. For guidance on exploring credit card refinancing options, consulting a credit counselor can provide valuable, often free or low-cost assistance in navigating your debt relief choices.            </Typography>
            
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
       What are the expenses associated with debt consolidation?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' ,[theme.breakpoints.down('sm')]: {fontSize: '14px'}}}>
            There are always costs associated with borrowing money, which is why it's crucial to seek out the debt consolidation option with the lowest APR to minimize long-term expenses.
           </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Various debt consolidation options entail distinct interest rates and fees. For instance, certain personal loan providers levy origination fees (initial administrative charges) or prepayment penalty fees (for settling a loan before its term concludes). Opting for a balance transfer card may involve a balance transfer fee as well.
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
         Is it possible for debt consolidation to help me save money?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            Debt consolidation carries the potential for saving you money, although it's not a certainty. The key lies in consolidating your debts into a form of financing with a lower APR compared to your current payments. Before proceeding, review your existing credit card and loan agreements to understand the APRs you're dealing with. This way, you can explore alternative financial products that offer potential savings.

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
          Could debt consolidation accelerate my path out of debt?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            If your aim is to expedite your debt repayment, opting for debt consolidation can be a strategic decision. For instance, consolidating with a personal loan allows you to select a shorter loan term, facilitating quicker debt clearance. Additionally, securing a lower APR compared to your current debt obligations can further accelerate your repayment timeline, even if your monthly payments remain consistent.

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
         How does your credit score influence the rates of your loans?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px',[theme.breakpoints.down('sm')]: {fontSize: '14px'} }}>
            In the realm of debt consolidation loans, a higher credit score typically translates to a lower APR. This correlation exists because your credit score serves as an indicator to lenders of your likelihood to repay a loan. A high credit score signifies lower risk for lenders, particularly since debt consolidation loans are often unsecured.

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