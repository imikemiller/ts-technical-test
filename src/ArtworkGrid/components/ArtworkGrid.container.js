import React, { useEffect, useState } from 'react';
import ArtworkSearch from '../../ArtworkSearch/components/ArtworkSearch.component';
import ArtworkTileContainer from '../../ArtworkTile/components/ArtworkTile.container';
import useDebounce from '../../hooks/useDebounce';
import { artworkSearchApi } from '../services/ArtworkSearch.api';
import ArtworkGridComponent from './ArtworkGrid.component';

const ArtworkGridContainer = (props) => {

    const [artworkIds, setArtworkIds] = useState([]);
    const [search, setSearch] = useState('Sunflowers');
    const [loading, setLoading] = useState(true);
    const debouncedSearch = useDebounce(search, 500);

    useEffect(_ => {
        const getArtworkIds = async _ => {
            if (debouncedSearch.length) {
                let ids = await artworkSearchApi.get(`?q=${debouncedSearch}`);
                setArtworkIds(ids);
                setLoading(false)
            }
        }
        getArtworkIds();

    }, [debouncedSearch])


    return (
        <React.Fragment>
            <ArtworkSearch onChange={ev => setSearch(ev.target.value)} value={search} />
            <ArtworkGridComponent loading={loading}>
                {
                    artworkIds.slice(0, 5).map(id => {
                        return <ArtworkTileContainer id={id} key={id} />
                    })
                }
            </ArtworkGridComponent>
        </React.Fragment>
    );
};

ArtworkGridContainer.defaultProps = {
    artworkIds: []
}

export default ArtworkGridContainer;