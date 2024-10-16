"use client";

import { useState } from "react";
import useApi from "@/hooks/useApi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "@/app/loading";
import Searchbar from "@/components/common/Searchbar";
import Modal from "../../components/common/Modal";
import ProductModal from "@/components/products/ProductModal";

const categories = [
  { name: "Jewelry", endpoint: "/products/category/jewelery" },
  { name: "Electronics", endpoint: "/products/category/electronics" },
  { name: "Women", endpoint: "/products/category/women's clothing" },
  { name: "Men", endpoint: "/products/category/men's clothing" },
];

export default function Page() {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const openModal = (product) => {
    setSelectedProduct(product); 
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null); 
  };

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].endpoint
  );
  const [searchTerm, setSearchTerm] = useState("");

  const endpoint = searchTerm ? "/products" : selectedCategory;
  const { data, error, loading } = useApi(endpoint);

  const filteredProducts = searchTerm
    ? data?.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    : data || [];

  if (loading)
    return (
      <div className="text-center flex justify-center items-center h-screen w-full">
        <Loading />
      </div>
    );

  if (error)
    return (
      <p>Error fetching products: {error.message || "Something went wrong"}</p>
    );

  return (
    <>
      <div className="flex items-center w-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4 flex justify-between">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
              Best Sellers
            </h1>
            <div className="flex space-x-4 mb-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                  onClick={() => setSelectedCategory(category.endpoint)}
                >
                  {category.name}
                </button>
              ))}
              <Searchbar setSearchTerm={setSearchTerm} />
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
                onClick={() => openModal(product)} 
              >
                <div className="bg-slate-100 rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 shadow-xl">
                  <figure className="mb-2">
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      className="h-64 ml-auto mr-auto"
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
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>

      {showModal && selectedProduct && (
        <Modal>
          <ProductModal 
            closeModal={closeModal} 
            product={selectedProduct} 
          />
        </Modal>
      )}
    </>
  );
}
