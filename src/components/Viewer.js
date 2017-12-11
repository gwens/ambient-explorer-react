import React from 'react';

class Viewer extends React.Component {
  render() {
    const { selectedEmail } = this.props;
    if(this.props.selectedEmail) {
      return (
        <div>
          <div>Date: {selectedEmail.dateString}</div>
          <div>From: {selectedEmail.from}</div>
          <div>Subject: {selectedEmail.subject}</div>
          <div>{selectedEmail.content}</div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default Viewer;