import Image from "next/image";
import { ImageProps } from "../util/Types";

export default function OverlayImage(props: ImageProps) {
  const { width, height, src, alt, className, section, text } = props;
  return (
    <div className="image__container">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={`image__image ${className ? className : ""}`}
      />
      <div
        className={`${
          section === "Service" ? "service__overlay" : "client_overlay"
        }`}
      >
        <div className="image__text">{text}</div>
      </div>
    </div>
  );
}
