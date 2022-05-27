import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const typeNames = ["Тонкое", "Традиционное"];

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://628b3a5f7886bbbb37b32850.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Такой пиццы не существует");

        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container pizza-detail">
        <h2>Загрузка</h2>
      </div>
    );
  }

  return (
    <div className="container pizza-detail">
      <div className="image">
        <img src={pizza.imageUrl} alt="" />
      </div>

      <div className="pizza-description">
        <h2>{pizza.title}</h2>
        <h3>
          Размеры:
          {pizza.sizes.map((item) => {
            return <p>{item}</p>;
          })}
        </h3>
        <h3>
          Варианты теста:
          {pizza.types.map((item, i) => {
            return <p key={i}>{typeNames[item]}</p>;
          })}
        </h3>

        <h4>{pizza.price} Р</h4>
      </div>
    </div>
  );
};

export default FullPizza;
