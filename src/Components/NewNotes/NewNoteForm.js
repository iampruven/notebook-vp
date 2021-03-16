import {
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TextField,
  ButtonGroup,
  Button,
  Paper,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { NoteContext } from "../../NoteContext";

export default function NewNoteForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const newNoteContext = useContext(NoteContext);
  console.log(newNoteContext.title);
  const addFields = (e) => {
    newNoteContext.createNote(title, body).then((newNote) => {
      console.log("new note here:", newNote);
      props.history.push(`/note/${newNote.id}`);
    });
  };
  const redirectToHome=()=>{
    props.history.push('/')
  }
  return (
    <Container maxWidth="md">
      <Box pt={2}>
        <TableContainer component={Paper}>
          <Table aria-label="Entry form">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>
                  <TextField
                    id="title"
                    label="Title"
                    aria-label="Title of entry"
                    autoComplete="off"
                    required
                    aria-required
                    fullWidth
                    inputProps={{ minLength: 1 }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>Entry</TableCell>
                <TextField
                  id="standard-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  placeholder="Default Value"
                  fullWidth
                  required
                  inputProps={{ minLength: 1, maxLength: 250 }}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
      <Box m={4}>
        <ButtonGroup>
          <Button
            variant="contained"
            color="default"
            onClick={(e) => addFields(e)}
          >
            Submit
          </Button>
          <Button variant="contained" color="default" onClick={redirectToHome}>
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
