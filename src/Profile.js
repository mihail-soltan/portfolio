import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 250,
        margin: 20,
    },
    text: {
        width: '100%',
        maxWidth: 400,
        margin: 20,
    }
});


export default function Profile() {
    const classes = useStyles();

    return (
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
                    <a href="https://www.linkedin.com/in/mihail-soltan/" target="_blank">
                    <IconButton aria-label="delete">
                        <LinkedInIcon />
                    </IconButton>
                    </a>
                </CardActions>
            </Card>
            <Typography className={classes.text} variant="body1" gutterBottom>
            Analytical and detail-oriented Web Developer with a knack for conceptualizing and delivering elegant, user-friendly solutions effectively and efficiently. Possesses a track record of developing an e-commerce mobile app, a CRM online portal and a fully-functional website for a nonprofit organization. Armed  with an extensive understanding of end-to-end SDLC and cloud computing. Regular participant of  hackathons and web developer meetups.
            </Typography>
        </Box>
    );
}
