import { Link } from 'react-router-dom';

import { TGnome } from '../../store/gnomes/gnomes.types';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

import cardStyles from './cardStyles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

export default function MediaCard(props: { gnome: TGnome }) {
  const { gnome } = props;
  const classes = cardStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={gnome.thumbnail}
          title={gnome.name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {gnome.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Friends:</strong> {gnome.friends.join(', ')}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Professions:</strong> {gnome.professions.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <FavouriteButton gnome={gnome} />
        <Link className={classes.link} to={`/gnome/${gnome.id}`} >
          DETAILS
        </Link>

      </CardActions>
    </Card>
  );
}
