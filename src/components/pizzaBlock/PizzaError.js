import React from "react";

const PizzaError = () => {
  return (
    <div className="content__error-info">
      <h2>
        Произошла ошибка <icon>😕</icon>
      </h2>
      <p>
        К сожалению не удалось получить пиццы, попробуйте повторить попытку
        позже
      </p>
    </div>
  );
};

export default PizzaError;
