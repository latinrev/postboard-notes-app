import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { Card, Center, Container, TextInput } from "@mantine/core";
export default function AddNote() {
  const { setNotes } = useContext(AppContext);

  async function onChange(data: any) {}
  return (
    <Container> 
      <Center>
        <TextInput size="lg" radius="xl" placeholder="Search..." w="50%" style={{ borderColor: "#fff" }} />
      </Center>
    </Container>
  );
}
