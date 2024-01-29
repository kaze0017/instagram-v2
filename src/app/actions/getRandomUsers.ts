"use server";

import { get } from "http";

interface User {
  name: string;
  profileImage: string;
}

export async function getRandomUsers(): Promise<User[]> {
  const baseURL = process.env.RANDOMUSER_URL;
  const url = baseURL + "?results=10";
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const data = await response.json();

  // Parse the fetched data into an array of user objects
  const users: User[] = data.results.map((result: any) => ({
    name: `${result.name.first} ${result.name.last}`,
    profileImage: result.picture.large, // Assuming the API provides a thumbnail for the profile image
  }));

  return users;
}
export async function getRandomUser(): Promise<User> {
  const seed = Math.floor(Math.random() * 100).toString();
  const url = `https://randomuser.me/api/?seed=1`;
  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });
    const data = await response.json();
    // Parse the fetched data into a user object
    const user: User = {
      name: `${data.results[0].name.first} ${data.results[0].name.last}`,
      profileImage: data.results[0].picture.large,
    };
  } catch (e) {
    console.log(e);
  }
  const user: User = {
    name: "name",
    profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
  };
  return user;
}
