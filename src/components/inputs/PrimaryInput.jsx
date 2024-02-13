import React from "react";

const PrimaryInput = ({
  name,
  type = "text",
  placeholder,
  register,
  errors,
  label,
  isRequired = false,
}) => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor={name}
        className="text-sm text-fontColor capitalize mb-2 font-medium"
      >
        {label}
        {isRequired && <span>*</span>}
      </label>

      <div
        className={`w-full border border-customGray300 overflow-hidden rounded-lg h-[44px] ${
          errors && "border-red-400"
        }`}
      >
        <input
          type={type}
          className="py-2 px-3 outline-none w-full h-full"
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {errors && <p className="text-red-400 text-xs mt-1">{errors?.message}</p>}
    </div>
  );
};

export default PrimaryInput;
