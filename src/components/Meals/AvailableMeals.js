import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);

    const loadedMeals = [];

    try {
      const response = await fetch(
        "https://react-app-2fab7-default-rtdb.firebaseio.com/meals.json"
      );
      const responseMeals = await response.json();

      for (const key in responseMeals) {
        loadedMeals.push({
          id: key,
          name: responseMeals[key].name,
          description: responseMeals[key].description,
          price: responseMeals[key].price,
        });
      }
    } catch (error) {
      throw new Error(error);
    }

    setMeals(loadedMeals);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={styles.loadingMeals}>
        <h3>Loading...</h3>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
