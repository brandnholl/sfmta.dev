import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-mono">
      <main className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          sfmta.dev
        </h1>

        <div className="h-px w-16 mx-auto bg-black"></div>

        <p className="text-lg sm:text-xl">
          A collection of data{" "}
          <Link
            href="/visualizations"
            className="underline hover:text-gray-600"
          >
            visualizations
          </Link>
          ,{" "}
          <Link href="/tools" className="underline hover:text-gray-600">
            tools
          </Link>
          , and{" "}
          <Link href="/apis" className="underline hover:text-gray-600">
            apis
          </Link>{" "}
          for the San Francisco Municipal Transit Agency.
        </p>

        <div className="h-px w-32 mx-auto bg-black"></div>

        <div className="space-y-4 text-sm sm:text-base">
          <p>No affiliation with SFMTA. Built with public data.</p>
        </div>
      </main>

      <footer className="mt-16 text-xs">
        © {new Date().getFullYear()}{" "}
        <Link href="/about" className="underline hover:text-gray-600">
          sfmta.dev
        </Link>
      </footer>
    </div>
  );
}
