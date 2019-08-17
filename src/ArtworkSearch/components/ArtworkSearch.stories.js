import { storiesOf } from '@storybook/react';
import React from 'react';
import ArtworkSearchComponent from './ArtworkSearch.component';

storiesOf('Artworks', module).add('Search', () => <ArtworkSearchComponent value={'Sunflowers'} />)