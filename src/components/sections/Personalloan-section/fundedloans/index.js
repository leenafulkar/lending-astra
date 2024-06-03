import { Typography, Container, Box , Stack, Button ,useTheme} from '@mui/material'
import React from 'react'
import '../fundedloans/index.css'

const FundedLoans = () => {
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
        What makes LendingTree a trusted choice for millions of Americans?
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
        Over 25 years in operation, serving over 110 million Americans and facilitating over $260 billion in funded loans.
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
               
              <div className="circle">1</div>
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
               Rather than providing your details to multiple lenders, complete a single, secure form in five minutes or less.
              </Typography>
            </Box>

            <Box sx={{
              width: '100%', height: 'auto'
            }}><div className="circle">2</div>
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
               We'll connect you with up to five lenders from our extensive network of over 300 lenders, who will then reach out to vie for your business.
              </Typography>
            </Box>



            <Box sx={{
              width: '100%', height: 'auto'
            }}>
               <Box sx={{ width: "30px",marginTop:'20px' }}>
                      <div className="circle">3</div>
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
                We offer continuous assistance through complimentary credit monitoring, budgeting insights, and tailored recommendations designed to help you save.
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

export default FundedLoans
