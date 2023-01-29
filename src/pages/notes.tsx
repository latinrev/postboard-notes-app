import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { addNote, deleteNote, getNotes, updateNote } from "../util/notesFetch";
import { Grid, Container, Card } from "@mantine/core";
import Note from "@/components/note";
import NoteInputs from "@/components/noteInputs";
import AddNote from "@/components/addnote";
import UpdateNoteModal from "@/components/updatedNodeModal";

export default function Notes({ fetchedNotes }) {
  const [opened, setOpened] = useState(false);
  const [notes, setNotes] = useState(fetchedNotes);
  const [selectedNote, setSelectedNote] = useState(-1);
  const { status, data } = useSession();

  const router = useRouter();
  if (status === "unauthenticated") {
    router.replace("/login");
  }

  function openModal(i) {
    setSelectedNote(i);
    setOpened(true);
  }
  return (
    <>
      <Container my="md" fluid>
        <AddNote setNotes={setNotes} />
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
              <Grid.Col xs={2} style={{ alignItems: "center" }}>
                <Note
                  onClick={() => {
                    openModal(i);
                  }}
                  note={note}
                ></Note>
              </Grid.Col>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
