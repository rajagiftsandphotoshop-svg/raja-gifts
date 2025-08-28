import Link from "next/link";

export default function AllItemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🛍️ All Items
      </h1>

      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Browse our complete collection of gifts and wedding momentous, all in one place!
      </p>

      <div className="text-center mt-12">
        <Link href="/" className="text-green-600 hover:text-green-800 font-semibold">
          ⬅ Back to Home
        </Link>
      </div>
    </main>
  );
}
