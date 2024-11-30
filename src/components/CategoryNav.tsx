import data from "../data/tools.json";

import CategoryNavItem from "./CategoryNavItem";

export default function CategoryNav({ filter }: { filter: string }) {
  const navItems = [
    { title: "All Tools", category: "all" },
    ...Array.from(new Set(data.tools.map((t) => t.category).flat())).map(
      (cat) => ({
        title: cat,
        category: cat,
      })
    ),
  ];

  return (
    <nav
      className="sticky overflow-x-scroll w-full top-0 bg-white z-50 border-b -mb-px flex"
      tabIndex={-1}
    >
      {navItems.map((c, i) => {
        return (
          <CategoryNavItem
            key={i}
            title={c.title}
            category={c.category}
            filter={filter}
          />
        );
      })}
    </nav>
  );
}
