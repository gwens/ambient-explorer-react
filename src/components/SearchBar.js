import React from 'react';

class SearchBar extends React.Component {
  // This function should take the form input and place it in the App's state as the current set of search filters
  submitSearch(event) {
    event.preventDefault();
    console.log('submit search on searchbar component');
    const filters = {
      searchString: this.searchString.value,
      yearFrom: this.yearFrom.value,
      yearTo: this.yearTo.value,
      monthFrom: this.monthFrom.value,
      monthTo: this.monthTo.value
    }
    this.props.setSearchFilters(filters);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitSearch(e)}>
        <input ref={(input) => this.searchString = input} type="text" className="search" placeholder="search me..."/>
        <label>From: 
          <select ref={(input) => this.monthFrom = input}>
            <option value="1">JAN</option>
            <option value="2">FEB</option>
            <option value="3">MAR</option>
            <option value="4">APR</option>
            <option value="5">MAY</option>
            <option value="6">JUN</option>
            <option value="7">JUL</option>
            <option value="8">AUG</option>
            <option value="9">SEP</option>
            <option value="10">OCT</option>
            <option value="11">NOV</option>
            <option value="12">DEC</option>
          </select>
          <select ref={(input) => this.yearFrom = input}>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
          </select>
        </label>
        <label>To:
          <select ref={(input) => this.monthTo = input}>
            <option value="1">JAN</option>
            <option value="2">FEB</option>
            <option value="3">MAR</option>
            <option value="4">APR</option>
            <option value="5">MAY</option>
            <option value="6">JUN</option>
            <option value="7">JUL</option>
            <option value="8">AUG</option>
            <option value="9">SEP</option>
            <option value="10">OCT</option>
            <option value="11">NOV</option>
            <option value="12">DEC</option>
          </select>
          <select ref={(input) => this.yearTo = input}>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
          </select>
        </label>
        <button type="submit">-> Go</button>
      </form>
    )
  }
}

export default SearchBar;