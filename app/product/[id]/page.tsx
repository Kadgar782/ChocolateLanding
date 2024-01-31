"use client";

import { selectProducts } from "../../../lib/features/productsSlice";
import { useAppSelector } from "../../../lib/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import "../../components/css/carousel.css";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page({ params }: { params: { id: number } }) {
  const products = useAppSelector(selectProducts);
  const productsList = products.products;
  const paramId = Number(params.id);
  //we are looking for a product with the same ID as in the url
  const currentProduct = productsList.find((product) => product.id == paramId);
  const imagePlaceholder = "https://placehold.co/500x500";
  //making an array with a placeholders
  const arrayToRender = Array.from({ length: 10 }, (_, index) => index);

  const [selectedImage, setSelectedImage] = useState("");

  if (currentProduct) {
    const { id, image, name, price, type, typeColor } = currentProduct;
    const handleImageClick = (newImage: string) => {
      // Set the selected image index when an image is clicked
      setSelectedImage(newImage);
    };
    return (
      <section className="wholePage wholePage flex min-h-screen w-full flex-wrap justify-center bg-background">
        <h1 className=" mt-10 flex h-10 w-[70%]  text-3xl text-text max-[1399px]:w-full ">
          {name}
        </h1>
        <div className="mt-2 flex h-[800px]  w-[70%] border-t-2 border-text pt-5 max-[1399px]:w-full ">
          <section className="gallery flex h-[450px] w-[40%] ">
            <div className="image-col relative flex h-full w-[20%] flex-col place-content-center items-center overflow-hidden border-2 border-text">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="flex "
              >
                {/*Normally a .map of all product images should occur here */}
                <SwiperSlide className="h-24" key={image}>
                  <div className="flex  h-24 items-center justify-center border-2 border-background p-1 hover:border-text">
                    <img
                      key={image}
                      src={image}
                      className=" m-1 flex h-24 "
                      alt={`Image ${image}`}
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                </SwiperSlide>
                {arrayToRender.map((item) => (
                  <SwiperSlide className="m-0 h-24" key={item}>
                    <img
                      key={item}
                      src={imagePlaceholder}
                      className=" m-1 flex h-24 border-2 border-background p-1 hover:border-text"
                      alt={`Image ${item + 1}`}
                      onClick={() => handleImageClick(imagePlaceholder)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="big-image  relative ml-1 flex h-full w-4/5 place-content-center  ">
              <img
                className="flex h-[96%] w-auto justify-center self-center rounded-lg"
                src={selectedImage !== "" ? selectedImage : image}
              />
            </div>
          </section>
          <section className="specifications flex h-[450px] w-[35%] text-xl">
            <dl className="mt-4 flex flex-col">
              <div className="mb-3 flex gap-5">
                <dt className="font-bold text-textDt">Name:</dt>
                <dd className="text-text">{name}</dd>
              </div>
              <div className="mb-3 flex gap-5">
                <dt className="font-bold text-textDt">Price:</dt>
                <dd className="text-text">{price}</dd>
              </div>
              <div className="mb-3 flex gap-5">
                <dt className="font-bold text-textDt">Type:</dt>
                <dd className="text-text">{type}</dd>
              </div>
              <div className="mb-3 flex gap-5">
                <dt className="font-bold text-textDt">Color:</dt>
                <dd className="text-text">{typeColor}</dd>
              </div>
            </dl>
          </section>
          <section className="addToCart flex h-[450px] w-[25%] flex-col  gap-4 ">
            <div className="  just flex h-[150px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-primary ">
              <h1 className=" ml-3 flex self-start text-3xl text-text">
                {price} $
              </h1>
              <Link
                className="flex h-16 items-center justify-center rounded-md bg-secondary  px-2 pl-2 pr-4  text-center text-text"
                target="_blank"
                href="/shop"
              >
                <strong>Add to cart</strong>
              </Link>
            </div>
            <div className="ShippingInformation  flex h-[300px] w-full flex-col   items-center gap-4 rounded-xl bg-primary ">
              <h1 className=" ml-3 mt-3 flex self-center text-2xl text-text">
                Shipping Information
              </h1>
              <p className=" flex self-center text-xl text-text">
                fast and cheap, probably
              </p>
            </div>
          </section>
        </div>
      </section>
    );
  } else {
    return <div> 404</div>;
  }
}
