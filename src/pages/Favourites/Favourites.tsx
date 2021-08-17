import { Box } from '@material-ui/core';

import Wrapper from '../../components/Wrapper/Wrapper';
import FavouritesContent from './FavouritesContent/FavouritesContent';

export const Favourites = () => (
  <Wrapper>
    <Box display="flex" flexWrap='wrap' justifyContent='space-around'>
      <FavouritesContent />
    </Box>
  </Wrapper>
)

export default Favourites;
