import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, withStyles,
} from '@material-ui/core';
import {
  Tune,
} from '@material-ui/icons';

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    minHeight: 48,
    height: 48,
  },
  toolBar: {
    minHeight: 48,
    height: 48,
    textAlign: 'left',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

type Props = {
  classes: {},
};

const TopAppBar = (props: Props) => {
  const { classes } = props;
  return (
    <AppBar color="primary" position="sticky" className={classes.appBar}>
      <Toolbar color="primary" className={classes.toolBar}>
        <Typography
          color="inherit"
          variant="h6"
          className={classes.title}
        >
            Pivo.tl
        </Typography>
        <Typography className={classes.grow} />
        <IconButton color="inherit" aria-label="Option">
          <Tune />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopAppBar);
