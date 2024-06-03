import  React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography,Link,Button } from '@mui/material';
import Southeast_logo from '../../../../assets/southeast-financial-credit-union-logo.webp'
import NavyFederal_logo from '../../../../assets/Navy_federal_small-2.webp'
import Penfed_logo from '../../../../assets/PenFed_Logo_RGB-300x76-1.webp'
import Autopay_logo from '../../../../assets/autopay-logo_4-25-2024.png'
import Bankofamerica_logo from '../../../../assets/bank-of-america-logo-1-1024x458.webp'
import Capitalone_logo from '../../../../assets/capital-one-logo_April-2024.png'
import PNC_logo from '../../../../assets/PNC-Bank-logo-1024x614.webp'
import DCU_logo from '../../../../assets/dcu.webp'
import Carvana_logo from '../../../../assets/carvana-logo_april-2024.jpg'
import Lightstream_logo from '../../../../assets/lightstream.webp'
import Chase_logo from '../../../../assets/Chase-logo.webp'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import '../lender4/index.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Lender4 = () => {
    const [expanded, setExpanded] = useState([ false, false]);

  return (
   <><Container sx={{ marginTop: '40px' }}>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>| Southeast Financial Credit Union: Best for short-term car loans
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Southeast_logo} alt="img" width={105} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>4.50%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>12-84 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Up to $100,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Competitive rates for short loan terms</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          College grads may be eligible to borrow even if they have no credit</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Offers Skip-A-Payment program</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Have to become a member to borrow</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          No option to prequalify
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Few brick-and-mortar branches</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              <Link href="#" sx={{ textDecoration: 'none' }}>Credit union car loans</Link>tend to offer the lowest rates, and Southeast Financial Credit Union (SFCU) is no exception. Its rates are especially low on short-term car loans. If you have excellent credit, you could qualify for an APR as low as 4.50% on a 12-month term.
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              If you like to do business in person, though, SFCU might not be the best choice. That is, unless you live in central Tennessee. That’s where all of SFCU’s brick-and-mortar branches are located.
                          </Typography>
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              SFCU has a minimum credit score requirement of 600 but doesn’t offer prequalification. You’ll need to agree to a hard credit hit to see if you’re eligible. You also need to join the credit union before you can borrow.
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              All SFCU members must open a savings account with a deposit of at least $5. To become a member, you must meet one of the requirements below:
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;Make a $5 donation to Autism Tennessee<br /><br />
                              2.&nbsp;&nbsp;Be a current employee or retiree of a Southeast Financial Select Employee Group<br /> <br />
                              3.&nbsp;&nbsp;Be related to a current SFCU member <br /> <br />
                              4.&nbsp;&nbsp;Live, work, worship or go to school in certain parts of TN, KY or MS <br /> <br />
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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>
          {/* //////////////////////////////////////////////////////////////// */}
          <Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>

                      <Grid item xs={12}>
                          <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                            | Navy Federal Credit Union: Best for those with military connections
                          </Typography>
                      </Grid>
                      <Grid item xs={12}>
                          <img src={NavyFederal_logo} alt="img" width={56.35} height={35} />
                      </Grid>
                      <Grid item lg={2}>
                          <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                          <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>4.54%</Typography>
                      </Grid>
                      <Grid item lg={2}>
                          <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                          <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>36-96 months</Typography>
                      </Grid>
                      <Grid item lg={2}>
                          <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                          <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Not disclosed</Typography>
                      </Grid>

                  </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} marginTop={2}>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                              <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                              Pros</Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Rate discounts for active-duty and retired military</Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Private-party car loans available</Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Long loan terms</Item>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                              <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                              Cons</Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Must have military affiliation to join</Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Doesn’t disclose loan amounts
                          </Item>
                          <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                          Does not specify if it offers bad-credit car loans</Item>
                      </Grid>
                  </Grid>
              </Box>
              <Box>
                  <Grid>
                      <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                          <AccordionSummary
                              expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className='accordionn-headdd'
                              sx={{ color: '#454545' }}
                              onClick={() => setExpanded([!expanded[0], expanded[1]])}
                          >
                              What to know
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              Navy Federal Credit Union (NFCU) gives active-duty and retired military a 0.25% rate discount on auto loans. NFCU offers other unique perks, too. For instance, if you’re on active duty, you can get paid early if you get your paycheck directly deposited into an Active Duty Checking account.                              </Typography>
                              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              Still, like many other car loan lenders, NFCU doesn’t disclose its minimum credit score requirements. It also has strict membership requirements that not everyone will meet.                             
                               </Typography>
                               <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                               Read our full <Link href="#" sx={{textDecoration:'none'}}>Navy Federal Credit Union auto loan review</Link>.                               </Typography>
                          
                          </AccordionDetails>

                      </Accordion>
                      <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                          <AccordionSummary
                              expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              className='accordionn-headdd'
                              sx={{ color: '#454545' }}
                              onClick={() => setExpanded([expanded[0], !expanded[1]])}

                          >
                              How to qualify
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              NFCU membership is open to the following groups:                              </Typography>
                              
                              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                                  1.&nbsp;&nbsp;Active-duty military (any branch)<br /><br />
                                  2.&nbsp;&nbsp;Military retirees, veterans and annuitants<br /> <br />
                                  3.&nbsp;&nbsp;Delayed Entry Program enlistees<br /> <br />
                                  4.&nbsp;&nbsp;DoD Officer candidates, ROTC or reservists<br /> <br />
                                  5.&nbsp;&nbsp;A family member or household member of any of the above You must also open an account with a deposit of $5 or more. <br /> <br />

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
                      marginTop: '20px',
                      padding: '10px 24px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontFamily: "'Lato', sans-serif",
                      bgcolor: '#0069BA',
                      '&:hover': {
                          bgcolor: '#0069BA',
                      },
                  }}
              >
                  See Personalized Results
              </Button>
          </Container>

