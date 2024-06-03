import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box ,Grid,Typography,Link,Button,useTheme} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Venture_logo from '../../../../assets/venture-rewards_default_main.jpg'



const Showsummary = () => {
    const theme = useTheme();

    const [expanded, setExpanded] = useState([ false, false]);
  return (
    <><Box>
          <Grid>
              <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                  <AccordionSummary
                      expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className='accordionn-headd'
                      sx={{ color: '#00AEEF', [theme.breakpoints.down("sm")]: {
                        fontSize: "14px",} }}
                      onClick={() => setExpanded([!expanded[0], expanded[1]])}
                  >
                      Show summary
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: '26px', color: '#101F30', marginBottom: '26px' }}>Best Rewards Credit Cards</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Capital One Venture Rewards Credit Card</Link>:Best rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Chase Freedom Flex℠</Link>:  Best business rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Ink Business Preferred® Credit Card</Link>:Best business rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Citi Custom Cash® Card</Link>:Best gas rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Blue Cash Preferred® Card from American Express</Link>: Best grocery rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>American Express® Gold Card</Link>:Best dining rewards card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Discover it® Secured Credit Card</Link>: Best rewards credit card for bad credit</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Petal® 2 Cash Back, No Fees Visa® Credit Card</Link>: Best rewards credit card for fair credit</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Capital One SavorOne Student Cash Rewards Credit Card</Link></Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}> Card</Link>:Best student rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Prime Visa</Link>:Best Amazon rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Chase Sapphire Preferred® Card</Link>:Best travel rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Hilton Honors American Express Surpass Card </Link>:Best hotel rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>AAdvantage® Aviator® Red World Elite Mastercard®</Link>: Best airline rewards credit card</Typography>
                      <Typography sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><Link href="#" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>Capital One VentureOne Rewards Credit Card</Link>: Best airline rewards credit card</Typography>


                  </AccordionDetails>

              </Accordion>
          </Grid>
      </Box>
          {/* // ----------------------------------------------------------------------------- */}
          <Box  sx={{
    flexGrow: 1,
    backgroundColor: '#DBF8ED',
    padding: '16px 20px 16px 40px',
    margin: '0px 0px 40px',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <Box sx={{
    position: 'absolute',
    top: '10px',
    left: '-40px',
    width: '200px',
    height: '30px',
    bgcolor: '#057447',
    transform: 'rotate(-45deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: "'Lato', sans-serif",
  }}>
   
  </Box>
  <Grid container spacing={4} marginTop={2}>
    <Grid item lg={8} xs={12} md={8} sm={8}>
      <Typography sx={{ fontSize: '12px', color: '#057447', margin: '0px 0px 16px', fontWeight: 'bold', fontFamily: "'Lato', sans-serif'" }}>**WINNER: THE ULTIMATE REWARDS CREDIT CARD**</Typography>
      <Link href="#" sx={{ fontSize: '21px', color: '#0069BA', fontWeight: 'bold', fontFamily: "'Lato', sans-serif'",textDecoration:'none' }}>Capital One Venture Rewards Credit Card: Ultimate Travel Rewards Card</Link><br /><br />
      <Typography sx={{ color: '#454545', fontSize: '14px', margin: '0px 0px 21px', fontFamily: "'Lato', sans-serif'" }}>
      Our top choice, the Capital One Venture Rewards Credit Card, stands out for its straightforward rewards system on all purchases, versatile redemption options, and an enticing sign-up bonus valued at $750 for travel.      </Typography>
    </Grid>
    <Grid item lg={4} xs={12} md={4} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={Venture_logo} alt="img" width={183} height={125} />
        <Button variant="contained" style={{ width: '183px', marginTop: '10px', textTransform: 'none' }}>Apply Now</Button>
        <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on the Capital One website</Typography>
        <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button>
      </Box>
    </Grid>
  </Grid>
</Box>


          {/* ------------ */}
          <Box sx={{ bgcolor: '#003F70', margin: '0px 0px 16px', padding: '16px', display: 'flex', gap: '4px' ,borderRadius:'5px'}}>
      <Link 
        href="#" 
        sx={{
          textDecoration: 'none',
          fontSize: '16px',
          color: '#FFFFFF',
           [theme.breakpoints.down("sm")]: {
            fontSize: "14px"},
        }}
      >
       Discover the ideal card for you in just 30 seconds.
      </Link>
      <Link 
        href="#" 
        sx={{
          textDecoration: 'none',
          fontSize: '16px',
          color: '#FFFFFF',
          display:{lg:'block',xs:'none',md:'block'}
        }}
      >
        Assess your approval likelihood to shop more intelligently.
      </Link>
    </Box>


    {/* ------------------ */}
    <Typography sx={{fontSize:'17px',color:'#454545'}}>Navigate to:</Typography><br/>
    <Link href='#' className='black-dot' sx={{ textDecoration: 'none' }}>Top cash back rewards cards</Link>
     <Link href='#' className='black-dot' sx={{ textDecoration: 'none' }}>Premier travel rewards cards</Link>
    <Link href='#' className='black-dot' sx={{ textDecoration: 'none' }}>Compare all available cards</Link>
         {/* ------------------------------------- */}
         <Box>
          <Grid>
              <Accordion className='accordionn-border' sx={{ boxShadow: 'none' }}>
                  <AccordionSummary
                      expandIcon={expanded[0] ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className='accordionn-headd'
                      sx={{ color: '#00AEEF', [theme.breakpoints.down("sm")]: {
                        fontSize: "14px",} }}
                      onClick={() => setExpanded([!expanded[0], expanded[1]])}
                  >
                    How to Evaluate Rewards Credit Cards
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Credit Score Criteria:  </span> Assess your credit score to determine eligibility for various cards.</Typography>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Reward System:  </span>Refine card options by specifying your preferred reward type (cash back, broad travel rewards, hotel points, or airline miles).</Typography>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Fees: </span> Examine the charges linked with the card, including annual fees, balance transfer fees, cash advance fees, and foreign transaction fees.</Typography>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Welcome Bonuses: </span>Evaluate the value of the welcome offer and the spending threshold required to attain it.</Typography>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Intro APR: </span>Some cards provide a 0% introductory APR on purchases, balance transfers, or both. If you need a card for a significant purchase, an introductory APR can be beneficial.</Typography>
                      <Typography className='black-dot' sx={{ color: '#454545', fontSize: '15px', marginBottom: '5px' }}><span style={{fontWeight:'bold'}}>Benefits and perks: </span>Many cards offer additional advantages for cardholders. Travel rewards cards, in particular, often include extra perks such as travel credits, airport lounge access, or free checked bags.</Typography>

                  </AccordionDetails>

              </Accordion></Grid></Box>
          </>


  )
}

export default Showsummary