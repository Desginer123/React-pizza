import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { fetchPizzas } from "../redux/slices/pizzasSlice";
import { setCategoryId } from "../redux/slices/filterSlice";
import PizzaError from "../components/pizzaBlock/PizzaError";
const Home = () => {
  const { searchValue } = useSelector((state) => state.search);
  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];
  const { categoryId, sort } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizzas);

  const sortType = sort.sortProperty;

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : " ";
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((item) => {
    return <PizzaBlock key={item.id} {...item} />;
  });
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => onChangeCategory(id)}
        />
        <Sort />
      </div>
      {status === "error" ? (
        <PizzaError />
      ) : (
        <>
          <h2 className="content__title">{categories[categoryId]} пиццы</h2>

          <div className="content__items">
            {status === "loading" ? skeletons : pizzas}
          </div>
        </>
      )}

      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
export default Home;
