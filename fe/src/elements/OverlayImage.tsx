import { ImageProps } from "../util/Types";

export default function OverlayImage(props: ImageProps) {
  const { width, height, src, alt, className, section, text, url } = props;
  return (
    <div className="image__container">
      <img
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={`image__image ${className ? className : ""}`}
      />
      <div
        className={`${section === "Service" && "overlay service__overlay"}
        ${section === "Client" && "client__overlay"}
        ${section === "Product" && "overlay product__overlay"}`}
      >
        <div className="image__text">
          <a href={url}>{text}</a>
        </div>
      </div>
    </div>
  );
}
