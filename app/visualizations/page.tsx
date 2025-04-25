import Link from "next/link";

export default function Visualizations() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-mono">
      <main className="max-w-2xl w-full text-center space-y-8">
        <div>
          <Link
            href="/visualizations/fare-evasion"
            className="underline hover:text-gray-600 text-xl"
          >
            Fare Evasion
          </Link>
        </div>
        <div className="text-gray-400 text-xl cursor-not-allowed">
          Daylighting Enforcement
        </div>
      </main>
    </div>
  );
}
