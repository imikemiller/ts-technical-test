import { storiesOf } from '@storybook/react';
import React from 'react';
import ArtworkTile from './ArtworkTile.component';
import { Grid } from '@material-ui/core';

storiesOf('Artworks', module)
    .add('Tile (loading)', () => <Grid container><ArtworkTile src={''} alt={''} loading={true} /></Grid>)
    .add('Tile (loaded)', () => <Grid container><ArtworkTile src={'https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg'} title={'Wheat Field with Cypresses'} loading={false} /></Grid>)