{/* ////////////////////////////////////////////////////////////////////// */}
<Container sx={{ marginTop: '40px' }}>
<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>

        <Grid item xs={12}>
            <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
              | Navy Federal Credit Union: Best for those with military connections
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <img src={Penfed_logo} alt="img" width={138.69} height={35} />
        </Grid>
        <Grid item lg={2}>
            <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
            <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>5.44%</Typography>
        </Grid>
        <Grid item lg={2}>
            <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
            <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>36-84 months</Typography>
        </Grid>
        <Grid item lg={2}>
            <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
            <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Up to $150,000</Typography>
        </Grid>

    </Grid>
</Box>
<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} marginTop={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                Pros</Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Rate discount for those who use PenFed’s car-buying service</Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Membership is open to everyone</Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Can finance up to 125% of the car’s worth</Item>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                Cons</Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Have to join credit union</Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Must buy through car-buying service for lowest rates
            </Item>
            <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
            Doesn’t specify its minimum credit score</Item>
        </Grid>
    </Grid>
</Box>
<Box>
    <Grid>
        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
            <AccordionSummary
                expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headdd'
                sx={{ color: '#454545' }}
                onClick={() => setExpanded([!expanded[0], expanded[1]])}
            >
                What to know
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                PenFed’s car-buying service can help you save money in two ways. First, you could get cash back and bonuses through the car’s manufacturer. PenFed will also give you a discounted 4.74% APR on your car loan.
                 </Typography>
                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                 Like with any <Link href="#" sx={{textDecoration:'none'}}>credit union auto loan</Link>, PenFed requires you to join before you can borrow. And although PenFed is overall competitive, you have to use its car-buying service to get its lowest APRs.                 </Typography>
                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                 Read our full <Link href="#" sx={{textDecoration:'none'}}> PenFed auto loan review</Link>.                              
                  </Typography>
            
            </AccordionDetails>

        </Accordion>
        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
            <AccordionSummary
                expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headdd'
                sx={{ color: '#454545' }}
                onClick={() => setExpanded([expanded[0], !expanded[1]])}

            >
                How to qualify
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                PenFed doesn’t provide much insight into its credit score requirements. However, PenFed membership is open to everyone. All you have to do is open an account with a $5 deposit and you can apply for a loan.  </Typography>

            </AccordionDetails>
        </Accordion>
    </Grid>
</Box>
<Button
    variant="text"
    sx={{
        fontSize: '16px',
        color: '#FFFFFF',
        marginTop: '20px',
        padding: '10px 24px',
        fontWeight: 'bold',
        textTransform: 'none',
        fontFamily: "'Lato', sans-serif",
        bgcolor: '#0069BA',
        '&:hover': {
            bgcolor: '#0069BA',
        },
    }}
>
    See Personalized Results
</Button>
</Container>

{/* ////////////////////////////////////////////////////////////////////// */}
<Container sx={{ marginTop: '40px' }}> 
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Autopay: Best for bad credit car loans
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Autopay_logo} alt="img" width={157.24} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>5.69%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>24 - 96 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>$2,500-$100,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can qualify with a credit score as low as 550</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can compare multiple offers at once</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Able to check rates without hurting credit</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Maximum APR is not specified</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No mobile app
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Unknown fees</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Applying for auto financing when you have less-than-perfect credit can be a pain. Autopay is an auto loan marketplace that can make the process easier. Fill out one quick form online and you could have multiple offers to compare. Better yet, it works with borrowers with scores as low as 550.  
                           </Typography>       
                         <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                         Note that Autopay’s advertised minimum APR won’t apply to you if you have bad credit. Lenders give their lowest rates to those with the highest credit scores. You’ll need to prequalify to see what kind of rates you might get from Autopay’s lending partners.                            
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}>Autopay marketplace review</Link>.                               
                           </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Autopay is a loan marketplace that connects borrowers to partner lenders. These partners all have different eligibility requirements. To use the marketplace, you must have a credit score of 550 or better. From there, you can prequalify to see what lenders you might be eligible for.
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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
             See Personalized Results
          </Button>
      </Container>

