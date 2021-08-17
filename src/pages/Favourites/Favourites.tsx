import { Box } from '@material-ui/core';

import { useGnomes } from '../../hooks/useGnomes';
import GnomesPagination from '../../components/GnomesPagination/GnomesPagination';

import { useEffect } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';

export const Favourites = () => {


  return (
    <Wrapper>
      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
       
      </Box>

      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        <GnomesPagination />
      </Box>
    </Wrapper>
  )
}

export default Favourites;
