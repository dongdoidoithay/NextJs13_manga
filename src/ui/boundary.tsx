import clsx from "clsx";
import React from "react";


export const Boundary = ({
  labels
}: {
  labels?: string
}) => {
  return (
    <div className="py-1 font-semibold first-line:uppercase text-md text-sky-300 items-center first-letter:text-2xl first-letter:font-bold" >
        <h2 className="border-b-4  border-t-transparent border-b-sky-300 w-1/2 lg:w-1/6">  {labels}</h2> 
    </div>
  );
};
