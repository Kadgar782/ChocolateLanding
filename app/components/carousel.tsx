"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./carousel.css";
import Image from "next/image";

type productData = {
  product: {
    image: string;
    name: string;
    id: number;
  }[];
};

export function ProductCarousel({ product }: productData) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === product.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return product.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Product Slider"
      className="relative flex h-max w-max flex-wrap items-center justify-center "
    >
      {/* <a
        href="#after-image-slider-controls"
        className="skip-link invisible select-text focus-visible:visible"
      >
        Skip Image Slider Controls
      </a> */}
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Product"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <div className="w-fill mb-4 flex overflow-hidden">
        {product.map(({ image, name, id }, index) => (
          <section className="flex h-1/2 w-1/3 flex-col items-center rounded-md bg-bacgroundCard p-4 text-center">
            <img
              key={id}
              src={image}
              alt={name}
              aria-hidden={imageIndex !== index}
              className="img-slider-img  flex flex-shrink-0 flex-grow-0 transition-transform duration-500 ease-in-out hover:-translate-y-1 "
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          </section>
        ))}
      </div>

      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Product"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div className="dot-buttons m-0 flex w-full items-center justify-center">
        {product.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn  items-center"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
export default ProductCarousel;
