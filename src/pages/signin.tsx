import { useForm } from "react-hook-form";
import { INote } from "@/types/noteType";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import { useRouter } from "next/router";

function Login({ providers }) {
  const { register, handleSubmit } = useForm();
  let router = useRouter();
  async function onSubmit(data: INote) {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        //router.push("/");
      } else {
        console.log(error);
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("email")} />
        <input type="password" {...register("password")} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}
