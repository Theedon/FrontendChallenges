import Image from "next/image";
import bg_dots from "@/assets/blanding/bg-dots.svg";
import Button from "./Button";
import React from "react";
type BrowserCardProps = {
  browserName: string;
  browserLogoUrl: string;
  minimumVersion: number;
  indexMargin?: number;
};
function BrowserCard({
  browserName,
  browserLogoUrl,
  minimumVersion,
  indexMargin,
}: BrowserCardProps) {
  const mediaQueryStyles = {
    "@media (min-width: 640px)": {
      marginTop: indexMargin ? `${indexMargin * 5}%` : 0,
    },
  } as React.CSSProperties;
  return (
    <div
      className={`mx-5 mb-2 flex h-fit w-fit flex-col items-center gap-6 rounded-2xl border-blandingColors-dBlue p-2 shadow-2xl `}
      style={mediaQueryStyles}
    >
      <Image src={browserLogoUrl} alt={browserName} />
      <h3 className="font-semibold">{`Add to ${browserName}`}</h3>
      <p className="text-blandingColors-gBlue">{`Minimum version: ${minimumVersion}`}</p>
      <Image src={bg_dots} alt="break line" />
      <Button size={"full"} variant={"info"}>
        Add & Install Extension
      </Button>
    </div>
  );
}
export default BrowserCard;
