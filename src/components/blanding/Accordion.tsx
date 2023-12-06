"use client";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type AccordionProps = {
  header: string;
  body: string;
  className?: string;
};
function Accordion({ header, body, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((s) => !s);
  };

  return (
    <main
      className={
        (twMerge(
          "mt-2 flex w-full flex-col items-center justify-center gap-2   ",
        ),
        className)
      }
    >
      <div className="flex justify-between ">
        <p className="font-semi-bold">{header}</p>
        {isOpen ? (
          <ChevronDown
            onClick={toggleAccordion}
            className="cursor-pointer text-blandingColors-sBlue"
          />
        ) : (
          <ChevronRight
            onClick={toggleAccordion}
            className="cursor-pointer text-blandingColors-sBlue"
          />
        )}
      </div>
      {isOpen && (
        <p className="flex-grow text-justify text-sm text-blandingColors-gBlue">
          {body}
        </p>
      )}
    </main>
  );
}

export default Accordion;
