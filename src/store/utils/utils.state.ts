import { TUtilsState } from "./utils.types";

const utilsInitialState: TUtilsState = {
  pagination: {
    page: 1,
    PER_PAGE: 10,
  },
  search: {
    value: '',
    gnomesList: []
  }
}

export default utilsInitialState;
