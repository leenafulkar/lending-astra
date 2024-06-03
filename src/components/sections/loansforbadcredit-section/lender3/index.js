import React, { useState } from 'react';
import { Container, Typography, Box, Grid, styled, Paper, Link, Button } from '@mui/material';
import Avant_logo from '../../../../assets/Avant-2023-2048x286.webp'
import Happymoney_logo from '../../../../assets/Happy-Money-logo.webp'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp' 
import Upstart_logo from '../../../../assets/Upstart-logo.webp'
import Lendingclub_logo from '../../../../assets/LendingClub-1-e1615271046151.webp'
import OMF_logo from '../../../../assets/OMF_Stacked_Logo_PMS2132.webp'



const Lender3 = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [expanded, setExpanded] = useState([false, false, false]);
    return (
        <div>

<Container sx={{ marginTop: '40px' }}>
                <img src={Avant_logo} alt="img" width={150} height={21} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                   Avant: Best for quick funding

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
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                           <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>580</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>9.95% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>12 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>Up to 9.99%</Item>

                        </Grid>
                       
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No prepayment penalties</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May receive funds as soon as the next business day</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May consider household income instead of just individual income</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges late and dishonored payment fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can only borrow up to $35,000</Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])} // Toggle the expanded state
                                >
                               What we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                If you’re approved for a personal loan with Avant, your funds may be deposited into your bank account as soon as the next business day.
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
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])} // Toggle the expanded state

                            >
                              Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Avant has higher interest rates than some lenders, but you may receive your loan faster than competitors. After approval, you may receive your funds within one business day. This online lender also offers a 10-day grace period with no late fees if you’re not able to make payments on time.

                              </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Avant does charge an origination fee. Minimum loan amounts may vary by state.

                               </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>Avant personal loan review</Link>.

                              </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])} // Toggle the expanded state
                                >
                             How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Avant doesn’t provide much insight into its personal loan requirements. Applicants must have a 580 minimum credit score and can’t live in the following states:


                              </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Hawaii<br/><br/>
                                2.&nbsp;&nbsp;lowa<br/><br/>
                                3.&nbsp;&nbsp;Maine<br/><br/>
                                4.&nbsp;&nbsp;Massachusetts<br/><br/>
                                5.&nbsp;&nbsp;New York<br/><br/>
                                6.&nbsp;&nbsp;Vermont<br/><br/>
                                7.&nbsp;&nbsp;West Virginia<br/><br/>

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
                    See Personalized Results
                </Button>
            </Container>






            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Container sx={{ marginTop: '40px' }}>
                <img src={Happymoney_logo} alt="img" width={150} height={21} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                   Happy Money: Best for debt consolidation
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
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>580</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>11.72% - 17.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>1.50% - 5.50%</Item>

                        </Grid>
                      
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No application or late fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No prepayment penalties</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                May offer lower interest rates than credit cards</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No joint applications available</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Loans can only be used toward paying off credit cards</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Funding timeline can be slow</Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])}// Toggle the expanded state
                            >
                              Why we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Happy Money personal loans are designed to help consumers consolidate high-interest debts.
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
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])}// Toggle the expanded state
                            >
                               Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Happy Money bad credit loans are specifically available to help borrowers <Link href="#" sx={{textDecoration:'none'}}>pay off credit card debt</Link>. While you may not be eligible for Happy Money’s lowest interest rates, their personal loan rates may be lower than those on your current credit card.
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           If this lender approves you, you can typically expect to see your funds deposited into your account within three to six business days. This is much slower than other lenders on this list.


                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                           To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>Happy Money personal loan review</Link>.


                           </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])}// Toggle the expanded state
                            >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                You’ll need to meet the following requirements to be eligible for a personal loan with Happy Money:
                           </Typography>
                           <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                              1.&nbsp;&nbsp;640 minimum credit score<br/><br/>
                              2.&nbsp;&nbsp;Zero current payment delinquencies<br/><br/>
                              3.&nbsp;&nbsp;640 minimum credit score<br/><br/>

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
                    See Personalized Results
                </Button>
            </Container>






            {/* /////////////////////////////////////////////////////////////// */}



            
             <Container sx={{ marginTop: '40px' }}>
                <img src={Lendingclub_logo} alt="img" width={150} height={31} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                  LendingClub: Best for co-borrowers
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
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                           <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>600</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>8.98% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>3.00% - 8.00%</Item>

                        </Grid>
                       
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                15-day grace period if you’re late on payments</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Allows for co-borrowers</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Option to pay creditors directly if using funds to consolidate debt</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                High maximum APRs</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges late fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges an origination fee between 3.00% - 8.00%
                                   </Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                              Why we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Unlike some other competitors, LendingClub allows applicants to apply for a <Link href="#" sx={{textDecoration:'none'}}>joint personal loan</Link> with a co-borrower.
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
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])}// Toggle the expanded state
                            >
                             Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                LendingClub is a peer-to-peer lending marketplace where you can borrow up to $40,000. You may also change your due date with LendingClub, but be sure to check how changing your payment deadlines could affect your interest rates.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                As an added bonus for borrowers with low credit scores, LendingClub also offers joint personal loans. The option to add a co-borrower may make it easier for some applicants with poor credit to qualify for a personal loan.
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>LendingClub personal loan review</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                 aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])}// Toggle the expanded state
                            >
                             How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To qualify for a personal loan with LendingClub, you’ll need to:
                               </Typography>
                               <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Have a 600 minimum credit score<br/><br/>
                                2.&nbsp;&nbsp;Be a U.S. citizen or permanent resident<br/><br/>
                                3.&nbsp;&nbsp;Be at least 18 years old<br/><br/>
                                4.&nbsp;&nbsp;Have a verifiable bank account<br/><br/>

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
                    See Personalized Results
                </Button>
            </Container>


         {/* ////////////////////////////////////////////////////////////////////// */}



         
         <Container sx={{ marginTop: '40px' }}>
                <img src={OMF_logo} alt="img" width={150} height={57} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                  OneMain Financial: Best for secured loans
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
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>Not Specified</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>18.00% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>1.00% - 10.00% or $25 - $500</Item>

                        </Grid>
                       
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Offers both secured and unsecured loans</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Ability to change your payment due date</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No prepayment fees</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                APR is higher than some other lenders</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges late fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Small maximum loan amount

                            </Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                              Why we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                For borrowers with bad credit, OneMain Financial offers both <Link href="#" sx={{textDecoration:'none'}}>unsecured and secured loans</Link> — the latter of which may require collateral (a vehicle, for example).</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                               Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                OneMain Financial has the lowest loan amount cap ($20,000) on our bad credit loans lender list, so this company may be best for those searching for bad credit <Link href="#" sx={{textDecoration:'none'}}>small personal loans</Link>.
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                While OneMain Financial’s interest rates are fairly high, they may be lower than what you find with other bad credit loan companies and predatory lenders.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                OneMain Financial charges late fees either ranging from $5 to $30, or as a percentage of your entire monthly payment charge (or the late portion of your monthly payment), which can range from 1.5% to 15%.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>OneMain Financial personal loan review</Link>.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                 aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])} // Toggle the expanded state
                            >
                              How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                When you apply for a OneMain Financial bad credit loan, you’ll likely need to provide documentation such as your Social Security card, proof of residence, proof of income and a government-issued ID. OneMain Financial doesn’t provide specific details on eligibility criteria, but it does take the following into consideration:
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Financial history<br/><br/>
                                2.&nbsp;&nbsp;Credit history<br/><br/>
                                3.&nbsp;&nbsp;Loan purpose<br/><br/>
                                4.&nbsp;&nbsp;Any recent bankruptcy filings<br/><br/>
                                5.&nbsp;&nbsp;State of residence<br/><br/>

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
                    See Personalized Results
                </Button>
            </Container>




            {/* ///////////////////////////////////////////////////////////////// */}
            <Container sx={{ marginTop: '40px' }}>
                <img src={Upgrade_logo} alt="img" width={150} height={34} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                    Upgrade: Best for long repayment terms
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
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>580</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>8.49% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>24 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>1.85% - 9.99%</Item>

                        </Grid>
                      </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can receive funds in as little</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Offers autopay discount</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Offers auto secured loans</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges $10 late fees and $10 failed payment attempt fees</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Charges an origination fee</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                High maximum APR</Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                               Why we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                You could be eligible to borrow for as long as 24 to 84 months if you qualify for a personal loan from Upgrade. </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                              Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                This online lender not only offers a wide range of loan terms that consumers can choose from. Borrowers can receive their loans as quickly as one business day after approval. Furthermore, you could get a discount on your rates if you sign up for autopay and repay some of your current debts directly                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                However, not only does Upgrade charge an origination fee (ranging from (1.85% - 9.99%), but if borrowers are unable to keep up with their payments, this online lender also charges late and failed payment attempt fees.
                                 </Typography>
                                 <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                 To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>Upgrade personal loan review</Link>.
                                 </Typography>
                          
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                 aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])} // Toggle the expanded state
                            >
                               How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                While Upgrade doesn’t offer clear-cut criteria on its website, to qualify for a personal loan, you must:                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                1.&nbsp;&nbsp;Have at least a 580 credit score<br/><br/>
                                2.&nbsp;&nbsp;Be at least 18 years old
                                 <br/><br/>

                                3.&nbsp;&nbsp;Be a U.S. citizen, permanent resident or living in the U.S. on a valid visa
                                  <br/><br/>
                                4.&nbsp;&nbsp;Have a verifiable bank account
                                  <br/><br/>
                                5.&nbsp;&nbsp;Have a valid email address
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
                    See Personalized Results
                </Button>
            </Container>






            {/* ///////////////////////////////////////////////////////////////// */}
           
