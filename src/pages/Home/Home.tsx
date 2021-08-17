import { Box, Container } from '@material-ui/core';

import PrimarySearchAppBar from '../../components/Navbar/Nabar';

import { useGnomes } from '../../hooks/useGnomes';
import GnomesPagination from '../../components/GnomesPagination/GnomesPagination';
import Content from './Content/Content';

export const Home = () => {
  const { error: gnomesError } = useGnomes();

  if (gnomesError) return <p>Error..</p>;


  return (
    <Container maxWidth="lg">
      <PrimarySearchAppBar />

      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        <Content />
      </Box>

      <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
        <GnomesPagination />
      </Box>
    </Container>
  )
}

export default Home;
