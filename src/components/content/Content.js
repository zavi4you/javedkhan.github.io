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
           
            
        </Container>
    );
};
