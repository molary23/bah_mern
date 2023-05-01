import Image, { ImageProps } from "next/image";

export default function ImageElement(props: ImageProps) {
  const { width, height, src, alt, className } = props;
  return (
    <img
      width={width}
      height={height}
      src={src.toString()}
      alt={alt}
      className={className}
    />
  );
}
