import axios from 'axios';
import { useState, useEffect } from 'react';
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

const projectAPI = "https://portfolio-backend3.herokuapp.com/"


const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 200,
  },
});

export default function Projects() {

  const [data, setData] = useState([])
  const reversed = [...data].reverse()
  useEffect(()=>{
    axios.get(projectAPI).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  },[])
  console.log(data)
  console.log(reversed)
  const classes = useStyles();
  return (<>
    <VerticalTimeline className="timeline">
         {reversed.length ? reversed.map((project)=>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7A3577", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #7A3577" }}
          date={project.date}
          iconStyle={{ background: "#7A3577", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {project.title}
          </h3>
          <Card className={classes.root}>
            <CardActionArea>
              <a href={project.source} target="_blank" rel="noreferrer">
                <CardMedia
                  className={classes.media}
                  image={project.picture}
                  title={project.title}
                />
              </a>
            </CardActionArea>
          </Card>
          <p>{project.stack}</p>
          <a
            href={project.github.frontend}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
          {project.github.backend.length >  3 ?
          <a
            href={project.github.backend}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
          : null}
        </VerticalTimelineElement>
        ) : <h1>Loading</h1>}
        
        <VerticalTimelineElement
          iconStyle={{ background: "#357A38", color: "#fff" }}
          icon={<StarIcon />}
        />        
      </VerticalTimeline>
    </>
  );
}
