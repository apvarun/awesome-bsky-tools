import { useMemo } from "react";
import Card from "./Card";
import data from "../data/tools.json";

export default function CardsContainer({ filter }: { filter: string }) {
  const filteredCards = useMemo(() => {
    return data.tools
      .filter((item) => filter === "all" || item.category.includes(filter))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [filter]);

  return (
    <section>
      <ul
        role="list"
        className="grid grid-cols-[repeat(auto-fit,minmax(28ch,0.5fr))] gap-2 md:gap-4 py-2 md:my-4"
      >
        {filteredCards.map(
          ({ url, title, body, tag, "date-added": dateAdded }, i) => (
            <Card
              key={`${title}-${i}`}
              href={url}
              title={title}
              body={body}
              tag={tag}
              dateAdded={dateAdded}
            />
          )
        )}
      </ul>
    </section>
  );
}
