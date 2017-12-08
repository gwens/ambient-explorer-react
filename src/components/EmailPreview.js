import React from 'react';

class EmailPreview extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <li>
        <div className="sender">{details.from}</div>
        <div className="date-and-time">{details.dateString}</div>
        <div className="subject">{details.subject}</div>
      </li>
    )
  }
}

export default EmailPreview;