import React from 'react';
import EmailPreview from './EmailPreview';

class Results extends React.Component {
  render() {
    const searchString = this.props.searchString;
    const maxResults = 25;
    const resultsPage = this.props.resultsPage;
    const emails = this.props.emails;
    const emailIds = Object.keys(emails);
    const searchResults = emailIds.reduce((resultsArr, key) => {
      if(emails[key].subject && emails[key].subject.indexOf(searchString) > -1) {
        resultsArr.push(key);
      }
      return resultsArr;
    }, []);
    const pageOfResults = searchResults.slice((resultsPage - 1) * maxResults, resultsPage * maxResults);
    return (
      <div>
        <p>Results Controls</p>
        <ul>
          {
            pageOfResults
              .map(key => <EmailPreview key={key} index={key} details={emails[key]} selectEmail={this.props.selectEmail}/>)
          }
        </ul>
      </div>
    )
  }
}

export default Results;