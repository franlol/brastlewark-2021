import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TStore } from '../../../store/store';
import { setSearchGnomesList, setSearchValue, setPage } from '../../../store/utils/utils.slice';

import { InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons';
import navbarStyles from '../navbarStyles';
import { useGnomes } from '../../../hooks/useGnomes';

export const Search = () => {
  const { value } = useSelector((state: TStore) => state.utils.search);
  const dispatch = useDispatch();

  const { data: gnomes } = useGnomes();

  const classes = navbarStyles();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(setSearchValue(value));
    dispatch(setPage(1));
    dispatch(setSearchGnomesList(value
      ? (gnomes || []).filter(gnome => gnome.name.includes(value))
      : (gnomes || [])
    ));
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        onChange={inputHandler}
        value={value}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
