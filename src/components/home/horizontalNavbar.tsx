import { Center, Container, Group, Header, Stack, Navbar } from "@mantine/core";
import { useState } from "react";
import { FaTrashAlt, FaPaperclip, FaArchive } from "react-icons/fa";

export default function HorizontalNavbar() {
  return (
    <Navbar width={{ base: 50 }} p="md" withBorder={false}>
      <Navbar.Section>
        <Stack justify="space-between" spacing={50} align="center">
          <FaPaperclip></FaPaperclip>
          <FaArchive></FaArchive>
          <FaTrashAlt></FaTrashAlt>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
