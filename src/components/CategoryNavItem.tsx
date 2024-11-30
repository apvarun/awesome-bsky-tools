import { useState, useEffect } from "react";
import { navigate } from "astro:transitions/client";
import data from "../data/tools.json";

export default function CategoryNavItem(props: {
  title: string;
  category: string;
  filter: string;
}) {
  const { title, category, filter } = props;
  const [isActive, setIsActive] = useState(false);

  const getCategoryCount = () => {
    if (category === "all") {
      return data.tools.length;
    }

    const navItemData = data.tools.filter((item) =>
      item.category.includes(category)
    );
    return navItemData.length;
  };

  useEffect(() => {
    let subscription = true;

    if (filter === category) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    return () => {
      subscription = !subscription;
    };
  }, [filter]);

  return (
    <button
      onClick={() =>
        category === "all" ? navigate(`/`) : navigate(`/categories/${category}`)
      }
      className={`px-2 py-1 transition-colors capitalize whitespace-nowrap ${
        isActive
          ? "text-slate-900 border-b border-slate-900"
          : "text-slate-500 hover:text-slate-900"
      }`}
      dangerouslySetInnerHTML={{
        __html: `${title} (${getCategoryCount()})`,
      }}
    ></button>
  );
}
