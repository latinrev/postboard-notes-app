import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { addNote, deleteNote, getNotes, updateNote } from "../util/notesFetch";
import {
  Grid,
  Skeleton,
  Container,
  Textarea,
  TextInput,
  Card,
  Button,
  Modal,
  Group,
} from "@mantine/core";
import Note from "@/components/note";
import NoteInputs from "@/components/noteInputs";
const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Notes({ fetchedNotes }) {
  const [opened, setOpened] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [notes, setNotes] = useState(fetchedNotes);
  const [noteIndex, setNodeIndex] = useState(null);
  const router = useRouter();
  const { status, data } = useSession();
  if (status === "unauthenticated") {
    router.replace("/login");
  }

  async function onSubmit(data: any) {
    let noteDoc = await (await addNote(data)).data;
    setNotes((prev) => [...prev, noteDoc]);
  }
  function openModal(note) {
    setOpened(true);
    setValue("subject", note.subject);
    setValue("content", note.content);
  }
  function closeModal() {
    setOpened(false);

  }
  return (
    <>
      <Container my="md" fluid>
        <Container size={"xs"}>
          <Card sx={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <NoteInputs register={register}></NoteInputs>
            </form>
          </Card>
          *
        </Container>
        <Modal opened={opened} onClose={closeModal}>
          <NoteInputs register={register} />
        </Modal>
        <Grid>
          {notes.map((note) => (
            <>
              <Grid.Col
                onClick={() => openModal(note)}
                xs={2}
                style={{ alignItems: "center" }}
              >
                <Note note={note}></Note>
              </Grid.Col>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
