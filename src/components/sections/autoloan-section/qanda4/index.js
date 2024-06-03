import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Container, fontWeight } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid , Link, Typography,useTheme} from '@mui/material';
import '../qanda4/index.css'




const QandA4 = () => {
    const theme = useTheme();
  const [expanded0, setExpanded0] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
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
          Where is the optimal location to secure car financing?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Typically, the ideal option for car financing is the lender offering the lowest rates. Credit unions often provide the most competitive APRs, although membership is usually a prerequisite for borrowing.<br/><br/>

            Nonetheless, while low rates are important, they shouldn't be the sole factor in your decision-making process. If your credit score requires improvement, you may need to focus on lenders with more lenient eligibility criteria, such as Carvana.            </Typography>
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
          What currently stands as the top auto loan option?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Auto loan offerings are subject to market fluctuations, resulting in the best option constantly evolving. As of the present moment, Southeast Financial Credit Union boasts the lowest rates on the provided list, commencing with a starting APR of 4.50%.          </Typography>
            
            
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
          What represents the optimal loan term for financing a vehicle?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Shorter loan terms generally come with the most favorable rates. However, opting for a shorter term can result in a higher monthly payment, as you'll have less time to distribute your balance. Utilize our auto loan calculator to assess how varying term lengths can influence your monthly payments.
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
        Is it financially wise to pursue car financing?
          </AccordionSummary>
          <AccordionDetails>
            
          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
          It can be beneficial, but only if you are confident that you can fulfill your obligations.    </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Obtaining an auto loan when you don't already have one can diversify your credit mix, which constitutes 10% of your FICO score. Meanwhile, your payment history comprises 35% of your score, so making timely payments can positively impact your creditworthiness.     </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Conversely, late payments are likely to significantly lower your credit score. Moreover, if you acquire a loan while already burdened with substantial debt, your credit utilization ratio may increase, thereby negatively affecting your score.   </Typography>
            
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
        Do car loan interest rates vary based on income?
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#454545', marginBottom: '25px' }}>
            Typically, yes. In addition to your credit score, lenders consider factors like your annual income and debt-to-income (DTI) ratio. If your debt appears to exceed your income, you may be offered a higher APR, or you might not be approved for a loan at all.          </Typography>
            
          </AccordionDetails>
        </Accordion>



      </Grid>
    </Box>
  </Container>
  </>
  
  )
}

export default QandA4