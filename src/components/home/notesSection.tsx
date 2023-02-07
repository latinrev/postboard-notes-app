import { Container, Grid } from "@mantine/core";
import Notes from "../notes";
import AddNote from "./addNote";
import Search from "./search";
import Tags from "./tags";
export default function NotesSection() {
  return (
    <Container fluid my={"lg"}>
      <Grid gutter="xs">
        <Grid.Col span={12}>
          <Search />
        </Grid.Col>
        <Grid.Col span={7} mr="xl">
          <AddNote />
        </Grid.Col>
        <Grid.Col span="auto">
          <Tags />
        </Grid.Col>
        <Grid.Col span={12}>
          <Notes />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
