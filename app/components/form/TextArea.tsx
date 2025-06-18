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
  onChange: Function;
  disabled?: boolean;
}

const classes = {
  input:
    "block border-grey rounded p-3 w-full h-[150px] box-border focus:border-bluetransparent hover:border-ligthblue bg-gray-300 text-black preview",
  disabled:
    "block border-grey rounded p-3 w-full h-[150px] box-border focus:border-bluetransparent hover:border-ligthblue bg-gray-500 text-black preview",
  inputError: "block border-red rounded p-3 w-full h-auto box-border",
  label:
    "mt-4 block text-xl mb-4 p-4 bg-gray-200 w-fit rounded dark:text-gray-900",
  error: "block text-white rounded p-1 w-fit bg-red",
  errorContainer: "mt-2",
};

const TextArea = ({
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
  onChange,
  disabled,
}: Props) => {
  const requiredWarning = requiredMessage ? requiredMessage : false;
  const id = `${name}-input`;
  const inputClass = errors[name]
    ? classes.inputError
    : disabled
    ? classes.disabled
    : classes.input;
  return (
    <div className="h-auto px-10 mb-10 preview ">
      <label htmlFor={id} className={`${classes?.label}`}>
        {label}
      </label>
      <textarea
        id={id}
        data-testid={testId}
        aria-required={Boolean(requiredWarning)}
        className={inputClass}
        type={type}
        value={initialValue}
        disabled={disabled}
        {...register(name, {
          required: requiredWarning,
          pattern,
          validate,
          value: initialValue,
          onChange: (e: any) => {
            onChange(e.target.value);
          },
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

export { TextArea };
