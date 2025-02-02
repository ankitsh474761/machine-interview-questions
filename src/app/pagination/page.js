'use client'
import React, { useEffect, useState } from "react";

const InterviewQuestion4 = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const { products } = await data.json();
    setProducts(products);
  };

  const totalPages = Math.ceil(products.length / 10);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.length > 0 &&
          products?.slice((page - 1) * 10, page * 10).map((prod) => (
            <div
              key={prod.id}
              className="product-container-item bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="product-image">
                <img
                  src={prod?.thumbnail}
                  width={300}
                  height={200}
                  alt="product-img"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {prod?.title}
                </h4>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:bg-gray-200"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => selectPageHandler(i + 1)}
            className={`px-4 py-2 rounded-md ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InterviewQuestion4;
