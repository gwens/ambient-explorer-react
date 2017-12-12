import React from 'react';
import DateRangePicker from './DateRangePicker';

class SearchBar extends React.Component {
  // This function should take the form input and place it in the App's state as the current set of search filters
  submitSearch(event) {
    event.preventDefault();
    console.log('submit search on searchbar component');
    const searchString = this.searchString.value;
    this.props.setSearchString(searchString);
    this.props.clearEmailSelection();
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitSearch(e)}>
        <input ref={(input) => this.searchString = input} type="text" className="search" placeholder="search me..."/>
        <DateRangePicker setDateFilters={this.props.setDateFilters}/>
        <button type="submit">-> Go</button>
      </form>
    )
  }
}

export default SearchBar;