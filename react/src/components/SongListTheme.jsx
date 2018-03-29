import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import { CLASSES_TYPE, CHILDREN_TYPE } from '../utils';

const theme = createMuiTheme();
const styles = t => ({
  root: {
    '& h1': {
      textAlign: 'center',
      color: 'blue',
    },
    '& .media-object': {
      maxWidth: '64px',
      marginRight: '15px',
    },
    '& .list-group-item': {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#eee',
      },
    },
    '& .container': {
      marginTop: 50,
      marginBottom: 100,
    },
  },
});

const SongListTheme = (props) => {
  const { classes: { root } } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div" className={root}>
        {props.children}
      </Typography>
    </MuiThemeProvider>
  );
};

SongListTheme.propTypes = {
  classes: CLASSES_TYPE.isRequired,
  children: CHILDREN_TYPE.isRequired,
};

export default withStyles(styles)(SongListTheme);
