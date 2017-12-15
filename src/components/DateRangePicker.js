import React from 'react';

class DateRangePicker extends React.Component {
  constructor() {
    super()
    this.updateDateFilters = this.updateDateFilters.bind(this);
  }
  updateDateFilters(event) {
    event.preventDefault();
    console.log("update date filters");
    const dateFilters = {
      yearFrom: this.yearFrom.value,
      yearTo: this.yearTo.value,
      monthFrom: this.monthFrom.value,
      monthTo: this.monthTo.value
    }
    this.props.setDateFilters(dateFilters);
    // Reset the page to 1 when applying new date filters. Might only want to do this when the filters have actually changed?
    this.props.setPage(1);
  }

  render() {
    // Testing greying out options in the dropdowns
    const dateFilters = this.props.dateFilters;
    const months = {
      "01": "JAN", 
      "02": "FEB", 
      "03": "MAR", 
      "04": "APR", 
      "05": "MAY", 
      "06": "JUN", 
      "07": "JUL", 
      "08": "AUG", 
      "09": "SEP", 
      "10": "OCT", 
      "11": "NOV", 
      "12": "DEC"
    };
    return (
      <form>
        <label>From: 
        <select onChange={(e) => this.updateDateFilters(e)} ref={(input) => this.monthFrom = input} defaultValue="01">
          {
            Object
              .keys(months)
              .map(key => <option key={key} value={key}>{months[key]}</option>)
          }
        </select>
        <select onChange={(e) => this.updateDateFilters(e)}  ref={(input) => this.yearFrom = input} defaultValue="1994">
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
        <select onChange={(e) => this.updateDateFilters(e)}  ref={(input) => this.monthTo = input} defaultValue="12">
          {
            Object
              .keys(months)
              .map(key => <option key={key} value={key} disabled={(dateFilters.yearTo === dateFilters.yearFrom && dateFilters.monthFrom > key) ? true : false}>{months[key]}</option>)
          }
        </select>
        <select onChange={(e) => this.updateDateFilters(e)} ref={(input) => this.yearTo = input} defaultValue="2017">
          <option value="1994" disabled={dateFilters.yearFrom <= "1994" ? false : true}>1994</option>
          <option value="1995" disabled={dateFilters.yearFrom <= "1995" ? false : true}>1995</option>
          <option value="1996" disabled={dateFilters.yearFrom <= "1996" ? false : true}>1996</option>
          <option value="1997" disabled={dateFilters.yearFrom <= "1997" ? false : true}>1997</option>
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
      </form>
    )
  }
}

export default DateRangePicker;