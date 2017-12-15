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
      <div>
        <form onSubmit={(e) => this.submitSearch(e)}>
          <input ref={(input) => this.searchString = input} type="text" className="search" placeholder="search me..."/>
          <button type="submit">-> Go</button>
        </form>
        <DateRangePicker dateFilters={this.props.dateFilters} setDateFilters={this.props.setDateFilters} setPage={this.props.setPage}/>
      </div>
    )
  }
}

export default SearchBar;