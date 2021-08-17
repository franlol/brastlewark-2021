import { Link } from 'react-router-dom';

import Wrapper from '../../components/Wrapper/Wrapper'
import { Box, Typography } from '@material-ui/core';

export const NoMatch = () => {
  return (
    <Wrapper>
      <Typography variant="h4" gutterBottom>
        <Box display='flex' alignItems='center' flexDirection='column'>
          404 Not found
          <Typography variant="subtitle1" gutterBottom>
            Go <Link to='/'>Home</Link> and try again.
          </Typography>
        </Box>
      </Typography>
    </Wrapper>
  )
}

export default NoMatch;
