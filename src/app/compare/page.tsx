"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { colleges } from "@/data/colleges";

export default function ComparePage() {
  const [firstCollege, setFirstCollege] = useState("1");
  const [secondCollege, setSecondCollege] = useState("2");

  const college1 = colleges.find(
    (c) => c.id === Number(firstCollege)
  );

  const college2 = colleges.find(
    (c) => c.id === Number(secondCollege)
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
    <Navbar />
    
      <h1 className="mb-8 text-center text-4xl font-bold">
        Compare Colleges
      </h1>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row">
        <select
          value={firstCollege}
          onChange={(e) => setFirstCollege(e.target.value)}
          className="rounded-xl border p-4"
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          value={secondCollege}
          onChange={(e) => setSecondCollege(e.target.value)}
          className="rounded-xl border p-4"
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-4">Feature</th>
              <th className="border p-4">{college1?.name}</th>
              <th className="border p-4">{college2?.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-4 font-bold">Ranking</td>
              <td className="border p-4">#{college1?.ranking}</td>
              <td className="border p-4">#{college2?.ranking}</td>
            </tr>

            <tr>
              <td className="border p-4 font-bold">Fees</td>
              <td className="border p-4">{college1?.fees}</td>
              <td className="border p-4">{college2?.fees}</td>
            </tr>

            <tr>
              <td className="border p-4 font-bold">Placements</td>
              <td className="border p-4">{college1?.placements}</td>
              <td className="border p-4">{college2?.placements}</td>
            </tr>

            <tr>
              <td className="border p-4 font-bold">Courses</td>
              <td className="border p-4">
                {college1?.courses.join(", ")}
              </td>

              <td className="border p-4">
                {college2?.courses.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}