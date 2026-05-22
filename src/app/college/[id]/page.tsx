import Navbar from "@/components/Navbar";
import { colleges } from "@/data/colleges";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegeDetails({ params }: Props) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return (
      <div className="p-10 text-center text-2xl">
        College not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
    <Navbar />
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
        <img
          src={college.image}
          alt={college.name}
          className="mb-6 h-96 w-full rounded-xl object-cover"
        />

        <h1 className="mb-4 text-4xl font-bold">
          {college.name}
        </h1>

        <p className="mb-4 text-lg text-gray-600">
          {college.location}
        </p>

        <p className="mb-6 text-gray-700">
          {college.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="font-bold">Ranking</h2>
            <p>#{college.ranking}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="font-bold">Fees</h2>
            <p>{college.fees}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="font-bold">Placements</h2>
            <p>{college.placements}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h2 className="font-bold">Courses</h2>
            <p>{college.courses.join(", ")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}