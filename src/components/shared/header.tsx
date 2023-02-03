import { Container, Group, Header } from "@mantine/core";
import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import styles from "../../styles/Header.module.css";
interface Props {}

export const HeaderComponent: NextPage<Props> = ({}) => {
  const { data, status } = useSession();
  console.log(data)
  return (
    <Header height={60} px="md">
      <Container className={styles.header} fluid >  
        <Group position="right">{data?.user?.email}</Group>
      </Container>
    </Header>
  );
};
