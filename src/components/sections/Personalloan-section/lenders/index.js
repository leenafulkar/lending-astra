import React, { useState } from 'react'
import { Container, Typography, Box, Grid, styled, Paper, Link, Button} from '@mui/material'
import Reach_Financial_logo from '../../../../assets/Reach_Financial_logo.webp'
import lightstream from '../../../../assets/lightstream.webp'
import Upstart_logo from '../../../../assets/Upstart-logo.webp'
import PenFed_logo from '../../../../assets/PenFed_Logo_RGB-300x76-1.webp'
import Discover_Personal_loans_logo from '../../../../assets/Discover-Personal-Loans-Logo-as-of-2023.webp'
import LendingPoint_logo from '../../../../assets/LendingPoint-logo-2024-170x64-1.webp'
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp'
import Lendingclub_logo from '../../../../assets/LendingClub-1-e1615271046151.webp'
import Sofi_logo from '../../../../assets/sofilogonew.webp'
import Prosper_logo from '../../../../assets/prosper.webp'
import Bestegg_logo from '../../../../assets/Best-Egg-2023-200x44-1.webp'
import Aachieve_logo from '../../../../assets/Achieve-2023-2048x509.webp'
import Avant_logo from '../../../../assets/Avant-2023-2048x286.webp'
import Happymoney_logo from '../../../../assets/Happy-Money-logo.webp'
import BHGmoney_logo from '../../../../assets/bhg-money-logo-300x87-1.webp'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import './index.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';








const Lenders = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


      const [expanded, setExpanded] = useState([ false, false]);

  return (
    <div>
        <Container sx={{marginTop:'40px'}}>
        <img src={Reach_Financial_logo} alt="img" width={150} height={66} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Reach Financial: Best for consolidating debt
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>5.99% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$3,500 - $40,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>0.00% - 8.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>Not specified</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Access your complimentary monthly credit score</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Ability to change your due date</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Fast funding</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May charge an origination fee of up to 8.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Limited loan use</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Doesn't offer joint applications</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
           >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
        Reach Financial offers personal loans specifically for debt consolidation and credit card refinancing to borrowers with good credit scores. This lender offers competitive rates and terms, free monthly access to your credit score and may fund your loan in as few as 24 hours.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Reach Financial charges origination fees that may be as high as 8% of your loan amount, and its maximum APR is higher than some competitors at 35.99%.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Reach Financial personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify for a Reach Financial personal loan, you’ll need to meet the following criteria:         </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Minimum annual income of $20,000
         <br/><br/>
         2.&nbsp;&nbsp;Must not live in the following states: Colorado, Connecticut, Maine, Mississippi, New Jersey, Nevada, Oregon, Rhode Island, Tennessee, Utah, Vermont, West Virginia or Wyoming

         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>




    {/* /////////////////////////////////////////////////////////////////////////// */}
    <Container sx={{marginTop:'40px'}}>
        <img src={lightstream} alt="img" width={170} height={41} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >LightStream: Best for applicants with excellent credit
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>6.99% - 25.49%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>	$5,000 - $100,000**</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>	24 to 84 months*</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>No origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>Not specified</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Doesn’t charge any fees</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Large maximum loan amounts ($100,000)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Competitive interest rates (6.99% - 25.49%)</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Doesn’t offer prequalification

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May not use funds for education or business purposes

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Those with low credit scores won’t qualify

         </Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    LightStream doesn’t specify its exact personal loan requirements, but it’s clear that you’ll need to have a robust credit score and history to qualify. This lender is a no-fee personal loan company that offers same-day funding. LightStream also offers a rate discount if you sign up for autopay, and backs its personal loans with a Loan Experience Guarantee. Unlike many personal loan companies, however, LightStream does not allow consumers to check if they prequalify. Instead, if you want to see your potential rates and terms, you’ll have to submit to a hard credit pull, which can cause your credit score to go down.
   </Typography> 
   <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

Read our full<Link href="#" sx={{textDecoration:'none'}}> LightStream personal loan review</Link>.</Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         LightStream doesn’t offer specifics on its personal loan requirements; however, you will need a high credit score to be eligible.</Typography> 
                 <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'13px', color:'#454545' , marginBottom:'25px'}}>
                 *Your loan terms, including APR, may differ based on loan purpose, amount, term length, and your credit profile. Excellent credit is required to qualify for lowest rates. Rate is quoted with AutoPay discount. AutoPay discount is only available prior to loan funding. Rates without AutoPay are 0.50% points higher. Subject to credit approval. Conditions and limitations apply. Advertised rates and terms are subject to change without notice. Payment example: Monthly payments for a $10,000 loan at 5.99% APR with a term of 3 years would result in 36 monthly payments of $304.17. Truist Bank is an Equal Housing Lender. © 2024 Truist Financial Corporation. Truist, LightStream, and the LightStream logo are service marks of Truist Financial Corporation. All other trademarks are the property of their respective owners. Lending services provided by Truist Bank.
        
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>





    {/* //////////////////////////////////////////////////////////////////////////////// */}
    <Container sx={{marginTop:'40px'}}>
        <img src={Upstart_logo} alt="img" width={150} height={33} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Upstart: Best for building credit
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>7.80% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$1,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>	36 and 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>0.00% - 12.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>300</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Competitive interest rates (starting at 7.80%)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May receive funds in one business day</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May work with low-credit borrowers

         </Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High maximum interest rate (35.99%)

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Limited repayment terms (36 and 60 months)



         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges origination fees (0.00% - 12.00%)

         </Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Upstart is a worthwhile option for applicants with thin or not-great credit files. It sometimes stamps approval for borrowers who are credit invisible or don’t have long enough credit histories to have a credit score. If you want to add to your credit report, you can use a personal loan to build credit — as long as you consistently make your payments on time. However, you may get stuck with an origination fee of up to 12.00% — much higher than what other lenders charge. Plus, Upstart only offers two repayment duration terms: 36 and 60 months. Certain states have higher minimum borrowing amounts; for example, borrowers in Massachusetts must borrow a minimum of $7,000.   </Typography> 
   <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

