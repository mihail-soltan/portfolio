import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box'
export default function CenteredTabs() {

  const theme = createTheme({
    palette: {
      primary: green,
    },
  });


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box display="flex"  justifyContent="space-around">
        <Link style={{textDecoration: "none"}} to="/">
          <Button size="large" startIcon={<HomeIcon />} color="primary">
            HOME
          </Button>
        </Link>
        <Link style={{textDecoration: "none"}} to="/projects">
          <Button  size="large" startIcon={<AppsIcon />}color="primary">
            PROJECTS
          </Button>
        </Link>
        <Link style={{textDecoration: "none"}} to="/contact">
          <Button  size="large" startIcon={<MailOutlineIcon/>} color="primary">
            CONTACT
            </Button>
        </Link>
        </Box>
      </ThemeProvider>
    </div>
  );
}
