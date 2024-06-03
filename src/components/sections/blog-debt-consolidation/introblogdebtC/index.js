import React, { useState } from 'react';
import { Stack, Box, Typography, Container, useTheme, Grid,Button,Link } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MajorityOfSurvey from '../majorityofsurvey';
import ExpertTips from '../expert-tips';

const IntroBlogDebtC = () => {
  const [expanded, setExpanded] = useState([false, false]);
  const theme = useTheme();

  return (
    <Container sx={{ marginTop: '40px' }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Stack spacing={2}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                   <Link href="#" sx={{textDecoration:'none',fontSize:'12px',margin:'0px 0px 6px'}}>Debt Consolidation</Link><br/><br/>
                   <Link href="#" sx={{textDecoration:'none',fontSize:'12px',margin:'0px 0px 6px'}}>How does lendingtree earn revenue?</Link><br/><br/>
                    <Typography
                      sx={{
                        fontSize: '40px',
                        color: '#000000',
                        fontWeight: 'bold',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '0px 0px 16px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '27px',
                         
                        },
                      }}
                    >
                     Down the Rabbit Hole: 18% of Disney Visitors Accumulate Debt, Yet Most Remain Unregretful
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid>
                  <Accordion
                    className='accordionn-border'
                    sx={{
                      boxShadow: 'none',
                      border: expanded[0] ? '2px solid #0069ba' : '1px solid',
                      borderRadius: expanded[0] ? '8px' : '0px',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#454545' }} /> : <AddIcon sx={{ color: '#454545' }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        color: '#454545',
                        fontSize: '16px',
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 'bold',
                      }}
                      onClick={() => setExpanded([!expanded[0], expanded[1]])}
                    >
                      Why Choose LendingTree?
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          color: '#454545',
                          fontSize: '16px',
                          marginBottom: '5px',
                         
                        }}
                      >
                       We are dedicated to offering accurate content to help you make informed financial decisions. This content is not commissioned or endorsed by our partners. Please review our <Link href="#">editorial guidelines here</Link>.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Box>
{/* --------------------------------------------------------- */}

                   <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        Disney parks have long upheld the slogan, “Where Dreams Come True,” but those dreams can come with a price.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        As per a LendingTree analysis, the average cost of a one-day, one-park ticket for Disney World in Florida is $141.74. Additionally, findings from a LendingTree survey of nearly 1,550 consumers suggest that some Disney visitors are willing to incur debt to finance a trip to one of the parks.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        We will also delve into the percentage of Disney visitors who regret accumulating debt for their trip and explore the expenses that caught them off guard. Continue reading for further details.
                        </Typography>
                    </Grid>

                    <Grid container spacing={2} sx={{bgcolor:'#DBF8FD',padding:'20px', margin:'0px 0px 30px'}}>
                         <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px',fontWeight:'bold'}}>
                        On this webpage
                        </Typography>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>Main Discoveries</Link><br/><br/>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>The majority of individuals who frequent amusement parks have visited a Disney park.</Link><br/><br/>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>Do Disney visitors incur debt for one-day, one-park tickets averaging over $140?</Link><br/><br/>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>From dining options to entrance fees, here's what ended up costing consumers more than they anticipated.</Link><br/><br/>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>Expert Advice on Managing Debt from Disney Visits</Link><br/><br/>
                        <Link href="#" sx={{textDecoration:'none',color:'#00AEEF',fontSize:'17px',padding:'0px 0px 15px'}}>Research Approach</Link><br/><br/>
                    </Grid>
                    </Grid>

                    <Grid item xs={12} >
                    <Typography sx={{ fontSize: '40px', fontFamily: "'Lato', sans-serif", color: '#101F30',fontWeight:'bold',margin:' 0px 0px 16px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '27px',
                         
                        },}}>
                       Key findings
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Disney Parks are a significant attraction for those who enjoy visiting amusement parks.</span>.Out of the 87% of Americans who have experienced a theme park or amusement park, 74% have explored a Disney park.
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>During the period from November 2022 to October 2023, the average cost of a one-day, one-park ticket for visitors aged 10 and above at Disney World stands at $141.74.</span>A considerable number of Disney attendees may have saved up for their trip, as fewer than 1 in 5 (18%) informed LendingTree that they incurred debt for one or more of these trips.
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>While the enchantment might strain some budgets, 71% of Disney attendees who incurred debt express no regrets. </span>Indeed, 80% of them state their intention to clear their debt within six months or less.
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Those who accumulated debt report that in-park food and beverage expenses (56%) and admission costs (48%) surpassed their initial expectations or budgeted amounts.</span> Although Disney World promotes one-day, one-park ticket prices as starting from $109, an analysis by LendingTree revealed that this lower price is only accessible for 20 days from November 2022 to October 2023. September boasts the lowest average at $126.50, whereas December records the highest average at $149.03.
                        </Typography>
                        </Grid>

                        <MajorityOfSurvey/>
                        <ExpertTips/>


            </Stack>
          </Grid>
{/* //////////////////////////////////////////////////////////////////////// */}
          <Grid item xs={12} lg={3}>
            <Stack spacing={2} sx={{ maxWidth: '100%' }}>
              <Box sx={{ bgcolor: '#101F30', padding: '24px', borderRadius: '8px' }}>
                <Typography
                  sx={{
                    fontSize: '21px',
                    color: '#FFFFFF',
                    fontFamily: "'Lato', sans-serif",
                    margin: '0px 0px 24px',
                    textAlign:'center'
                  }}
                >
            Receive debt consolidation loan offers from up to five lenders within minutes.                </Typography>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:'#FFFFFF'}}>
                    Loan type:
                  </InputLabel><br/>
                  <NativeSelect
                  sx={{bgcolor:'#FFFFFF'}}
                    defaultValue={1}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={1}>Personal</option>
                    <option value={2}>Credit Card</option>
                    <option value={3}>Home Equity</option>
                    <option value={4}>Debt Relief</option>
                  </NativeSelect>
                </FormControl><br/><br/>
                <Button variant="contained" fullWidth sx={{textTransform:'none'}}>View your offers</Button><br/><br/><br/>
                  <Link href="#" sx={{fontSize:'12px',color:'#C6CDD0'}}>Advertising Disclosures</Link><br/>
              </Box>
              <Typography
                      sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '0px 0px 3px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '22px',
                          fontWeight: 'bold',
                        },
                      }}
                    >Debt Resources
                      
                    </Typography>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Debt Consolidation Loan</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Debt consolidation Loans for Bad Credit</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Debt Consolidation Calculator</Link><br/><br/>

            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IntroBlogDebtC;
