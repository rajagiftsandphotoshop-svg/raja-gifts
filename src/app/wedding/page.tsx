import Link from "next/link";

export default function WeddingPage() {
  const categories = [
    "Album Designs",
    "Sehra Kalera",
    "3D Mini Dream House",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        💍 Wedding Momentous
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/wedding/${cat.toLowerCase().replace(/\s+/g, "-")}`}
            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700">{cat}</h2>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="text-pink-600 hover:text-pink-800 font-semibold">
          ⬅ Back to Home
        </Link>
      </div>
    </main>
  );
}
