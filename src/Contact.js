import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import emailjs from "emailjs-com";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: 375,
    },
    [theme.breakpoints.up("sm")]: {
      width: 600,
    },
    [theme.breakpoints.up("md")]: {
      width: 960,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1200,
    },
  },
  fields: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
const theme = createTheme({
  palette: {
    primary: green,
  },
});
export default function ComposedTextField() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact",
        "contact_form",
        e.target,
        "user_Q9bSIQhVb5pxNg99CfDo9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <Box display="flex" justifyContent="center" className="contact">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <input type="hidden" name="contact_number" />
        <FormControl fullWidth className={classes.fields} variant="outlined">
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={name}
            onChange={handleName}
            label="Name"
            type="text"
            name="user_name"
          />
        </FormControl>
        <FormControl fullWidth className={classes.fields} variant="outlined">
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={email}
            onChange={handleEmail}
            label="Email"
            type="email"
            name="user_email"
          />
        </FormControl>
        <FormControl fullWidth className={classes.fields} variant="outlined">
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Type your message"
            multiline
            rows={10}
            variant="outlined"
            name="message"
            value={message}
            onChange={handleMessage}
          />
        </FormControl>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.fields}
          >
            Submit
          </Button>
        </ThemeProvider>
      </form>
    </Box>
  );
}
