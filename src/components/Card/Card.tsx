import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TGnome } from '../../store/gnomes/gnomes.types';
import { Link } from 'react-router-dom';

import cardStyles from './cardStyles';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../../store/utils/utils.slice';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

type Props = {
  gnome: TGnome
}
export default function MediaCard(props: Props) {
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
