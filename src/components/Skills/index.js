import { Box, Grid, Typography, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WordCloud from './wordcloud'

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100",
      marginTop: "auto",
      marginBottom: "auto", 
      marginRight:"150px",
      "@media (max-width: 768px)": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
  },
}),);

 export const Skills = () => {
  const classes = useStyles();

  return (
    //<Container component="main" className={`${classes.main}`} maxWidth="sm"
      
      
   
      <Container
        
        
      >
        
        <Typography variant="h2" marked="center" component="h2" sx={{ mt: 5 }}>
          
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box>
                
                <Box
                 
                  
                />
                <Typography variant="h5" component="h2">
                  
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                
                <Box
                  
                />
                <Typography variant="h5" align="right">
                <div className="tagcloud-wrap">
                    <WordCloud />
                    </div>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>

    
  );
}
