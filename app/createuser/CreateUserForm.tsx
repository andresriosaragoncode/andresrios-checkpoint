"use client";
import { Input, PasswordInput, Select } from "@components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MySchemaType, mySchema } from "./validateCreateUserSchema";
import { User } from "@/app/types";

const userProfiles = ["admin", "developer", "PO"];

const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MySchemaType>({
    resolver: zodResolver(mySchema),
  });
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handler = async (formData: User) => {
    const { username, password, profile } = formData;
    // setSubmitted(true);
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        profile,
      }),
    });
    await response.json();
    // WE NEED TO ADD ERROR HANDLING for
  };

  const userProfilesOptions = userProfiles.map((userProfile) => ({
    label: userProfile,
    value: userProfile,
  }));

  return (
    <div className="w-1/2 bg-gray-700 mr-auto ml-auto p-4">
      <form
        data-testid="createUserForm"
        data-component="createUserForm"
        onSubmit={handleSubmit((data) => {
          handler(data);
        })}
      >
        <Input
          errors={errors}
          label="First name *"
          name="username"
          pattern={{
            value: /[A-Za-z]/,
            message: "Please fill out this field",
          }}
          register={register}
          requiredMessage={"Please fill out this field"}
          testId={"loginInput"}
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
          testId={"loginInput"}
        />
        <PasswordInput
          errors={errors}
          label="Confirm Password *"
          name="confirmPassword"
          pattern={{
            value: /[A-Za-z]/,
            message: "Please fill out this field",
          }}
          register={register}
          requiredMessage={"Please fill out this field"}
          testId={"loginInput"}
        />
        <Select
          errors={errors}
          labelText="Profile"
          name="profile"
          optionArray={userProfilesOptions}
          register={register}
          testId={"userProfileSelect"}
        />

        {error && <div>Credentials are invalid</div>}
        <button
          type="submit"
          data-testid="submitPetitionButton"
          className={`w-full font-Amiko border border-yellow rounded text-ms font-bold p-3 my-5 bg-yellow text-lg hover:bg-lightYellow`}
          data-sanityfield="submitPetitionButton"
          disabled={submitted}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export { CreateUserForm };
