"use client";

import React from "react";

interface Props {
  errors: any;
  label: string;
  name: string;
  pattern?: any;
  register: (a: any, b: any) => any;
  requiredMessage?: string;
  testId: string;
  type?: string;
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

const Input = ({
  errors,
  label,
  name,
  pattern,
  register,
  requiredMessage,
  testId,
  validate,
  initialValue,
  type,
}: Props) => {
  const requiredWarning = requiredMessage ? requiredMessage : false;
  const id = `${name}-input`;
  const inputClass = errors[name] ? classes?.inputError : classes?.input;
  return (
    <div>
      <label htmlFor={id} className={`${classes?.label}`}>
        {label}
      </label>
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

export { Input };
