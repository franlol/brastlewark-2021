import { TUtilsState } from "./utils.types";

const utilsInitialState: TUtilsState = {
  gnomesList: [],
  pagination: {
    page: 1,
    PER_PAGE: 10,
  },
  search: {
    value: '',
  },
  favourites: []
}

export default utilsInitialState;
