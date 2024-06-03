import React from 'react'
import { Container,Paper,Grid,Typography,useTheme ,Link} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'


const HowtochoseBalanceTransferCC= () => {
    const theme = useTheme();
  return (
   <Container>
         <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                How to choose a balance transfer credit card
                </Typography>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                When choosing a balance transfer credit card, consider several key factors. Opt for a card with no or a low balance transfer fee. Additionally, it's crucial to create a plan to pay off the entire transferred amount within the promotional period, as any remaining balance will accrue interest once the promotional period concludes.
                        </Typography>
                       
            </Grid>


            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px',color:'#FFFFFF',bgcolor:'#08C177' ,padding:'14px 12px'}}>
          A no-balance transfer fee credit card is an excellent choice if:
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
            You are eligible for membership with the card’s credit union.
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />The card provides an introductory APR period that is long enough for you to pay off your debt.
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' ,fontSize:'16px'}}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> You are not concerned with credit card rewards or additional card benefits.
            </Typography>
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px',color:'#FFFFFF',bgcolor:'#08C177' ,padding:'14px 12px'}}>
          A no-balance transfer fee credit card is not a good choice if:
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />You require a card with a longer introductory APR period.
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' ,fontSize:'16px'}}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> You desire a credit card that provides rewards and perks.
            </Typography>
           
          </Paper>
        </Grid>
      </Grid>

      {/* ------------------------------------------------------------------ */}
      <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                 How to do a balance transfer
                </Typography>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                Upon approval for a balance transfer credit card, you'll need to initiate the transfer either online or by phone with the new credit card company. Prepare to furnish details about the account where you currently hold a balance, including:
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                      1.&nbsp;&nbsp;The name of the credit card company<br/><br/>
                      2.&nbsp;&nbsp;The account number<br/><br/>
                      3.&nbsp;&nbsp;The amount you want to transfer<br/><br/>
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        Continue to make timely payments on your existing credit card until you receive confirmation that your transfer has been finalized. The transfer process may take up to three weeks to complete.
                        </Typography>
                       
            </Grid>
            {/* ------------------------------------------------------- */}
            <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
               Balance transfer guides provided by banks
                </Typography>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate an American Express balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a Capital One balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a Chase balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a Citi balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a Discover balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a U.S. Bank balance transfer</Link><br/><br/>
                <Link className='green-dot' href="#" sx={{textDecoration:'none',fontSize:'17px',color:'#00AEEF'}}>How to initiate a Wells Fargo balance transfer</Link><br/><br/>

                       
            </Grid>
   </Container>
  )
}

export default HowtochoseBalanceTransferCC