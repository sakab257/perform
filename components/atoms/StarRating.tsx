export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-white"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
