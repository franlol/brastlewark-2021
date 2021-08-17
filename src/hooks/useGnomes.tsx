import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGnomesFromApi } from "../store/gnomes/gnomes.actions";
import { AppDispatch, TStore } from "../store/store";
import { setSearchGnomesList } from "../store/utils/utils.slice";

export const useGnomes = () => {
  const dispatch: AppDispatch = useDispatch();
  const gnomes = useSelector((state: TStore) => state.gnomes);

  useEffect(() => {
    !gnomes.data?.length && dispatch(getGnomesFromApi());
    dispatch(setSearchGnomesList(gnomes.data || []));
  }, [dispatch, gnomes]);

  const getGnomeByName = (name: string) => gnomes.data?.find(gnome => gnome.name === name);

  return { ...gnomes, getGnomeByName };
}
