import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';

class App extends React.Component {
  constructor() {
    super();
    this.setSearchFilters = this.setSearchFilters.bind(this);
    // Get initial state
    // Not sure if should use numbers or strings for dates (especially months, as 01, 02, etc)
    this.state = {
      searchFilters: {
        searchString: "",
        yearFrom: 1994,
        yearTo: 2017,
        monthFrom: 1,
        monthTo: 12
      },
      emails: {},
      searchResults: {}
    };
  }

  setSearchFilters(filters){
    console.table(filters);
  }

  render() {
    return (
      <div className="navigator">
        <Header />
        <SearchBar setSearchFilters={this.setSearchFilters}/>
        <Results />
        <Viewer />
      </div>
    )
  }
}

export default App;
