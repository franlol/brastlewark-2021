import React from 'react';
import { Link, useParams } from "react-router-dom";

import Wrapper from '../../components/Wrapper/Wrapper';
import { useGnomes } from '../../hooks/useGnomes';
import FavouriteButton from '../../components/FavouriteButton/FavouriteButton';

import detailsStyles from './detailsStyles';
import { Box } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { getGnomeById } = useGnomes();
  const { getGnomeByName } = useGnomes();

  const gnome = getGnomeById(Number(id));

  const classes = detailsStyles();
  if (!gnome) return null;

  const renderFriends = () => {
    return gnome.friends.map((gnomeName: string, index: number, arr) => {
      const gnome = getGnomeByName(gnomeName);
      const lastIndex = arr.length - 1;

      return (
        <React.Fragment key={`${gnome?.name}-${index}`}>
          <Link key={`${gnome?.name}-${index}`} className={classes.link} to={`/gnome/${gnome?.id}`}>{`${gnome?.name}`}</Link>{index !== lastIndex && ', '}
        </React.Fragment>
      )
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
          <FavouriteButton gnome={gnome} />
        </CardActions>
      </Card>
    </Wrapper>
  );
}

export default Details;
