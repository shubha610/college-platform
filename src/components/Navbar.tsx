import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow">
      <Link href="/" className="text-2xl font-bold">
        CollegeFinder
      </Link>

      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          href="/compare"
          className="rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          Compare
        </Link>
      </div>
    </nav>
  );
}