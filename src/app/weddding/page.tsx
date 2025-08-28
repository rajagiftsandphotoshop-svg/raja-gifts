export default function WeddingPage() {
  const categories = [
    "Album Designs",
    "Sehra Kalera",
    "3D Mini Dream House",
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        💍 Wedding Momentous
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </main>
  );
}
