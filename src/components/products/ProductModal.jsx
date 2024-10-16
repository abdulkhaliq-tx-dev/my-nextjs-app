import React from 'react';

export default function ProductModal({ closeModal, product }) {
  return (
    <>
      <figure className="max-w-80 md:w-80 lg:w-96 md:self-start grow-0">
        <img
          src={product.image} // Use dynamic image source
          alt={product.title} // Use dynamic alt text
          className="w-80 h-auto md:w-80 grow-0 hover:scale-105 transition duration-150"
        />
      </figure>
      <div className="flex flex-col gap-y-8 items-center md:items-start">
        <div className="flex flex-col items-center md:items-start gap-y-3">
          <span className="px-4 py-2 bg-slate-900 self-start text-white text-sm tracking-wider rounded-full">
            {product.category} {/* Use dynamic category */}
          </span>
          <h2 className="text-xl text-center md:text-left font-semibold font-sans text-slate-800">
            {product.title} {/* Display product title */}
          </h2>
        </div>
        <div className="flex flex-col items-center md:items-start gap-y-3">
          <span className="text-lg decoration-2 decoration-black line-through text-slate-600 font-semibold">
            ${product.originalPrice} {/* Display original price dynamically */}
          </span>
          <span className="text-5xl font-sans font-bold text-slate-800">
            ${product.price} {/* Display discounted price dynamically */}
          </span>
          <p className="text-slate-500 text-sm text-center md:text-left font-sans">
            Offer valid till 17th October, or until stock lasts
          </p>
          <button className="block w-full px-8 py-4 mt-2 bg-blue-600 shadow-md hover:shadow-xl hover:-translate-y-1 text-white tracking-wider uppercase font-semibold rounded-xl border-b-8 border-blue-800 active:py-5 active:border-none transition duration-150">
            Add to cart
          </button>
          <p className="text-xs text-slate-600 group select-none">
            <span className="mr-2 text-sm text-green-500 group-hover:animate-ping">
              ⬤
            </span>
            {product.stock} pcs. left in stock 
          </p>
          <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 xl:gap-x-4 w-full">
            <button className="flex gap-x-2 xl:gap-x-2 items-center justify-center group w-full xl:w-max px-8 py-4 xl:px-6 xl:py-3 xl:text-sm mt-4 rounded-lg border-2 border-slate-600 text-slate-800 tracking-wider xl:tracking-normal uppercase hover:bg-slate-700 hover:border-slate-700 hover:text-white active:translate-y-1 transition duration-100">
              <img
                src="https://imgur.com/HAwhb3I.png"
                alt="Add to wishlist"
                className="inline w-6 group-hover:invert group-hover:grayscale"
              />
              <span>Add to wishlist</span>
            </button>
            <button
              onClick={closeModal}
              className="flex gap-x-2 xl:gap-x-2 items-center justify-center group w-full xl:w-max px-8 py-4 xl:px-6 xl:py-3 xl:text-sm mt-4 rounded-lg border-2 border-slate-600 text-slate-800 tracking-wider xl:tracking-normal uppercase hover:bg-slate-700 hover:border-slate-700 hover:text-white active:translate-y-1 transition duration-100"
            >
              <div className="inline w-5 group-hover:invert group-hover:grayscale">
                &times;
              </div>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
