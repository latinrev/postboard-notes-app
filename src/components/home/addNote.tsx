import NoteInputs from "../noteInputs";
import { addNote } from "@/util/notesFetch";
import { Card } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
export default function AddNote() {
  const { setNotes } = useContext(AppContext);
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data: any) {
    let noteDoc = await (await addNote(data)).data;
    setNotes((prev) => [...prev, noteDoc]);
    reset();
  }
  return (
    <Card style={{ background: "#393e4677" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NoteInputs register={register} />
      </form>
    </Card>
  );
}
