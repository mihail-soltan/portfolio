import React from "react";
import { green } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const styles = {
  position: "relative",
  width: "100%",

  bottom: 0,
  // borderTop: "1.5px solid #3B3F39",
};
const theme = createTheme({
  palette: {
    primary: green,
  },
});

let currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    
      <footer className="footerBox">
        <p>all rights reserved © {currentYear} | Mihail Soltan</p>
      </footer>
  );
}
