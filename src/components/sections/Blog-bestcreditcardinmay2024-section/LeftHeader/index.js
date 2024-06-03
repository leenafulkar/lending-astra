import React from 'react';
import { Container, Box, Grid, Typography, Button,Link,Tooltip, Stack ,useTheme} from '@mui/material';
import TreeEqualLogo from '../../../../assets/treequal-top-img.png';
import Avatar from '@mui/material/Avatar';
import Showsummary from '../showsummary';
import ComparisonTable from '../comparisontable';






const LeftHeader = () => {
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
              Discover Your Ideal Card in Just 30 Seconds
              </Typography>
              <Typography sx={{ fontFamily: "'Lato', sans-serif", fontSize: { xs: '12px', sm: '12px' ,md: '16px', lg: '16px'},display:{lg:'block',md:'block',sm:'none',xs:'none'} }}>
              Check Your Approval Odds to Shop Smarter
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
       
          {/* <Stack position="sticky"  spacing={2} sx={{ maxWidth: '215px'}} display={{ xs: 'none', lg: 'block' }}>
          <Typography sx={{fontWeight:'bold',color:'#454545',fontSize:'17px'}}>On this page</Typography><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Our top picks</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Compare cards</Link><br/><br/> 
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Best cash back rewards cards</Link><br/><br/> 
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Best travel rewards cards</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Best rewards cards</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>What is a rewards cards?</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Types of rewards cards</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>How to maximize rewards</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Are rewards cards worth it?</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Alternative cards</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>FAQs</Link><br/><br/>
          <Link href="#" sx={{textDecoration:'none', color:'#4E4E4E'}}>Methodology</Link><br/><br/>
          </Stack> */}
        
          {/* <Stack spacing={2} sx={{ maxWidth: {lg:'818px'} }}> */}
          <Stack spacing={2} >

            <Typography sx={{fontSize:'48px', color:'#101F30',fontFamily: 'Georgia, Times, "Times New Roman", serif',  [theme.breakpoints.down("sm")]: {
                fontSize: "35px",
              },}}>
            Top 14 Rewards Credit Cards for May 2024</Typography>
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

             We are dedicated to delivering accurate content to help you make informed financial decisions. The information on this page has not been reviewed, approved, or endorsed by any credit card issuer. However, we do maintain partnerships with some issuers and may receive compensation through these partnerships. Read our editorial guidelines here.              </Typography><br/><br/>

              <Typography sx={{color:'#454545',fontSize:'10px',fontFamily:"'Lato', sans-serif"}}>
              Citi is an advertising partner.
              </Typography>

              <Typography sx={{color:'#454545',fontSize:'17px',fontFamily:"'Lato', sans-serif"}}>
              Selecting the best rewards credit card depends on the type of rewards you wish to earn: cash back, points, or miles. Our top choices for cash back rewards cards allow you to earn cash back on everyday purchases, while the best travel rewards cards can help you make your dream vacation a reality.
               </Typography>
              
             {/* ///////////// */}
             {/* Second component */}
             <Showsummary/>
             {/* Third component */}
             <ComparisonTable/>

</Stack>
      </Box>
    </Container>

    </>
  );
}

export default LeftHeader;
