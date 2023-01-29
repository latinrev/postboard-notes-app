import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react"

export default function Register() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: INote) {
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("email")} />
          <input type="password" {...register("password")} />
          <input type="submit" value="submit" />
        </form>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: {} };
}
