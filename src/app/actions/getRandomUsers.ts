"use server";
interface User {
  name: string;
  profileImage: string;
}

export async function getRandomUsers(): Promise<User[]> {
  const baseURL = process.env.RANDOMUSER_URL;
  const url = baseURL + "?results=50";
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
