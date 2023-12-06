"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import bgHero from "@/assets/blanding/bgHero.svg";

type TabProps = {
  key: number;
  title: string;
  imageUrl: any;
  bodyHeader: string;
  bodyText: string;
  infoUrl: string;
};

type TabsProps = {
  tabsInfo: TabProps[];
};

function TabsSection({ tabsInfo }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabsInfo[0]);

  const handleTabClick = (tab: TabProps) => {
    setCurrentTab(tab);
  };
  return (
    <main className="flex flex-col items-stretch gap-10">
      <section className="mx-auto flex w-full flex-col border-b border-blandingColors-gBlue md:w-fit md:flex-row md:gap-10 ">
        {tabsInfo.map((tab) => {
          return (
            <button
              className={`${
                currentTab.key === tab.key
                  ? "focus:scale-101 rounded-b-sm border-b-4 border-b-newsletterColors-tomato transition duration-1000"
                  : ""
              }md:pb-5 pd:my-0 border-t py-5 md:border-t-0`}
              onClick={(e) => {
                handleTabClick(tab);
              }}
              key={tab.key}
            >
              {tab.title}
            </button>
          );
        })}
      </section>

      <section className="mt-5 grid grid-cols-1 items-center justify-between gap-28 text-blandingColors-gBlue md:grid-cols-2 md:gap-4">
        <div className="relative ">
          <Image
            src={currentTab.imageUrl}
            alt="illustration_hero"
            className="z-[1000] h-fit w-auto "
          />
          <Image
            className="absolute bottom-0 left-0 z-[-1] max-h-[70%] w-[90%] -translate-x-1/2 translate-y-[20%] scale-[-1] transform"
            src={bgHero}
            alt="background image"
          />
        </div>

        <div className="flex w-[80%] flex-col gap-3">
          <h2 className="font-rubik text-3xl font-semibold text-blandingColors-dBlue">
            {currentTab.bodyHeader}
          </h2>
          <p>{currentTab.bodyText}</p>
          <div className="flex gap-3">
            <Button className="hidden md:flex" size="medium" variant="info">
              More Info
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TabsSection;
