"use client";

import useApi from "@/hooks/useApi";
import Image from "next/image";

export default function Page() {
  const { data, error, loading } = useApi("/products");
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>Error fetching products: {error.message || "Something went wrong"}</p>
    );

  const products = Array.isArray(data) ? data : data?.products || [];

  return (
    <>
      <div className="flex items-center w-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
              Best Sellers
            </h1>
          </div>
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
              >
                <div className="bg-slate-100 rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 shadow-xl">
                  <figure className="mb-2">
                    <Image
                      src={product.image}
                      layout="responsive"
                      loading="lazy"
                      alt={product.name}
                      className="h-64 ml-auto mr-auto"
                      width={500}
                      height={250}
                    />
                  </figure>
                  <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                    <div>
                      <h5 className="text-white text-xl font-bold leading-none">
                        {product.title}
                      </h5>
                      <span className="text-xs text-gray-400 leading-none"></span>
                    </div>
                    <div className="flex items-center">
                      <div className="text-lg text-white font-light">
                        ${product.price}
                      </div>
                      <button
                        className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                        onClick={() => {
                          console.log(`Added ${product.name} to cart!`);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current m-auto"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
