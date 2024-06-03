import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid ,Box,useTheme,Paper,styled} from '@mui/material';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AutoloanTools = () => {
  const theme = useTheme();

  // Define data for each card
  const cardsData = [
    {
      title: "Auto Calculators",
      description: "Estimate car payments and how much you can afford",
      button: "Calculate Your Payment",
      icon : <CalculateOutlinedIcon/>,
      titleStyle: { fontSize: '15px', fontFamily:  "'Lato', sans-serif", color: '#454545' ,fontWeight:'bold'},
      descriptionStyle: { fontSize: '15px', fontFamily: "'Lato', sans-serif",color: '#454545' },
      buttonStyle: { fontSize: '14px', fontFamily:"'Lato', sans-serif", color: '#00AEEF',textTransform:'none'},
    },
    {
        title: "Lender Reviews",
        description: "Discover the right auto lender for you " ,
        button: "Learn more",
        icon : < GppGoodOutlinedIcon/>,
        titleStyle: { fontSize: '15px', fontFamily:  "'Lato', sans-serif", color: '#454545' ,fontWeight:'bold'},
        descriptionStyle: { fontSize: '15px', fontFamily: "'Lato', sans-serif",color: '#454545' },
        buttonStyle: { fontSize: '14px', fontFamily:"'Lato', sans-serif", color: '#00AEEF',textTransform:'none'},
     },
    {
        title: "Search Car Deals",
        description: "See current new car loan rates on select vehicles",
        button: "Shop Cars Online",
        icon : < DirectionsCarFilledOutlinedIcon/>,
        titleStyle: { fontSize: '15px', fontFamily:  "'Lato', sans-serif", color: '#454545' ,fontWeight:'bold'},
        descriptionStyle: { fontSize: '15px', fontFamily: "'Lato', sans-serif",color: '#454545' },
        buttonStyle: { fontSize: '14px', fontFamily:"'Lato', sans-serif", color: '#00AEEF',textTransform:'none'},
     },
    {
        title: "Auto Insurance",
        description: "Compare prices and coverage from top insurers",
        button: "Compare Insurance Quotes",
        icon : < GarageOutlinedIcon/>,
        titleStyle: { fontSize: '15px', fontFamily:  "'Lato', sans-serif", color: '#454545' ,fontWeight:'bold'},
        descriptionStyle: { fontSize: '15px', fontFamily: "'Lato', sans-serif",color: '#454545' },
        buttonStyle: { fontSize: '14px', fontFamily:"'Lato', sans-serif", color: '#00AEEF',textTransform:'none'},
      },
  ];

  return (
    <><Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ flexGrow: 1, maxWidth: '810px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: '18px',
                color: '#101F30',
                fontFamily: "'Lato', sans-serif",
                textAlign: 'center',
                fontWeight:'bold',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '16px',
                },
              }}
            >
              AUTO LOAN TOOLS & RESOURCE CENTER


            </Typography>
          </Grid></Grid></Box></Container>
      {/* // ----------------------------------------------------------------------------------- */}
      <Container sx={{ mt: 8, justifyContent: 'center' }}>
        <Grid container spacing={3} marginBottom={8}  justifyContent="center" sx={{ flexWrap: 'wrap' }}>
          {cardsData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ width: '100%', boxShadow: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.07)' } }}>
                <CardContent sx={{ margin: '0px 0px 8px', padding: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  {/* Icon */}
                  <div style={{ width: '40px', height: '40px', color: 'green' }}> {/* Set width and height here */}
                    {data.icon}
                  </div>
                  {/* Title */}
                  <Typography variant="h5" gutterBottom sx={data.titleStyle}>
                    {data.title}
                  </Typography>
                  {/* Description */}
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, ...data.descriptionStyle }}>
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* Button with dynamic variant */}
                  <Button size="small" sx={data.buttonStyle}>
                    {data.button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container></>
  );
  
};

export default AutoloanTools;
