import { useState } from 'react';
import { Box, CircularProgress, Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import Card from '../../components/Card/Card';
import PrimarySearchAppBar from '../../components/Navbar/Nabar';

import { useGnomes } from '../../hooks/useGnomes';

const PER_PAGE = 10;

export const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [page, setPage] = useState<number>(1);

  console.log(`matches`, matches);

  const {
    data: gnomes,
    isLoading: gnomesIsLoading,
    error: gnomesError
  } = useGnomes();

  if (gnomesError) return <p>Error..</p>;

  const gnomesPaginated = (gnomes || []).slice(PER_PAGE * page, (PER_PAGE * page) + PER_PAGE)

  const handlePaginationChange = (_: any, page: number) => {
    setPage(page)
  }

  return (
    <Container maxWidth="md">
      <PrimarySearchAppBar />
      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        {gnomesIsLoading && <CircularProgress />}
        {gnomesPaginated.map((gnome, index) => {
          return <Card
            gnome={gnome}
            key={`gnome-${index}`}
          />
        })}

        <Pagination page={page} onChange={handlePaginationChange} count={Math.ceil((gnomes || []).length / 10)} variant="outlined" color="primary" />
      </Box>
    </Container>
  )
}

export default Home;
