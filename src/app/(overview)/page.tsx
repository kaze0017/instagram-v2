import Image from "next/image";
import Stories from "../ui/feed/Stories";
import { Suspense } from "react";
import Posts from "../ui/feed/Posts";
import MiniProfile from "../ui/feed/MiniProfile";
import Suggestions from "../ui/feed/Suggestions";
import { getRandomUsers } from "@/app/actions/getRandomUsers";

export default async function Home() {

  const storyUsers = await getRandomUsers({ n: 10 });
  const postUsers = await getRandomUsers({ n: 10 });
  const suggestionUsers = await getRandomUsers({ n: 5 });
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 min-h-screen  pb-24 px-2 max-w-6xl mx-auto">
      <section className="col-span-3 md:col-span-2">
        <Suspense fallback={<div>loading...</div>}>
          <Stories storyUsers={storyUsers} />
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
          <Posts postUsers={postUsers} />
        </Suspense>
      </section>
      <section className="hidden md:col-span-1 md:inline-grid ">
        <div className="fixed flex flex-col w-full max-w-[380px]">
          <MiniProfile />
          <Suggestions suggestionUsers={suggestionUsers} />
        </div>
      </section>
    </main>
  );
}
