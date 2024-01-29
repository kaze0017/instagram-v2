import React from "react";
interface Post {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
}

export default async function getRandomImage(): Promise<Post[]> {
  const url = `https://aapi.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`;
  const response = await fetch(url);
  const data = await response.json();
  const singleData = data[0];
  const posts: Post[] = data.map((result: any) => ({
    id: result.id,
    user: result.user.name,
    caption: result.alt_description,
    image: result.urls.regular,
    likes: result.likes,
  }));

  return posts;
}
