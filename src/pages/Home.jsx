import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

//components
import MainBtn from "../components/MainBtn";

//images
import HeadPhone from "/assets/shared/desktop/Bitmap.png";
import zx9Speaker from "/assets/home/desktop/image-speaker-zx9.png";
import zx7Speaker from "/assets/home/desktop/Bitmap.png";
import yx1Earphone from "/assets/home/desktop/image-earphones-yx1.jpg";

//components
import ShoppingLink from "../components/ShoppingLink";
import Features from "../components/Features";

//loader
const url = "/products";
export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
};
function Home() {
  const { products } = useLoaderData();
  return (
    <>
      <header className="header mb-[200px]">
        <div className="h-[632px] w-[1110px] flex justify-between mx-auto items-center">
          <div>
            <h2 className="mb-6 text-gray-400 ">NEW PRODUCT</h2>
            <h1 className="h1 text-slate-100">XX99 Mark II Headphones</h1>
            <p className="my-10 text-[#C4C4C4]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="text-white hover:bg-[#FBAF85] w-40 h-12 bg-[#D87D4A] border-none uppercase">
              <Link to="/products/xx99-mark-two-headphones">See product</Link>
            </button>
          </div>
          <img className="ml-28 text-white" src={HeadPhone} alt="HeadPhone" />
        </div>
      </header>
      <ShoppingLink />
      <main className="main mb-[200px]">
        <div className="container">
          <div className="mainTop bg-[#D87D4A] pl-[150px] pt-[150px] flex  gap-[150px] mb-[90px]">
            <div className="">
              <img
                src={zx9Speaker}
                alt="Speaker"
                className="w-[410px h-[493px] flex "
              />
            </div>
            <div className="flex flex-col gap-[25px] ">
              <h2 className="text-[56px] text-[#fff] max-w-[261px] uppercase  ">
                ZX9 SPEAKER
              </h2>
              <p className="max-w-[349px] text-[#F3D8CA] leading-[35px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn bg-[#000000] text-[#fff] pt-[16px] pl-[26px] pb-[16px] pr-[26px] hover:bg-[#4C4C4C] ease-in	">
                <Link to="/speakers" className="uppercase">
                  See Product
                </Link>
              </button>
            </div>
          </div>
          <div className="mainCenter ">
            <div className="rounded-lg relative mb-[90px]">
              <div className="rounded-lg absolute  top-36 left-16 flex flex-col gap-5">
                <h2 className="text-4xl">ZX7 SPEAKER</h2>
                <button className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black">
                  <Link to="/speakers">See Products</Link>
                </button>
              </div>
              <img
                className="rounded-lg"
                width={1900}
                height={600}
                src={zx7Speaker}
              />
            </div>
          </div>
          <div className="mainBottom flex w-[100%] gap-[50px]">
            <div className="w-[50%]">
              <img
                src={yx1Earphone}
                alt="Earphone"
                className="w-[100%]  rounded-[10px]"
              />
            </div>
            <div className="bg-[#F1F1F1] p-[120px] pl-[150px] pr-[150px] w-[50%] rounded-[10px] ">
              <h2 className="uppercase text-[28px] font-[700] mb-[25px]">
                YX1 EARPHONES
              </h2>
              <button className="btn text-black  hover:text-white hover:bg-black w-40 h-12 bg-nane border-2 border-black">
                <Link to="/earphones">See Products</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Features />
    </>
  );
}
export default Home;
