import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" class="search" placeholder="search me..." />
        <input type="month" />
        <input type="month" />
      </form>
    )
  }
}

export default SearchBar;