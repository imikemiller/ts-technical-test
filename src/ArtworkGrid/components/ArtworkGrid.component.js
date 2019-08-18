import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const ArtworkGrid = (props) => {
    return (
        <Grid container className={props.classes.grid} spacing={1} id={'tileContainer'}>
            {props.loading ? <CircularProgress /> : props.children}
        </Grid>
    );
};

ArtworkGrid.propTypes = {
    loading: PropTypes.bool
}

export default withStyles({
    grid: {
        width: '100%'
    }
})(ArtworkGrid);