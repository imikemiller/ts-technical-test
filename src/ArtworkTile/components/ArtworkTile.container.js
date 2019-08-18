import { get } from 'lodash';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { artworkTileApi } from '../services/ArtworkTile.api';
import ArtworkTileComponent from './ArtworkTile.component';
import ArtworkDetailsComponent from '../../ArtworkDetails/ArtworkDetails.component';

const ArtworkTileContainer = (props) => {
    const { id } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getArtworkData = async _ => {
            let result = await artworkTileApi.get(`/${id}`);
            setData(result);
            setLoading(false)
        }
        getArtworkData();
    }, [id])

    return (
        <React.Fragment>
            {loading ? null : <ArtworkDetailsComponent open={open} data={data} onClose={_ => setOpen(false)} />}
            <ArtworkTileComponent src={get(data, 'primaryImageSmall')} title={get(data, 'title')} loading={loading} onClick={_ => setOpen(true)} />
        </React.Fragment>
    );
};

ArtworkTileContainer.propTypes = {
    id: PropTypes.number.isRequired
}

export default ArtworkTileContainer;