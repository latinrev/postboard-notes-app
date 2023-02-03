import { PasswordInput, TextInput } from "@mantine/core";
import {} from "next";

export default function AuthInputs({ register }) {
  return (
    <>
      <TextInput
        label="Email"
        placeholder="you@mantine.dev"
        required
        {...register("email")}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        {...register("password")}
      />
    </>
  );
}
