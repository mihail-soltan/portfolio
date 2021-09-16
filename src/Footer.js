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

export default function Footer() {
  return (
    
      <footer className="footerBox">
        <p>all rights reserved © 2021 | Mihail Soltan</p>
      </footer>
  
    // <Box  className="footerBox">
    //   <Grid style={{ alignItems: "center"}}>
    //     <Grid item
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         // backgroundColor: "whitesmoke",
    //         // color: "#3B3F39",
    //         fontSize: "16px",
    //         padding: "10px",
    //       }}
    //     >
    //         all rights reserved © 2021 | Mihail Soltan
    //     </Grid >
    //   </Grid>
    // </Box>
  );
}
