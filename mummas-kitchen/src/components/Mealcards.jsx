import React from "react";
function Mealcards(meal) {
  return (
    <>
      <div className="meal-contanier">
      <div className="meal">
      <div
        style={{ backgroundImage: `url('${meal.image}')` }}
        className="container-img"
      ></div>
      <div className="content">
        <h3>{meal.title}</h3>
        <h3>{meal.items}</h3>
        <h3>{meal.price}</h3>
      </div>
      </div>
      <button className="btn-cart">Add to cart</button>
      </div>
    </>
  );
}
export default Mealcards;
