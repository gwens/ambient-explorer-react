import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';

class App extends React.Component {
  render() {
    // Any where else
    return (
      <div className="navigator">
        <Header />
        <SearchBar />
        <Results />
        <Viewer />
      </div>
    )
  }
}

export default App;
