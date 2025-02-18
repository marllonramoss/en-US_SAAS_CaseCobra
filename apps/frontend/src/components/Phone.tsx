import React, { HTMLAttributeReferrerPolicy, HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={`relative pointer-events-none z-50    ${className ?? ""}`}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
