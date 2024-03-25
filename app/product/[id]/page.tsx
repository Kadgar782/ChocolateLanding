"use client";

import {
  SingleProduct,
  selectProducts,
} from "../../../lib/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
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
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SignInButton, useUser } from "@clerk/nextjs";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  selectCartProducts,
} from "../../../lib/features/productsInCartSlice";

export default function Page({ params }: { params: { id: number } }) {
  const { isLoaded, isSignedIn, user } = useUser();
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
  // depending on the screen, we change the direction of the gallery
  const [swiperDirection, setSwiperDirection] = useState<
    "horizontal" | "vertical"
  >("vertical");

  useEffect(() => {
    //if a user visited the site from a phone, then he will have fewer products displayed per page, but there will be more pages
    const swiperDirection =
      window.innerWidth >= 768 ? "vertical" : "horizontal";
    setSwiperDirection(swiperDirection);
  }, []);

  if (currentProduct) {
    const { id, image, name, price, type, typeColor } = currentProduct;
    const handleImageClick = (newImage: string) => {
      // Set the selected image index when an image is clicked
      setSelectedImage(newImage);
    };

    // check if item is already in the cart

    const cartArray = productsInCart.cart;
    const currentProductInCart = cartArray.some((item) => item.id === id);

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
            isSelected: false,
          },
        ]),
      );
    };
    return (
      <section className="wholePage flex min-h-screen w-full flex-wrap justify-center bg-background pt-16  max-md:pb-16 max-md:pt-0">
        <h1 className=" mt-10 flex h-10 w-[70%]  text-3xl text-text max-[1399px]:w-full ">
          {name}
        </h1>
        {/* gallery */}
        <div className="mt-2 flex h-[500px]  w-[70%] border-t-2 border-text pt-5 max-[1399px]:w-full max-md:h-[850px] max-md:flex-col max-md:items-center max-md:justify-center ">
          <section className="gallery flex h-[450px] w-[40%] max-md:h-[600px] max-md:w-[95%]  max-md:flex-col-reverse ">
            <div className="image-col flex h-full w-[20%] place-content-center  overflow-hidden  border-2  border-text max-md:mb-4 max-md:h-1/6  max-md:w-full">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                direction={swiperDirection}
              >
                {/*Normally a .map of all product images should occur here */}
                <SwiperSlide className="h-24 w-full" key={image}>
                  <div
                    key={image}
                    className="flex h-24  w-16 cursor-pointer items-center justify-center border-2 border-background p-1 hover:border-text max-md:h-full"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      key={image}
                      src={image}
                      className=" m-1 flex h-24 max-md:h-full "
                      alt={`Image ${image}`}
                    />
                  </div>
                </SwiperSlide>
                {arrayToRender.map((item) => (
                  <SwiperSlide key={item}>
                    {/* perhaps we should make an onClick on the wrapper, not the
                    image */}
                    <section
                      className=" img-slider-card flex h-24 w-16 cursor-pointer items-center justify-center border-2 border-background p-1 hover:border-text max-md:h-full"
                      key={id}
                    >
                      <img
                        key={item}
                        src={imagePlaceholder}
                        className=" m-1 flex self-center border-2 border-background p-1 max-md:h-12"
                        alt={`Image ${item + 1}`}
                        onClick={() => handleImageClick(imagePlaceholder)}
                      />
                    </section>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="big-image ml-1 flex h-full min-h-[386px] w-4/5 place-content-center max-md:h-4/5 max-md:w-full  max-md:self-center  ">
              <img
                className="flex h-[96%] w-auto shrink-0 justify-center self-center rounded-lg"
                width={500}
                height={500}
                src={selectedImage !== "" ? selectedImage : image}
              />
            </div>
          </section>
          {/* specifications */}
          <section className="specifications flex h-[450px] w-[35%] pl-4 text-xl max-md:w-full ">
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
          {swiperDirection == "vertical" ? (
            <section className="addToCart flex h-[450px] w-[25%] flex-col  gap-4 ">
              <div className="  just flex h-[150px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-primary ">
                <h1 className=" ml-3 flex self-start text-3xl text-text">
                  {price} $
                </h1>

                {!isLoaded || !isSignedIn ? (
                  <div className="flex flex-col  items-center justify-center gap-1">
                    <p className=" flex text-xl text-text">
                      Login or sign up to purchase
                    </p>
                    <div className="flex flex-col items-center justify-center pr-8">
                      <SignInButton mode="modal">
                        <button className="flex h-10 items-center justify-center rounded-md bg-secondary   pl-2 pr-4  text-center text-text">
                          Login
                        </button>
                      </SignInButton>
                    </div>
                  </div>
                ) : (
                  <button
                    className="flex h-16 items-center justify-center rounded-md bg-secondary   pl-2 pr-4  text-center text-text"
                    disabled={currentProductInCart}
                    onClick={() => handleAddToCart(currentProduct)}
                  >
                    <strong>
                      {currentProductInCart ? "Item in Cart" : "Add to cart"}
                    </strong>
                  </button>
                )}
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
          ) : (
            // here is the mobile version
            <section className="center fixed bottom-[3.75rem] left-0 z-30 flex h-12 w-full items-center justify-center">
              <button
                className="flex  h-11 w-3/4 items-center justify-center self-center rounded-lg bg-secondary   pl-2 pr-4  text-center text-text"
                disabled={currentProductInCart}
                onClick={() => handleAddToCart(currentProduct)}
              >
                <strong>
                  {currentProductInCart ? "Item in Cart" : "Add to cart"}
                </strong>
              </button>
            </section>
          )}
        </div>
        <section className="tabs flex h-[500px] w-[70%] rounded-md  border-2 border-text bg-primary max-[1399px]:w-full max-md:mb-16  ">
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
    return <div className="flex pt-16"> 404</div>;
  }
}
