import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid , Link, Typography} from '@mui/material';
import '../qanda/index.css'





const QandA = () => {
  const [expanded0, setExpanded0] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  return (
    <><Container sx={{ display: 'flex', justifyContent: 'center', marginTop:'40px' }}> <Typography 
    sx={{color:'#101F30', fontSize:"34px", margin:'0px 0px 40px', fontWeight:'bold' }}
    > Frequently asked questions</Typography>
</Container>
    <Container>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

   
      <Grid>
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded0 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded0(!expanded0)} 
          >
            What are the various purposes for which I can utilize a personal loan?
           </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Most lenders offer flexibility with personal loans, allowing you to use the funds for a wide range of purposes. Whether you're consolidating debt, covering unexpected medical bills, or making home repairs, a personal loan can be a versatile tool to achieve your financial objectives.
            </Typography>
            
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px'}}>
          <AccordionSummary
            expandIcon={expanded1 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded1(!expanded1)} 
          >
           What are the eligibility requirements for obtaining a personal loan?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Personal loan requirements vary by lender, but most lending institutions will typically analyze your credit score, your income and any other debts you have out in your name. You should also come prepared with the following information, as it could impact eligibility: the purpose of your loan, how much money you want to borrow and your preferred repayment schedule.


         </Typography>
            
          </AccordionDetails>
        </Accordion>



        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded2 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded2(!expanded2)} 
          >
             What is the maximum loan amount I can access?
           </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Personal loan amounts commonly vary from $1,000 to $50,000, though certain lenders like BHG Money extend offerings up to $200,000. Within the LendingTree personal loan marketplace, loans can reach up to $50,000.
            </Typography>
            
          </AccordionDetails>
        </Accordion>


        
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded3 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded3(!expanded3)} 
          >
             Can I obtain a loan with a low credit score or without any credit history?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Even with less-than-perfect credit, you might still be eligible for a bad-credit personal loan, albeit with a higher APR. Another option is securing a personal loan with a cosigner who has good credit, which could grant you access to more favorable interest rates.
            </Typography>
            
          </AccordionDetails>
        </Accordion>



        
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px' }}>
          <AccordionSummary
            expandIcon={expanded4 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded4(!expanded4)} 
          >
         What documentation is required to finalize a personal loan application?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            When seeking a personal loan, you'll typically need to furnish evidence of income and employment, details of your bank accounts, and documentation regarding any existing debts. Additionally, you'll be required to confirm your identity by presenting a government-issued ID to your lender.
            </Typography>
            
          </AccordionDetails>
        </Accordion>



          
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px'}}>
          <AccordionSummary
            expandIcon={expanded5 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded5(!expanded5)} 
          >
           What are some alternative options to consider instead of personal loans?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Popular alternatives to personal loans include credit cards, lines of credit, home equity loans, and 401(k) loans. Each of these alternatives carries its own set of interest rates and fees. Depending on your specific needs, one of these financing options might be more suitable for your circumstances. For example, if you're uncertain about the exact amount of funds required, a credit card with access to a line of credit could be a more appropriate choice.            </Typography>
            
          </AccordionDetails>
        </Accordion>



  
        <Accordion className='accordionn-borderr' sx={{ boxShadow: 'none', maxWidth: '840px'}}>
          <AccordionSummary
            expandIcon={expanded6 ? <RemoveIcon sx={{ color: '#131F30' }} /> : <AddIcon sx={{ color: '#454545' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accordionn-headdd'
            sx={{ color: '#454545' }}
            onClick={() => setExpanded6(!expanded6)} 
          >
          Can personal loans be refinanced?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Absolutely, you can refinance a personal loan to modify its terms. This process enables you to review an existing debt and potentially qualify for more favorable conditions that align with your current financial situation, such as reduced interest rates or monthly payments.
            </Typography>
            
          </AccordionDetails>
        </Accordion>



      </Grid>
    </Box>
  </Container>
  </>
  
  )
}

export default QandA