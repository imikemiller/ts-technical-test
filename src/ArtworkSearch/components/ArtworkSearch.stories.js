import { storiesOf } from '@storybook/react';
import React from 'react';
import ArtworkSearch from './ArtworkSearch.component';

storiesOf('Artworks', module).add('Search', () => <ArtworkSearch value={'Sunflowers'} />)