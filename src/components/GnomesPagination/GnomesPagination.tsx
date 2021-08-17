import { useSelector, useDispatch } from 'react-redux';

import { TStore } from '../../store/store';
import { setPage } from '../../store/utils/utils.slice';

import { Pagination } from '@material-ui/lab';
import gnomesPaginationStyles from './gnomesPagination.styles';

const GnomesPagination = () => {
  const classes = gnomesPaginationStyles();
  const dispatch = useDispatch();

  const {
    pagination: { page },
    gnomesList
  } = useSelector((state: TStore) => state.utils);

  const handlePaginationChange = (_: any, page: number) => dispatch(setPage(page))

  return (
    <Pagination
      className={classes.pagination}
      page={page}
      onChange={handlePaginationChange}
      count={Math.ceil((gnomesList).length / 10)}
      variant="outlined"
      color="primary" />
  )
}

export default GnomesPagination;
