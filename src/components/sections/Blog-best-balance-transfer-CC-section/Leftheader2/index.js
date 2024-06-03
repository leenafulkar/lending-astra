import React from 'react';
import { Container, Box, Grid, Typography, Button,Link,Tooltip, Stack ,useTheme} from '@mui/material';
import TreeEqualLogo from '../../../../assets/treequal-top-img.png';
import Avatar from '@mui/material/Avatar';
import esl_default_logo from '../../../../assets/esl_default_All_main.jpg'






const LeftHeader2 = () => {
    const theme = useTheme();
    
  return (
   <> <Container sx={{ marginTop: '10px' }}>
      <Box
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          height: "auto",
          background: "radial-gradient(circle at 50% 0, #317298, #101f30)", // Radial gradient background
          color: "#FFFFFF", // Set text color to white
          padding: "10px 0px 0px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius:'10px'
        }}
      >
        <Box sx={{ flexGrow: 1 }} >
          <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={{lg:20, md:15, }}>
            <Grid item xs={12} sm={4} md={2} lg={2}>
              <img src={TreeEqualLogo} alt="img" width={100} height={'auto'} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Typography sx={{ fontWeight: 'bold', fontFamily: "'Lato', sans-serif", fontSize: { md: '21px', lg: '21px',sm:'18px',xs:'18px' } }}>
                Find your perfect card in 30 seconds.
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: { xs: '12px', sm: '12px' ,md: '16px', lg: '16px'},display:{lg:'block',md:'block',sm:'none',xs:'none'} }}>
                Check your approval odds so you can shop smarter.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Button sx={{ bgcolor: '#FFFFFF', color: '#0069BA', textTransform: 'none', marginBottom: '10px', fontSize: { xs: '12px', sm: '12px' ,md: '15px', lg: '15px'},marginTop:{sm:'10px',xs:'10px'} ,
              '&:hover': {
                    color: '#8ed1fc',bgcolor:'#FFFFFF' 
                  },}}>
                Get Started Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    {/* // ------------------------------------------------------------------- */}
    <Container sx={{marginTop:'40px',display:{lg:'block',md:'block',sm:'none',xs:'none'}}} >
     <Link href="#" sx={{textDecoration:'none' ,color:'#454545','&:hover': { color: '#0069BA' },fontSize:'14px'}}>Credit Cards</Link>&nbsp;&nbsp;-&nbsp;&nbsp;<Link href="#" sx={{textDecoration:'none' ,color:'#454545','&:hover': { color: '#0069BA' },fontSize:'14px'}} >Best</Link>
    </Container>
    {/* ---------------------------------------------------------------------------- */}
      <Container>
        <Grid container direction="row" spacing={2} marginTop={1}>
          <Grid item>
            <Tooltip title={
    <Typography
      sx={{
        fontSize: '14px',
        margin:'5px 1px',
        padding:'5px'
      }}
    >LendingTree is compensated by companies on this site and this compensation may impact how and where offers appear on this site (such as the order). LendingTree does not include all lenders, savings products, or loan options available in the marketplace.
     </Typography> } arrow >
              <Typography sx={{ fontSize: '12px', color: '#0069BA' }}>
                How Does LendingTree Get Paid? |
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={
    <Typography
      sx={{
        fontSize: '14px',
        margin:'5px 1px',
        padding:'5px'
      }}
    >LendingTree is an advertising-supported comparison service. The site features products from our partners as well as institutions which are not advertising partners. While we make an effort to include the best deals available to the general public, we make no warranty that such information represents all available products. We are compensated by companies on this site and this compensation may impact how and where offers appear on this site (such as the order).
     </Typography> } arrow >
              <Typography sx={{ fontSize: '12px', color: '#0069BA' }}>
                Advertising Disclosure |
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={
    <Typography
      sx={{
        fontSize: '14px',
        margin:'5px 1px',
        padding:'5px'
      }}
    >Terms apply to American Express benefits and offers. Visit americanexpress.com to learn more.
     </Typography> } arrow >
              <Typography sx={{ fontSize: '12px', color: '#0069BA' }}>
                American Express Disclosure
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------------------------------------------------------- */}
      <Container sx={{marginTop:'40px'}} >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
       
          <Stack spacing={2} >

            <Typography sx={{fontSize:'48px', color:'#101F30',fontFamily: 'Georgia, Times, "Times New Roman", serif',  [theme.breakpoints.down("sm")]: {
                fontSize: "35px",
              },}}>
            Top Balance Transfer Credit Cards with No Transfer Fees in May 2024
            </Typography>
            <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography variant="body1">Written by Remy Sharp</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Typography variant="body1">Written by Travis Howard</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Typography variant="body1">Written by Cindy Baker</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid><br/>
      {/* ---------------- */}
      <Box mt={4}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{fontSize:'14px',color:'#687073'}}>Updated on:</Typography>
          <Tooltip title={
    <Typography
      sx={{
        fontSize: '14px',
        margin:'5px 1px',
        padding:'5px'
      }}
    >At the time of release, all details were verified and accurate.
     </Typography> } arrow >
          <Typography sx={{fontSize:'14px',color:'#687073'}}>May 13, 2024</Typography>
          </Tooltip>
        </Stack>
      </Box>
{/* -------------------------------- */}
            <Typography sx={{color:'#7A7A7A',fontSize:'12px',fontFamily:"'Lato', sans-serif"}}>
             <span style={{fontWeight:'bold'}}> Why Choose LendingTree?</span>

             We are dedicated to delivering precise content to assist you in making well-informed financial choices. The information on this page has not undergone review, approval, or endorsement by any credit card issuer. While we collaborate with certain issuers, our website may receive compensation through these partnerships. Explore our editorial guidelines here.
              </Typography><br/><br/>
{/* ------------------------------------- */}
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
      <Typography sx={{ fontSize: '12px', color: '#057447', margin: '0px 0px 16px', fontWeight: 'bold', fontFamily: "'Lato', sans-serif'" }}>Our selection for the top balance transfer credit card with no transfer fee is...</Typography>
      <Link href="#" sx={{ fontSize: '21px', color: '#0069BA', fontWeight: 'bold', fontFamily: "'Lato', sans-serif'",textDecoration:'none' }}>Visa® Credit Card for ESL (English as a Second Language) Users</Link><br /><br />
      <Typography sx={{ color: '#454545', fontSize: '14px', margin: '0px 0px 21px', fontFamily: "'Lato', sans-serif'" }}>
      The ESL Visa® Credit Card stands out as the premier choice for those seeking a credit card with no balance transfer fee. It offers a year-long interest-free period for paying off balance transfers and maintains a low ongoing APR of 13.50%-17.99% variable APR.
      </Typography>
    </Grid>
    <Grid item lg={4} xs={12} md={4} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={esl_default_logo} alt="img" width={183} height={125} />
        </Box>
    </Grid>
  </Grid>
