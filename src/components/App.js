import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';

class App extends React.Component {
  constructor() {
    super();
    this.setSearchFilters = this.setSearchFilters.bind(this);
  }

  setSearchFilters(){
    console.log('ran search on App component');
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
