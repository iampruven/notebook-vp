import {useEffect,useState} from "react";
import { Typography } from "@material-ui/core";


export default function NotePage(props) {
  const noteId = Number(props.match.params.id);
  const [entry,setEntry] = useState(null)
  useEffect(()=>{
    fetch(`http://localhost:3004/entries/${noteId}`)
      .then(res=>res.json())
      .then(data=>setEntry(data))
      .catch(error =>console.log(error))
  },[noteId])

  if (!entry) {
    return <h1>LOADING...</h1>
  }

  return (
    <div>
      <Typography variant="h3">Note: {entry.title}</Typography>
      <Typography>
        {entry.thoughts}
      </Typography>
    </div>
  );
}
