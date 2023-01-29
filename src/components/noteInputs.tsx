import { Button, Textarea, TextInput } from "@mantine/core";
import {} from "next";

export default function NoteInputs({ register }) {
  
  return (
    <>
      <TextInput
        placeholder="What is it about?"
        {...register("subject")}
        variant="unstyled"
        style={{ fontSize: "20" }}
      />
      <Textarea
        placeholder="I'd type something here :)"
        autosize
        minRows={4}
        maxRows={16}
        {...register("content")}
        variant="unstyled"
      />
      <Button type="submit" variant="default">
        Save
      </Button>
    </>
  );
}