<Container sx={{ marginTop: '40px' }}>
                <img src={Upstart_logo} alt="img" width={150} height={32} />
                <Typography
                    direction={{ xs: 'column', md: 'column' }}
                    sx={{ fontSize: '27px', textAlign: 'left', margin: '20px 0px 30px', fontFamily: "'Lato', sans-serif" }}
                >
                 Upstart: Best for thin credit histories
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
                        <Grid item xs={12} >
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Minimum credit requirement: </span>380</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>APR: </span>7.80% - 35.99%</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Terms: </span>36 to 60 months</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',  textAlign: 'left' }}><span style={{fontWeight:'bold'}}>Origination fee: </span>0.00% - 12.00%</Item>

                        </Grid>
                       
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6} >
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Pros</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Loans can be used toward education-related expenses</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Can receive funds in one business day</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Flexible loan amount options</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>Cons</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                No option to apply with a co-borrower</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Limited loan terms</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
                                High maximum APR</Item>
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
                                onClick={() => setExpanded([!expanded[0], expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                               Why we like it
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Upstart uses artificial intelligence (AI) rather than traditional <Link href="#" sx={{textDecoration:"none"}}>FICO credit score</Link> models to make lending decisions.   </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                           expandIcon={expanded[1] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                           aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], !expanded[1], expanded[2]])} // Toggle the expanded state
                            >
                              Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Like Upgrade, Upstart offers flexible loan amounts to borrowers, providing larger personal loans for poor credit than many other conventional lenders. Its application process may make it easier for some consumers with thin credit histories to qualify, since this lender also takes into account your education, areas of study and employment history.                                
                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Upstart loans are limited to just two repayment terms — 36 and 60 months — and come with much higher origination fees than some other lenders.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                To learn more, read our full <Link href="#" sx={{textDecoration:'none'}}>Upstart personal loan review</Link>.                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '10px', color: '#454545', marginBottom: '25px' }}>
                                *The full range of available rates varies by state. A representative example of payment terms for a Personal Loan is as follows: a borrower receives a loan of $10,000 for a term of 60 months, with an interest rate of 21.58% and a 9.84% origination fee of $984, for an APR of 26.82%. In this example, the borrower will receive $9016 and will make 60 monthly payments of $275. APR is calculated based on 5-year rates offered in December 2023. There is no downpayment and no prepayment penalty. Your APR will be determined based on your credit, income, and certain other information provided in your loan application. Not all applicants will be approved. Unsecured Personal Loan Disclosure: While most loans through Upstart are unsecured, certain lenders may place a lien on other accounts you hold with the same institution. There may be an option to secure your personal loan through Upstart with your vehicle, which will require a lien to be placed on the vehicle. It is important to review your promissory note for these details before accepting your loan.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                 expandIcon={expanded[2] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                                 aria-controls="panel1-content"
                                id="panel1-header"
                                className='accordionn-headd'
                                sx={{ color: '#00AEEF' }}
                                onClick={() => setExpanded([expanded[0], expanded[1], !expanded[2]])} // Toggle the expanded state
                            >
                             How to qualify
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                Aside from meeting Upstart’s minimum credit score requirements, potential borrowers will also have to meet the following criteria:                                </Typography>
                                <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', color: '#454545', marginBottom: '25px' }}>
                                  1.&nbsp;&nbsp;Be a U.S. citizen or a permanent resident<br/><br/>
                                  2.&nbsp;&nbsp;Be at least 18 years old
                                     <br/><br/>
                                  3.&nbsp;&nbsp;Provide an email address<br/><br/>
                                  4.&nbsp;&nbsp;Provide their name, date of birth and Social Security number<br/><br/>
                                  5.&nbsp;&nbsp;Have a full-time job or an offer to start within six months (or some form of regular income)<br/><br/>
                                  6.&nbsp;&nbsp;Have a personal bank account<br/><br/>
                                  

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
                    See Personalized Results
                </Button>
            </Container>




            {/* ///////////////////////////////////////////////////////////////// */}
          


            

        </div>
    );
}

export default Lender3;
