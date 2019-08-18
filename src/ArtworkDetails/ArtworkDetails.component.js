import { Dialog } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

const fields = ['title', 'artistDisplayName', 'artistDisplayBio'];

const ArtworkDetails = (props) => {
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <img src={props.data.primaryImageSmall} alt={props.data.title} width='585px' />
            <div>
                {
                    fields.map((field, i) => {
                        return <span key={i}><b>{field}</b>: {props.data[field]}<br /></span>
                    })
                }
            </div>
        </Dialog >
    );
};


ArtworkDetails.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artistDisplayName: PropTypes.string.isRequired,
        artistDisplayBio: PropTypes.string,
        primaryImageSmall: PropTypes.string.isRequired
    })
}

export default ArtworkDetails;