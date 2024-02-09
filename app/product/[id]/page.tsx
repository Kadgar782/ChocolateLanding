"use client";

import {
  SingleProduct,
  selectProducts,
} from "../../../lib/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
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
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  selectCartProducts,
} from "../../../lib/features/productsInCartSlice";

export default function Page({ params }: { params: { id: number } }) {
  const products = useAppSelector(selectProducts);
  const productsInCart = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  const productsList = products.products;
  const paramId = Number(params.id);
  //we are looking for a product with the same ID as in the url
  const currentProduct = productsList.find((product) => product.id == paramId);
  const imagePlaceholder = "https://placehold.co/500x500";
  //making an array with a placeholders
  const arrayToRender = Array.from({ length: 10 }, (_, index) => index);
  //such information should be in the product in db, but for example it will be here
  const data = [
    {
      label: "Description",
      value: "description",
      desc: `Incididunt Lorem elit amet do labore laborum fugiat.
       Ex non consectetur fugiat deserunt exercitation anim nisi Lorem dolore aliqua exercitation.
        Aute magna id deserunt consequat eiusmod laboris cupidatat commodo consectetur non. 
        Ut dolore laborum incididunt nostrud irure esse. Anim in aliqua dolor sunt veniam aliqua velit commodo. In consequat consectetur nostrud consequat.`,
    },
    {
      label: "Additional information",
      value: "additionalInformation",
      desc: ` Donec et maximus purus, sit amet aliquet nisi.`,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim non nisl varius feugiat. 
      Aenean et consequat lorem. Nullam tempus magna vitae sagittis cursus. Donec et maximus purus, sit amet aliquet nisi.
       In commodo nisl quis elit finibus pellentesque. Etiam vestibulum hendrerit ornare. Nullam faucibus purus mauris, nec tincidunt nisi ornare et.
        Praesent in aliquet dui. Nullam maximus ex nunc, quis posuere felis gravida non. `,
    },
  ];

  const [selectedImage, setSelectedImage] = useState("");
  const [choosenTab, setChoosenTab] = useState("Description");

  if (currentProduct) {
    const { id, image, name, price, type, typeColor } = currentProduct;
    const handleImageClick = (newImage: string) => {
      // Set the selected image index when an image is clicked
      setSelectedImage(newImage);
    };

    // check if item is already in the cart

    const cartArray = productsInCart.cart;
    const currentProductInCart = cartArray.some((item) => item.id);
    console.log(paramId);
    console.log(currentProductInCart);

    const handleTabClick = (newTab: string) => {
      // Set the selected image index when an image is clicked
      setChoosenTab(newTab);
    };

    const handleAddToCart = (product: SingleProduct) => {
      dispatch(
        addToCart([
          {
            ...product,
            quantityInCart: 1, // Set the initial quantity to 1 (or any default value)
          },
        ]),
      );
      toast("Item added to Cart");
    };
    return (
      <section className="wholePage wholePage flex min-h-screen w-full flex-wrap justify-center bg-background">
        <h1 className=" mt-10 flex h-10 w-[70%]  text-3xl text-text max-[1399px]:w-full ">
          {name}
        </h1>
        <div className="mt-2 flex h-[500px]  w-[70%] border-t-2 border-text pt-5 max-[1399px]:w-full ">
          {/* gallery */}
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
                  <div
                    className="flex  h-24 items-center justify-center border-2 border-background p-1 hover:border-text"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      key={image}
                      src={image}
                      className=" m-1 flex h-24 "
                      alt={`Image ${image}`}
                    />
                  </div>
                </SwiperSlide>
                {arrayToRender.map((item) => (
                  <SwiperSlide className="m-0 h-24" key={item}>
                    {/* perhaps we should make an onClick on the wrapper, not the
                    image */}
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
          {/* specifications */}
          <section className="specifications flex h-[450px] w-[35%] pl-4 text-xl">
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
          {/* add to cart and shipping */}
          <section className="addToCart flex h-[450px] w-[25%] flex-col  gap-4 ">
            <div className="  just flex h-[150px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-primary ">
              <h1 className=" ml-3 flex self-start text-3xl text-text">
                {price} $
              </h1>
              <button
                className="flex h-16 items-center justify-center rounded-md bg-secondary  px-2 pl-2 pr-4  text-center text-text"
                disabled={currentProductInCart}
                onClick={() => handleAddToCart(currentProduct)}
              >
                <strong>
                  {currentProductInCart ? "Item in Cart" : "Add to cart"}
                </strong>
              </button>
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
        <section className="tabs flex h-[500px] w-[70%] rounded-md  border-2 border-text bg-primary max-[1399px]:w-full  ">
          <Tabs className="  box-content w-full  text-text" value="description">
            <TabsHeader className=" divide-y-reverse rounded-none  border-text p-0  text-xl">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handleTabClick(label)}
                >
                  {label}
                  <span
                    className={
                      choosenTab == label
                        ? "flex  h-full min-h-[4px] w-full  scale-105 rounded-md border-b-2 border-text "
                        : "border-b-0 border-text "
                    }
                  ></span>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="flex  w-full">
              {data.map(({ value, desc }) => (
                <TabPanel className="flex w-full" key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </section>
        <ToastContainer />
      </section>
    );
  } else {
    return <div> 404</div>;
  }
}
