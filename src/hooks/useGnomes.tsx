import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGnomesFromApi } from "../store/gnomes/gnomes.actions";
import { AppDispatch, TStore } from "../store/store";

export const useGnomes = () => {
  const dispatch: AppDispatch = useDispatch();
  const gnomes = useSelector((state: TStore) => state.gnomes);

  useEffect(() => {
    dispatch(getGnomesFromApi());
  }, [dispatch]);

  return gnomes;
}
