import { ReactElement } from "react";

interface ImageCardProps {
  imgUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}

function ImageCard({
  imgUrl,
  alt,
  width,
  height,
}: ImageCardProps): ReactElement {
  return (
    <figure>
      <img
        className="aspect-3/2 object-cover w-full h-auto"
        src={imgUrl}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </figure>
  );
}

export default ImageCard;
