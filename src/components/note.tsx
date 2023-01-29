import { deleteNote, updateNote } from "@/util/notesFetch";
import { Badge, Card, Group, Text } from "@mantine/core";
import {} from "next";

export default function Note({ note }) {
  function onFinished(id, e) {
    updateNote(id, { [e.target.id]: e.target.textContent });
  }
  return (
    <>
      <Card
        style={{ height: "100%" }}
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
      >
        <Group position="apart" mt="md" mb="xs">
          <Text weight="500" id="subject" defaultValue={note.subject}>
            {note.subject}
          </Text>
        </Group>
        <Text size="sm" color="dimmed" id="content" defaultValue={note.content}>
          {note.content}
        </Text>
      </Card>
    </>
  );
}
