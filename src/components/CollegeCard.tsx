import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  college: {
    id: number;
    name: string;
    location: string;
    ranking: number;
    fees: string;
    placements: string;
    image: string;
  };
}

export default function CollegeCard({ college }: Props) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
      <img
        src={college.image}
        alt={college.name}
        className="h-56 w-full object-cover"
      />

      <CardContent className="p-5 space-y-2">
        <h2 className="text-xl font-bold">{college.name}</h2>

        <p className="text-gray-500">{college.location}</p>

        <div className="flex justify-between text-sm">
          <span>Ranking: #{college.ranking}</span>
          <span>{college.placements}</span>
        </div>

        <p className="font-semibold">Fees: {college.fees}</p>

        <Link
          href={`/college/${college.id}`}
          className="inline-block mt-3 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}