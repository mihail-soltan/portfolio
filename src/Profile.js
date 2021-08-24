import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 250,
    margin: 20,
  },
  text: {
    width: "100%",
    maxWidth: 400,
    margin: 20,
  },
  tech: {
    fontSize: 24,
    width: "100%",
    margin: 20,
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="column"
        alignContent="center"
      >
        <p className="quote">
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.” – Martin Fowler
        </p>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="web developer"
              height="250"
              image="pic2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mihail Soltan
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                FULL-STACK WEB DEVELOPER
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="https://github.com/mihail-soltan" target="_blank">
              <IconButton aria-label="delete">
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/mihail-soltan/"
              target="_blank"
            >
              <IconButton aria-label="delete">
                <LinkedInIcon />
              </IconButton>
            </a>
          </CardActions>
        </Card>
        <Box>
          <Typography className={classes.text} variant="body1" gutterBottom>
            Creative, analytical Full Stack Web Developer with a passion for
            problem solving and efficient delivery of esthetical, functional,
            user-friendly solutions. A recent graduate of the WBS Coding School
            in Berlin who has gained valuable first-hand experience both working
            on individual projects and collaborating in a team. Enthusiastic
            about turning challenging ideas into clean, readable code and
            constantly diving deep into new frameworks and libraries.
          </Typography>
          <Typography  className={classes.tech}>
            HTML5 | CSS3 | BootStrap | JavaScript | Git
            <br/>
            React Bootstrap | Strapi | Contentful 
            <br/>
            React | REST APIs | SQL | MongoDB | NodeJS 
            <br/>
            Express | Heroku | Netlify 
          </Typography>
        </Box>
      </Box>
    </>
  );
}
