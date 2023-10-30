"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-screen">
      <h1>Home Page</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
