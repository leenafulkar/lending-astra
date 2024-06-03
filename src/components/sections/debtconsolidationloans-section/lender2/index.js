import React, { useState } from 'react';
import { Container, Typography, Box, Grid, styled, Paper, Link, Button,Rating } from '@mui/material';
import Reach_Financial_logo from '../../../../assets/Reach_Financial_logo.webp';
import Wellsfargo_logo from '../../../../assets/Wells-Fargo-2023-new-200x21-1.webp';
import lightstream from '../../../../assets/lightstream.webp'
import Upstart_logo from '../../../../assets/Upstart-logo.webp'
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp'
import Sofi_logo from '../../../../assets/sofilogonew.webp'
import Prosper_logo from '../../../../assets/prosper.webp'
import Bestegg_logo from '../../../../assets/Best-Egg-2023-200x44-1.webp'
import Aachieve_logo from '../../../../assets/Achieve-2023-2048x509.webp'
import Avant_logo from '../../../../assets/Avant-2023-2048x286.webp'
import Happymoney_logo from '../../../../assets/Happy-Money-logo.webp'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Lender2 = () => {
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
            <Container sx={{ marginTop: '40px' }}>
                <img src={Reach_Financial_logo} alt="img" width={150} height={66} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Reach Financial: Best for consolidating debt
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                           
                      
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>5.99% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$3,500 - $40,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left'  }}>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>0.00% - 8.00%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left'  }}>Not specified</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Free monthly credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Will send your loan directly to who you owe</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can change loan payment due date</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Loan may come with an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Customer service not available on weekends</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No mobile app</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If time is of the essence, you might want to check out Reach Financial. This lender specializes in quick funding for debt consolidation and <Link href="#" sx={{ textDecoration: 'none' }}>credit card refinancing</Link>. After Reach Financial approves you, your loan may be available to your creditors in as little as 24 hours.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Thanks to an ultra-competitive minimum APR, Reach Financial might be better suited to those with excellent credit. But if your borrowing history is rocky, you may have to pay an origination fee. This is a fee that Reach Financial will deduct from your loan before sending it to you.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Reach Financial personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                        expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                        aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Reach Financial doesn’t shed much light into its eligibility requirements. However, you can prequalify online to see how likely it is that it will approve you.
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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>


            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <Container sx={{ marginTop: '40px' }}>
                <img src={Wellsfargo_logo} alt="img" width={200} height={21} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Wells Fargo: Best for current Wells Fargo customers
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left'}}>7.49% - 23.24%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$3,000 - $100,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>12 to 84 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>No originated fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>Not specified</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>User ratings coming soon</Item>


                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can consolidate up to $100,000 of debt</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No up-front fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Might get funds the next business day</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                History of legal violations</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May charge late fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Must be a Wells Fargo customer</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                          aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Wells Fargo Bank customers may need to look no further than their current bank if they need a debt consolidation loan. Many of the U.S.’ largest banks have gotten out of the personal loan business, but not Wells Fargo. Eligible customers could be eligible to consolidate with an APR starting as low as 7.49%. </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                In 2022, the Consumer Financial Protection Bureau ordered Wells Fargo to pay a $3.7 billion cash settlement for legal violations regarding auto loans, mortgages and bank accounts. Wells Fargo states it has put guardrails in place to prevent future issues. </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Well Fargo personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                       expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Wells Fargo doesn’t disclose its minimum credit score requirements, but you must be a current customer to borrow.                                </Typography>
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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>

            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Upstart_logo} alt="img" width={200} height={43} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Upstart: Best for borrowers with bad credit
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                      
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>7.80% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$1,000 - $50,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>36 and 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>0.00% - 12.00%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>300</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Don’t always need credit to qualify</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                15-day grace period for late payments</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Quick approvals</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Doesn't offer joint loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Only two loan terms to choose from</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Hefty origination fee possible</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                            expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                             aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                It can be hard to get a debt consolidation loan when you have bad credit. With a credit score minimum of just 300, online lending platform Upstart has one of the lowest score requirements around. You might even qualify if you have <Link href="#" sx={{ textDecoration: 'none' }}>no credit </Link>(but you must have a college degree or be currently enrolled).</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Still, between possible fees and a high maximum APR, getting a bad credit debt consolidation loan won’t come cheap. You also can’t add a second person to your loan (also called a joint loan). </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link href="#" sx={{ textDecoration: 'none' }}>Upstart personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                             expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                               aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Upstart’s eligibility requirements are transparent. Outside of citizenship, age and credit score requirements, Upstart also requires you to have:                                
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;A job, a job offer with a start date within six months or another source of income<br/><br/>
                                2.&nbsp;&nbsp;A maximum <Link href="#" sx={{textDecoration:'none'}}>debt-to-income ratio</Link> (DTI) of 50% (45% in Connecticut, Maryland, New York and Vermont)
                                 <br/><br/>

                                3.&nbsp;&nbsp;No bankruptcies within the last year
                                  <br/><br/>

                                4.&nbsp;&nbsp;No current delinquencies<br/><br/>

                                5.&nbsp;&nbsp;Fewer than six inquiries on your credit report (not including those for mortgages, auto loans or student loans)<br/><br/>

                                 </Typography>
                                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                 Also, Upstart may cancel your loan if your credit score drops significantly in between the time it approves you and sends your funds.

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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>





            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Upgrade_logo} alt="img" width={200} height={46} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Upgrade: Best for small loan amounts
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                       
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.49% - 35.99% </Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$1,000 - $50,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 84 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>1.85% - 9.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>580</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Has a user-friendly mobile app</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Discount for allowing Upgrade to pay your creditors for you</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Could get your loan the day after you apply</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges an origination fee (1.85% - 9.99%)</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Might find lower rates with another lender if you have excellent credit</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Won’t qualify if you have bad credit</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                A debt consolidation loan can be helpful even if you don’t have tens of thousands of dollars to consolidate. However, not all lenders offer small loans. Some lenders have their minimum loan amount set to $5,000, but you can borrow as little as $1,000 with lending platform Upgrade.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If you have stellar credit, you could get a cheaper loan elsewhere. Although Upgrade is open to borrowers with at least fair credit, its minimum APR isn’t the lowest.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Upgrade personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                            expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                            aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                You need to have a credit score of at least 580 to get a loan from Upgrade. It also requires you to:                                
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Be at least 18 (or 19, in some states)<br/><br/>
                                2.&nbsp;&nbsp;Be a U.S. citizen, permanent resident or live in the U.S. with a valid visa
                                 <br/><br/>

                                3.&nbsp;&nbsp;Have a verifiable bank account and email address
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
                        marginTop: '20px',
                        padding: '10px 24px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontFamily: "'Lato', sans-serif",
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>






            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={lightstream} alt="img" width={200} height={45} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
           LightStream: Best for no origination fees                
           </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                       
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.89% - 24.29% </Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$5,000 - $100,000*</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 84 months*</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>None</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>Not specified</Item>
                             <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May beat competitors’ rates</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Same-day loans possible</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Won’t know if you qualify unless you take a hard credit hit</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No small loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Must have good-to-excellent credit</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                 aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                A debt consolidation loan might save you money on interest, but fees can add up. Luckily, LightStream is a zero-fee company. Also, if another lender offers you a lower APR, LightStream might beat it by .10 percentage points through its Rate Beat Program.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                On the downside, you can’t check rates without a hard credit pull. This may be inconvenient since LightStream doesn’t disclose its minimum credit score requirements.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>LightStream personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                            expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                              aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                First, you must have good-to-excellent credit to qualify. LightStream doesn’t specify its exact credit score requirement, but states that it tends to approve those with:                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;At least five years of credit history with a mix of accounts<br/><br/>
                                2.&nbsp;&nbsp;Assets such as savings, retirement and investment accounts
                                 <br/><br/>

                                3.&nbsp;&nbsp;An acceptable <Link href="#" sx={{textDecoration:'none'}}>debt-to-income ratio</Link>
                                  <br/><br/>
                                4.&nbsp;&nbsp;A positive payment history with no delinquencies
                                  <br/><br/></Typography>
                                  <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#454545', marginBottom: '25px' }}>
                                  *Your loan terms, including APR, may differ based on loan purpose, amount, term length, and your credit profile. Excellent credit is required to qualify for lowest rates. Rate is quoted with AutoPay discount. AutoPay discount is only available prior to loan funding. Rates without AutoPay are 0.50% points higher. Subject to credit approval. Conditions and limitations apply. Advertised rates and terms are subject to change without notice. Payment example: Monthly payments for a $10,000 loan at 5.99% APR with a term of 3 years would result in 36 monthly payments of $304.17. Truist Bank is an Equal Housing Lender. © 2024 Truist Financial Corporation. Truist, LightStream, and the LightStream logo are service marks of Truist Financial Corporation. All other trademarks are the property of their respective owners. Lending services provided by Truist Bank.                                 </Typography>
                               
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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>







            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Sofi_logo} alt="img" width={200} height={75} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                  SoFi: Best for borrowers with good credit
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                        
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.99% - 29.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$5,000 - $100,000*</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 84 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>0.00% - 7.00% </Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>680</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Same-day loans possible</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No late payment fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Offers joint loans</Item>
                                <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                APR discount if SoFi pays your debt directly</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Only offers large loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Need at least good credit to qualify</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Lowest rates may require an optional origination fee</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                    aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                You don’t need to worry about late payment fees with SoFi. You can also get an APR discount if SoFi pays your creditors directly. If you decide to handle consolidation yourself, it’s likely you’ll get your money the same day you apply.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                SoFi debt consolidation loans are competitive, but you may need to pay an optional fee for the lowest rates.

                              </Typography>
                              
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Sofi personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                             aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                You must have a credit score of at least 680 to get a SoFi debt consolidation loan. It also requires that you:                               
                                 </Typography>
                                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Are a U.S. citizen, eligible permanent resident or non-permanent resident (including DACA recipients and asylum seekers)<br/><br/>
                                2.&nbsp;&nbsp;Have a job or job offer with a start date within 90 days, or bring in sufficient income
                                 <br/><br/>

                                3.&nbsp;&nbsp;Have made your last three payments on time if you have an existing personal loan with SoFi
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
                        marginTop: '20px',
                        padding: '10px 24px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontFamily: "'Lato', sans-serif",
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>








            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Prosper_logo} alt="img" width={200} height={38} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                   Prosper: Best for peer-to-peer loans
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                       
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.99% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$2,000 - $50,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>1.00% - 7.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>560</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Free monthly credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Joint loans available</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Don’t need perfect credit</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can take up to 14 days to get your loan</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Origination fee applies to all loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                $29 late payment fee ($40, in some cases)</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Prosper, a <Link sx={{ textDecoration: 'none' }}>peer-to-peer lender</Link>, connects borrowers with investors. This type of loan is usually easier to qualify for. Prosper’s 560 minimum credit score requirement means that you might still get a loan if you have bad credit.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                It can take up to 14 days for an investor to pick up your loan. It’s also possible that all available investors pass on your application, even if Prosper has approved you.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Prosper personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                   expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                    aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To be eligible for Prosper, you must:                               
                                 </Typography>
                                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Be a U.S. resident who is at least 18 years old<br/><br/>
                                2.&nbsp;&nbsp;Have a U.S. bank account
                                 <br/><br/>

                                3.&nbsp;&nbsp;Have a Social Security number
                                  <br/><br/>
                                4.&nbsp;&nbsp;Not live in Iowa or West Virginia
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
                        marginTop: '20px',
                        padding: '10px 24px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontFamily: "'Lato', sans-serif",
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>







            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Bestegg_logo} alt="img" width={200} height={44} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Best Egg: Best for borrowers with excellent credit
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                       
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.99% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$2,000 - $50,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>36 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>0.99% - 8.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>600</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May get your loan the next day</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can change your due date</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May get better rate if Best Egg pays your creditors</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                All loans have an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Must have a high income and excellent credit to get best rates</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Mobile app only works for Best Egg credit cards</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                            expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                            aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Best Egg has a relatively low minimum credit score requirement (600). However, you must make at least $100,000 and have a score of 700 or better to get its lowest rates. If you tick those boxes, you could get a debt consolidation loan with an APR as low as 8.99%.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Unlike some lenders, Best Egg charges an origination fee on all of its borrowers, not just those with troubled credit.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Best Egg personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If you live in Iowa, Vermont, West Virginia or a U.S. territory, you can’t get a Best Egg loan. It doesn’t disclose its other credit-related eligibility requirements (other than what we’ve already discussed).

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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>







            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Aachieve_logo} alt="img" width={200} height={50} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
            Achieve: Best for interest rate discounts                
          </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                       
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>8.99% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$5,000 - $50,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>1.99% - 6.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>620</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Three interest rate discounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Assigned a dedicated loan consultant for assistance</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Will send your loan to your creditors</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Loans are not offered in all 50 states</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Mandatory origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Need to have at least $5,000 of debt to consolidate</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                          expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                          aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Achieve offers three interest rate discounts. The first is especially appealing on a debt consolidation loan. If you allow Achieve to use at least 50% of your loan to pay your creditors directly, you could get a lower rate. You can also get a discount if you take out a joint loan and by having a sufficiently-funded retirement account.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                However, if you only have a small amount of debt to consolidate, Achieve might not work — its loans start at $5,000.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Achieve personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                               expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                               aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Other than having a credit score of at least 620, Achieve doesn’t spell out what it takes to get a loan. You can prequalify online to get an idea where you stand.                                </Typography>
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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>








            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Avant_logo} alt="img" width={200} height={28} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                   Avant: Best for short repayment terms
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                        
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>9.95% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$2,000 - $35,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>12 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>Up to 9.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>580</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Quick loans available</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Accepts less-than-perfect credit</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Has a highly-rated mobile app</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May pay an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No joint loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Doesn’t specify many eligibility requirements</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                              expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                              aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                The longer it takes to pay off a personal loan, the more interest you may pay. With Avant, you could get a personal loan with a 12-month term. This short term could save a significant amount of money. If you choose a longer term and  <Link href="#" sx={{ textDecoration: 'none' }}>pay off your loan early</Link>, you won’t be charged a fee (also called a  <Link href="#" sx={{ textDecoration: 'none' }}>prepayment penalty</Link>). </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If you don’t qualify for Avant on your own, you can’t add a second person to help you get approved.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link href="#" sx={{ textDecoration: 'none' }}>Avant personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                               expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                               aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Reach Financial doesn’t shed much light into its eligibility requirements. However, you can prequalify online to see how likely it is that it will approve you.
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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>







            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Happymoney_logo} alt="img" width={200} height={28} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                   Happy Money: Best for credit card consolidation
                </Typography>
            </Container>

            {/* ----------------------------------------- */}
            <Container
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    maxWidth: '1286px',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>APR range</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan amounts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>Min. credit score</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', fontWeight: 'bold', textAlign: 'left' }}>User ratings</Item>

                        </Grid>
                        <Grid item xs={6}>
                      
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>11.72% - 17.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>$5,000 - $40,000</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>1.50% - 5.50%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>640</Item>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  />
                        <Link
                                href="#"
                                   sx={{
                                   fontSize: '10px',
                                   textTransform: 'none',
                                   color: '#0069BA',
                                   '&:hover': { color: '#6C8CC9' },
                                    textDecoration: 'none',boxShadow:'none',display:'flex',textAlign:'left'
                                        }}
                                        >
                                     User Ratings & Reviews
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Clear eligibility requirements</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No late payment fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Low rates for excellent credit</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can take 30 days for your loan to reach your creditors</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No joint applications</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container>
                <Box>
                    <Grid>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                             expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                             aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([!expanded[0], expanded[1]])}     
                                >
                                What to know
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Happy Money loans can only be used to consolidate credit card debt. This lending platform works with credit unions to fund its loans. The upside to this is that, by law, the highest APR a federal credit union can charge is 18.00%. You’ll see that reflected in Happy Money’s low maximum APR of 17.99%.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                For borrowers with fair credit, Happy Money is competitive. At 11.72%, its minimum APR is rather high. If you have excellent credit, you can probably find a cheaper loan somewhere else.</Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                    Read our full <Link sx={{ textDecoration: 'none' }}>Happy Money personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                             expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                             aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1]])}     
                                >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If you meet Happy Money’s 640 minimum credit score requirement, it will also review your credit history. You have to have an acceptable debt-to-income ratio, but it doesn’t specify what that ratio is. You also cannot have any current payment delinquencies.

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
                        bgcolor: '#FF704D',
                        '&:hover': {
                            bgcolor: '#FF471A',
                        },
                    }}
                >
                    See Your Personalized Results
                </Button>
            </Container>







            {/* ///////////////////////////////////////////////////////////////// */}
            

        </div>
    );
}

export default Lender2;
