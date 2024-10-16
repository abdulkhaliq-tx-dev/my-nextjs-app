import React from "react";


export default function Modal({ children }) {
    
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="w-max md:w-4/5 lg:w-3/5 xl:w-2/4 flex flex-col gap-y-8 md:gap-y-0 shadow-lg md:flex-row md:gap-x-8 p-12 lg:p-16 items-center md:justify-center bg-white rounded-xl">
         {children}
        </div>
      </div>
    </>
  );
}
