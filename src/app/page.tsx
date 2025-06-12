import { DynamicRenderer } from "@/core/components/dynamic-renderer";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/middleware`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch configuration");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <DynamicRenderer config={data.components} />
    </main>
  );
}
