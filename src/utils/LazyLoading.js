import React, { Suspense, lazy } from "react";

const ImageComponent = ({ src, alt, width, height, style }) => (
  <img src={src} alt={alt} width={width} height={height} style={style} />
);

const LazyImage = ({ src, alt, width, height, style }) => (
  <Suspense
    fallback={
      <div style={{ background: "red", width: "500px", height: "500px" }}>
        Loading...
      </div>
    }
  >
    <ImageComponent
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  </Suspense>
);

export default LazyImage;
