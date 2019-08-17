import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const ArtworkSearch = (props) => {
    return (
        <TextField variant={'outlined'} InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
        }} {...props} />
    );
};

export default ArtworkSearch;