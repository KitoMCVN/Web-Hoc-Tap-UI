import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { images } from "./data";

const De: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imageName = queryParams.get("name");
  const [imageExists, setImageExists] = useState<boolean | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageName) {
      const image = images.find((img) => img.name === imageName);
      if (image) {
        setImageExists(true);
        setImageUrl(image.url);
      } else {
        setImageExists(false);
      }
    }
  }, [imageName]);

  return (
    <div className="size-full flex flex-col">
      <div className="mx-auto">{imageExists === null ? <p>Loading...</p> : imageExists ? <img src={`${imageUrl}`} /> : <p>Image does not exist</p>}</div>
    </div>
  );
};

export default De;
