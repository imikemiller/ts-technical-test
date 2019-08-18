
import React from 'react';
import { storiesOf } from '@storybook/react';
import ArtworkDetails from './ArtworkDetails.component';

storiesOf('Artwork Details', module).add('Modal', _ => <ArtworkDetails open={true} data={{
    title: "Wheat Field with Cypresses",
    primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
    artistDisplayName: "Vincent van Gogh",
    artistDisplayBio: "Dutch, Zundert 1853–1890 Auvers-sur-Oise"
}} />)