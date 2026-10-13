import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResourceNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-5 py-16 text-center">
      <h1 className="font-serif text-2xl text-[#1f2d24]">Resource not found</h1>
      <p className="mt-2 text-sm text-[#6d756c]">
        That title may have moved. Browse the full list instead.
      </p>
      <Button asChild className="mt-6 rounded-full">
        <Link href="/resources">Back to resources</Link>
      </Button>
    </div>
  );
}
