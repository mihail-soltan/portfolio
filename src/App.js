import './App.css';
import CenteredTabs from './Navbar'
import Box from '@material-ui/core/Box';
import Profile from './Profile'
import Projects from './Projects'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Box display="block" justifyContent="center" m={1} p={1} bgcolor="background.paper"> */}
        <CenteredTabs />
        <Switch>
          <Route exact path="/">
            <Box>
              <Profile />
            </Box>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      {/* </Box> */}
    </ThemeProvider>
  );
}

export default App;
