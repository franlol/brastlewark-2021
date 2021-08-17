import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGnomesFromApi } from "../store/gnomes/gnomes.actions";
import { AppDispatch, TStore } from "../store/store";
import { setSearchGnomesList } from "../store/utils/utils.slice";

export const useGnomes = () => {
  const dispatch: AppDispatch = useDispatch();
  const gnomes = useSelector((state: TStore) => state.gnomes);

  useEffect(() => {
    dispatch(setSearchGnomesList((gnomes.data || []).map(gnome => gnome.name)));
  }, [dispatch, gnomes]);

  const fetchGnomes = useCallback(() => dispatch(getGnomesFromApi()), [dispatch]);

  const getGnomeByName = useCallback((name: string) => {
    return (gnomes.data || []).find(gnome => gnome.name === name)
  }, [gnomes]);


  return { ...gnomes, getGnomeByName, fetchGnomes };
}
