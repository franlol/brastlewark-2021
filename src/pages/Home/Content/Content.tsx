import { useSelector } from "react-redux";

import Card from "../../../components/Card/Card";
import { useGnomes } from "../../../hooks/useGnomes";
import { TStore } from "../../../store/store";

import { CircularProgress } from "@material-ui/core";

const Content = () => {
  const {
    pagination: { page, PER_PAGE },
    gnomesList
  } = useSelector((state: TStore) => state.utils)

  const {
    isLoading: gnomesIsLoading,
    getGnomeByName
  } = useGnomes();

  const gnomes = gnomesList.map(gnome => getGnomeByName(gnome));

  const paginatedGnomes = (gnomes).slice((page * PER_PAGE) - PER_PAGE, page * PER_PAGE)

  return (
    <>
      {gnomesIsLoading && <CircularProgress />}

      {paginatedGnomes.map((gnome, index) => {
        if (gnome) return <Card
          gnome={gnome}
          key={`gnome-${index}`}
        />
        
        return null;
      })}

    </>
  )
}

export default Content;
