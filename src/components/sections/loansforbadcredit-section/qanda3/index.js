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
          What's the easiest loan to get with bad credit?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            The easiest way to get a loan if you have bad credit may be to seek a payday loan or <Link href="#" sx={{textDecoration:'none'}}>pawn shop loan</Link>, since you’re not required to submit to a credit check for either. However, it’s typically best to avoid these types of loans, as they can be predatory and often involve exorbitant fees and high interest rates. Instead, consider applying for a loan with a reputable lender that offers personal loans to borrowers with bad credit.
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
          Can you get a personal loan with a 550 credit score?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            While many trustworthy lenders won’t offer you a personal loan if you have a credit score of 550 or lower, there are other ways you may be eligible to get a loan.          
             </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            <span sx={{fontWeight:'bold'}}>Apply with a co-borrower: </span> Some lenders give consumers the option to submit a joint application. In this instance, the primary borrower can ask a loved one with a higher credit score to serve as a co-borrower, which can help lower their risk in the eyes of lenders.          
            </Typography>
          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
          <span sx={{fontWeight:'bold'}}>Apply for a secured loan: </span>If you aren’t able to find a co-borrower, applying for a secured loan is another route you can take. For these types of loans, you’ll have to offer up collateral — such as a vehicle or bank account — to increase your creditworthiness. If you default on a secured loan, however, your lender can legally seize your collateral.          
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
          What are the best personal loan companies for bad credit?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            The list above outlines what we believe to be some of the best companies for loans for bad credit. To apply for a loan with the lenders mentioned in this article, you’ll typically need to submit to a credit check and verify your identity, address, income and employment status.            </Typography>
            
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
          What are the risks with bad credit loans?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Unfortunately, if you have bad credit and you receive a personal loan, chances are that you may be paying higher rates. This can make it more challenging to <Link href="#" sx={{textDecoration:'none'}}>get out of debt</Link>, particularly if you’re already struggling financially. If you find yourself buried in debt, you can consider other options, such as <Link href="#" sx={{textDecoration:'none'}}>bankruptcy</Link>.

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
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            There is no such thing as a <Link href="#" sx={{textDecoration:'none'}}>no-credit-check loan</Link>. What you may encounter are predatory offers from unscrupulous lenders who’ll charge you exorbitant interest rates or offer unfavorable terms (or both), and require you to put up collateral, like your vehicle or next paycheck. These products are commonly known as payday loans.
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>

            While payday loans don’t require a credit check, they do often come with triple-digit APRs and short repayment periods. Because it can be easy to roll over your original payday loan into a new one, you could get stuck in an infinite cycle of debt that’s hard to escape.
            </Typography>
            
          </AccordionDetails>
        </Accordion>



  



      </Grid>
    </Box>
  </Container>
  </>
  
  )
}

export default QandA3