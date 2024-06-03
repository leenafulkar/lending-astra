import React, { useState } from 'react'
import { Container, Typography, Box, Grid, styled, Paper, Link, Button} from '@mui/material'
import lightstream from '../../../../assets/lightstream.webp'
import PenFed_logo from '../../../../assets/PenFed_Logo_RGB-300x76-1.webp'
import Discover_Personal_loans_logo from '../../../../assets/Discover-Personal-Loans-Logo-as-of-2023.webp'
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp'
import Sofi_logo from '../../../../assets/sofilogonew.webp'
import Bestegg_logo from '../../../../assets/Best-Egg-2023-200x44-1.webp'
import BHGmoney_logo from '../../../../assets/bhg-money-logo-300x87-1.webp'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';








const BlogLender = () => {


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
       
       <Typography
              direction={{ xs: "column", md: "column" }}
              sx={{
                fontSize: { xs: "25px", md: "27px" },
                textAlign: "center",
                marginTop: { xs: "20px", md: "40px" },
                fontFamily: "'Lato', sans-serif",
                
              }}
            >Personal loan refinancing lenders at a glance
             
            </Typography>
    {/* /////////////////////////////////////////////////////////////////////////// */}
    <Container sx={{marginTop:'40px'}}>
        <img src={lightstream} alt="img" width={170} height={41} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Best for excellent credit borrowers
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
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>$5,000 - $100,000***</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>24 to 84 months**</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>None</Item>
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
          Autopay rate discount</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Wide range of loan terms available</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Same-day funding available</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not an option for bad credit borrowers

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Higher minimum loan amount

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No ability to prequalify

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
    If you're not looking to refinance an existing LightStream loan, this lender can be a great option for your refinancing needs. For qualified borrowers, LightStream provides several benefits, including loan amounts up to $100,000, interest rate discounts, and the possibility of same-day funding.
   </Typography> 
   <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

   However, LightStream requires good to excellent credit, making it less suitable for those with lower credit scores. Additionally, the company does not offer a prequalification option, which can make it difficult to compare rates with other lenders.   
   </Typography>
   <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

   Read our full LightStream personal loan review.</Typography>
<Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

**Your loan terms, including APR, may vary based on the loan purpose, amount, term length, and your credit profile. Excellent credit is required to qualify for the lowest rates. The quoted rate includes an AutoPay discount, which is available only before loan funding. Rates without AutoPay are 0.50% higher. Loan approval is subject to credit review. Conditions and limitations apply. Advertised rates and terms are subject to change without notice. Example: Monthly payments for a $10,000 loan at 5.99% APR with a 3-year term would be $304.17 per month. Truist Bank is an Equal Housing Lender. © 2024 Truist Financial Corporation. Truist, LightStream, and the LightStream logo are service marks of Truist Financial Corporation. All other trademarks are the property of their respective owners. Lending services are provided by Truist Bank.</Typography>
<Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

*** While LightStream offers loans up to $100,000, LendingTree marketplace customers will only find loan amounts up to $50,000.


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
          How to qualify
        </AccordionSummary>
        <AccordionDetails>
       <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
       In addition to requiring a good or excellent credit score, LightStream expects its borrowers to have a strong payment history, a low debt-to-income ratio, available assets, and at least five years of credit history.        
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
          See Personalized Results
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
          Lower maximum APR

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No origination fee

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Offers joint applications


         </Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Low maximum loan amount


         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Credit union membership required




         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High minimum credit score requirement

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
    If you're looking to refinance with a small personal loan, consider PenFed Credit Union. This lender offers competitive annual percentage rates (APR) on loan amounts up to $50,000. Additionally, you can lower your interest rate by submitting a joint loan application.
</Typography>   
 <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

 However, at least one borrower must have a high credit score to qualify, and you will need to join the credit union to receive your loan funds. </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>

Read our full<Link href="#" sx={{textDecoration:'none'}}> PenFed Credit  personal loan review</Link>.
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
         How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         Unlike some other credit unions, anyone can become a member of PenFed. To establish membership, you need to complete an online application, open a savings account, and fund it with a $5 deposit. 
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
          See Personalized Results
        </Button>
    </Container>




      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Discover_Personal_loans_logo} alt="img" width={170} height={80} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Discover: Best for repayment assistance options
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
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>None</Item>
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
          Repayment assistance options available for borrowers who are having trouble making payments</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Competitive APR</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No origination fee

           </Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Low maximum loan amount</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Steep late payment fee ($39)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High minimum credit score requirement</Item>


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
    Borrowers seeking reassurance in case of unexpected events like job loss should consider Discover. Discover offers repayment assistance options to help eligible borrowers struggling with their payments. Additionally, the company provides competitive APRs and charges no upfront fees.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    However, Discover's maximum loan amount is relatively low, and its minimum credit score requirement is quite high, which may not suit all borrowers. Additionally, you'll incur a steep late payment fee if your payment is late.
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
          How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify for a Discover personal loan, you must meet the company's credit score requirements and have a household income of at least $40,000. Additionally, you need to be at least 18 years old and have a valid Social Security number.

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
          See Personalized Results
        </Button>
    </Container>







     
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Upgrade_logo} alt="img" width={170} height={40} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Upgrade: Best for bad credit borrowers
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
          Low minimum credit score requirement</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Interest rate discounts available</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Offers the opportunity to apply with a co-borrower</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High maximum APR</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges late fees ( $10)</Item>
          

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
    If you're in need of a bad credit loan, Upgrade may be a suitable lender for you. With a minimum credit score requirement of just 580 and the option to apply with a co-borrower, it's accessible to many borrowers. While Upgrade's APR can be relatively high, there are opportunities to reduce it with available discounts.    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
    Keep in mind that if you choose this option, you may incur significant additional fees. Upgrade imposes an origination fee that can reach up to 9.99%, along with a $10 fee for late payments.    </Typography>
    
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
          How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify for an Upgrade personal loan, you must be of legal age in your state (18 or 19). Additionally, you must be a U.S. citizen, a permanent resident, or residing in the U.S. with a valid visa. You also need to have a verifiable bank account and a working email address.
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
          See Personalized Results
        </Button>
    </Container>










      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Sofi_logo} alt="img" width={170} height={84} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >SoFi: Best for same-day funding
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
          High maximum loan amount</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Offers same-day funding</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Interest rate discounts available</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Higher minimum loan amount</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Must accept origination fee for lowest APRs</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Higher minimum credit score requirement</Item>


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
    One of SoFi’s standout advantages is its quick funding process, enabling borrowers to access funds on the same day they're approved for a loan. Furthermore, SoFi boasts minimal fees; there are no late fees or prepayment penalties. While SoFi's origination fee is discretionary, opting for it grants access to the lender's lowest APRs.
    </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
    Keep in mind that SoFi has a relatively high minimum loan amount of $5,000, which means individuals seeking small loans may need to explore other options. Additionally, with a minimum credit score requirement of 680, you'll need a good credit score to qualify for a loan with SoFi.
    </Typography>
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
         How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         Apart from the minimum credit score requirement of 680, SoFi mandates proof of employment, an employment offer starting within 90 days, or income from alternative sources. Additionally, you must be a U.S. citizen, permanent resident, or non-permanent resident.            </Typography>

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
          See Personalized Results
        </Button>
    </Container>









      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <Container sx={{marginTop:'40px'}}>
        <img src={Bestegg_logo} alt="img" width={170} height={37} />
         
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'27px',  textAlign:'left', margin:'20px 0px 30px',  fontFamily: "'Lato', sans-serif"}}
        >Best Egg:Best for debt consolidation
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
          Will pay your creditors directly</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Allows prequalification</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Option to choose a secured loan</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not available in all states</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          No joint loan option</Item>


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
    If you're considering refinancing your loan for debt consolidation, Best Egg is worth exploring. The company's Direct Pay feature simplifies the process by paying your creditors directly. Additionally, Best Egg provides secured loans, which may offer a better interest rate by utilizing your home's fixtures (for homeowners) or vehicle equity as collateral.
     </Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
    Keep in mind that Best Egg imposes a mandatory origination fee on all its loans, and its loan offerings are not accessible in every state. Residents of Iowa, Vermont, West Virginia, and U.S. territories are unable to obtain a Best Egg loan.
    </Typography>
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
         How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         To qualify as a Best Egg borrower, you must reside in the U.S. and be a U.S. citizen or permanent resident. Loans are unavailable to residents of Iowa, Vermont, West Virginia, Washington D.C., or U.S. territories. Additionally, borrowers must meet the age requirements to accept a loan in their state, possess a personal checking account, have a valid email address, and provide a physical address (not a P.O. Box).

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
          See Personalized Results
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
          Wide range of loan amounts available</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Longer loan terms available</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Offers opportunity for prequalification</Item>
         
          
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          High interest rates</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Charges an origination fee</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Longer funding times (up to 5 days)</Item>


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
    When seeking to refinance a substantial personal loan, BHG Money could be an ideal choice. With loan amounts extending up to $200,000, this lender provides ample funding to meet your refinancing requirements. Additionally, BHG Money offers prequalification, simplifying the process of assessing your eligibility, and boasts a diverse range of loan terms to accommodate various preferences.

</Typography>
    <Typography  sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545', marginBottom:'25px'}}>
    However, BHG Money's interest rates tend to be on the higher side, and the lender imposes an origination fee. Additionally, completing your funding request with BHG Money may take up to five days.
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
         How to qualify
        </AccordionSummary>
        <AccordionDetails>
         <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px', color:'#454545' , marginBottom:'25px'}}>
         BHG Money lacks transparency regarding its eligibility criteria. However, besides meeting the minimum credit score requirement of 660, you must furnish pay stubs as proof of income verification. Additional documentation may also be necessary, contingent upon your overall creditworthiness.       
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
          See Personalized Results
        </Button>
    </Container>




    
    </div>
  )
}

export default BlogLender