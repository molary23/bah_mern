import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type RegularArrayOfObject = [
  {
    [index: string]: string | number;
  }
];

export type RegularObject = {
  [index: string]: string | StaticImageData | number | string[] | any;
};

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

interface Intro {
  heading: string;
  subHeading: string;
}

export type HeadingProps = {
  intro: Intro;
  imageUrL?: string;
};

export type SectionProp = {
  title: string;
  description: string[];
  imageSrc: StaticImageData | string;
  type?: string;
  backgroundImage?: string;
};

export type TestimonyProps = {
  image: StaticImageData;
  testifier: string;
  testimony: string;
};

export type TabProp = {
  title: string;
  description: string[];
  pages: string[];
  content: RegularObject[];
};

export type SubIntro = Pick<Intro, "heading">;
