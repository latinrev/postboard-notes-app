import { addNote, deleteNote, updateNote } from "@/util/notesFetch";
import {
  Anchor,
  Badge,
  Card,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import {} from "next";
import { useForm } from "react-hook-form";

export default function HeroSignIn({
  title,
  statusText,
  statusAction,
  redirectPage,
}) {
  return (
    <Container size={"xs"}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        {title}
      </Title>

      <Text color="dimmed" size="sm" align="center" mt={5}>
        {statusText}
        <Anchor<"a"> href="#" size="sm" onClick={redirectPage}>
          {statusAction}
        </Anchor>
      </Text>
    </Container>
  );
}
/* import { addNote, deleteNote, updateNote } from "@/util/notesFetch";
import {
  Anchor,
  Badge,
  Card,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import {} from "next";
import { useForm } from "react-hook-form";

export default function HeroSignIn({ title, status, redirectPage }) {
  return (
    <>
      <Container size={"xs"}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor<"a"> href="#" size="sm" onClick={redirectPage}>
            Create account
          </Anchor>
        </Text>
      </Container>
    </>
  );
}
 */
