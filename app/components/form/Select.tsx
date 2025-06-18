import React from "react";

const Select = ({ register, name, optionArray, labelText, testId }: any) => {
  const options = optionArray.map((opt: any) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));
  const id = `select_${name}`;
  return (
    <div className="flex flex-col ">
      <label htmlFor={id}>{labelText}</label>
      <div className="mt-2" />
      <select
        className="rounded p-4 bg-gray-500"
        {...register(name)}
        id={id}
        data-testid={testId}
      >
        {options}
      </select>
    </div>
  );
};

export { Select };
