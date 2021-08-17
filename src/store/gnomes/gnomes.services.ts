import { api } from "../../utils/api/api"
import { TGnomesResponse } from "./gnomes.types";

export const getGnomes = () => {
  return api<TGnomesResponse>('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
}
