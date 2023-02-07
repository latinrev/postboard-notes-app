import { Button, Textarea, TextInput } from "@mantine/core";
import {} from "next";

export default function NoteInputs({ register }) {
  return (
    <>
      <TextInput
        placeholder="New Thought? What is it about?"
        {...register("subject")}
        variant="unstyled"
        style={{ fontSize: "20" }}
        size="xl"
      />
      <Textarea
        placeholder="I'd type something here :)"
        autosize
        minRows={4}
        maxRows={8}
        {...register("content")}
        variant="unstyled"
      />
      <Button type="submit" variant="default">
        Save
      </Button>
    </>
  );
}
