import React from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import App from './containers/App/App';

type Props = {
  history: History,
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2acb60',
      contrastText: 'white',
    },
  },
});

const PublicRoutes = (props: Props) => {
  const { history } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Route
          component={App}
        />
      </Router>
    </MuiThemeProvider>
  );
};

export default (PublicRoutes);
