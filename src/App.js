import React from 'react';
import { StoriesContainer } from './containers/StoriesContainer';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { Layout } from './components/Layouts/Layout';

export const App = () => {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <StoriesContainer />
      </Layout>
    </ThemeProvider>
  );
};
