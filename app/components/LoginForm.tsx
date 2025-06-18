"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@components/form/Input";
import { PasswordInput } from "@components/form/PasswordInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handler = async (formData: any) => {
    const { username, password } = formData;
    setSubmitted(true);
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (res?.error) {
      setError(true);
      setSubmitted(false);
    } else {
      // Handle successful login here (e.g., redirect or store user data)
      router.push("/summary");
    }
    return;
  };

  return (
    <div className="w-1/2 bg-gray-700 mr-auto ml-auto px-4 py-4 mt-10 rounded">
      <form
        data-testid="loginForm"
        data-component="loginForm"
        onSubmit={handleSubmit((data) => {
          handler(data);
        })}
      >
        <Input
          errors={errors}
          label="User name *"
          name="username"
          pattern={{
            value: /[A-Za-z]/,
            message: "Please fill out this field",
          }}
          register={register}
          requiredMessage={"Please fill out this field"}
          testId={"loginUsernamedInput"}
        />
        <PasswordInput
          errors={errors}
          label="Password *"
          name="password"
          pattern={{
            value: /[A-Za-z]/,
            message: "Please fill out this field",
          }}
          register={register}
          requiredMessage={"Please fill out this field"}
          testId={"loginPasswordInput"}
        />
        {error && <div>Credentials are invalid</div>}
        <button
          type="submit"
          data-testid="loginButton"
          className={`w-full font-Amiko border border-yellow rounded text-ms font-bold p-3 my-5 bg-yellow text-lg hover:bg-lightYellow`}
          disabled={submitted}
        >
          Login
        </button>
      </form>
      <div>
        {`Don't have an account? Create one`} <a href="/createuser">Here</a>
      </div>
    </div>
  );
};

export { LoginForm };