</Box>
{/* --------------------------- */}

              <Typography sx={{color:'#454545',fontSize:'10px',fontFamily:"'Lato', sans-serif"}}>
              Citi is an advertising partner.
              </Typography>

              <Typography sx={{color:'#454545',fontSize:'17px',fontFamily:"'Lato', sans-serif"}}>
              If you find yourself burdened by credit card debt, moving your balance to a card featuring a 0% intro APR can potentially save you hundreds, if not thousands, of dollars in interest. However, many balance transfer credit cards impose balance transfer fees ranging from 3% to 5% of the transferred amount, leading to significant accumulations.
               </Typography>
              
              
               <Typography sx={{color:'#454545',fontSize:'17px',fontFamily:"'Lato', sans-serif"}}>
               While no-fee balance transfer credit cards are uncommon, they are indeed available. Typically, they are provided by credit unions, which often mandate membership, potentially limiting accessibility. To aid in identifying the ideal card for your needs, below is a compilation of the top balance transfer credit cards with no fees, including their respective credit union membership prerequisites.
               </Typography>
              

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
       Discover your ideal card in just 30 seconds.
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
       Assess your approval likelihood to make smarter shopping decisions.
      </Link>
    </Box>

             

</Stack>
      </Box>
    </Container>

    </>
  );
}

export default LeftHeader2;
