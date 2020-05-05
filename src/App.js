import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ListImage from './components/ListImage';
import axios from './api/axios';
class App extends Component {
    state = { listImage: [] }

    setTerm2 = async (term) => {
       const res = await axios.get('/search/photos',{
            params: {
             query: term
            }
        })
        console.log(res,'resss')
        this.setState({ listImage: res.data.results })
    }
    render() {
        return (
            <>
            <SearchBar setTerm2={this.setTerm2} />
            <ListImage listImage={this.state.listImage} />
            </>
        )
    }
}
export default App;