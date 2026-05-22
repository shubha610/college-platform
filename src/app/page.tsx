"use client";

import { useState } from "react";
import Link from "next/link";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mb-10 text-center">
  <h1 className="text-5xl font-bold">
    Find Your Dream College
  </h1>

  <p className="mt-4 text-lg text-gray-600">
    Compare colleges, placements, fees and courses easily.
  </p>
</div>

      <div className="mb-8 flex justify-center">
        <Link
          href="/compare"
          className="rounded-xl bg-black px-6 py-3 text-white"
        >
          Compare Colleges
        </Link>
      </div>

      <div className="mx-auto mb-10 max-w-xl">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border p-4 shadow-sm"
        />
      </div>

      {filteredColleges.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          No colleges found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      )}
    </main>
  );
}