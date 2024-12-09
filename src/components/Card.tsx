type CardProps = {
  href: string;
  title: string;
  body: string;
  tag: string;
  dateAdded: string;
};

export default function Card(props: CardProps) {
  const { href, title, body, tag, dateAdded } = props;

  const isNew = () => {
    if (!dateAdded) return false;

    const addedDate = new Date(dateAdded);
    const today = new Date();
    const differenceInTime = today.getTime() - addedDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays <= 7;
  };

  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="w-full h-full bg-gray-100 rounded-lg p-4 transition-colors hover:bg-gray-200/80 border border-gray-200 flex flex-col"
      >
        <strong className="font-medium text-lg text-[#100aaa]">{title}</strong>
        <p className="text-sm mb-2 text-slate-500 flex-1">{body}</p>
        <p className="flex flex-wrap gap-2 items-center text-sm">
          {isNew() && (
            <span className="bg-gray-200 text-gray-700 rounded px-2 py-0.5">
              New
            </span>
          )}
          <span className="bg-gray-200 text-gray-700 rounded px-2 py-0.5">
            {tag}
          </span>
        </p>
      </a>
    </li>
  );
}
