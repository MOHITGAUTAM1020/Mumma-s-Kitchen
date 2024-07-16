import React from "react";
import Mealcards from "./Mealcards";
import meal from "./meal";
function card(prop) {
    return <Mealcards
      key={prop.key}
      price={prop.price}
      items={prop.items}
      image={prop.Image}
      title={prop.title}
    />;
  }
function Meals() {
  return (
    <>
      <section className="section-meals" id="section-meals">
        <div className="meal-heading">
          <h1>Our Meals</h1>
        </div>
        {meal.map(card)}
        </section>
    </>
  );
}
export default Meals;
