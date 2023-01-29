import { updateNote } from "@/util/notesFetch";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import {} from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import NoteInputs from "./noteInputs";

export default function UpdateNoteModal({
  note,
  opened,
  setOpened,
  setNotes,
  noteIndex,
}) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("subject", note.subject);
    setValue("content", note.content);
  }, [note]);

  async function onSubmit(updatedNote) {
    let noteDoc = await (await updateNote(note._id, updatedNote)).data;
    setNotes((prev) => {
      let copy = [...prev];
      copy[noteIndex] = noteDoc;
      return copy;
    });
    setOpened(false);
  }
  return (
    <Modal opened={opened} onClose={() => setOpened(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NoteInputs register={register} />
      </form>
    </Modal>
  );
}
