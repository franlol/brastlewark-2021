import { TGnome } from "../gnomes/gnomes.types";

export type TUtilsState = {
  gnomesList: Array<string>,
  pagination: {
    page: number,
    PER_PAGE: number,
  },
  search: {
    value: string,
  }
}
