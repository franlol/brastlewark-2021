import { Box } from '@material-ui/core';

import { useGnomes } from '../../hooks/useGnomes';
import GnomesPagination from '../../components/GnomesPagination/GnomesPagination';
import Content from './Content/Content';
import { useEffect } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';

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
