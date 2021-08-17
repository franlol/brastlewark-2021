import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TGnome } from '../../store/gnomes/gnomes.types';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: '20px 5px'
  },
  media: {
    height: 140,
  },
  content: {
    height: 140
  }
});

type Props = {
  gnome: TGnome
}
export default function MediaCard(props: Props) {
  const { gnome } = props;
  const classes = useStyles();

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
            Friends: {gnome.friends.join(', ')}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Professions: {gnome.professions.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Add to favs
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}