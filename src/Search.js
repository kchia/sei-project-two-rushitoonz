import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }
    handleChange = (event) => {
        this.setState({ searchValue: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert('form was submitted with: ' + this.state.searchValue);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search</label>
                <input id="search" type="text" onChange={this.handleChange} value={this.state.searchValue} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;