import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-mono">
      <main className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About</h1>
        <div className="h-px w-16 mx-auto bg-black"></div>
        <p className="text-lg sm:text-xl">
          <b>SFMTA </b>is a trademark of the San Francisco Municipal
          Transportation Agency. This website is an independent project and is
          not affiliated with, endorsed by, or reflective of the views or
          operations of the San Francisco Municipal Transportation Agency.
        </p>
        <p>
          <Link
            href="https://brandonhol.land"
            className="underline hover:text-gray-600"
            target="_blank"
          >
            brandonhol.land
          </Link>{" "}
          {"//"}{" "}
          <Link
            href="https://tetrahedron.dev"
            className="underline hover:text-gray-600"
            target="_blank"
          >
            Tetrahedron Labs
          </Link>
        </p>
      </main>
    </div>
  );
}
