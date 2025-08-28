export default function GiftsPage() {
  const categories = [
    "Anniversary Gift Hampers",
    "Birthday Gift Hampers",
    "Diwali Collection",
    "Rakhi Collection",
    "Children Going Items",
    "Teachers Collection",
    "Religious Photos",
    "Light Frames",
    "Phone Covers",
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        🎁 Gift Treasures
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </main>
  );
}
