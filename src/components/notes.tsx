import { addNote, deleteNote, getNotes, updateNote } from "../util/notesFetch";
import { Grid, Container, Card, Stack, Space } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Note from "@/components/note";
import UpdateNoteModal from "@/components/updatedNodeModal";
import AddNote from "@/components/home/addNote";

export default function Notes() {
  const { notes, setNotes } = useContext(AppContext);
  const [opened, setOpened] = useState(false);
  const [selectedNote, setSelectedNote] = useState(-1);

  function openModal(i) {
    setSelectedNote(i);
    setOpened(true);
  }

  function deleteNoteAndUpdate(id, i) {
    deleteNote(id);
    setNotes((prev) => prev.filter((curr) => curr._id !== id));
  }

  return (
    <Grid>
      {notes.map((note, i) => (
        <Grid.Col key={note._id} xs={6} md={4} lg={3} xl={3}>
          <Note
            onClick={() => {
              openModal(i);
            }}
            note={note}
            deleteNote={() => {
              deleteNoteAndUpdate(note._id, i);
            }}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
