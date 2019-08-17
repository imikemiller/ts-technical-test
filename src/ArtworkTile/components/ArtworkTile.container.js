import { get } from 'lodash';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { artworkTileApi } from '../services/ArtworkTile.api';
import ArtworkTileComponent from './ArtworkTile.component';

const ArtworkTileContainer = (props) => {
    const { id } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArtworkData = async _ => {
            let result = await artworkTileApi.get(`/${id}`);
            setData(result);
            setLoading(false)
        }
        getArtworkData();
    }, [id])

    return (
        <ArtworkTileComponent src={get(data, 'primaryImageSmall')} title={get(data, 'title')} loading={loading} />
    );
};

ArtworkTileContainer.propTypes = {
    id: PropTypes.number.isRequired
}

export default ArtworkTileContainer;