import { TGnomesResponse } from "../../store/gnomes/gnomes.types";

export const api = async<T>(url: string): Promise<T> => {
  const request: Response = await fetch(url);
  const data = await request.json();

  return data;
}
