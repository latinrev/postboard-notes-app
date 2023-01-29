import styles from "@/styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { signIn,getSession} from "next-auth/react"

export default function Login() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(data: INote) {
    console.log({...data})
    await signIn("credentials",{...data,redirect:true,callbackUrl:"/" })
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
