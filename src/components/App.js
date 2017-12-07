import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';

class App extends React.Component {
  constructor() {
    super();
    this.search = this.search.bind(this);
  }

  search(){
    console.log('ran search on App component');
  }

  render() {
    // Any where else
    return (
      <div className="navigator">
        <Header />
        <SearchBar search={this.search}/>
        <Results />
        <Viewer />
      </div>
    )
  }
}

export default App;
