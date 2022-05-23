import React from "react";
import { useState } from "react";

const Categories = ({ value, onClickCategory }) => {
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
        {categories.map((categoryName, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}
              key={i}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
