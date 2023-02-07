import { useForm } from "react-hook-form";
import { INote } from "@/interfaces/noteInterface";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import { useRouter } from "next/router";
import {
  Container,
  Title,
  Anchor,
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Text,
  Center,
} from "@mantine/core";
import AuthInputs from "@/components/authInputs";
import HeroSignIn from "@/components/signin/heroSignIn";

function Login({ providers }) {
  const { register, handleSubmit } = useForm();
  let router = useRouter();

  async function onSubmit(data: INote) {
    console.log(data);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        router.push("/");
      } else {
        console.log(error);
      }
    });
  }

  return (
    <Center>
      <Container fluid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container size={420} my={40}>
            <HeroSignIn
              title="Welcome Back!"
              statusText="Do not have an account yet? "
              statusAction="Create Account"
              redirectPage={() => router.push("/register")}
            />
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <AuthInputs register={register} />
              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                <Anchor<"a">
                  onClick={(event) => event.preventDefault()}
                  href="#"
                  size="sm"
                >
                  Forgot password?
                </Anchor>
              </Group>
              <Button fullWidth mt="xl" type="submit">
                Sign in
              </Button>
            </Paper>
          </Container>
        </form>
      </Container>
    </Center>
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
