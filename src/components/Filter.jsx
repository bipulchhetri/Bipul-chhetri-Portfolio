import React, { useEffect, useState } from "react";
import { images, portfolio,btns } from "../Data";


const Filter = () => {
  const [filterImages, setFilterImages] = useState(null);
  const [active, setActive] = useState(false);
  console.log(filterImages);

  useEffect(() => {
    setFilterImages(portfolio);
  }, []);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(btnValue);
    const newFilterImages = portfolio.filter((item) => item.category === btnValue);
    if (btnValue === "all") {
      setFilterImages(portfolio);
    } else {
      setFilterImages(newFilterImages);
    }
  };

  return (
    <div className="wrapper mt-8">
      {/* heading */}
      <h4 className="text-5xl text-center font-bold m-2 mb-3 text-white border-b-4 border-pink-500 inline">
     Latest Project
      </h4>

      {/* button */}
      <div className="flex text-white justify-center gap-3 mb-5 pt-8 md:flex-row  flex-wrap">
        {btns.map((item, id) => {
          const { name, value } = item;
          return (
            <button
              onClick={handleClick}
              key={id}
              value={value}
              className={`${
                active === value ? "bg-fourth" : ""
              } bg-orange-500 rounded-t-full rounded-bl-full rounded-br-lg border-white p-4 shadow-lg`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* images */}
      <div className="grid md:grid-cols-3 gap-5">
        {filterImages &&
          filterImages.map((item, id) => {
            const { img } = item;
            return (
              <div
                className="overflow-hidden border-4 border-solid border-green rounded-md group"
                key={id}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 rounded-md"
                  src={img}
                  alt="demo-img"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;
