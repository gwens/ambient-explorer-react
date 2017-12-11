import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Viewer from './Viewer';
import emails from '../sample-emails';
import emailResults from '../sample-results';

class App extends React.Component {
  constructor() {
    super();
    this.setSearchFilters = this.setSearchFilters.bind(this);
    this.selectEmail = this.selectEmail.bind(this);
    // Get initial state
    // Not sure if should use numbers or strings for dates (especially months, as 01, 02, etc)
    this.state = {
      searchFilters: {
        searchString: "",
        yearFrom: "1994",
        yearTo: "2017",
        monthFrom: "01",
        monthTo: "12"
      },
      emails: emails,
      emailsFiltered: emails, // The complete set of results
      emailResults: emailResults, // A sample of 25 emails to build the results display
      selectedEmail: null // Holds the email to be displayed in the viewer
    };
  }

  setSearchFilters(filters){
    // Create a copy of the current state first... but we are not updating them but replacing them completely so no point
    const searchFilters = {...filters};
    this.setState({ searchFilters });
  }

  selectEmail(key){
    const selectedEmail = emails[key];
    this.setState({ selectedEmail });
  }

  render() {
    return (
      <div className="navigator">
        <Header />
        <SearchBar setSearchFilters={this.setSearchFilters}/>
        <Results emailResults={this.state.emailResults}/>
        <Viewer selectedEmail={this.state.selectedEmail}/>
      </div>
    )
  }
}

export default App;
