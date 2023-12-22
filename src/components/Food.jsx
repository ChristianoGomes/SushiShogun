import React from 'react'

const Food = () => {
  return (
    <div className="max-[1640] m-auto px-4 py-12 ">
      <h1 className="text-gray-700 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 ">
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white"
              >
                All
              </button>
              <button onClick={() => filterType('sushi')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                Sushi
              </button>
              <button onClick={() => filterType('soups')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                Soups
              </button>
              <button onClick={() => filterType('sake')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                Sake
              </button>
              <button onClick={() => filterType('desserts')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                Desserts
              </button>
            </div>
          </p>
          {/* Filter Price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w[390] w-full">
              <button onClick={() => filterPrice('$')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                $
              </button>
              <button onClick={() => filterPrice('$$')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                $$
              </button>
              <button onClick={() => filterPrice('$$$')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                $$$
              </button>
              <button onClick={() => filterPrice('$$$$')}  className="m-1 border-red-600 text-red-400 hover:bg-red-400 hover:text-white">
                $$$$
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 rounded-lg duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-red-400 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
