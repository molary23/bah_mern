import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavSub {
  title: string;
  more: string;
  icon: ReactNode;
  link: string;
}

export interface ImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  onAction?: () => void;
  className: string;
}

export type IntroProps = {
  heading: string;
};

export type TestimonyProps = {
  image: StaticImageData;
  testifier: string;
  testimony: string;
};
