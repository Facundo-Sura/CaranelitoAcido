const PostCard = ({ title, description, date, slug }: Post) => {
  return (
    <div className="border border-gray-700 rounded p-4 hover:bg-gray-800 transition">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-400">{date}</p>
      <p>{description}</p>
      <a
        href={`/blog/${slug}`}
        className="text-blue-400 underline mt-2 inline-block"
      >
        Leer más
      </a>
    </div>
  );
};
