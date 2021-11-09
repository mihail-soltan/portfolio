import Box from "@material-ui/core/Box";
import './App.css'
export default function Admin() {
  return(
  <Box display="flex" justifyContent="center">
      <form>
    <input type="text" placeholder="title"id="title" name="title"/>
    <input type="text" placeholder="source"id="source" name="source" />
    <input type="text" placeholder="stack"id="stack" name="stack" />
    <input type="text" placeholder="github"id="github" name="github" />
    <input type="file"id="files"/>
    <input type="submit" value="submit"/> 
    </form>
  </Box>)
}