{/* //////////////////////////////////////////////////////////////////////  */}
<Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Bank of America: Best car loan for those who prefer large banks
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Bankofamerica_logo} alt="img" width={78.33} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>5.99%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>48-72 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>From $7,500</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can apply via mobile app</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Don’t have to be a Bank of America customer to be eligible</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No loan documentation fees</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      APR discounts only for current banking members</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Cannot get auto financing at independent dealers
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Cannot finance cheaper used cars due to high minimum loan amount</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Auto financing from a large bank can have its perks. Compared to small, regional banks, large banks tend to have more digital presence. Case in point — you can apply for an auto loan through Bank of America’s mobile app.
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Bank of America auto loans are open to anyone, but only Preferred Rewards members qualify for APR discounts. To be a Preferred Rewards member, you must have an eligible Bank of America personal checking account.                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}>Bank of America auto loan review</Link>.                               </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Bank of America’s borrower requirements are unclear. It does, however, give some guidelines about the cars eligible to be financed. To get a loan, the car you’re buying must:
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;Be less than 10 years old<br /><br />
                              2.&nbsp;&nbsp;Have less than 125,000 miles<br /> <br />
                              3.&nbsp;&nbsp;Be worth at least $6,000<br /> <br />
                              4.&nbsp;&nbsp;Be used for personal use only<br /> <br />
                              5.&nbsp;&nbsp;Not be a commercial heavy-duty truck or van<br /> <br />
                              6.&nbsp;&nbsp;Not have a salvage or branded title<br /><br />

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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See  Personalized Results
          </Button>
      </Container>

