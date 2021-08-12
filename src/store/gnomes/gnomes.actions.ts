import { AppDispatch } from "../store";
import { getGnomes } from "./gnomes.services";
import { setData, setError, setIsLoading } from "./gnomes.slice";

export const getGnomesFromApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const data = await getGnomes();

      if (data) dispatch(setData(data));

    } catch (error) {
      console.log('Error in getGnomesFromApi()', error as Error);

      dispatch(setError(error as Error));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
}