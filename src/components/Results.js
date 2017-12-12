import React from 'react';
import EmailPreview from './EmailPreview';

class Results extends React.Component {
  render() {
    const searchFilters = this.props.searchFilters;
    const emails = this.props.emails;
    const emailIds = Object.keys(emails);
    const searchResults = emailIds.reduce((resultsArr, key) => {
      if(emails[key].subject && emails[key].subject.indexOf(searchFilters.searchString) > -1) {
        resultsArr.push(key);
      }
      return resultsArr;
    }, []);
    return (
      <div>
        <p>Results Controls</p>
        <ul>
          {
            searchResults
              .map(key => <EmailPreview key={key} index={key} details={emails[key]} selectEmail={this.props.selectEmail}/>)
          }
        </ul>
      </div>
    )
  }
}

export default Results;