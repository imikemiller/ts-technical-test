import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const ArtworkGrid = (props) => {
    return (
        <Grid container className={props.classes.grid} spacing={1}>
            <div id={'tileContainer'}>
                {props.children}
            </div>
        </Grid>
    );
};

export default withStyles({
    grid: {
        width: '100%'
    }
})(ArtworkGrid);