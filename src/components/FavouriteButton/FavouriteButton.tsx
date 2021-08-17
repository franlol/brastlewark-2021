import { useDispatch, useSelector } from 'react-redux';

import { TStore } from '../../store/store';
import { addFavourite, delFavourite } from '../../store/utils/utils.slice';

import { Button } from '@material-ui/core'
import { TGnome } from '../../store/gnomes/gnomes.types';

const FavouriteButton = (props: { gnome: TGnome }) => {
  const { gnome } = props;
  const dispatch = useDispatch();
  const { favourites } = useSelector((state: TStore) => state.utils);

  const favsClickHandler = () => {
    !favourites.includes(gnome.id)
      ? dispatch(addFavourite(gnome.id))
      : dispatch(delFavourite(gnome.id))
  }

  return (
    <Button size="small" color="primary" onClick={favsClickHandler}>
      {!favourites.includes(gnome.id)
        ? 'Add favourite'
        : 'Remove favourite'
      }
    </Button>
  )
}

export default FavouriteButton