Read our full<Link href="#" sx={{textDecoration:'none'}}> Upstart personal loan review</Link>.</Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To receive a personal loan from Upstart, you’ll need to fit the following criteria:
            </Typography>
            <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
            1.&nbsp;&nbsp;Be a U.S. citizen or permanent resident living in the U.S.
           </Typography>
           <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
           2.&nbsp;&nbsp;Be at least 18 years old
           </Typography>
           <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
           3.&nbsp;&nbsp;Have a consistent income such as a full-time job or one that starts in six months

 
           </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>
    {/* ////////////////////////////////////////////////////////////////////// */}




    <Container sx={{marginTop:'40px'}}>
        <img src={PenFed_logo} alt="img" width={150} height={43} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >PenFed Credit Union: Best for small loan amounts
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>7.99% - 17.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$600 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>	12 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>None</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>	760</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Doesn’t charge origination fees

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Low borrowing amounts ($600)

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Option to apply with a co-applicant


         </Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Will need to become credit union member


         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges a late payment fee




         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Isn’t clear about some of its eligibility criteria


         </Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    PenFed Credit Union offers the <Link href="#" sx={{textDecoration:'none'}}>smallest loan amounts</Link> out of our top personal loan picks. It stands out for its wide range of borrowing options as well as competitive APRs (7.99% – 17.99%) that are much lower than what some competitors offer. Further, PenFed also doesn’t nickel and dime its borrowers with application or origination fees. And while its eligibility requirements may be unclear, customers are allowed to prequalify without affecting their credit score.   
</Typography>    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

