import React, { Component } from 'react';
import { TextField, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export default class SearchBox extends Component {

    state = {
        error: false
    }

    SearchClick() {
        const searchText = document.getElementById("searchField").value;

        if (searchText !== "") {
            this.props.searchAction(searchText);
        }
        else {
            this.setState({ error: true });
        }
    }

    render() {
        return (
            <TextField
                id="searchField"
                error={this.state.error}
                fullWidth
                variant="outlined"
                placeholder="Pesquisar"
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={() => this.SearchClick()}>
                            <Search />
                        </IconButton>
                    ),

                }}
            />
        );
    }
}
