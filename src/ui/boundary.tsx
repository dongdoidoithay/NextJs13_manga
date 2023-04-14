import clsx from "clsx";
import React from "react";


export const Boundary = ({
  labels,
  linkNext,
  lableLink
}: {
  labels?: string,
  linkNext?: string
  lableLink?: string
}) => {
  return (
    <div className="flex flex-row flex-grow">
      <div className="py-1  text-md text-sky-300 items-center font-semibold first-line:uppercase first-letter:text-2xl first-letter:font-bold flex-1" >
          <h2 className="border-b-4  border-t-transparent border-b-sky-300 w-1/2 lg:w-1/5">  {labels}</h2> 
      </div>
      {lableLink &&<div className="justify-end pr-2">
          <a href={linkNext} title={lableLink}>{lableLink}</a>
      </div>
      }
    </div>
  );
};