{/* ////////////////////////////////////////////////////////////////////// */}
 <Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Capital One: Best car loan for prime and subprime rates
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Capitalone_logo} alt="img" width={96.96} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>6.49%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>36-72 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>From $4,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Competitive rates, regardless of credit score</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Low minimum loan amount</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Auto Navigator tool can make car buying easy</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Must go through a partner dealership</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Live customer support is not available on weekends
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No interest rate discounts</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          According to internal LendingTree data, you could find competitive rates with Capital One whether you have good or bad credit. It also has a low minimum loan amount, so an inexpensive used car isn’t off the table. </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          That said, Capital One won’t finance a car from just anywhere — you have to buy from a partner dealer. However, its Auto Navigator tool can help you find your perfect ride from an eligible dealership.                           
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}> Capital One auto loan review</Link>.                               </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Capital One doesn’t specify its requirements, but our data shows that it works with borrowers on both ends of the credit spectrum. You can check your eligibility by prequalifying on its website.               </Typography>

                      </AccordionDetails>
                  </Accordion>
              </Grid>
          </Box>
          <Button
              variant="text"
              sx={{
                  fontSize: '16px',
                  color: '#FFFFFF',
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>

{/* //////////////////////////////////////////////////////////////////////  */}
<Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | PNC Bank: Best for private-party car loans
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={PNC_logo} alt="img" width={58.33} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>6.69% (with autopay)</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>12-84 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>$5,000-$100,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Private-party auto financing available</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Fast funding</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Rate discount for autopay through a PNC checking account</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Need to apply at a branch, in some cases</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Unclear eligibility requirements
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No smaller loans</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Buying a car from a private party instead of a dealership can save you money, but finding a private-party auto loan can be challenging. PNC might help.
                          </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          This bank offers several types of loans, including private-party car loans. You might even be able to buy a car that isn’t yet fully paid off. As long as the seller comes with you to your loan closing, PNC can use a portion of your loan to pay off the existing loan. Then, you can transfer ownership.    
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           However, unlike PNC’s dealership loans, you’ll need to apply for a private-party auto loan by visiting a branch.                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}>PNC loan review</Link>.                              
                            </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          PNC doesn’t specify its borrower requirements, including minimum credit score. Like other lenders, it’ll probably review your credit history, debt-to-income (DTI) ratio and other factors.
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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>

{/* //////////////////////////////////////////////////////////////////////  */}
<Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Digital Federal Credit Union (DCU): Best for used car loans
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={DCU_logo} alt="img" width={98.31} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>6.74%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Up to 84 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Up to $500,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Same APRs for new and used cars</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can finance up to 130% of the vehicle’s value</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Multiple rate discounts available</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Must join credit union</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Unknown minimum credit score requirements
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Must take hard credit hit to see if you qualify</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Most lenders charge a higher APR on <Link href="#" sx={{textDecoration:'none'}}>used car loans</Link>, but not Digital Federal Credit Union (DCU). Whether you’re buying used or new, you can enjoy the same low rate. If you have excellent credit, you might be able to borrow more than what the car is worth. This could help you cover registration and insurance costs. </Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Like other credit unions, though, you have to become a member to borrow. You must also take a hard credit pull to check your eligibility since you can’t prequalify.
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}>DCU auto loan review</Link>.                              
                            </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          DCU doesn’t specify what credit score it requires for an auto loan. It does provide details about who is eligible for DCU membership. People in the below groups can join DCU:                             </Typography>
                          
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;Certain relatives of current DCU members<br /><br />
                              2.&nbsp;&nbsp;Employees and retirees of participating employers<br /> <br />
                              3.&nbsp;&nbsp;Members of participating organizations<br /> <br />
                              4.&nbsp;&nbsp;Those who live, work, worship or go to school in certain Massachusetts communities<br /> <br />
                              5.&nbsp;&nbsp;People who live in a participating condo association<br /> <br />

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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>

{/* ////////////////////////////////////////////////////////////////////// */}
 <Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Carvana: Best car loan for an online experience
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Carvana_logo} alt="img" width={151.53} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>6.85%</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>36-72 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>From $5,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Fully online car-buying experience</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Might deliver car to your home</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No minimum credit score requirement</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Must purchase through Carvana</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Not available in all states
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can't negotiate car prices</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Carvana’s unique online car-buying experience could be a great choice for the right person. Just hop onto Carvana’s website, find your desired car and apply for financing — all without leaving your home.</Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Still, not everyone will feel comfortable buying a car online. Carvana has a seven-day satisfaction guarantee, but you can’t check out the car in person before buying. Also, it’s important to know that Carvana has been the target of several lawsuits, namely due to tag and titling issues.
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}>Carvana review</Link>.                               </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Compared to some lenders, Carvana’s eligibility requirements are transparent and easy to meet. To borrow, you must:                             </Typography>
                          
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;Be at least 18<br /><br />
                              2.&nbsp;&nbsp;Have no active bankruptcies<br /> <br />
                              3.&nbsp;&nbsp;Make at least $5,100 a year<br /> <br />
                              4.&nbsp;&nbsp;Not live in Alaska or Hawaii<br /> <br />

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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>

