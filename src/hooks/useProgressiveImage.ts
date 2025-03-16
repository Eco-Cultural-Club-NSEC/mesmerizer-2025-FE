import { useState, useEffect } from "react";

const useProgressiveImage = (
  lowQualitySrc: string,
  highQualitySrc: string
): string => {
  const [src, setSrc] = useState<string>(lowQualitySrc);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => setSrc(highQualitySrc);
  }, [highQualitySrc]);

  return src;
};

export default useProgressiveImage;
