import axios from 'axios';
import Box from "@material-ui/core/Box";
import "./App.css";
import { useState } from "react";
export default function Admin() {
  const projectAPI = "https://portfolio-backend3.herokuapp.com/";
  const initialProject = {
    title: "",
    source: "",
    stack: "",
    github: {
      frontend: "",
      backend: "",
    },
    picture: "",
    date: "",
  };
  const [project, setProject] = useState(initialProject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...project,
      [name]: value,
    };
    setProject(newData);
  };
  const handleSourceCode = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...project,
      github: { ...project.github, [name]: value },
    };
    setProject(newData);
  };
  function submit(e) {
    e.preventDefault();
    axios
      .post(projectAPI, {
        title: project.title,
        source: project.source,
        stack: project.stack,
        github: {frontend: project.github.frontend,
          backend: project.github.backend
        },
        picture: project.picture,
        date: project.date,
      })
      .then((res) => {
        console.log(res.data);
      })

      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
      });
  }
  return (
    <Box display="flex" justifyContent="center">
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="title"
          id="title"
          name="title"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="source"
          id="source"
          name="source"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="stack"
          id="stack"
          name="stack"
        />
        <input
          type="text"
          onChange={handleSourceCode}
          placeholder="frontend"
          id="frontend"
          name="frontend"
        />
        <input
          type="text"
          onChange={handleSourceCode}
          placeholder="backend"
          id="backend"
          name="backend"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="picture"
          id="picture"
          name="picture"
        />
                <input
          type="text"
          onChange={handleChange}
          placeholder="date"
          id="date"
          name="date"
        />
        <input type="submit" value="submit" />
      </form>
    </Box>
  );
}
