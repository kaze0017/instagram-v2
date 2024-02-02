
interface User {
  name: string;
  profileImage: string;
  job: string;
  email: string;
}

export async function getRandomUsers({ n }: { n: number }): Promise<User[]> {
  const baseURL = process.env.RANDOMUSER_URL;
  const url = `${baseURL}?results=${n}`;
  const response = await fetch(url, {
    cache: "force-cache",
  });
  const data = await response.json();

  // Parse the fetched data into an array of user objects
  const users: User[] = data.results.map((result: any) => ({
    name: `${result.name.first} ${result.name.last}`,
    profileImage: result.picture.large, // Assuming the API provides a thumbnail for the profile image
    email: result.email,
  }));

  return users;
}
