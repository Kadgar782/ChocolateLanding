"use client";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { selectProducts } from "../../lib/features/productsSlice";
import { useSelector } from "react-redux";
import "./css/carousel.css";
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import Link from "next/link";

export function ProductCarousel() {
  const [productsPerPage, setProductsPerPage] = useState<number>(5);
  const baseAPI = process.env.NEXT_PUBLIC_BASE_API;
  const products = useSelector(selectProducts);
  useEffect(() => {
    //if a user visited the site from a phone, then he will have fewer products displayed per page, but there will be more pages
    const productsPerPage = window.innerWidth >= 768 ? 5 : 2;
    setProductsPerPage(productsPerPage);
  }, []);

  return (
    <section
      aria-label="Product Slider"
      className="flex  w-3/4   flex-wrap items-center justify-center max-md:h-full "
    >
      {/* <a
        href="#after-image-slider-controls"
        className="skip-link invisible select-text focus-visible:visible"
      >
        Skip Image Slider Controls
      </a> */}
      <div className="flex  h-max w-3/4 gap-5 overflow-hidden max-md:mb-4 max-md:h-5/6 max-md:w-full max-md:items-center">
        <Swiper
          slidesPerView={productsPerPage}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            draggable: true,
            hide: true,
          }}
          loop={true}
          modules={[Navigation, Scrollbar]}
        >
          {products.products.map(({ image, name, id }, index) => (
            <SwiperSlide key={id}>
              <Link
                key={id}
                target="_blank"
                href={`${baseAPI}product/${id}`}
                className=" img-slider-card flex flex-col items-center "
              >
                <section
                  className=" img-slider-card flex h-max flex-1 cursor-pointer flex-col items-center rounded-md bg-primary  p-4 text-center "
                  key={id}
                >
                  <img
                    key={id}
                    src={image}
                    alt={name}
                    // aria-hidden={page !== index}
                    className="img-slider-img  flex h-auto max-h-[164px] max-w-full flex-shrink-0 flex-grow-0 hover:-translate-y-1 lg:max-h-[222px]"
                  />
                  <h1 className="img-slider-text text-text">{name}</h1>
                </section>
              </Link>
            </SwiperSlide>
          ))}
          <button className="swiper-button-next">
            <ArrowBigRight size={32} z={1} />
          </button>
          <button className="swiper-button-prev">
            <ArrowBigLeft size={32} z={1} />
          </button>
        </Swiper>
      </div>

      <div id="after-image-slider-controls" />
    </section>
  );
}
export default ProductCarousel;
