import { addNote, deleteNote, updateNote } from "@/util/notesFetch";
import { Badge, Card, Container, Group, Text } from "@mantine/core";
import {} from "next";
import { useForm } from "react-hook-form";
import NoteInputs from "./noteInputs";

export default function AddNote({ setNotes }) {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data: any) {
    let noteDoc = await (await addNote(data)).data;
    setNotes((prev) => [...prev, noteDoc]);
    reset();
  }
  return (
    <>
      <Container size={"xs"}>
        <Card sx={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <NoteInputs register={register} />
          </form>
        </Card>
      </Container>
    </>
  );
}
