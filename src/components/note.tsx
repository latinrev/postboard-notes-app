import { deleteNote, updateNote } from "@/util/notesFetch";
import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Group,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import { IoMdTrash, IoMdReorder } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
export default function Note({ note, onClick, deleteNote }) {
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder h={"100%"}>
        <Container onClick={() => onClick()}>
          <Group position="apart" mt="md" mb="xs">
            <Title size="h4" weight="500" id="subject">
              {note.subject}
            </Title>
          </Group>
          <Text size="sm" color="dimmed" id="content">
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
            <Menu.Item onClick={deleteNote} icon={<IoMdTrash />} color="red">
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Card>
    </>
  );
}
