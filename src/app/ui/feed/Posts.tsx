import React from "react";
import Post from "./post";
import getRandomImage from "@/app/actions/getRandomImage";
import getSavedPosts from "@/app/lib/db";

interface PostSchema {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
}
interface User {
  name: string;
  profileImage: string;
  job: string;
  email: string;
}

export default function Feed({ postUsers }: { postUsers: User[] }) {
  let posts: PostSchema[] = [];
  // posts = await getRandomImage();
  posts = getSavedPosts();
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} postUser={postUsers[index]} />
      ))}
    </div>
  );
}
