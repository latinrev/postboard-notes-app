import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { addNote, deleteNote, getNotes, updateNote } from "../util/notesFetch";
import { Grid, Container, Card, Stack, Space } from "@mantine/core";
import Note from "@/components/note";
import NoteInputs from "@/components/noteInputs";
import AddNote from "@/components/addnote";
import UpdateNoteModal from "@/components/updatedNodeModal";
import { useRouter } from "next/router";

export default function Notes({ fetchedNotes }) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [notes, setNotes] = useState(fetchedNotes);
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
    <>
      <Container my="md" fluid>
        <AddNote setNotes={setNotes} />
        <Space h="xl" />
        {selectedNote !== -1 ? (
          <UpdateNoteModal
            note={notes[selectedNote]}
            setOpened={setOpened}
            opened={opened}
            setNotes={setNotes}
            noteIndex={selectedNote}
          />
        ) : null}
        <Grid>
          {notes.map((note, i) => (
            <>
              <Grid.Col
                xs={6}
                md={4}
                lg={3}
                xl={2}
                style={{ alignItems: "center" }}
              >
                <Note
                  onClick={() => {
                    openModal(i);
                  }}
                  note={note}
                  deleteNote={() => {
                    deleteNoteAndUpdate(note._id, i);
                  }}
                ></Note>
              </Grid.Col>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
