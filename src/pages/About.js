import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Skills } from '../components/Skills/index';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WordCloud from '../components/Skills/wordcloud';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <LogoLink />
        <Skills />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>
    </>
  );
};
