import React from "react";
import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытие",
  ];

  const categoryClickHanlder = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={() => categoryClickHanlder(i)}
              className={activeIndex === i ? "active" : ""}
              key={i}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
