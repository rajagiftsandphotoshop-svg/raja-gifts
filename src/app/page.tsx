export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-10 text-center">
        RAJA GIFTS AND PHOTOGRAPHY
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <a
          href="/gifts"
          className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          🎁 Gift Treasures
        </a>

        <a
          href="/wedding"
          className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          💍 Wedding Momentous
        </a>
      </div>
    </main>
  );
}
