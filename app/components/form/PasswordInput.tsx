"use client";

import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
// import Icon from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";

interface Props {
  errors: any;
  label: string;
  name: string;
  pattern?: any;
  register: (a: any, b: any) => any;
  requiredMessage?: string;
  testId: string;
  classes?: any;
  validate?: any;
  initialValue?: string | number;
}

const classes = {
  input:
    "block border-grey rounded p-3 w-full h-auto box-border focus:border-bluetransparent hover:border-ligthblue bg-gray-500 text-black",
  inputError: "block border-red rounded p-3 w-full h-auto box-border",
  label: "mt-4 block",
  error: "block text-white rounded p-1 w-fit bg-red",
  errorContainer: "mt-2",
};

const PasswordInput = ({
  errors,
  label,
  name,
  pattern,
  register,
  requiredMessage,
  testId,
  validate,
  initialValue,
}: Props) => {
  const requiredWarning = requiredMessage ? requiredMessage : false;
  const id = `${name}-input`;
  const inputClass = errors[name] ? classes?.inputError : classes?.input;

  const eyeIcons = {
    closed: RxEyeClosed,
    open: RxEyeOpen,
  } as any;

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("open");
  const handleToggle = () => {
    if (type === "password") {
      setIcon("closed");
      setType("text");
    } else {
      setIcon("open");
      setType("password");
    }
  };
  const CurrentIcon = eyeIcons[icon];
  return (
    <div>
      <label htmlFor={id} className={`${classes?.label}`}>
        {label}
      </label>
      <div className="mb-4 flex">
        <input
          id={id}
          data-testid={testId}
          aria-required={Boolean(requiredWarning)}
          className={inputClass}
          type={type}
          {...register(name, {
            required: requiredWarning,
            pattern,
            validate,
            value: initialValue,
          })}
        />
        <span
          className="flex justify-around items-center"
          onClick={handleToggle}
        >
          <CurrentIcon className="absolute mr-10" />
        </span>
      </div>
      {/* errors will return when field validation fails  */}
      {errors[name] && (
        <div className={`${classes.errorContainer}`}>
          <div data-testid={`${testId}_error`} className={`${classes.error}`}>
            {errors[name].message}
          </div>
        </div>
      )}
    </div>
  );
};

export { PasswordInput };
