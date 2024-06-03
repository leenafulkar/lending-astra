import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid , Link, Typography,useTheme} from '@mui/material';
import '../qanda3/index.css'




const QandA3 = () => {
    const theme = useTheme();
  const [expanded0, setExpanded0] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
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
         Which loan is the most accessible for individuals with poor credit?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            The most accessible options for individuals with poor credit may include payday loans or pawn shop loans, as they don't typically require a credit check. However, it's generally advisable to steer clear of these types of loans due to their predatory nature, often involving excessive fees and high interest rates. Instead, consider applying for a loan with a reputable lender that specializes in personal loans for borrowers with bad credit.          </Typography>
            
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
         Is it possible to obtain a personal loan with a credit score of 550?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Although many reputable lenders may not extend a personal loan to individuals with a credit score of 550 or lower, there are alternative avenues through which you might qualify for a loan.       
             </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Consider applying with a co-borrower: Certain lenders offer the opportunity for consumers to submit a joint application. In this scenario, the primary borrower can enlist a trusted individual with a higher credit score to serve as a co-borrower, thereby reducing risk from the lender's perspective.            </Typography>
          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
          Consider applying for a secured loan: If finding a co-borrower isn't feasible, pursuing a secured loan is an alternative option. With secured loans, you'll need to provide collateral — such as a vehicle or bank account — to enhance your creditworthiness. It's important to note that in the event of default on a secured loan, your lender has the legal right to seize your collateral.          </Typography>
            
            
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
          Which are the best personal loan companies for individuals with bad credit?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            The list above highlights some of the top companies offering loans for individuals with bad credit. To apply for a loan with the lenders mentioned, you will generally need to undergo a credit check and provide verification of your identity, address, income, and employment status. </Typography>
            
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
          How much money can you borrow with a bad credit score?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            How much money you’ll be able to borrow with a bad credit loan will vary from lender to lender. Personal loans typically range anywhere from $1,000 to $50,000, though certain lenders may offer even smaller or larger loans in some cases.




            </Typography>
            
          </AccordionDetails>
        </Accordion>



        
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded4 ? <RemoveIcon sx={{ color: '#131F30', [theme.breakpoints.down('sm')]: { fontSize: '16px'}  }} /> : <AddIcon sx={{ color: '#454545', [theme.breakpoints.down('sm')]: {fontSize: '16px'}  }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545', [theme.breakpoints.down('sm')]: { fontSize: '14px' }  }}
            onClick={() => setExpanded4(!expanded4)} 
          >
          What are the potential risks associated with bad credit loans?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Regrettably, individuals with bad credit who obtain a personal loan often face higher interest rates. This can exacerbate financial challenges and make it difficult to escape debt, especially for those already struggling financially. If you find yourself overwhelmed by debt, exploring alternatives such as bankruptcy may be necessary.

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
         Can debt consolidation expedite my journey out of debt?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            There's no such thing as a no-credit-check loan. However, you may come across predatory offers from unscrupulous lenders that impose exorbitant interest rates or unfavorable terms (or both), and may require collateral such as your vehicle or next paycheck. These products are commonly referred to as payday loans.              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>

              Although payday loans don't necessitate a credit check, they frequently entail triple-digit APRs and brief repayment periods. Given the ease of rolling over the original payday loan into a new one, individuals risk becoming trapped in an endless cycle of debt that proves difficult to break free from.            </Typography>
            
          </AccordionDetails>
        </Accordion>



  



      </Grid>
    </Box>
  </Container>
  </>
  
  )
}

export default QandA3