{/* ////////////////////////////////////////////////////////////////////// */}
 <Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | LightStream: Best for unsecured car loans
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Lightstream_logo} alt="img" width={200} height={50} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>7.24% (with autopay) </Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>24-84 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>$5,000-$100,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Don’t need to use your car as collateral</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      No restrictions on year, make, model or mileage</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Does not require a down payment</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Must have good to excellent credit</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can’t prequalify
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Not as competitive as some other lenders</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Traditional auto loans use your vehicle as collateral. If you don’t make your payments, your lender can repossess your car. Not with LightStream.</Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          This lender offers unsecured loans, which means it doesn’t require collateral. Instead, your eligibility hinges only on your credit score, assets and borrowing history.                      
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Thanks to a lack of vehicle restrictions and same-day funding, LightStream auto loans can come with little hassle for those who qualify. Still, expect to pay extra for the convenience. LightStream’s auto loan APRs are a little higher than others on this list.              
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}> LightStream auto loan review</Link>.                               </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          LightStream states it only lends to borrowers with good to excellent credit. Below you’ll find some metrics that LightStream says it looks for in approved borrowers:                             </Typography>
                          
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;At least five years of credit history, with a diverse mix of accounts<br /><br />
                              2.&nbsp;&nbsp;Assets such as retirement savings, investment accounts and liquid bank accounts<br /> <br />
                              3.&nbsp;&nbsp;An acceptable DTI ratio<br /> <br />
                              4.&nbsp;&nbsp;A track record of making debt payments on time<br /> <br />

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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container>

{/* //////////////////////////////////////////////////////////////////////  */}
<Container sx={{ marginTop: '40px' }}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                  <Grid item xs={12}>
                      <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 8px' }}>
                        | Chase Bank: Best car loan for dealership purchases
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <img src={Chase_logo} alt="img" width={184.54} height={35} />
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Starting APR</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>Not disclosed</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan terms</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>12-84 months</Typography>
                  </Grid>
                  <Grid item lg={2}>
                      <Typography sx={{ color: '#687073', fontSize: '14px' }}>Loan amounts</Typography>
                      <Typography sx={{ color: '#454545', fontWeight: 'bold', fontSize: '16px' }}>From $4,000</Typography>
                  </Grid>

              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} marginTop={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', textAlign: 'left', fontWeight: 'bold' }}>
                          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Pros</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can get prequalified</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Low minimum loan amount</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Don’t have to make a down payment</Item>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left', fontWeight: 'bold' }}>
                          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          Cons</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Can only be used at partner dealerships</Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Does not advertise APRs
                      </Item>
                      <Item className='black-dot' sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}>
                      Need to know what car you want to buy when applying</Item>
                  </Grid>
              </Grid>
          </Box>
          <Box>
              <Grid>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([!expanded[0], expanded[1]])}
                      >
                          What to know
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Chase Bank offers auto loans at dealerships across the country. So even though you can only use Chase at a partner dealer, you can get prequalified. Not all lenders offer this option. A</Typography>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Unfortunately, Chase doesn’t advertise its rates. You must prequalify to see what APR it might offer you.
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           Read our full <Link href="#" sx={{textDecoration:'none'}}> Chase auto loan review</Link>.                               </Typography>
                      
                      </AccordionDetails>

                  </Accordion>
                  <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                      <AccordionSummary
                          expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className='accordionn-headdd'
                          sx={{ color: '#454545' }}
                          onClick={() => setExpanded([expanded[0], !expanded[1]])}

                      >
                          How to qualify
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                          Chase doesn’t specify what it’s looking for in its borrowers. It does shed some light on the types of vehicles it will finance. Eligible vehicles must:                             </Typography>
                          
                          <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>

                              1.&nbsp;&nbsp;Be less than 10 years old (or less than five years old, if a Tesla)<br /><br />
                              2.&nbsp;&nbsp;Have less than 120,000 miles<br /> <br />
                              3.&nbsp;&nbsp;Not be commercial vehicles<br /> <br />
                              4.&nbsp;&nbsp;Not have branded or salvaged titles<br /> <br />
                              5.&nbsp;&nbsp;Not be used for ridesharing <br /> <br />

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
                  marginTop: '20px',
                  padding: '10px 24px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontFamily: "'Lato', sans-serif",
                  bgcolor: '#0069BA',
                  '&:hover': {
                      bgcolor: '#0069BA',
                  },
              }}
          >
              See Personalized Results
          </Button>
      </Container></>

//////////////////////////////////////////////////////////////////////
  )
}

export default Lender4