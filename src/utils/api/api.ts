export const api = async (url: string) => {
  const request = await fetch(url);
  const data = await request.json();

  return data;
}