Read our full<Link href="#" sx={{textDecoration:'none'}}> PenFed Credit  personal loan review</Link>.</Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         PenFed isn’t transparent about several aspects of its personal loan eligibility requirements; however, this lender may look at credit score, repayment history and income.
 
           </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>




      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Discover_Personal_loans_logo} alt="img" width={170} height={80} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Discover: Best for no origination fees
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>	7.99% - 24.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$2,500 - $40,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>36 to 84 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>No origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>720</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Funding within one business day after loan acceptance</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Competitive interest rates</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No origination fees

           </Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Low maximum borrowing amount</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Borrowers with low credit may not qualify</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Doesn’t offer joint applications</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    If you are looking to consolidate debt, you may find that Discover offers lower rates than your credit cards or other personal loan lenders. Discover can also pay your original creditors directly if you take out a debt consolidation loan. You can get your loan within one business day of closing and avoid paying an origination fee. However, Discover personal loans only go up to $40,000 — so if you’re looking for a large personal loan, you may want to look at lenders that offer higher amounts.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Discover personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To receive a personal loan from Discover, you’ll need to follow these requirements:

        </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Minimum individual or household annual income of $40,000

         <br/><br/>
         2.&nbsp;&nbsp;Have a valid Social Security number


         <br/> <br/> 
         
         3.&nbsp;&nbsp;Be at least 18 years old

         <br/><br/>
         4.&nbsp;&nbsp;Verify household income and employment history


         <br/> <br/> 
         
         5.&nbsp;&nbsp;Have a verifiable bank account

         <br/><br/>
         6.&nbsp;&nbsp;Provide creditor information for debt consolidation loans



          
         
         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>







      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={LendingPoint_logo} alt="img" width={170} height={64} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >LendingPoint: Best for mid-sized expenses
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>7.99% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$2,000 - $36,500</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 72 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>Up to 10%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>660</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          May receive funds within one business day of approval</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Flexible loan terms (24 to 72 months)

          </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No prepayment penalties</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee of Up to 10%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Low maximum loan amount ($36,500)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not available in Nevada or West Virginia</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    With more accessible eligibility requirements, LendingPoint may be best for borrowers with less-than-stellar credit who need small loans to be repaid on a faster timetable. Because of its low maximum loan amount, this lender may also be best for those looking to make small to mid-sized purchases. While there are no application or prepayment fees, you could be charged a hefty origination fee — Up to 10% — depending on your home state. In addition, LendingPoint doesn’t offer joint or cosigner loans.
     </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>LendingPoint personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         If you want to qualify for a loan with LendingPoint, you’ll need to meet the following criteria:      </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Must be at least 18 years old
         <br/><br/>
         2.&nbsp;&nbsp;Must provide government-issued form of photo ID

         <br/> <br/> 
         3.&nbsp;&nbsp;Must have a Social Security number
         <br/><br/>
         4.&nbsp;&nbsp;Must have income of at least $40,000

         <br/> <br/> 
         5.&nbsp;&nbsp;Must have a verifiable personal bank account
         <br/><br/>
         6.&nbsp;&nbsp;Must not live in Nevada or West Virginia

         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>










      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Upgrade_logo} alt="img" width={170} height={40} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Upgrade: Best for flexible loan term durations
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.49% - 35.99% </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$1,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 84 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>1.85% - 9.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>580</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Low credit score requirement</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Loan terms up to 84 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May receive funds within one business day of approval</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Origination fee as high as 9.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High maximum APR of up to 35.99%</Item>
          

        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    With fast funding and loan terms up to 84 months, Upgrade may be an attractive option for those looking for a quick loan with long repayment terms. This lender also has a low credit score requirement, which may make it easier for those with poor credit to qualify. Keep in mind that if you take out an Upgrade personal loan, you may have to pay an origination fee up to 9.99% of your loan amount — much higher than what some lenders may charge.    </Typography>
    
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Upgrade personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         Aside from its 580 credit score requirement, Upgrade also specifies that consumers will need to meet the following criteria:

    </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Must be at least 18 years old

         <br/><br/>
         2.&nbsp;&nbsp;Must be a U.S. citizen, permanent resident or living in the U.S. with valid visa


         <br/> <br/> 
         3.&nbsp;&nbsp;Must verify your bank account

         <br/><br/>
         4.&nbsp;&nbsp;Must have a valid email

         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>










      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Lendingclub_logo} alt="img" width={170} height={35} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >LendingClub: Best for applying with a co-borrower
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.98% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$1,000 - $40,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>3.00% - 8.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>600</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Option to file a joint application</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

            Small loan amounts available</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

            Can pay old creditors directly with debt consolidation loans</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

              High maximum APR of 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

            Charges origination fee of 3.00% - 8.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

            Funding can take several days</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    This lender’s easy prequalification process makes it worth considering — but don’t be surprised to find a lower rate or origination fee elsewhere. If you have a low credit score, however, LendingClub offers the option to apply with a co-applicant, which may make it easier to qualify for a personal loan. Keep in mind that if you’re unable to repay your loan, however, your co-applicant may also be held legally responsible for the remaining balance.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>LendingClub personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify for a LendingClub personal loan, you’ll need to be a U.S. citizen, permanent resident or someone living in the U.S. with a valid, long-term visa. You’ll also need to verify the following information:

</Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Your identity

         <br/><br/>
         2.&nbsp;&nbsp;Your bank account


         <br/> <br/> 
         3.&nbsp;&nbsp;Your income


         <br/><br/>
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>










      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Sofi_logo} alt="img" width={170} height={84} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >SoFi: Best for overall experience
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.99% - 29.99% </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$5,000 - $100,000*</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 84 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>0.00% - 7.00% (optional)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>680</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Doesn’t charge any required fees</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May receive funds same day as approval</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Loan amounts as high as $100,000</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Those with low credit may not qualify</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No physical branches</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High minimum loan amount ($5,000)</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Overall, SoFi offers the most beneficial options for borrowers — these include a wide range of borrowing amounts and repayment terms, highly competitive APRs, no required fees and clear borrowing requirements. This lender also offers same-day funding. </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Sofi personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         SoFi requires that you have some kind of consistent income. Borrowers must be employed (or at least have a job offer to start within 90 days) or receive income from other sources. U.S. citizens, permanent residents and nonpermanent residents may apply.
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>








      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Prosper_logo} alt="img" width={170} height={27} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Prosper: Best for applicants with low credit scores
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.99% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$2,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>1.00% - 7.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>560</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Allows for co-applicants</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Flexible loan amounts ($2,000 - $50,000)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No prepayment penalties</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee (1.00% - 7.99%)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Funding may take up to three days</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not available in Iowa or West Virginia</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    With a straightforward “check your rate” option, Prosper is worth consideration among borrowers who don’t have excellent credit and want to use a co-borrower. While this lender can provide funding within one business day, it can take up to three, depending on your bank. You may also have to pay a 1.00% - 7.99% origination fee when taking out a Prosper personal loan. </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Prosper personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To receive a personal loan from Prosper, you and your co-applicant (if you have one) will need to meet the following eligibility requirements:

    </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Be a U.S. citizen

         <br/><br/>
         2.&nbsp;&nbsp;Have a personal bank account


         <br/> <br/> 
         1.&nbsp;&nbsp;Have a Social Security number
         <br/><br/>
         2.&nbsp;&nbsp;Can’t live in Iowa or West Virginia

         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>








      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Bestegg_logo} alt="img" width={170} height={37} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Best Egg: Best for secured and unsecured loan options
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.99% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$2,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>36 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>0.99% - 8.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>600</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Competitive interest rates (8.99% - 35.99%)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Flexible loan amounts of $2,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Funding within 24 hours after loan approval</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not available in Iowa, Vermont, West Virginia or the District of Columbia</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee of 0.99% - 8.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          700 credit score and income of over $100,000 required for lowest APR</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Best Egg customers can receive their personal loan funds within 24 hours after they’re approved. On top of that, this lender’s low credit score requirement may make it easier for borrowers with little or poor credit to access a personal loan. Best Egg also offers consumers the option to pick between a secured or unsecured loan. This lender does not offer loans in Iowa, Vermont, West Virginia, the District of Columbia or the U.S. territories — you should keep geographic availability in mind before you get too far along with any lender. </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Best Egg personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify for a loan with Best Egg, you must meet the following requirements:

    </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Must be a U.S. citizen or permanent resident living in the U.S.
         <br/><br/>
         2.&nbsp;&nbsp;Must be of legal age to accept a loan

         <br/> <br/> 
         3.&nbsp;&nbsp;Must have a verifiable personal checking account and email
         <br/><br/>
         4.&nbsp;&nbsp;Must have a physical address (no post office boxes)

         <br/> <br/> 
         5.&nbsp;&nbsp;Must not live in Iowa, Vermont, West Virginia, the District of Columbia, or U.S. Territories
         <br/><br/>
         
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>








      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Aachieve_logo} alt="img" width={170} height={42} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Achieve: Best for same day credit approval
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>8.99% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$5,000 - $50,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>1.99% - 6.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>620</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Competitive interest rates (8.99% - 35.99%)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Same-day credit approval</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Offers multiple interest rate discount options</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High minimum borrowing amount of $5,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May take up to 72 hours to receive funds after approval</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges origination fee of 1.99% - 6.99%</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Achieve is known for its same-day credit approval decisions and multiple interest rate discounts. This lender offers a discount if you have a co-borrower, retirement assets or allow Achieve to pay your creditors directly if you get a debt consolidation loan. However, this lender’s high minimum borrowing amount of $5,000 may not make it the ideal option for borrowers looking for small personal loans. You’ll also need to pay an origination fee, which can range from 1.99% to 6.99% of your loan balance.

</Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Achieve personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         Other than Achieve‘s minimum credit score requirement, you’ll also have to offer this lender:</Typography> 
                 <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Proof of income
         <br/><br/>
         2.&nbsp;&nbsp;Social Security number


         <br/> <br/> 
         3.&nbsp;&nbsp;Proof of identity

         <br/><br/>
         4.&nbsp;&nbsp;Employment status


         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>








      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Avant_logo} alt="img" width={170} height={23} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Avant: Best for fast loan funding
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>9.95% - 35.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$2,000 - $35,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>12 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>Up to 9.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>580</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Low minimum credit score requirement</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Funding within 24 hours of loan approval

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No prepayment penalty</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May have to pay an origination fee (Up to 9.99%)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Loan amounts only up to $35,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No option to add a co-borrower or cosigner</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    With a low minimum credit score requirement of just 580, consumers with low credit scores may qualify for an Avant personal loan. This lender offers quick funding and you can repay your loan early without worrying about being penalized. However, Avant charges origination fees and consumers don’t have the option to add a co-applicant if they have poor credit.</Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link sx={{textDecoration:'none'}}>Avant Financial personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         Aside from its credit score requirements, Avant also requires that applicants provide recent bank statements and pay stubs.
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>








      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Happymoney_logo} alt="img" width={170} height={24} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Happy Money: Best for refinancing credit card debt
        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>11.72% - 17.99%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$5,000 - $40,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 60 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>1.50% - 5.50%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>640</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Doesn’t charge application or late fees</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No prepayment penalties</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Competitive interest rates (11.72% - 17.99%)</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges origination fee of 1.50% - 5.50%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Funds can only be used for credit card refinancing</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Doesn’t offer joint applications</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    With a simple prequalification process and the promise to work with borrowers who might run into trouble during repayment, Happy Money is worth a look if you’re batting high-interest credit card debt. Happy Money helps consumers with credit card debt who prefer  <Link href="#" sx={{textDecoration:'none'}}>credit card refinancing</Link> via a lower-interest personal loan — but this lender’s APRs can be beat elsewhere if you have good credit.</Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link href="#" sx={{textDecoration:'none'}}>Happy Money personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         One of the positives about Happy Money is how clear it is around its eligibility requirements.  </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Must have no current delinquencies
         <br/><br/>
         2.&nbsp;&nbsp;Must not have a good debt-to-income (DTI) ratio

         <br/> <br/> 
         
         3.&nbsp;&nbsp;Must not live in Massachusetts or Nevada
         <br/><br/>
         4.&nbsp;&nbsp;Must be a U.S. citizen, permanent resident or applicant in the U.S. with a temporary worker visa

         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>







      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={BHGmoney_logo} alt="img" width={170} height={49} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >BHG Money: Best for large loan amounts

        </Typography>
        </Container>


        {/* ----------------------------------------- */}
        <Container
        sx={{
          width: '100%',
          height: 'auto',
        //   padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          textAlign:'left',

          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
       
         
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item  sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>APR range</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan amounts</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold', textAlign:'left' }}>Loan terms</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', fontWeight:'bold' , textAlign:'left'}}>Origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , fontWeight:'bold', textAlign:'left'}}>Min. credit score</Item>

        </Grid>
        <Grid item xs={6}>
        <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>13.39% - 24.91%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$20,000 - $200,000*</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>36 to 120 months</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>3.00% - 4.00%</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>660</Item>

        </Grid>
        
      </Grid>
    </Box>
         
       
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          High maximum loan amount of $200,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Flexible loan terms (36 to 120 months)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Zero prepayment penalties or application fees</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High minimum loan amount of $20,000</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Doesn’t offer loans in Illinois or Maryland</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May take up to five business days to receive funds</Item>


        </Grid>
        
      </Grid>
    </Box>
   
      </Container>
     
    <Container>
    <Box >
      <Grid>
      <Accordion  className='accordionn-border' sx={{boxShadow:'none'}}>
        <AccordionSummary
        expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
        aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([!expanded[0], expanded[1]])}     
        >
          What to know
        </AccordionSummary>
        <AccordionDetails >
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Because of its high minimum loan amount of $20,000, BHG Money may be best for consumers looking for larger loans. In addition to its large loan amounts, BHG Money also allows borrowers the option to choose longer loan term lengths, 36 to 120 months. However, your loan can take up to five days to be funded, and this lender doesn’t offer personal loans in Illinois or Maryland.

</Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
        Read our full <Link href="#" sx={{textDecoration:'none'}}>BHG Money personal loan review</Link>.
    </Typography>
    </AccordionDetails>

      </Accordion>
      <Accordion  className='accordionn-border'sx={{boxShadow:'none'}} >
        <AccordionSummary
          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordionn-headd'
          sx={{color:'#00AEEF'}}
          onClick={() => setExpanded([expanded[0], !expanded[1]])}     

        >
          Eligibility requirements
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         While BHG isn’t entirely clear about its eligibility requirements for a personal loan, here’s what you’ll need when you apply:   </Typography>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

         1.&nbsp;&nbsp;Documents for income verification (pay stubs)
         <br/><br/>
         2.&nbsp;&nbsp;Personal information (name, address and date of birth)

         <br/> <br/> 
         3.&nbsp;&nbsp;Social Security number
         <br/><br/>
         4.&nbsp;&nbsp;Government-issued identification (driver’s license)
         <br/> <br/> 
            </Typography>

        </AccordionDetails>
      </Accordion>
      </Grid>
    </Box>
    <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF', 
            marginTop:'20px', 
            padding:'10px 24px',
            fontWeight:'bold',
            textTransform: 'none',
            fontFamily: "'Lato', sans-serif",
            bgcolor:'#FF704D',
            '&:hover': {
              bgcolor: '#FF471A', 
            }, 
          }}
        >
          See Your Personalized Results
        </Button>
    </Container>




    
    </div>
  )
}

export default Lenders