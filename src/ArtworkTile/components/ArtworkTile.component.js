import React from 'react';
import { Grid, CircularProgress, withStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const ArtworkTile = (props) => {
    return (
        <Grid item>
            <Paper className={props.classes.tile} square>
                {
                    props.loading ? <CircularProgress /> :
                        <div className={props.classes.tileContent} style={{
                            backgroundImage: `url(${props.src})`
                        }}
                            title={props.title}
                        />
                }
            </Paper>
        </Grid>
    );
};

ArtworkTile.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
}

export default withStyles({
    tile: {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tileContent: {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
})(ArtworkTile);