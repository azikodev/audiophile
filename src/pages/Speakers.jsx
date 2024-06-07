//fetch
import { customFetch } from "../utils";

//react router dom
import { Link, useLoaderData } from "react-router-dom";

//component
import ShoppingLink from "../components/ShoppingLink";
import Features from "../components/Features";

//loader
const url = "/products";
export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data.reverse();
  return { products };
};

function Speakers() {
  const { products } = useLoaderData();
  return (
    <>
      <div>
        <div>
          <div className="p-20 font-bold uppercase background-links bg-[#141414]">
            <h2 className="text-center text-white text-3xl">Speakers</h2>
          </div>
          <ul className="container flex flex-col mt-10 mb-10 gap-10">
            {products.map((product) => {
              if (product.category === "speakers") {
                console.log(product);
                return (
                  <div key={product.id}>
                    <li className="flex items-center gap-24 justify-center flex-wrap w-full">
                      {product.id == 5 ? (
                        ""
                      ) : (
                        <img
                          src={product.categoryImage.desktop}
                          alt={product.name}
                          width={540}
                          height={560}
                        />
                      )}
                      <div className="flex flex-col gap-5 ">
                        <p className="letter_space_2 text-[#D87D4A]">
                          NEW PRODUCT
                        </p>
                        <h2 className="text-[40px] uppercase font-[700] max-w-[400px]">
                          {product.slug}
                        </h2>
                        <p className="max-w-[445px] text-[#7D7D7D]">
                          {product.description}
                        </p>
                        <button className="text-white hover:bg-[#FBAF85] w-40 h-12 bg-[#D87D4A] border-none uppercase">
                          <Link to="/">See product</Link>
                        </button>
                      </div>
                      {product.id == 6 ? (
                        ""
                      ) : (
                        <img
                          src={product.categoryImage.desktop}
                          alt={product.name}
                          width={540}
                          height={560}
                        />
                      )}
                    </li>
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className="mt-48"></div>
      <ShoppingLink />
      <Features />
    </>
  );
}

export default Speakers;
