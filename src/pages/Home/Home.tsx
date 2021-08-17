import { useEffect } from 'react';

import { useGnomes } from '../../hooks/useGnomes';
import GnomesPagination from '../../components/GnomesPagination/GnomesPagination';
import Content from './Content/Content';
import Wrapper from '../../components/Wrapper/Wrapper';

import { Box } from '@material-ui/core';

export const Home = () => {
  const {
    data: gnomes,
    error: gnomesError,
    fetchGnomes
  } = useGnomes();

  useEffect(() => {
    !gnomes && fetchGnomes();
  }, [gnomes, fetchGnomes]);

  if (gnomesError) return <p>Error..</p>;

  return (
    <Wrapper>
      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        <Content />
      </Box>

      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        <GnomesPagination />
      </Box>
    </Wrapper>
  )
}

export default Home;
