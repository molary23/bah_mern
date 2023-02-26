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
  subHeading?: string;
};

type Intro = {
  heading: string;
  subHeading: string;
};

export type HeadingProps = {
  intro: Intro;
  imageUrL?: string;
};

export type SectionProp = {
  title: string;
  description: string[];
  imageSrc: StaticImageData;
};

export type TestimonyProps = {
  image: StaticImageData;
  testifier: string;
  testimony: string;
};
