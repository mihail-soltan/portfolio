import Box from "@material-ui/core/Box";
import './App.css'
import { useState } from "react";
export default function Admin() {
  const projectAPI = 'https://portfolio-backend3.herokuapp.com/'
  const initialProject = {
    title: '',
    source: '',
    stack: '',
    github: {
      frontend: '',
      backend: '',
    },
    picture: ''
  }
  const [project, setProject] = useState(initialProject)
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return(
  <Box display="flex" justifyContent="center">
      <form>
    <input type="text" onChange={handleChange}placeholder="title"id="title" name="title"/>
    <input type="text" onChange={handleChange}placeholder="source"id="source" name="source" />
    <input type="text" onChange={handleChange}placeholder="stack"id="stack" name="stack" />
    <input type="text" onChange={handleChange}placeholder="github"id="github" name="github" />
    <input type="file"id="files"/>
    <input type="submit" value="submit"/> 
    </form>
  </Box>)
}
