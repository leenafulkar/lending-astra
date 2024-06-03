import { Typography, Container, Box , Stack, Button ,useTheme} from '@mui/material'
import React from 'react'
import '../fundedloans/index.css'
import BankIcon from '@mui/icons-material/AccountBalance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';




const Howlendingtreeworks = () => {
  const theme = useTheme();
  return (
    <><Container
      sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        marginTop: '80px',
        flexGrow: 1,
        // display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
      }}
    >
      <Typography
        sx={{
          fontSize: '40px',
          color: '#101F30',
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          textAlign: 'center',
          marginBottom: '30px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
          },
        }}
      >
        Why do millions of Americans trust LendingTree?
      </Typography>
      
    </Container>
      {/* // ---------------------------------------------------------------------- */}
      {/* // ---------------------------------------------------------------------- */}
      <Container sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop:'40px',
        justifyContent: 'space-between', // Center the buttons horizontally
        width: '100%',
        // maxWidth:'1250px',
        height: 'auto',
        flexGrow: 1,
        display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
      }}>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            color: '#000000',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
            <Box sx={{
              width: '100%', height: 'auto',
            }}>
               
              <div> <BankIcon sx={{ fontSize: 48, color: '#08C177' }} /></div>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#101F30',
                  margin: '20px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: "'Lato', sans-serif",
                  marginBottom:'18px',
                }}
              >

              Compare rates on the nation’s largest network
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#454545',
                  padding: ' 0px opx 0px 36px',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                We’re a one-stop shop with the nation’s largest network of lenders, so you can be sure you’re getting your best rate.
              </Typography>
            </Box>

            <Box sx={{
              width: '100%', height: 'auto'
            }}><div><AccessTimeIcon sx={{ fontSize: 48, color: '#08C177' }} /></div>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#101F30',
                  margin: '20px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: "'Lato', sans-serif",
                  marginBottom:'18px',
                }}
              >

              Get funded in as little as 24 hours
              </Typography>
              <Typography
                sx={{
                  fontSize: '17px',
                  color: '#454545',
                  padding: ' 0px opx 0px 36px',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
               When you need money fast, we’ve got you covered. Find repayment terms that work for you and get the money you need right away.
              </Typography>
            </Box>



            <Box sx={{
              width: '100%', height: 'auto'
            }}>
               <Box sx={{ width: "30px",marginTop:'-10px' }}>
                      <div > <DateRangeIcon sx={{ fontSize: 48, color: '#08C177' }} /></div>
                    </Box>
              <Typography
                sx={{
                  fontSize: '26px',
                  color: '#101F30',
                  margin: '37px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: "'Lato', sans-serif",
                   marginTop:'20px'
                 
                }}
              >

             Pay off your loan with fixed monthly payments
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#454545',
                  padding: ' 0px opx 0px 36px',
                  fontFamily: "'Lato', sans-serif",
                  marginTop:'15px'
                }}
              >Personal loans offer fixed monthly payments with interest rates lower than most credit cards, so you can save big.
              </Typography>
            </Box>
          </Stack>
        </Box>


      </Container>
      <Container 
       sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',marginTop:'40px'
       
      }}>
        <Button
          variant="text"
          sx={{
            fontSize: '16px',
            color: '#FFFFFF',  
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
         Compare and Win
        </Button></Container>
      </>
  )
}

export default Howlendingtreeworks
