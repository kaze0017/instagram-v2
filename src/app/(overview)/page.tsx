import Image from "next/image";
import Stories from "../ui/feed/Stories";
import { Suspense } from "react";
import Posts from "../ui/feed/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row pb-24 px-2">
      <section className="max-w-[500px]">
        <Suspense fallback={<div>loading...</div>}>
          <Stories />
        </Suspense>
       <Suspense fallback={<div>loading...</div>}>
        <Posts/>
       </Suspense>
      </section>
      <section>
        <h1>MIni Profile</h1>
        <h1>Suggestions</h1>
      </section>
    </main>
  );
}
