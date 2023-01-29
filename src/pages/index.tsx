import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Notes from "./notes";
import { Container } from "@mantine/core";
import { getNotes } from "@/util/mongoFunctions";

export default function Home({ fetchedNotes }) {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.replace("/login");
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid={true}>
        <button
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        >
          SIGN OUT
        </button>
        <Notes fetchedNotes={fetchedNotes}></Notes>
      </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  let session = await getSession(context);
  let fetchedNotes = await getNotes(session?.user._id);
  return { props: { fetchedNotes: JSON.parse(JSON.stringify(fetchedNotes)) } };
}
