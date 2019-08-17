import React from 'react';
import { storiesOf } from '@storybook/react';
import ArtworkGrid from './ArtworkGrid.component';
import ArtworkTileComponent from '../../ArtworkTile/components/ArtworkTile.component';

storiesOf('Artworks', module).add('Grid', () => <ArtworkGrid>
    {
        Array.from(Array(16).keys()).map(item => <ArtworkTileComponent loading={true} />)
    }
</ArtworkGrid>)
