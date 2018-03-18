import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme();
const styles = t => ({
  root: {
    '& h1': {
      textAlign: 'center',
      color: 'blue'
    },
    '& .media-object': {
      maxWidth: '64px',
      marginRight: '15px'
    },
    '& .list-group-item': {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#eee'
      }
    },
    '& .container': {
      marginBottom: 100
    }
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
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default withStyles(styles)(SongListTheme);
