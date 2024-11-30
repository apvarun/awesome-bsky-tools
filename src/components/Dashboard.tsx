import { useEffect, useState } from "react";
import CategoryNav from "./CategoryNav";
import CardsContainer from "./CardsContainer";

export default function Dashboard({ category }: { category: string }) {
  const [currentCategory, setCurrentCategory] = useState(category);

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  return (
    <>
      <CategoryNav filter={currentCategory} />
      <CardsContainer filter={currentCategory} />
    </>
  );
}
