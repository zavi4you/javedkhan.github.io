import React from "react";
import { Typography, Container, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";

import { TypeAnimation } from 'react-type-animation';
import { LaptopWindowsTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft:"206px",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(2),
        
        },
    },
    custombutton: {
        
        background: "linear-gradient(45deg, #A7FFFF 30%, #00bfbf 90%)",
    borderRadius: 8,
    border: 0,
    
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  
  
        '&:hover': {
          background: '#fff',
          color: '#00bfbf',
        },
        transition: 'all 0.5s ease',
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${Resume.basics.name}`} />
            </Typography>
            <Typography variant="h4" component="h3" gutterBottom>
            <TypeAnimation
                    sequence={[
                        'An Engineer', // Types 'One'
                        2000, // Waits 1s
                        'A Designer', // Types 'One'
                        2000,
                        'A Developer', // Deletes 'One' and types 'Two'
                        4000, // Waits 2s
                        // Types 'Three' without deleting 'Two'
                        () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    
                    cursor={false}
                    repeat={Infinity}

    />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
            I'm a Full-Stack Web and Mobile Application Developer based in India with a strong background in Javascript and Typescript Programming Language.
            </Typography>
            <Button
          className={classes.custombutton}
          size="large"
          variant="outlined"
          component="a"
          href="/About"
          sx={{ mt: 58 }}
        >
          CONTACT
        </Button>
            
        </Container>
    );
};
