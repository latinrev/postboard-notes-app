import { Badge, Card, Group, Text } from "@mantine/core";
import {} from "next";

export default function Note({ note }) {
  function onFinished(id, e) {
    console.log();
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
          <Text weight="500">{note.subject}</Text>
        </Group>
        <Text size="sm" color="dimmed">
          {note.content}
        </Text>
      </Card>
    </>
  );
}
