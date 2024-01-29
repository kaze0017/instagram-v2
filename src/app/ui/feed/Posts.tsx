import React from "react";
import Post from "./post";
import getRandomImage from "@/app/actions/getRandomImage";
import getSavedPosts from "@/app/lib/db";

interface Post {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
}

export default function Feed() {
  let posts: Post[] = [];
  // posts = await getRandomImage();
  posts = getSavedPosts();
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
