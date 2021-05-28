import React from 'react';


import { Typography, Container, Paper, Grid } from '@material-ui/core';
import home  from '../../images/home.png';
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.png';
import ReactPlayer from 'react-player';
import useStyles from './styles';


const Showcase = () => {
    const classes = useStyles();

    return (
      <div>
      <Container component='main' className={classes.root}>
        <Paper  className={classes.container} elevation={2} >
          
          <img style = {window.matchMedia("(max-width: 700px)").matches? {width: "200px", height: "200px", margin: "20px auto"}: {width: "300px", height: "300px", margin: "20px auto"}} src={home} alt="home" />

           <Typography style = {{width: window.matchMedia("(max-width: 700px)").matches ? "100%" : "45%", textAlign: "center", margin: "20px 0"}} variant='h6' className={classes.paragraph}>Being able to shop for food is an important part of staying well and independent. Vulnerable people such as old people, people with limited movements, sick people... are struggling every time to find someone to help them with this task. Moreover, the COVID-19 pandemic deepens this issue because of the many restrictions that are imposed on us. We help vulnerable people to be in control of what food they purchase with our grocery delivery and escorted supermarket shopping services.
                </Typography>
               </Paper>
          <Grid style = {{display: "flex", flexWrap: "wrap",textAlign: "center", alignItems:"center"}} container spacing={2}>
            <Grid item xs >
                <ReactPlayer

                    className ="reactplayer"
                    url="https://youtu.be/o9NAY3BrV7o"
                    width = "328px"
                    height = "300px"
        
                 />
  
          </Grid>

          <Grid item xs style= {{width: "300px"}}>
            <Typography  className={classes.heading} variant='h3' >Services</Typography>
          </Grid>
          
        <Grid/>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant='h4'>Shop for you</Typography>
                  <Typography variant='h6' className={classes.paragraph1} > If getting around the shop  becoming hard for you do not feel burdensome to ask for help. 
                Our team of volunteers are always there to shop for you </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper1}>
              <Typography className={classes.title} variant='h4'>Shop with you</Typography>
              <Typography variant='h6' className={classes.paragraph1} >  If being in the shop on your own is a struggle and a difficulty, volunteers can give you a support and escort  you around</Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
              <Typography className={classes.title}  variant='h4'>Deliver to you</Typography>
                <Typography variant='h6' className={classes.paragraph1}>Volunteers deliver fresh groceries to your door</Typography>
                  <img src = {home1}  height='140'  alt='girl'/>
                  </Paper>
            </Grid>
          </Grid>
       
        </Grid>
     
    </Container>
  
   </div>
    
  );
};
      
    


export default Showcase;
