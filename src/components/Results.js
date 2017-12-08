import React from 'react';
import EmailPreview from './EmailPreview';

class Results extends React.Component {
  render() {
    return (
      <div>
        <p>Results Controls</p>
        <ul>
          {
            Object
              .keys(this.props.emailResults)
              .map(key => <EmailPreview key={key} details={this.props.emailResults[key]}/>)
          }
        </ul>
      </div>
    )
  }
}

export default Results;