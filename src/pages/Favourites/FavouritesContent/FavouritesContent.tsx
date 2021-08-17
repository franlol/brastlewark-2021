import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../../../components/Card/Card";
import { useGnomes } from "../../../hooks/useGnomes";
import { TStore } from "../../../store/store";

import { Typography } from "@material-ui/core";

const FavouritesContent = () => {
  const {
    pagination: { page, PER_PAGE },
    favourites
  } = useSelector((state: TStore) => state.utils)

  const {
    getGnomeById
  } = useGnomes();

  const gnomes = favourites.map(gnome => getGnomeById(Number(gnome)));

  const paginatedGnomes = (gnomes).slice((page * PER_PAGE) - PER_PAGE, page * PER_PAGE)

  return (
    <>
      {gnomes.length
        ? paginatedGnomes.map((gnome, index) => {
          if (gnome) return <Card
            gnome={gnome}
            key={`gnome-${index}`}
          />

          return null;
        })
        : <Typography variant="subtitle1" gutterBottom>
          You don't have any favourite. Go <Link to='/'>Home</Link> and add some.
        </Typography>
      }
    </>
  )
}

export default FavouritesContent;
