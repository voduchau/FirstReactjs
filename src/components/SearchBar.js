import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setTerm2(this.state.term);
    }
    handleChange = (event) => {
        this.setState({term: event.target.value})
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div>this is search bar</div>
                <div className="ui input">
                    <input type="text" onChange = {this.handleChange} placeholder="Search..." />
                </div>
            </form>
            </>
        );
    }
}

export default SearchBar;