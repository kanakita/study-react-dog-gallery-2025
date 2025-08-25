import React from "react";
import ImageCard from "../ImageCard/ImageCard";

interface Props {
  items: string[] | null;
}

const Gallery: React.FC<Props> = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <ImageCard imgUrl={item} key={item} />
      ))}
    </div>
  );
};

export default Gallery;
