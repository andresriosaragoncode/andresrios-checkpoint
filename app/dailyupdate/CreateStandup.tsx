"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "@components/form";
import { useRouter } from "next/navigation";

import {
  useSetTodayText,
  useGetTodayText,
  useGetYesterdayText,
  useSetYesterdayText,
  useSetBlockerText,
  useGetBlockerText,
} from "../store/storeHooks";

const CreateStandupForm = ({ standup }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const today = useGetTodayText();
  const yesterday = useGetYesterdayText();
  const blockers = useGetBlockerText();
  const setTodayText = useSetTodayText();
  const setYesterdayText = useSetYesterdayText();
  const setBlockerText = useSetBlockerText();
  const router = useRouter();

  useEffect(() => {
    if (standup) {
      setTodayText(standup.today);
      setYesterdayText(standup.yesterday);
      setBlockerText(standup.blockers);
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handler = async () => {
    const response = await fetch("/api/standup", {
      method: "POST",
      body: JSON.stringify({
        today,
        yesterday,
        blockers,
      }),
    });

    if (response.status === 201) {
      router.push("/summary");
    } else {
      // WE NEED TO PUT MORE DESCRIPTIVE ERROR MESSAGES
      setError(true);
    }
  };

  return (
    <form
      data-testid="createStandupForm"
      data-component="createStandupForm"
      onSubmit={handleSubmit((data) => {
        handler();
      })}
    >
      <div className="bg-gray-700 flex flex-col  bg-blue-900 xl:flex-row">
        <TextArea
          errors={errors}
          label="yesterday *"
          name="yesterday"
          register={register}
          initialValue={yesterday}
          testId={"yesterdayInput"}
          onChange={setYesterdayText}
        />
        <TextArea
          errors={errors}
          label="today *"
          name="today"
          register={register}
          initialValue={today}
          testId={"todayInput"}
          onChange={setTodayText}
        />
        <TextArea
          errors={errors}
          label="blockers *"
          name="blockers"
          register={register}
          initialValue={blockers}
          testId={"blockersInput"}
          onChange={setBlockerText}
        />
      </div>
      <div className="mr-auto ml-auto w-fit">
        {error && <div>There was an error creating the standup</div>}
        <button
          type="submit"
          data-testid="submitStandupButton"
          className={`w-full mx-auto font-Amiko border  rounded text-ms font-bold p-3 my-5 bg-gray-700 text-lg hover:bg-gray-200`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export { CreateStandupForm };
