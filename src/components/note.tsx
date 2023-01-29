import { deleteNote, updateNote } from "@/util/notesFetch";
import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import { IoMdTrash, IoMdReorder } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
export default function Note({ note, onClick }) {
  return (
    <>
      <Card
        style={{ height: "100%" }}
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
      >
        <Container onClick={() => onClick()}>
          <Group position="apart" mt="md" mb="xs">
            <Text weight="500" id="subject" defaultValue={note.subject}>
              {note.subject}
            </Text>
          </Group>
          <Text
            size="sm"
            color="dimmed"
            id="content"
            defaultValue={note.content}
          >
            {note.content}
          </Text>
        </Container>
        <Menu withinPortal position="right-start" shadow="sm">
          <Menu.Target>
            <ActionIcon>
              <BsThreeDots></BsThreeDots>
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={() => {
                deleteNote(note._id);
              }}
              icon={<IoMdTrash />}
              color="red"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Card>
    </>
  );
}
