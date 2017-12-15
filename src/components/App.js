import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';
import emails from '../sample-emails';

class App extends React.Component {
  constructor() {
    super();
    this.setSearchString = this.setSearchString.bind(this);
    this.setDateFilters = this.setDateFilters.bind(this);
    this.selectEmail = this.selectEmail.bind(this);
    this.clearEmailSelection = this.clearEmailSelection.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    // Get initial state
    // Not sure if should use numbers or strings for dates (especially months, as 01, 02, etc)
    this.state = {
      searchString: "",
      dateFilters: {
        yearFrom: "1994",
        yearTo: "2017",
        monthFrom: "01",
        monthTo: "12"
      },
      selectedEmail: null, // Holds the email to be displayed in the viewer
      resultsPage: 1
    };
  }

  setSearchString(searchString){
    this.setState({ searchString });
  }

  setDateFilters(filters){
    // Create a copy of the current state first... but we are not updating them but replacing them completely so no point
    const dateFilters = {...filters};
    this.setState({ dateFilters });
  }

  selectEmail(id){
    //let selectedEmail = {};
    //selectedEmail[id] = emails[id];
    this.setState({ selectedEmail: id });
  }

  clearEmailSelection(){
    this.setState({ selectedEmail: null });
  }

  nextPage(){
    let resultsPage = this.state.resultsPage;
    resultsPage++; // Need to figure out if you're on the last page or not, but do this in Results
    this.setState( { resultsPage });
  }

  prevPage(){
    let resultsPage = this.state.resultsPage;
    resultsPage = resultsPage === 1 ? 1 : resultsPage - 1 // Try putting this logic here for now, but might want them both in the same place
    this.setState( { resultsPage });
  }

  render() {
    return (
      <div className="navigator">
        <Header />
        <SearchBar setSearchString={this.setSearchString} setDateFilters={this.setDateFilters} clearEmailSelection={this.clearEmailSelection}/>
        <Results emails={emails} searchString={this.state.searchString} selectEmail={this.selectEmail}/>
        <Viewer selectedEmail={emails[this.state.selectedEmail]}/>
      </div>
    )
  }
}

export default App;
