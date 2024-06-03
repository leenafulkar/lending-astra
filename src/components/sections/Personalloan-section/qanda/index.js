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
           What purposes can I use a personal loan for?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            With a personal loan, most lenders will allow you to use your money to pay for almost anything. Whether you need to consolidate your debt, pay off unexpected medical expenses or make repairs at home, a personal loan may help you meet your financial goals.
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
          What do I need to qualify for a personal loan?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            <Link href="#" sx={{textDecoration:'none'}}>Personal loan requirements</Link> vary by lender, but most lending institutions will typically analyze your credit score, your income and any other debts you have out in your name. You should also come prepared with the following information, as it could impact eligibility: the purpose of your loan, how much money you want to borrow and your preferred repayment schedule.
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
        What is the highest loan amount available to me?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Personal loan amounts typically range from $1,000 to $50,000. However, some lenders, such as BHG Money, offer loan amounts as large as $200,000. The LendingTree personal loan marketplace offers loan amounts up to $50,000.
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
       Is it possible to secure a loan with poor credit or without any credit history?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            If you have less-than-ideal credit, you may still qualify for a <Link href="#" sx={{textDecoration:'none'}}>bad-credit personal loan</Link>, though your lender is likely to charge a high APR. Alternatively, you may be able to get a <Link href="#" sx={{textDecoration:'none'}}>personal loan with a cosigner</Link> who has good credit to access more attractive rates.
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
          What paperwork is necessary to complete a personal loan application?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            When applying for a personal loan, you’ll need to provide proof of income and employment, bank account information and proof of other debt. You’ll also need to verify your identity by providing a government-issued identification to your lender.
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
        What are some viable substitutes for personal loans?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Common <Link href="#" sx={{textDecoration:'none'}}></Link>alternatives to personal loans include credit cards, lines of credit, home equity loans and 401(k) loans. While these options also come with interest and fees, one of these different financing opportunities may be a better fit for your situation. For instance, if you aren’t sure how much money you need, a credit card with access to a line of credit may be a better fit.
            </Typography>
            
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
          Is it possible to refinance a personal loan?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Yes — you can <Link href="#" sx={{textDecoration:'none'}}>refinance a personal loan</Link> if you want to change the terms. Refinancing allows you to assess an old debt and potentially qualify for conditions that better suit your current financial position, such as lower interest rates or monthly payments.
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