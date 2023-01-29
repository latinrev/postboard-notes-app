import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { addNote, deleteNote, getNotes, updateNote } from "../util/notesFetch";
import { Grid, Skeleton, Container } from "@mantine/core";
import Note from "@/components/note";
const child = <Skeleton height={140} radius="md" animate={false} />;
export default function Notes({ fetchedNotes  }) {
  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState(fetchedNotes);
  const router = useRouter();
  const { status, data } = useSession();
  if (status === "unauthenticated") {
    router.replace("/login");
  }

  useEffect(() => {
    getAndSetNotes();
  }, []);

  async function getAndSetNotes() {
    let fetchedNotes = await getNotes();
    setNotes([...fetchedNotes.data]);
  }

  function onSubmit(data: any) {
    addNote(data);
    getAndSetNotes();
  }

  return (
    <>
      <Container my="md" fluid>
        <Grid>
{/*           {notes.map((note) => (
            <>
              <Grid.Col xs={2} style={{ alignItems: "center" }}>
                {<Note note={note}></Note>}
              </Grid.Col>
            </>
          ))} */}
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("subject")} />
          <textarea {...register("content")} />
          <input type="submit" value="submit" />
        </form>
      </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  console.log("fuck/?")
  let fetchedNotes = await (await getNotes()).data;
  console.log({fetchedNotes})
  return { props: { fetchedNotes } };
}
