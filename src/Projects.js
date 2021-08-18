import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import "react-vertical-timeline-component/style.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const devIconStyle = {
  fill: "thistle",
  width: "50px",
  height: "50px",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 200,
  },
});

export default function Profile() {
  const classes = useStyles();
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7A3577", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A3577" }}
          date="August 2021"
          iconStyle={{ background: "#7A3577", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Healthy Twist Cooking Website (Full-Stack Group Project)
          </h3>
          <Card className={classes.root}>
            <CardActionArea>
              <a
                href="https://vibrant-wescoff-1211b0.netlify.app/"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="healthy-twist.png"
                  title="Healthy Twist Cooking Website"
                />
              </a>
            </CardActionArea>
          </Card>
          <p>
            React | React Bootstrap | Strapi | Heroku | Netlify | AWS S3 | CSS
          </p>
          <a
            href="https://github.com/mihail-soltan/Healthy-Twist"
            target="_blank"
          >
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7A3577", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A3577" }}
          date="July 2021"
          iconStyle={{ background: "#7A3577", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            What's My IP (Group Project)
          </h3>
          <Card className={classes.root}>
            <CardActionArea>
              <a
                href="https://confident-noether-6629d2.netlify.app/"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="whats-my-ip.png"
                  title="What's my IP"
                />
              </a>
            </CardActionArea>
          </Card>
          <p>React | Rsuite JS | Leaflet | REST APIs | Netlify</p>
          <a href="https://github.com/mihail-soltan/ip_address" target="_blank">
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7A3577", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A3577" }}
          date="July 2021"
          iconStyle={{ background: "#7A3577", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hacker News Clone (Group Project)
          </h3>
          <Card className={classes.root}>
            <CardActionArea>
              <a
                href="https://determined-pare-9ee5c9.netlify.app/"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="Hacker-News-Clone.png"
                  title="Hacker News Clone"
                />
              </a>
            </CardActionArea>
          </Card>
          <p>React | CSS | Hacker News API | Rsuite JS | Netlify</p>
          <a href="https://github.com/mihail-soltan/hn-project" target="_blank">
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7A3577", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A3577" }}
          date="June 2021"
          iconStyle={{ background: "#7A3577", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">To Do List (Group Project)</h3>
          <Card className={classes.root}>
            <CardActionArea>
              <a
                href="https://mihail-soltan.github.io/To-do-list-app/"
                target="_blank"
              >
                <CardMedia
                  className={classes.media}
                  image="To-Do-List.png"
                  title="To-Do List"
                />
              </a>
            </CardActionArea>
          </Card>
          <p>JavaScript | CSS3 | HTML5| GitHub Pages</p>
          <a href="https://github.com/mihail-soltan/To-do-list-app" target="_blank">
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#357A38", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
}
