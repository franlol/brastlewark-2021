import { api } from "../../utils/api/api"

export const getGnomes = () => {
  return api('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
}
