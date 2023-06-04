import { ImageProps } from "../util/Types";

export default function ImageElement(props: ImageProps) {
  const { width, height, src, alt, className } = props;
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
    />
  );
}
