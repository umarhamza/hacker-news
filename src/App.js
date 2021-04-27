import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { Layout } from './components/layout/Layout';
import { Stories } from './components/stories/Stories';

export const App = () => {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Stories />
      </Layout>
    </ThemeProvider>
  );
};
