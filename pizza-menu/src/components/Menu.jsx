import { pizzaData } from "../data/pizzaData";
import { Pizza } from "./Pizza";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length ? (
        <>
          <p>6 createive dishes to choose one.</p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  );
};
