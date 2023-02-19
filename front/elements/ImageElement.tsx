import Image, { ImageProps } from "next/image";

const ImageElement = (props: ImageProps) => {
  const { width, height, src, alt, className } = props;
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ImageElement;
