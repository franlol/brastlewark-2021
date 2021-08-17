import { TGnome } from "../gnomes/gnomes.types";

export type TUtilsState = {
  pagination: {
    page: number,
    PER_PAGE: number,
  },
  search: {
    value: string,
    gnomesList: Array<TGnome>
  }
}
