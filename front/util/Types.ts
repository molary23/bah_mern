import { StaticImageData } from "next/image";
import { ChangeEvent, ChangeEventHandler, ReactNode } from "react";

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
  className?: string;
  section?: string;
  text?: string;
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

export interface InputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete: string;
  id: string;
  type: string;
  error: string;
}

export type EquipmentProps = {
  intro: Intro;
  imageUrL?: string;
  subHeading?: string;
  elements: ReactNode;
};
