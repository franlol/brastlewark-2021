import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link, useParams } from "react-router-dom";

import Wrapper from '../../components/Wrapper/Wrapper';
import { useGnomes } from '../../hooks/useGnomes';
import { Box } from '@material-ui/core';
import detailsStyles from './detailsStyles';

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { getGnomeById } = useGnomes();
  const { getGnomeByName } = useGnomes();

  const gnome = getGnomeById(Number(id));

  const classes = detailsStyles();
  if (!gnome) return null;

  const renderFriends = () => {
    return gnome.friends.map((gnomeName: string, index: number) => {
      const gnome = getGnomeByName(gnomeName);

      return <><Link className={classes.link} to={`/gnome/${gnome?.id}`}>{`${gnome?.name}`}</Link>{`, `}</>
    })
  }

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={gnome.thumbnail}
          title={gnome.name}
        />

        <Box className={classes.content}>
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
              {gnome.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Friends:</strong> {renderFriends()}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Professions:</strong> {gnome.professions.join(', ')}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Age:</strong> {gnome.age}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Hair Color:</strong> {gnome.hair_color}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Height:</strong> {gnome.height.toFixed(2)}m
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Weight:</strong> {gnome.weight.toFixed(2)}m
            </Typography>

          </CardContent>
        </Box>

        <CardActions className={classes.button}>
          <Button size="small" color="primary">
            Add to favs
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
}

export default Details;
