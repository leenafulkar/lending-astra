import { Typography, Container, Box , Stack, Button ,useTheme} from '@mui/material'
import React from 'react'
import '../fundedloans2/index.css'

const FundedLoans2 = () => {
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
            fontSize: '36px',
          },
        }}
      >
        Why do millions of Americans trust LendingTree?
      </Typography>
      <Typography
        sx={{
          fontSize: '21px',
          color: '#454545',
          fontFamily: "'Lato', sans-serif",
          textAlign: 'center',
          marginBottom: '30px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
          },
        }}
      >
        25+ years in business. 110+ million Americans served. $260+ billion in funded loans.
      </Typography>
    </Container>
      {/* // ---------------------------------------------------------------------- */}
      {/* // ---------------------------------------------------------------------- */}
      <Container sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
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
            height: 'auto',
            borderRadius: '16px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
            <Box sx={{
              width: '100%', height: 'auto',
            }}>
               
              <div className="circleee">1</div>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#101F30',
                  margin: '20px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontWeight:'bold',
                  fontFamily: "'Lato', sans-serif",
                  marginBottom:'18px',
                }}
              >

               SECURITY
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#454545',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Instead of dispersing your information across numerous lenders, complete a single, straightforward form securely in under five minutes.
              </Typography>
            </Box>

            <Box sx={{
              width: '100%', height: 'auto'
            }}><div className="circleee">2</div>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#101F30',
                  margin: '20px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontWeight:'bold',
                  fontFamily: "'Lato', sans-serif",
                  marginBottom:'18px',
                  height:'auto'
                }}
              >

                SAVINGS
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#454545',
                  fontFamily: "'Lato', sans-serif",
                  height:'auto'
                }}
              >
             Connect with up to five lenders from our extensive network of 300+ providers, who will vie for your business through personalized calls.              </Typography>
            </Box>



            <Box sx={{
              width: '100%', height: 'auto'
            }}>
               <Box sx={{ width: "30px",marginTop:'20px' }}>
                      <div className="circleee">3</div>
                    </Box>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#101F30',
                  margin: '37px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontWeight:'bold',
                  fontFamily: "'Lato', sans-serif",
                 marginTop:'20px'
                 
                }}
              >

               SUPPORT
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#454545',
                  fontFamily: "'Lato', sans-serif",
                  marginTop:'15px',
                  height:'auto'
                }}
              >
                Receive continuous support including complimentary credit monitoring, budgeting tips, and tailored suggestions to enhance your savings journey.
              </Typography>
            </Box>
          </Stack>
        </Box>


      </Container>
      <Container 
       sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
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
          See Your Personalized Results
        </Button></Container>
      </>
  )
}

export default FundedLoans2
