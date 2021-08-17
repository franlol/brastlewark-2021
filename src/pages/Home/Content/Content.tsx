import { useSelector } from "react-redux";

import Card from "../../../components/Card/Card";
import { useGnomes } from "../../../hooks/useGnomes";
import { TStore } from "../../../store/store";

import { CircularProgress } from "@material-ui/core";
import { TGnome } from "../../../store/gnomes/gnomes.types";

const Content = () => {
  const {
    pagination: { page, PER_PAGE },
    search: { gnomesList }
  } = useSelector((state: TStore) => state.utils)

  const {
    isLoading: gnomesIsLoading,
  } = useGnomes();

  const paginatedGnomes = (gnomesList).slice((page * PER_PAGE) - PER_PAGE, page * PER_PAGE)

  return (
    <>
      {gnomesIsLoading && <CircularProgress />}

      {paginatedGnomes.map((gnome, index) => {
        return <Card
          gnome={gnome}
          key={`gnome-${index}`}
        />
      })}

    </>
  )
}

export default Content;
